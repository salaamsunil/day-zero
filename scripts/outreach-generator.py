"""
outreach-generator.py
Reads a CSV of prospects and generates personalised cold email drafts.
Supports both NutriCare (aged care) and RestroStock (restaurant) sequences.

Usage:
    python scripts/outreach-generator.py --input data/aged-care-leads.csv --product nutricare
    python scripts/outreach-generator.py --input data/restaurant-leads.csv --product restrostock
    python scripts/outreach-generator.py --input data/aged-care-leads.csv --product nutricare --email 2

Output:
    data/outreach-drafts-nutricare-email1.txt  (one block per prospect, ready to copy-paste)
    data/outreach-drafts-nutricare-email1.csv  (import-ready for HubSpot / Gmail)
"""

import csv
import argparse
import os
import textwrap
from datetime import date

OUTPUT_DIR = "data"

# ─── Email Templates ──────────────────────────────────────────────────────────

TEMPLATES = {
    "nutricare": {
        1: {
            "subject": "dietary compliance software built for aged care AU",
            "body": """Hi {first_name},

I noticed {facility_name} on the Aged Care Guide{location_phrase}.

We built NutriCare specifically for Australian facilities — it handles IDDSI
compliance, resident dietary profiles, and meal ordering, replacing the
spreadsheet process most facilities still use.

Not pitching — just wondering if dietary management is something your team
spends a lot of time on?

Happy to show a 10-minute demo if relevant.

{sender_name}
Day Zero Solutions
hello@day-zero.com.au | +61 415 825 955
""",
        },
        2: {
            "subject": "Free IDDSI compliance checklist for aged care facilities",
            "body": """Hi {first_name},

Following up on my note last week about NutriCare.

We put together a practical IDDSI compliance checklist that a few facilities
have found useful — covers texture level documentation, staff training records,
and kitchen prep verification. You can grab it here:

  https://day-zero.com.au/resources/iddsi-checklist

No obligation — hope it's helpful regardless.

{sender_name}
Day Zero Solutions
""",
        },
        3: {
            "subject": "last one from me",
            "body": """Hi {first_name},

Not going to keep emailing — just wanted to leave the door open.

We're offering 3 months free for early partners willing to share feedback
on NutriCare. Either way, good luck with the busy season ahead.

{sender_name}
Day Zero Solutions
hello@day-zero.com.au
""",
        },
    },
    "restrostock": {
        1: {
            "subject": "inventory software for {facility_name}",
            "body": """Hi {first_name},

Came across {facility_name} and wanted to reach out.

We built RestroStock for independent restaurants — real-time stock tracking,
purchase orders with 3-way matching, and supplier management. Most places
we talk to are still doing this in spreadsheets.

Not pitching — just curious: is inventory something that causes headaches for
your team currently?

Happy to show you a quick demo if it's relevant.

{sender_name}
Day Zero Solutions
hello@day-zero.com.au | +61 415 825 955
""",
        },
        2: {
            "subject": "Free restaurant inventory spreadsheet template",
            "body": """Hi {first_name},

Following up on my message last week about RestroStock.

We put together a free restaurant inventory template (Google Sheets) that
covers stock tracking, par levels, and supplier contacts. A few operators
have found it useful as a starting point:

  https://day-zero.com.au/resources/inventory-template

No obligation — hope it helps.

{sender_name}
Day Zero Solutions
""",
        },
        3: {
            "subject": "last one from me",
            "body": """Hi {first_name},

Won't keep emailing. Just wanted to leave the door open.

We're offering a 14-day free trial with full setup support — no credit card,
cancel any time. Happy to jump on a call if the timing's ever right.

{sender_name}
Day Zero Solutions
hello@day-zero.com.au
""",
        },
    },
}


# ─── Helpers ──────────────────────────────────────────────────────────────────

def infer_first_name(row):
    """Try to extract a first name from available fields."""
    name = row.get("contact_name", "").strip()
    if name:
        return name.split()[0].capitalize()
    # Fall back to facility manager title guess
    return "there"


