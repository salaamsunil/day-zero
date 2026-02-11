# Day Zero Website — Project Plan

## Overview
Single-page bold & colorful marketing site for Day Zero Solutions, an Australian software studio building products for hospitality, aged care, and food businesses.

**Stack:** Plain HTML / CSS / JS (no frameworks)
**Hosted:** GitHub Pages → day-zero.com.au
**Repo:** https://github.com/salaamsunil/day-zero

---

## Color Palette
| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| Violet         | `#7C3AED` | Primary brand, CTAs, accents |
| Violet Dark    | `#5B21B6` | Hover states                 |
| Violet Light   | `#A78BFA` | Gradient text, highlights    |
| Mint           | `#10B981` | RestroStock accent, success  |
| Mint Light     | `#34D399` | Hero tag, gradient text      |
| Orange         | `#F97316` | QueueZero accent, badges     |
| Dark           | `#0F0F1A` | Hero bg, footer bg, text     |
| Light          | `#F8FAFC` | Section backgrounds          |

---

## Current Site Structure

### Pages
- `index.html` — Main single-page site (all sections)
- `privacy.html` — Privacy policy page

### Sections (index.html) — top to bottom
1. **Nav** — Frosted-glass fixed header, logo, section links, "Get in Touch" CTA, hamburger on mobile
2. **Hero** — Dark bg, gradient headline, animated glow orb, two CTAs
3. **Products** — 3 alternating product cards:
   - **NutriCare** — `Live` badge, violet theme, "Request a Demo" CTA
   - **RestroStock** — `Live` badge, mint theme, "Request a Demo" CTA
   - **QueueZero** — `In Development` badge, orange theme, inline waitlist email form
4. **Trust / Social Proof** — 4 trust badges (Australian Owned, Data Hosted in AU, Privacy Act Compliant, Local Support), commented-out testimonial structure
5. **Coming Soon** — Dark section, 3 cards: Analytics Dashboard, AI Menu Advisor, POS Integrations
6. **About** — Brand story, stat counters (2 Live / 1 In Dev / 100% Australian Made)
7. **Contact** — Phone/email/location cards + form with product interest dropdown (product included in email subject)
8. **Footer** — 4-column: brand, products, company (includes Privacy Policy link), socials

### Files
```
index.html              ← Main single-page site
privacy.html            ← Privacy policy page
css/style.css           ← Full stylesheet
main.js                 ← Mobile menu, scroll animations, form handlers, chatbot
images/logo.png         ← Day Zero logo
robots.txt              ← Search engine crawling rules
sitemap.xml             ← Search engine indexing
CNAME                   ← day-zero.com.au
plan.md                 ← This file
```

### SEO & Analytics
- Open Graph and Twitter Card meta tags in `<head>`
- JSON-LD structured data (Organization schema)
- Canonical URL set
- `robots.txt` and `sitemap.xml` configured
- GA4 placeholder in place (replace `G-XXXXXXXXXX` with Measurement ID)
- Favicon link tags added (generate favicons from logo)

### Integrations
- **Formsubmit.co** — Contact form and QueueZero waitlist submissions
- **Chatbot** — Custom JS chatbot with product info and contact capture
- **Google Analytics** — GA4 placeholder ready for activation

---

## Products

### NutriCare MVP (LIVE)
- Comprehensive dietary management for senior care / aged care facilities
- IDDSI texture level compliance, resident dietary profile tracking
- Multi-period meal ordering (Breakfast, Lunch, Dinner, Snacks)
- Kitchen production reports, allergen conflict warnings
- Multi-site support with role-based access control
- **Status:** Live — CTA is "Request a Demo"

### RestroStock (LIVE — v1.0.0)
- Smart inventory & procurement management for restaurants
- Real-time stock tracking with low-stock & expiry alerts
- Purchase order workflow with 3-way matching (PO-GRN-Invoice)
- Supplier management & messaging
- Waste tracking & analytics dashboard
- Multi-location storage, multi-unit inventory
- **Status:** Live (v1.0.0) — CTA is "Request a Demo"

### QueueZero (IN DEVELOPMENT)
- Mobile ordering & queue management for food trucks / pop-ups
- Order-ahead, live queue visibility, no hardware needed
- **Status:** In development — CTA is inline email waitlist form

---

## Guidance Documents
- `BRAND-GUIDE.md` — Color palette, typography, tone of voice, logo usage
- `LOGO-IDEAS.md` — Free logo creation guide with step-by-step instructions
- `MARKETING-PLAYBOOK.md` — Weekly cadence, content marketing, industry channels, outreach templates
- `SALES-RUNBOOK.md` — Pricing, lead workflow, demo scripts, objection handling, onboarding
- `COMPETITOR-ANALYSIS.md` — Competitive landscape per product with differentiation matrices
- `PRODUCT-ROADMAP.md` — Product versions, planned features, long-term vision

---

## TODO — Next Steps

### High Priority
- [ ] Create logo using LOGO-IDEAS.md guide and generate favicon set
- [ ] Create `images/og-image.png` (1200x630) for social sharing
- [ ] Set up Google Analytics (GA4) and replace `G-XXXXXXXXXX` placeholder
- [ ] Set up Google Search Console and submit sitemap
- [ ] Add real social media links (Facebook, LinkedIn, Twitter/X)
- [ ] Begin cold outreach per MARKETING-PLAYBOOK.md

### Medium Priority
- [ ] Replace product icon circles with actual product screenshots/mockups
- [ ] Add product demo videos (YouTube embeds or animated GIFs)
- [ ] Set up Google Business Profile listing
- [ ] List on Capterra, G2, GetApp
- [ ] Set up Calendly for demo bookings
- [ ] Launch on Product Hunt

### Low Priority
- [ ] Add blog section to website for content marketing
- [ ] Animate stat counters on scroll (count-up effect)
- [ ] Test Lighthouse scores and optimise
- [ ] Add `How It Works` section for NutriCare
- [ ] Build POS integrations for RestroStock
- [ ] Consider Stripe payment links for direct subscriptions

---

## Notes for Claude Code
- This is a plain HTML/CSS/JS project — no build step, no node_modules
- The site is deployed via GitHub Pages with a custom domain (CNAME file)
- The `images/logo.png` is the current logo — reference it but don't delete
- All navigation is anchor-based (#products, #about, etc.) — single page
- Mobile breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Font: Inter (Google Fonts CDN)
- Icons: Font Awesome 6.5 (CDN)
- Gentle Gourmet is retired; NutriCare is the brand for aged care
