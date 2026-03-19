# Day Zero Solutions - Product Roadmap

> **Last updated:** March 2026
> **Note:** Gentle Gourmet has been retired. All aged care dietary management is under the NutriCare brand.
> **RestroStock** has been rebranded to **RestroAI** with an AI-first feature set.

---

## Current Product Versions

| Product | Version | Status | Tech Stack |
|---------|---------|--------|------------|
| NutriCare | v0.9.4 | Live | Next.js 16, React 19, PostgreSQL (Supabase), Prisma 7, Tailwind CSS 4 |
| RestroAI | v1.2.0 | Live | React 18, Express, PostgreSQL, TypeScript |
| QueueZero | — | In Development | TBD |

**Production URLs:**
- NutriCare: https://www.nutri-care.app
- RestroAI: (private beta)

---

## NutriCare — Shipped Features (v0.9.4)

NutriCare is a comprehensive dietary management platform for Australian aged care facilities. All features below are live in production.

### Core Platform
- ✅ Multi-tenant architecture (Organisation → Site → Resident hierarchy)
- ✅ 10-role RBAC (SUPER_ADMIN through READ_ONLY)
- ✅ Multi-site user assignments with per-site access control
- ✅ Dark mode (system preference + manual toggle)
- ✅ Audit logging for healthcare compliance
- ✅ Soft deletes with 7-year retention policy

### Resident Management
- ✅ Resident dietary profiles (IDDSI textures, allergens, preferences, dislikes)
- ✅ Resident lifecycle status (ACTIVE/INACTIVE)
- ✅ Resident photo upload (Supabase Storage)
- ✅ QR code labels per resident
- ✅ Custom fields (site-configurable)
- ✅ Wing/room assignment with room occupancy validation
- ✅ Room history audit trail
- ✅ FHIR R4 export per resident
- ✅ Family portal (shareable read-only view via magic link)
- ✅ MUST malnutrition screening (3-step scoring, risk categories)
- ✅ Weight tracking with sparkline and ≥3 kg drop alert
- ✅ Incident log (falls, refused meals, choking, etc.)
- ✅ Order history with intake bars
- ✅ Document attachments (PDF/image, Supabase Storage, signed URLs)
- ✅ Medications list with food-interaction warnings (12-rule engine)
- ✅ Resident self-service portal (magic-link ordering, no login required)

### Menu & Meal Management
- ✅ IDDSI texture levels: Solid (LQ3–RG7) + Fluid (TN0–EX4)
- ✅ Multi-period meal ordering (Breakfast, Lunch, Dinner, Snacks, etc.)
- ✅ Menu weekly planner with copy-last-week function
- ✅ Date-based order validation (cutoff enforcement)
- ✅ Allergen conflict detection at ordering (hard block / soft warning / info)
- ✅ Texture conflict detection at ordering
- ✅ One-per-category auto-swap with toast notification
- ✅ Per-period order notes
- ✅ Voice ordering (Web Speech API)
- ✅ Multi-resident bulk ordering
- ✅ Menu item nutrition (calories, protein, carbs, fat)

### Kitchen Operations
- ✅ Kitchen production reports and prep checklists
- ✅ Kitchen Display System (KDS) — full-screen real-time board, 10s polling, slide-in animations
- ✅ Delivery tracking with per-meal confirmation
- ✅ Intake percentage recording (0/25/50/75/100%) per meal delivery
- ✅ Waste notes at delivery
- ✅ Tray docket printing
- ✅ Meal satisfaction surveys (1–5 star, per delivered order)

### Analytics & Reports
- ✅ Site dashboard with MetricCards and meal period progress
- ✅ Waste analytics (intake distribution, low-intake alerts, daily trend, by meal period)
- ✅ Nutritional compliance report (ESPEN 2022 calorie/protein targets, MUST-adjusted)
- ✅ Meal satisfaction analytics (weekly trend, by-period breakdown, recent comments)
- ✅ Kitchen prep analytics
- ✅ Weekly email digest (Resend, Vercel Cron)

### Staff & Operations
- ✅ Staff rostering with shift management
- ✅ Clock-in kiosk (WebAuthn biometric + PIN fallback + face recognition AI)
- ✅ Attendance supervisor view
- ✅ AI roster suggestions (Claude Haiku, 4-week demand history)
- ✅ Birthday notifications (resident birthdays flagged in notification bell)

