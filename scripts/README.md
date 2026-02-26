# Day Zero — GTM Automation Scripts

Three scripts to accelerate outreach with zero additional cost.

## Quick Start

```bash
pip install requests beautifulsoup4
```

---

## 1. `scrape-aged-care-guide.py` — Build Your Lead List

Scrapes [agedcareguide.com.au](https://www.agedcareguide.com.au) for facility names, locations, and contact info. Outputs to `data/aged-care-leads.csv`.

```bash
# All states, up to 200 facilities
python scripts/scrape-aged-care-guide.py

# Specific state, custom limit
python scripts/scrape-aged-care-guide.py --state VIC --max 100

# Slower, more polite to the server
python scripts/scrape-aged-care-guide.py --delay 2.0
```

**Output:** `data/aged-care-leads.csv` with columns:
`facility_name, suburb, state, postcode, phone, email, website, profile_url, outreach_status, notes`

**Note:** The scraper targets publicly available directory data. Always respect `robots.txt` and use a polite crawl delay (default 1.5s).

---

## 2. `outreach-generator.py` — Generate Personalised Email Drafts

Reads your prospect CSV and generates the 3-email cold outreach sequence.

```bash
# NutriCare, Email 1 (initial outreach)
python scripts/outreach-generator.py \
  --input data/aged-care-leads.csv \
  --product nutricare \
  --email 1 \
  --sender "Your Name"

# RestroStock, Email 2 (value-add follow-up)
python scripts/outreach-generator.py \
  --input data/restaurant-leads.csv \
  --product restrostock \
  --email 2 \
  --sender "Your Name"

# Email 3 is the close — send to non-responders after Day 10
python scripts/outreach-generator.py \
  --input data/aged-care-leads.csv \
  --product nutricare \
  --email 3 \
  --skip-status Contacted Demo Trial Customer
```

**Output:**
- `data/outreach-drafts-nutricare-email1.txt` — copy-paste into Gmail
- `data/outreach-drafts-nutricare-email1.csv` — import into HubSpot

---

## 3. `crm.gs` — Google Sheets CRM

A lightweight CRM built on Google Apps Script.

### Setup
1. Create a new Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste the contents of `scripts/crm.gs`
4. Run `setupSheet()` once to create columns and sample data
5. Set up a daily trigger for `sendFollowUpReminders()`:
   - Triggers → Add Trigger → `sendFollowUpReminders` → Time-driven → Day timer → 8–9am

### Pipeline Stages
`New → Contacted → Demo Scheduled → Trial → Customer → Lost`

### What it does
- Tracks all prospects with stage, last contact, and next follow-up date
- Sends you a daily email listing overdue follow-ups
- Imports prospect CSVs from Google Drive
- Shows a pipeline dashboard summary on demand

---

## Data Directory

All CSV outputs go to `data/` (gitignored — keep prospect data private).

```
data/
  aged-care-leads.csv        ← from scrape-aged-care-guide.py
  restaurant-leads.csv       ← manual or from other sources
  outreach-drafts-*.txt      ← email drafts for copy-paste
  outreach-drafts-*.csv      ← import into HubSpot
```
