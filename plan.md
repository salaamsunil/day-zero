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
1. **Nav** — Frosted-glass fixed header, `dazero-icon.svg` + HTML wordmark, hamburger on mobile
2. **Hero** — Dark bg, gradient headline, typewriter cycling text, two CTAs, hero stats bar
3. **Products** — 3 alternating product cards with CSS app mockups:
   - **NutriCare** — `Live` badge, violet theme, "Request a Demo" CTA + social proof
   - **RestroStock** — `Live` badge, mint theme, "Request a Demo" CTA + social proof
   - **QueueZero** — `In Development` badge, orange theme, inline waitlist email form
4. **Trust / Social Proof** — 4 trust badges (Australian Owned, Data Hosted in AU, Privacy Act Compliant, Local Support)
5. **Coming Soon** — Dark section, 3 cards: Analytics Dashboard, AI Menu Advisor, POS Integrations
6. **About** — Brand story, animated stat counters (2 Live / 1 In Dev / 100% Australian Made)
7. **Contact** — Email/location cards + form with product interest dropdown
8. **Footer** — 4-column: brand (icon + wordmark), products, company, socials

### Key Files
```
index.html              ← Main single-page site
privacy.html            ← Privacy policy page
css/style.css           ← Full stylesheet
main.js                 ← Mobile menu, scroll animations, typewriter, counters
images/dazero-icon.svg  ← "0" ring icon (from DAZERO-11, tight viewBox)
images/DAZERO-11.svg    ← Full logo reference (ring + wordmark)
robots.txt              ← Search engine crawling rules
sitemap.xml             ← Search engine indexing
CNAME                   ← day-zero.com.au
plan.md                 ← This file
```

### SEO & Analytics
- Open Graph, Twitter Card, JSON-LD (Organization schema) ✅
- Canonical URL, robots.txt, sitemap.xml ✅
- GA4 live (G-LVLW70H83Z) ✅
- Google Search Console verified, sitemap submitted ✅

### Integrations
- **Formsubmit.co** — Contact form + QueueZero waitlist
- **Crisp** — Live chat widget (ID: 84b551e5-5e8e-4fbb-9f65-13b5f67a6f20)
- **GA4** — Live analytics

### UI Enhancements (completed Feb 2026)
- ✅ Scroll progress bar (violet → mint gradient, fixed top)
- ✅ Typewriter hero text cycling through industries
- ✅ Pulsing "Live" badge dot
- ✅ CSS app mockups for NutriCare and RestroStock
- ✅ Hero stats bar (30-min onboarding, IDDSI Compliant, 3-way matched, Zero spreadsheets)
- ✅ Social proof micro-copy under product CTAs
- ✅ Staggered feature list animation on scroll
- ✅ Animated stat counters in About section

---

## Domains Owned
| Domain           | Product    | Status            |
|------------------|------------|-------------------|
| day-zero.com.au  | Studio     | Live              |
| nutri-care.app   | NutriCare  | Owned, not linked |
| restrostock.app  | RestroStock| Owned, not linked |
| queuezero.app    | QueueZero  | Owned, not linked |

---

## TODO — Docket

### Google / Business Setup (in progress)
- [ ] **Migrate Search Console + GA4** to hello@day-zero.com.au (see migration steps below)
- [ ] **Google Business Profile** — create at business.google.com using hello@day-zero.com.au
- [ ] **LinkedIn Company Page** — Day Zero Solutions (highest ROI social for B2B)
- [ ] **Add real social links** — footer has # placeholders for Facebook, LinkedIn, Twitter

### Product Visuals
- [ ] **Product screen snippets** — Take real screenshots from NutriCare and RestroAI apps, replace CSS mockups with actual product UI
- [ ] **NutriCare screens:** resident dietary profile view, IDDSI compliance dashboard, meal ordering screen, kitchen production report
- [ ] **RestroAI screens:** stock overview dashboard, purchase order workflow, 3-way matching view, waste tracking chart

### Demo Videos
- [ ] **NutriCare** — 60-90 sec walkthrough: onboarding, resident profile, meal order, kitchen report (OBS + CapCut)
- [ ] **RestroAI** — 60-90 sec walkthrough: stock check, low-stock alert, raise PO, receive goods, match invoice
- [ ] Embed videos in product cards once recorded (replace VIDEO_ID_HERE placeholders in index.html)

### Domain Linking
- [ ] **nutri-care.app** — redirect or dedicated landing page (DNS config needed)
- [ ] **restroai.app** — redirect to RestroAI section (DNS config needed; formerly restrostock.app)
- [ ] **queuezero.app** — redirect to waitlist section (DNS config needed)

### Business Listings
- [ ] List NutriCare on Capterra, G2, GetApp
- [ ] List RestroAI on Capterra, G2, GetApp
- [ ] Product Hunt launch (Day Zero + individual products)

---

## Site Enhancement Ideas — Inspired by Leading Product Companies

*Prioritised roughly by impact vs effort. Inspired by how Anthropic, Linear, Vercel, Stripe, Notion, and others present their product lines.*

### Tier 1 — High Impact, Moderate Effort

**"The Old Way vs The New Way" Section**
Linear, Superhuman, and Notion all use this pattern powerfully.
Two-column comparison: left = life with spreadsheets/paper forms, right = life with NutriCare/RestroStock. Visually striking, resonates immediately with target audience.

