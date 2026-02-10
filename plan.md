# Day Zero Website — Project Plan

## Overview
Single-page bold & colorful marketing site for Day Zero, an Australian software studio building products for hospitality and food businesses.

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
| Mint           | `#10B981` | Success, NutriCare accent    |
| Mint Light     | `#34D399` | Hero tag, gradient text      |
| Orange         | `#F97316` | QueueZero accent, badges     |
| Dark           | `#0F0F1A` | Hero bg, footer bg, text     |
| Light          | `#F8FAFC` | Section backgrounds          |

---

## Current Site Structure (Single Page)

### Sections — top to bottom
1. **Nav** — Frosted-glass fixed header, logo, section links, "Get in Touch" CTA, hamburger on mobile
2. **Hero** — Dark bg, gradient headline, animated glow orb, two CTAs
3. **Products** — 3 alternating product cards:
   - **NutriCare MVP** — `Live` badge, violet theme
   - **RestroStock** — `In Development` badge, mint theme
   - **QueueZero** — `In Development` badge, orange theme
4. **Coming Soon** — Dark section, 3 cards: Analytics Dashboard, AI Menu Advisor, POS Integrations
5. **About** — Brand story, stat counters (1 Live / 2 In Dev / 100% Australian Made)
6. **Contact** — Phone/email/location cards + form with product interest dropdown
7. **Footer** — 4-column: brand, products, company, socials

### Files
```
index.html          ← Single-page site (all sections)
css/style.css       ← Full stylesheet (violet/mint/orange palette)
main.js             ← Mobile menu, scroll animations, form handler
images/logo.png     ← Day Zero logo
images/restaurant-project1.jpg  ← Legacy image (can remove)
CNAME               ← day-zero.com.au
contact.html        ← DELETED
services.html       ← DELETED
```

---

## Products

### NutriCare MVP (LIVE)
- Automated nutrition labelling & allergen tracking
- FSANZ-compliant outputs
- Recipe cost analysis
- **Status:** Live — CTA is "Request a Demo"

### RestroStock (IN DEVELOPMENT)
- Smart inventory management for restaurants
- Real-time stock tracking, reorder suggestions, waste analytics
- **Status:** In development — CTA is "Join the Waitlist"

### QueueZero (IN DEVELOPMENT)
- Mobile ordering & queue management for food trucks / pop-ups
- Order-ahead, live queue visibility, no hardware needed
- **Status:** In development — CTA is "Join the Waitlist"

---

## TODO — Next Steps

### Cleanup
- [x] Delete `contact.html` (replaced by #contact section) — DONE
- [x] Delete `services.html` (replaced by #products section) — DONE
- [ ] Remove `images/restaurant-project1.jpg` if no longer needed

### Functionality
- [ ] Connect contact form to a backend (Formspree, Netlify Forms, or custom API)
- [ ] Add form validation feedback (inline error messages)
- [ ] Wire up "Join the Waitlist" buttons to a mailing list (Mailchimp, ConvertKit, etc.)
- [ ] Add Google Analytics or Plausible for tracking

### Content & Assets
- [ ] Replace product icon circles with actual product screenshots/mockups when available
- [ ] Add real social media links (Facebook, LinkedIn, Twitter/X)
- [ ] Review and update footer copyright year dynamically
- [ ] Add favicon and Open Graph meta tags for social sharing

### Design Enhancements
- [ ] Add product demo videos or animated GIFs to product cards
- [ ] Consider a testimonial / social proof section when customers exist
- [ ] Add a "How It Works" section if needed for NutriCare onboarding
- [ ] Animate stat counters on scroll (count-up effect)

### Performance & SEO
- [ ] Optimize logo.png (compress / convert to WebP)
- [ ] Add structured data (JSON-LD) for the organization
- [ ] Add sitemap.xml and robots.txt
- [ ] Test Lighthouse scores and fix any issues
- [ ] Ensure all images have proper alt text

### Integrations
- [ ] Crisp chat is already integrated (website ID: `84b551e5-5e8e-4fbb-9f65-13b5f67a6f20`)
- [ ] Consider adding Calendly embed for demo bookings
- [ ] Stripe payment links if selling NutriCare subscriptions directly

---

## Notes for Claude Code
- This is a plain HTML/CSS/JS project — no build step, no node_modules
- The site is deployed via GitHub Pages with a custom domain (CNAME file)
- Crisp chat script is at the bottom of index.html — keep it
- The `images/logo.png` is the current logo — reference it but don't delete
- All navigation is anchor-based (#products, #about, etc.) — single page
- Mobile breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Font: Inter (Google Fonts CDN)
- Icons: Font Awesome 6.5 (CDN)