### Bulk Operations & Integration
- ✅ Bulk resident upload (Excel, upsert by externalId)
- ✅ Bulk menu items upload (Excel, org-scoped, upsert)
- ✅ Bulk meal periods upload (Excel, site-scoped, upsert)
- ✅ Bulk menus upload (Excel, idempotent)
- ✅ Integration API (M2M authentication, API keys, bcrypt-hashed)
  - POST /api/integration/residents
  - POST /api/integration/menu-items
  - POST /api/integration/meal-periods
  - PUT /api/integration/menus
  - GET /api/integration/orders (JSON + CSV)
- ✅ Admin API key management (/admin/api-keys)

### AI Features
- ✅ NutriAssist AI chat (Claude Haiku, 8 tools: resident profiles, orders, kitchen status, menus, allergen conflicts, missing orders today, allergen summary, prep summary)
- ✅ AI clinical note drafting (Claude Haiku)
- ✅ Predictive deterioration alerts
- ✅ Nutritional gap detection
- ✅ AI face recognition clock-in
- ✅ AI roster suggestions

### Exports & Print
- ✅ Styled Excel exports (residents, orders, prep lists, menus) with dietary context columns and allergen warning highlighting
- ✅ A4 landscape print layouts with systematic table formatting
- ✅ FHIR R4 JSON export per resident

---

## NutriCare — Next Release (v1.0.0)

Planned for Q2 2026. Focus: hardening, onboarding, and first enterprise customers.

- [ ] Onboarding wizard (guided setup for new sites)
- [ ] Resident transfer between sites
- [ ] Advanced notification preferences (email + in-app per event type)
- [ ] Meal plan templates (reusable weekly/fortnightly plans)
- [ ] Dietitian collaboration portal (external dietitian account type)
- [ ] Automated MUST screening reminders (cron, per site, per resident)
- [ ] ACQSC audit report generator (single PDF covering all compliance evidence)
- [ ] Public API documentation site (docs.nutri-care.app)

---

## RestroAI Roadmap

RestroAI (formerly RestroStock) is an AI-native restaurant operating system for Australian food businesses.

### Current (v1.2.0) — Live
- Real-time stock tracking with low-stock and expiry alerts
- Purchase order workflow with 3-way matching (PO, GRN, Invoice)
- Supplier management
- Waste tracking
- Analytics dashboard
- Multi-location storage and multi-unit inventory
- Recipe costing
- Online ordering (Stripe, QR table menus)
- Kitchen display system (KDS)
- AI-powered insights (RestroAI chat)
- Staff scheduling with AI suggestions
- Carbon footprint tracking per dish

### Next Release (v1.3.0)
- [ ] Automated reorder suggestions (AI-driven)
- [ ] Supplier performance scoring
- [ ] Barcode/QR scanning for stocktake
- [ ] POS integration (Square, Lightspeed)
- [ ] Accounting integration (Xero, MYOB)

---

## QueueZero Roadmap

### Phase 1: MVP (Planned)
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
- [ ] Analytics (popular items, peak times, revenue trends)
- [ ] API for third-party integrations
- [ ] White-label options for food truck collectives

---

## Long-Term Vision

Day Zero Solutions aims to become an **integrated hospitality and care platform** where aged care facilities, restaurants, and food vendors can manage their entire food operation from a single ecosystem:

- **NutriCare** handles dietary compliance and resident care in aged care
- **RestroAI** handles restaurant operations (inventory, ordering, staff, AI)
- **QueueZero** handles front-of-house ordering and customer experience
- **Shared Analytics** ties everything together with cross-product insights

Each product works independently (buy one, use one), but together they create a powerful, unified system for food businesses of all types.

---

## Development Priorities (Q2 2026)

1. **NutriCare v1.0.0** — Onboarding, dietitian portal, ACQSC report generator
2. **RestroAI v1.3.0** — POS integrations, supplier scoring
3. **QueueZero MVP** — Begin core build
4. **Website** — Blog/content hub for SEO (aged care dietary compliance)
5. **Integrations** — NutriCare ↔ major ACMS platforms (AutumnCare, Epicor)

---

## Retired Products

### Gentle Gourmet (Retired)
- **Was:** Enhanced version of NutriCare (v0.4.0)
- **Decision:** Consolidated back into NutriCare brand to avoid confusion
- **Codebase:** `Gentle-Gourmet---MVP` repo (archived)
- **Features:** All Gentle Gourmet features were incorporated into NutriCare v0.5+

### RestroStock (Rebranded)
- **Was:** RestroStock v1.0.0
- **Decision:** Rebranded to RestroAI to reflect AI-first roadmap direction
