# Day Zero Solutions - Product Roadmap

> **Last updated:** February 2026
> **Note:** Gentle Gourmet has been retired. All aged care dietary management is under the NutriCare brand.

---

## Current Product Versions

| Product | Version | Status | Tech Stack |
|---------|---------|--------|------------|
| NutriCare | v0.2.1 | Live | Next.js 16, React 19, PostgreSQL, Prisma 7 |
| RestroStock | v1.0.0 | Live | React 18, Express, SQLite, TypeScript |
| QueueZero | — | In Development | TBD |

---

## NutriCare Roadmap

### Current (v0.2.1) - Live
- IDDSI texture level compliance
- Resident dietary profiles (allergies, preferences, texture levels)
- Multi-period meal ordering (Breakfast, Lunch, Dinner, Snacks)
- Kitchen production reports
- Allergen conflict warnings
- Multi-site support with role-based access control

### Next Release (v0.3.0)
- [ ] Resident photo and profile enhancements
- [ ] Meal plan templates (reusable weekly/fortnightly plans)
- [ ] Notification system (allergen alerts, order deadlines)
- [ ] Audit trail for dietary profile changes
- [ ] CSV/PDF export for reports

### Future (v0.4.0+)
- [ ] Family portal (view resident meal plans)
- [ ] Dietitian collaboration features
- [ ] Integration with aged care management systems
- [ ] Nutrition tracking and reporting
- [ ] Mobile app for kitchen staff
- [ ] Automated ordering based on meal plan templates

---

## RestroStock Roadmap

### Current (v1.0.0) - Live
- Real-time stock tracking with low-stock and expiry alerts
- Purchase order workflow
- 3-way matching (PO, Goods Receipt, Invoice)
- Supplier management and messaging
- Waste tracking
- Analytics dashboard
- Multi-location storage and multi-unit inventory

### Next Release (v1.1.0)
- [ ] Recipe costing (link recipes to stock items)
- [ ] Automated reorder suggestions
- [ ] Supplier performance scoring
- [ ] Enhanced analytics (trend lines, period comparisons)
- [ ] Barcode/QR scanning for stocktake

### Future (v1.2.0+)
- [ ] POS integration (Square, Lightspeed)
- [ ] Accounting integration (Xero, MYOB)
- [ ] Multi-currency support for international suppliers
- [ ] Mobile app for stocktake
- [ ] Predictive ordering (AI-driven)
- [ ] Team permissions and approval workflows

---

## QueueZero Roadmap

### Phase 1: MVP
- [ ] Mobile-first ordering page (web-based, no app download)
- [ ] Menu management (items, pricing, availability toggles)
- [ ] Live queue visibility for customers
- [ ] Order-ahead scheduling
- [ ] Basic order management dashboard
- [ ] Payment integration (Stripe)
- [ ] No hardware required

### Phase 2: Growth Features
- [ ] Customer accounts and order history
- [ ] Loyalty points / repeat customer rewards
- [ ] Push notifications (order ready, estimated wait time)
- [ ] Event mode (special menus for markets, festivals)
- [ ] Multi-vendor support (food halls, market organisers)

### Phase 3: Scale
- [ ] POS integration
- [ ] Analytics (popular items, peak times, revenue trends)
- [ ] Kitchen display system (KDS)
- [ ] API for third-party integrations
- [ ] White-label options for food truck collectives

---

## Coming Soon (On Website)

These features are listed on the "Coming Soon" section of the website:

1. **Analytics Dashboard** — Cross-product insights showing sales, waste, customer flow in one place
2. **AI Menu Advisor** — Data-driven menu recommendations based on sales trends, seasonality, and food cost margins
3. **POS Integrations** — Seamless connections to Square, Lightspeed, and other popular Australian POS systems

---

## Long-Term Vision

Day Zero Solutions aims to become an **integrated hospitality platform** where aged care facilities, restaurants, and food vendors can manage their entire food operation from a single ecosystem:

- **NutriCare** handles dietary compliance and resident care
- **RestroStock** handles back-of-house inventory and procurement
- **QueueZero** handles front-of-house ordering and customer experience
- **Shared Analytics** ties everything together with cross-product insights

Each product works independently (buy one, use one), but together they create a powerful, unified system for food businesses of all types.

---

## Development Priorities (Q1-Q2 2026)

1. **NutriCare v0.3.0** — Priority focus for go-to-market (first paying customers)
2. **QueueZero MVP** — Build core MVP for beta testing
3. **RestroStock v1.1.0** — Recipe costing and reorder suggestions
4. **Website** — Blog section for content marketing
5. **Integrations** — Begin POS integration research and planning

---

## Retired Products

### Gentle Gourmet (Retired)
- **Was:** Enhanced version of NutriCare (v0.4.0)
- **Decision:** Consolidated back into NutriCare brand to avoid confusion
- **Codebase:** `Gentle-Gourmet---MVP` repo (archived)
- **Features:** Any unique Gentle Gourmet features will be incorporated into future NutriCare releases
