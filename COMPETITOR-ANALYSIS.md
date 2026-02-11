# Day Zero Solutions - Competitor Analysis

> **Review cadence:** Update this document quarterly. Next review: May 2026.

---

## NutriCare Competitors

### Competitive Landscape

NutriCare operates in the aged care dietary management space. Most competitors are either generic aged care ERP systems with a dietary module bolted on, or manual systems (paper/spreadsheets).

### Key Competitors

#### 1. Generic Aged Care ERP Systems
**Examples:** Leecare, TeleCare, iCare

- **What they do:** Broad aged care management (clinical, compliance, rostering, billing) with a dietary module included
- **Strengths:** All-in-one platform, established in the market, existing customer base
- **Weaknesses:** Dietary module is an afterthought — limited IDDSI compliance, basic meal planning, poor kitchen workflow
- **Price:** $5,000-$20,000+/year (enterprise pricing, long contracts)

#### 2. Manual Systems (Paper / Spreadsheets)
**What they do:** Dietary records kept in paper folders, Excel spreadsheets, or whiteboards in the kitchen

- **"Strengths":** No software cost, familiar to staff
- **Weaknesses:** Error-prone (allergen misses, wrong texture levels), time-consuming, no audit trail, fails accreditation scrutiny, doesn't scale
- **Price:** "Free" (but hidden costs in staff time, errors, and compliance risk)

#### 3. Generic Menu Management Software
**Examples:** MenuMate, Saffron, Nutritics

- **What they do:** Recipe costing, nutrition analysis, menu planning
- **Strengths:** Good at nutrition analysis and recipe management
- **Weaknesses:** Not built for aged care workflows. No IDDSI compliance engine, no resident dietary profiles, no meal ordering workflow
- **Price:** $50-$300/month

### NutriCare's Moat
- **Purpose-built IDDSI compliance** — Texture levels are first-class citizens, not an afterthought
- **Dietary safety engine** — Automatic allergen conflict warnings at the point of ordering
- **Resident-centric** — Every feature designed around individual resident dietary needs
- **Affordable** — $149-$299/mo vs $5,000+/year for ERP systems
- **Modern UX** — Built with current technology (Next.js, React) vs legacy systems

### NutriCare Differentiation Matrix

| Feature | NutriCare | Generic ERP | Spreadsheets | Menu Software |
|---------|-----------|-------------|--------------|---------------|
| IDDSI texture compliance | Yes (core) | Basic/None | Manual | No |
| Resident dietary profiles | Yes | Limited | Manual | No |
| Allergen conflict warnings | Automatic | Manual/None | None | Limited |
| Multi-period meal ordering | Yes | Limited | Manual | No |
| Kitchen production reports | Yes | Basic | Manual | No |
| Multi-site RBAC | Yes | Yes | No | No |
| Modern interface | Yes | Dated | N/A | Varies |
| Price (monthly) | $149-$299 | $400-$1,600+ | $0 | $50-$300 |
| Setup time | Days | Weeks-months | N/A | Days |
| Aged care specific | Yes | Partially | No | No |

---

## RestroStock Competitors

### Competitive Landscape

RestroStock competes in restaurant inventory and procurement management. The market ranges from enterprise platforms (too expensive for independents) to basic POS add-ons (too limited for serious inventory management).

### Key Competitors

#### 1. MarginEdge
- **What they do:** Invoice processing, food cost tracking, recipe costing
- **Strengths:** Strong invoice scanning/OCR, integrates with major POS and accounting systems, good analytics
- **Weaknesses:** US-focused, expensive for small operators, limited procurement workflow (no PO-GRN-Invoice matching)
- **Price:** ~$400-$500 USD/month
- **Target:** Medium-large US restaurants

#### 2. Toast Inventory (Toast POS Add-On)
- **What they do:** Stock tracking as part of the Toast POS ecosystem
- **Strengths:** Tight POS integration, large customer base
- **Weaknesses:** Locked into Toast ecosystem, basic inventory features, no standalone procurement, US-focused
- **Price:** Part of Toast subscription ($0-$165 USD/mo for POS, inventory module extra)
- **Target:** Toast POS customers

#### 3. Square for Restaurants (Inventory Module)
- **What they do:** Basic inventory tracking within the Square ecosystem
- **Strengths:** Simple, affordable, widely used in Australia
- **Weaknesses:** Very basic inventory (counts only), no purchase orders, no supplier management, no 3-way matching
- **Price:** Free basic, $60 AUD/mo for Plus
- **Target:** Small cafes and quick-service

#### 4. Plate IQ (now Ottimate)
- **What they do:** AP automation and invoice processing for restaurants
- **Strengths:** Strong invoice OCR, line-item capture, accounting integration
- **Weaknesses:** Focused on accounts payable, not full inventory management, US pricing
- **Price:** ~$200-$500 USD/month
- **Target:** Multi-unit restaurant groups

### RestroStock's Moat
- **Procurement-centric 3-way matching** — PO, Goods Receipt, and Invoice reconciliation in one system
- **Affordable for small operators** — $79/mo vs $400+/mo for enterprise tools
- **Australian-built** — Designed for Australian restaurant workflows and suppliers
- **No POS lock-in** — Works independently of any POS system
- **Supplier messaging** — Communicate with suppliers directly from the platform