def location_phrase(row):
    """Build a location qualifier like ' in Melbourne VIC'."""
    suburb = row.get("suburb", "").strip()
    state = row.get("state", "").strip()
    if suburb and state:
        return f" in {suburb}, {state}"
    elif state:
        return f" in {state}"
    return ""


def render_template(template_str, row, sender_name):
    first_name = infer_first_name(row)
    facility = row.get("facility_name", "your facility").strip()
    return template_str.format(
        first_name=first_name,
        facility_name=facility,
        location_phrase=location_phrase(row),
        sender_name=sender_name,
    ).strip()


def render_subject(subject_str, row):
    facility = row.get("facility_name", "").strip()
    return subject_str.format(facility_name=facility).strip()


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Generate personalised cold email drafts from a CSV")
    parser.add_argument("--input", required=True,
                        help="Path to prospect CSV (e.g. data/aged-care-leads.csv)")
    parser.add_argument("--product", choices=["nutricare", "restrostock"], required=True,
                        help="Which product sequence to use")
    parser.add_argument("--email", type=int, choices=[1, 2, 3], default=1,
                        help="Which email in the sequence (1, 2, or 3). Default: 1")
    parser.add_argument("--sender", default="[Your Name]",
                        help="Sender name to insert in emails. Default: '[Your Name]'")
    parser.add_argument("--skip-status", nargs="*", default=["Contacted", "Demo", "Trial", "Customer"],
                        help="Skip rows with these outreach_status values")
    args = parser.parse_args()

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    if not os.path.exists(args.input):
        print(f"Input file not found: {args.input}")
        return

    tmpl = TEMPLATES[args.product][args.email]
    subject_tmpl = tmpl["subject"]
    body_tmpl = tmpl["body"]

    rows = []
    with open(args.input, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            status = row.get("outreach_status", "New").strip()
            if status in args.skip_status:
                continue
            rows.append(row)

    print(f"\nProspects to process: {len(rows)}")
    if not rows:
        print("No eligible rows. Check your CSV and --skip-status filters.")
        return

    # Output: text file (for manual copy-paste)
    slug = f"{args.product}-email{args.email}"
    txt_path = os.path.join(OUTPUT_DIR, f"outreach-drafts-{slug}.txt")
    csv_path = os.path.join(OUTPUT_DIR, f"outreach-drafts-{slug}.csv")

    txt_lines = [
        f"OUTREACH DRAFTS — {args.product.upper()} Email #{args.email}",
        f"Generated: {date.today().isoformat()}  |  Total: {len(rows)} prospects",
        "=" * 72,
        "",
    ]

    csv_rows = []

    for row in rows:
        subject = render_subject(subject_tmpl, row)
        body = render_template(body_tmpl, row, args.sender)
        to_email = row.get("email", "").strip()
        facility = row.get("facility_name", "").strip()

        txt_lines += [
            f"TO:       {to_email or '(no email — find manually)'}",
            f"FACILITY: {facility}",
            f"SUBJECT:  {subject}",
            "-" * 72,
            body,
            "",
            "=" * 72,
            "",
        ]

        csv_rows.append({
            "to_email": to_email,
            "facility_name": facility,
            "subject": subject,
            "body": body,
            "profile_url": row.get("profile_url", ""),
            "phone": row.get("phone", ""),
            "state": row.get("state", ""),
        })

    with open(txt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(txt_lines))

    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["to_email", "facility_name", "subject", "body",
                                                "profile_url", "phone", "state"])
        writer.writeheader()
        writer.writerows(csv_rows)

    print(f"\nText drafts saved:  {txt_path}")
    print(f"CSV for import:     {csv_path}")
    print(f"\nTip: Import {csv_path} into HubSpot or paste from {txt_path} into Gmail.")

    # Print first draft as a preview
    if csv_rows:
        print("\n" + "─" * 72)
        print("PREVIEW (first draft):")
        print(f"TO:      {csv_rows[0]['to_email'] or '(find email)'}  |  {csv_rows[0]['facility_name']}")
        print(f"SUBJECT: {csv_rows[0]['subject']}")
        print("─" * 72)
        print(csv_rows[0]["body"])


if __name__ == "__main__":
    main()