**"How It Works" 3-Step Visual**
Per-product explainer: Step 1 → Step 2 → Step 3, with icons or micro-illustrations.
Reduces friction for skeptical buyers who don't understand what software actually does.
Examples: Stripe, Calendly, Mailchimp all lead with this.

**Dedicated Product Landing Pages**
Rather than one long page, create `nutricare.html` and `restrostock.html` with deeper dives:
feature breakdowns, screenshots, pricing, testimonials, FAQ — all per product.
Link from product cards and nutri-care.app / restrostock.app domains.

**Testimonials / Case Studies**
Even one real quote ("Margaret, Facility Manager, Sydney") with a star rating transforms trust.
Start with 2–3 placeholder quotes and replace with real customer words after first pilots.
Companies like Intercom put testimonials directly beside the feature they validate.

**ROI / Value Calculator**
Interactive: "How many residents do you have?" → shows hours saved per week, cost reduction.
Highly effective for aged care buyers who need to justify budget to management.
Vercel and Datadog both use ROI calculators on their enterprise pages.

**FAQ Accordion Section**
Common objections answered pre-emptively: data security, pricing, implementation time, contracts.
Reduces back-and-forth in sales calls. Notion and Linear both have prominent FAQs.

### Tier 2 — Medium Impact, Low Effort

**Pricing Section or Pricing Page**
Even "Contact us for pricing" or tiered "Starter / Growth / Enterprise" ranges builds trust.
Buyers who can't find pricing often leave. At minimum: a clear CTA to book a call.

**"Works With" / Integrations Strip**
A row of logos: MYOB, Xero, Square, Lightspeed, existing POS systems.
Even aspirational integrations signal that the product plays well in the ecosystem.
Stripe and Zapier both use this pattern prominently.

**Compliance & Certification Badges**
For NutriCare: IDDSI framework compliance badge, Aged Care Quality Standards reference.
For RestroStock: Food safety / HACCP alignment badge.
These are decision-maker keywords — having them visible reduces sales cycle length.

**"Built for [Industry]" Personalisation Strip**
A tab or toggle: "I work in Aged Care / Restaurants / Food Trucks" → page emphasises the relevant product.
Lightweight JS, no framework needed. Drift and Intercom use this.

**Changelog / What's New**
A minimal changelog page or section showing recent updates.
Signals that the product is actively developed — critical for buyers evaluating SaaS stability.
Linear's changelog is one of the most admired in the industry.

**Cookie Consent Banner**
Required under Australian Privacy Act and standard practice.
Simple, dismissible banner — can be a plain JS implementation, no third-party lib needed.

### Tier 3 — Aspirational / Post-V1

**Interactive Product Tour / Guided Demo**
An embedded walkthrough users can click through without booking a call.
Tools: Arcade.software, Navattic, or hand-coded step-by-step overlay.
Reduces demo booking friction by 30–50% for self-serve buyers.

**Dark Mode Support**
`prefers-color-scheme` media query + CSS custom property swap.
Signals product maturity. Vercel, Linear, and Anthropic all offer dark mode on their marketing sites.

**Blog / Resources Section**
SEO blog targeting search terms like "IDDSI compliance software Australia", "restaurant inventory management AU".
Start with 4–6 articles. Long-term the highest ROI marketing channel.

**"As Featured In" Press Strip**
If/when Day Zero gets any press, podcast mentions, or industry publication coverage — a logo strip builds credibility instantly. Reserve the space now.

**Exit-Intent Popup**
Triggered when user moves to close tab — offers a free demo or resource download.
Recovers 5–10% of bouncing visitors. Keep it simple and dismissible.

**NPS / Feedback Widget**
Embedded on product or after demo booking — captures early signal on what resonates.

**Animated Gradient Mesh / Aurora Hero**
Full-canvas animated gradient background in the hero section (CSS or lightweight canvas).
Anthropic, Vercel, and Resend all use this for a premium visual signal.
CSS-only version is ~20 lines and zero JS.

---

## Guidance Documents
- `BRAND-GUIDE.md` — Color palette, typography, tone of voice, logo usage
- `LOGO-IDEAS.md` — Logo creation guide and history of iterations
- `MARKETING-PLAYBOOK.md` — Weekly cadence, content marketing, outreach templates
- `SALES-RUNBOOK.md` — Pricing, lead workflow, demo scripts, objection handling
- `COMPETITOR-ANALYSIS.md` — Competitive landscape per product with differentiation
- `PRODUCT-ROADMAP.md` — Product versions, planned features, long-term vision

---

## Notes for Claude Code
- Plain HTML/CSS/JS — no build step, no node_modules
- Deployed via GitHub Pages with custom domain (CNAME file)
- All navigation is anchor-based (#products, #about, etc.) — single page
- Mobile breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Font: Inter (Google Fonts CDN)
- Icons: Font Awesome 6.5 (CDN)
- Logo: `images/dazero-icon.svg` (ring only) + HTML `.logo-wordmark` span — do NOT use full SVG files for nav/footer
- Footer logo uses `filter: brightness(0) invert(1)` on the icon to render white
- Gentle Gourmet is retired; NutriCare is the brand for aged care
- Mockup URLs in product cards: nutri-care.app / restrostock.app
