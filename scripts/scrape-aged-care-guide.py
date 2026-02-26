"""
scrape-aged-care-guide.py
Scrapes agedcareguide.com.au for Australian aged care facility contact info.
Outputs a CSV ready for outreach-generator.py.

Usage:
    pip install requests beautifulsoup4
    python scripts/scrape-aged-care-guide.py
    python scripts/scrape-aged-care-guide.py --state VIC --max 100

Output:
    data/aged-care-leads.csv
"""

import csv
import time
import argparse
import os
import re
from urllib.parse import urljoin, urlencode

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing dependencies. Run: pip install requests beautifulsoup4")
    raise

BASE_URL = "https://www.agedcareguide.com.au"
SEARCH_URL = f"{BASE_URL}/aged-care-homes"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-AU,en;q=0.9",
}

STATE_CODES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]

OUTPUT_DIR = "data"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "aged-care-leads.csv")
CSV_FIELDS = [
    "facility_name",
    "suburb",
    "state",
    "postcode",
    "phone",
    "email",
    "website",
    "profile_url",
    "outreach_status",
    "notes",
]


def get_session():
    s = requests.Session()
    s.headers.update(HEADERS)
    return s


def search_facilities(session, state=None, page=1):
    """Return list of facility profile URLs from a search result page."""
    params = {"page": page}
    if state:
        params["state"] = state

    url = f"{SEARCH_URL}?{urlencode(params)}"
    print(f"  Fetching: {url}")

    try:
        resp = session.get(url, timeout=15)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  Request error: {e}")
        return [], False

    soup = BeautifulSoup(resp.text, "html.parser")

    # Find facility listing links — adjust selector if site structure changes
    links = []
    for a in soup.select("a[href*='/aged-care-homes/']"):
        href = a.get("href", "")
        if href and href != "/aged-care-homes/" and len(href.split("/")) > 3:
            full_url = urljoin(BASE_URL, href)
            if full_url not in links:
                links.append(full_url)

    # Check if there's a next page
    has_next = bool(soup.select_one("a[rel='next'], .pagination-next, a:contains('Next')"))

    return links, has_next


def scrape_facility(session, url):
    """Scrape individual facility profile page for contact info."""
    try:
        resp = session.get(url, timeout=15)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"    Error fetching {url}: {e}")
        return None

    soup = BeautifulSoup(resp.text, "html.parser")

    data = {
        "profile_url": url,
        "facility_name": "",
        "suburb": "",
        "state": "",
        "postcode": "",
        "phone": "",
        "email": "",
        "website": "",
        "outreach_status": "New",
        "notes": "",
    }

    # Facility name
    h1 = soup.find("h1")
    if h1:
        data["facility_name"] = h1.get_text(strip=True)

    # Address / location
    addr_el = soup.select_one(".address, [class*='address'], [itemprop='address']")
    if addr_el:
        addr_text = addr_el.get_text(" ", strip=True)
        # Try to extract postcode (4 digits)
        pc_match = re.search(r"\b(\d{4})\b", addr_text)
        if pc_match:
            data["postcode"] = pc_match.group(1)
        # State
        for st in STATE_CODES:
            if st in addr_text.upper():
                data["state"] = st
                break
        data["suburb"] = addr_text

    # Phone
    phone_el = soup.select_one("[itemprop='telephone'], a[href^='tel:'], .phone")
    if phone_el:
        ph = phone_el.get("href", "") or phone_el.get_text(strip=True)
        data["phone"] = ph.replace("tel:", "").strip()

    # Email
    email_el = soup.select_one("[itemprop='email'], a[href^='mailto:']")
    if email_el:
        em = email_el.get("href", "") or email_el.get_text(strip=True)
        data["email"] = em.replace("mailto:", "").strip()

    # Website
    web_el = soup.select_one("a[itemprop='url'], a[href*='http']:not([href*='agedcareguide'])")
    if web_el:
        data["website"] = web_el.get("href", "")

    if not data["facility_name"]:
        return None

    return data


def dedupe(records):
    seen = set()
    out = []
    for r in records:
        key = r["facility_name"].lower().strip()
        if key and key not in seen:
            seen.add(key)
            out.append(r)
    return out


def main():
    parser = argparse.ArgumentParser(description="Scrape agedcareguide.com.au for facility contacts")
    parser.add_argument("--state", choices=STATE_CODES + ["all"], default="all",
                        help="Filter by state (default: all)")
    parser.add_argument("--max", type=int, default=200,
                        help="Maximum number of facilities to collect (default: 200)")
    parser.add_argument("--delay", type=float, default=1.5,
                        help="Delay between requests in seconds (default: 1.5)")
    args = parser.parse_args()

    states = STATE_CODES if args.state == "all" else [args.state]
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    session = get_session()
    all_links = []

    print(f"\n=== Collecting facility profile URLs (max {args.max}) ===")
    for state in states:
        if len(all_links) >= args.max:
            break
        page = 1
        print(f"\nState: {state}")
        while len(all_links) < args.max:
            links, has_next = search_facilities(session, state=state, page=page)
            new_links = [l for l in links if l not in all_links]
            all_links.extend(new_links)
            print(f"  Page {page}: {len(new_links)} new links (total: {len(all_links)})")
            time.sleep(args.delay)
            if not has_next or not new_links:
                break
            page += 1

    all_links = all_links[: args.max]
    print(f"\nTotal links to scrape: {len(all_links)}")

    print("\n=== Scraping facility profiles ===")
    records = []
    for i, url in enumerate(all_links, 1):
        print(f"[{i}/{len(all_links)}] {url}")
        record = scrape_facility(session, url)
        if record:
            records.append(record)
        time.sleep(args.delay)

    records = dedupe(records)
    print(f"\nUnique facilities: {len(records)}")

    with open(OUTPUT_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        writer.writeheader()
        writer.writerows(records)

    print(f"Saved to {OUTPUT_FILE}")
    print("\nNext step: run  python scripts/outreach-generator.py  to generate email drafts.")


if __name__ == "__main__":
    main()