### RestroStock Differentiation Matrix

| Feature | RestroStock | MarginEdge | Toast Inventory | Square Inventory | Plate IQ |
|---------|-------------|------------|-----------------|------------------|----------|
| Real-time stock tracking | Yes | Limited | Yes | Basic | No |
| Purchase orders | Yes | No | No | No | No |
| 3-way matching (PO-GRN-Invoice) | Yes | No | No | No | Partial |
| Supplier management | Yes | Limited | No | No | Yes |
| Supplier messaging | Yes | No | No | No | No |
| Waste tracking | Yes | No | Limited | No | No |
| Analytics dashboard | Yes | Yes | Basic | Basic | Yes |
| Multi-location | Yes | Yes | Yes | Yes | Yes |
| Australian-focused | Yes | No | No | Partial | No |
| Works without POS | Yes | No (needs POS) | No (Toast only) | No (Square only) | Yes |
| Price (AUD/mo) | $79-$249 | ~$600-$750 | Bundled | $0-$60 | ~$300-$750 |

---

## QueueZero Competitors

### Competitive Landscape

QueueZero operates in the mobile ordering space, specifically targeting food trucks and pop-ups. Most competitors target sit-down restaurants or large food halls, leaving an underserved niche for mobile food vendors.

### Key Competitors

#### 1. Mr Yum
- **What they do:** QR code ordering, digital menus, payment processing for hospitality venues
- **Strengths:** Well-funded (Australian), slick UX, strong marketing, venue-focused
- **Weaknesses:** Designed for sit-down restaurants, requires venue infrastructure, per-transaction pricing adds up, not optimised for food truck workflow
- **Price:** Commission-based (percentage per order)
- **Target:** Restaurants, pubs, stadiums, hotels

#### 2. me&u
- **What they do:** Table ordering platform for hospitality
- **Strengths:** Growing Australian company, good POS integrations, strong in pubs/bars
- **Weaknesses:** Table-ordering focused (not queue management), requires POS integration, not built for mobile vendors
- **Price:** Per-transaction fees
- **Target:** Pubs, bars, restaurants

#### 3. Hey You
- **What they do:** Order-ahead and loyalty app for cafes and quick-service
- **Strengths:** Established Australian platform, loyalty features, consumer app with user base
- **Weaknesses:** Cafe-focused, consumer app model (users need to download), not optimised for food trucks or pop-ups
- **Price:** Commission per order + monthly fee
- **Target:** Cafes, quick-service chains

### QueueZero's Moat
- **Purpose-built for food trucks and pop-ups** — No permanent hardware needed, works anywhere
- **Queue management** — Live queue visibility is a core feature, not an afterthought
- **No POS dependency** — Standalone system, no integration required
- **Free tier** — Low barrier to entry for small operators
- **Order-ahead scheduling** — Customers order before arriving, reducing wait times

### QueueZero Differentiation Matrix

| Feature | QueueZero | Mr Yum | me&u | Hey You |
|---------|-----------|--------|------|---------|
| Purpose-built for food trucks | Yes | No | No | No |
| Queue management | Yes (core) | No | No | Basic |
| Order-ahead scheduling | Yes | Limited | No | Yes |
| No hardware required | Yes | Mostly | No (needs POS) | Mostly |
| No POS integration needed | Yes | No | No | Optional |
| Free tier | Yes | No | No | No |
| No consumer app needed | Yes (web-based) | Yes | Yes | No (app required) |
| Live queue visibility | Yes | No | No | No |
| Works at events/pop-ups | Yes (optimised) | Possible | No | Possible |
| Price | Free + $49/mo Pro | Commission | Commission | Commission + fee |

---

## Overall Competitive Position

### Day Zero's Strengths (Across All Products)
1. **Purpose-built** — Each product solves a specific problem for a specific audience
2. **Affordable** — Priced for small-medium operators, not enterprise budgets
3. **Australian** — Built, hosted, and supported locally
4. **Modern tech** — Clean UX, fast, works on any device
5. **No vendor lock-in** — Each product works independently

### Day Zero's Weaknesses (To Address)
1. **Brand awareness** — New to market, no existing customer base
2. **No integrations yet** — POS, accounting, and HR integrations planned but not built
3. **Solo founder** — Limited capacity for support, sales, and development simultaneously
4. **No mobile apps** — All products are web-based (mobile apps planned)

### Strategic Recommendations
1. **Lead with NutriCare** — Less competitive market, higher price point, compliance-driven purchase
2. **Use RestroStock's free trial** — Let the product sell itself, compete on ease of use
3. **QueueZero free tier** — Build user base before monetising
4. **Publish case studies** — Social proof is the #1 thing missing vs established competitors
5. **Partner with consultants** — They recommend tools to their clients

---

## Quarterly Review Checklist

- [ ] Check competitor pricing changes
- [ ] Review competitor feature releases and changelog
- [ ] Update differentiation matrices
- [ ] Note any new entrants to the market
- [ ] Review own product development against competitive gaps
- [ ] Update strategic recommendations if needed

**Next review date: May 2026**
