# Day Zero Solutions - Sales Runbook

## Pricing Recommendations

### NutriCare (Aged Care Dietary Management)

| Plan | Price | Includes |
|------|-------|----------|
| **Starter** | $149/mo | Up to 50 residents, 1 facility, email support |
| **Professional** | $299/mo | Up to 150 residents, multi-site, priority support, custom reports |
| **Enterprise** | Custom | Multi-facility groups, dedicated onboarding, SLA, API access |

**Notes:**
- Annual billing discount: 2 months free (pay 10, get 12)
- All plans include unlimited staff users
- 30-day free trial for Starter/Professional
- Enterprise pricing based on number of facilities and residents

### RestroStock (Restaurant Inventory & Procurement)

| Plan | Price | Includes |
|------|-------|----------|
| **Solo** | $79/mo | 1 location, unlimited SKUs, email support |
| **Growth** | $149/mo | Up to 3 locations, unlimited SKUs, priority support, analytics |
| **Multi-Site** | $249/mo | Up to 5 locations, advanced analytics, dedicated support |

**Notes:**
- 14-day free trial, no credit card required
- Annual billing: 2 months free
- Additional locations beyond plan limit: $49/mo each

### QueueZero (Mobile Ordering & Queue Management)

| Plan | Price | Includes |
|------|-------|----------|
| **Free** | $0/mo | Up to 50 orders/month, basic features |
| **Pro** | $49/mo + 1.5% per transaction | Unlimited orders, analytics, branding customisation |

**Notes:**
- Free tier always available (lead generation strategy)
- Transaction fee applies to order value, not tip
- No hardware required — works on any device with a browser

---

## Lead Workflow

```
Contact Form / Chatbot / Waitlist
        |
        v
Email arrives at hello@day-zero.com.au
        |
        v
Classify by product interest
(Subject line now includes product name)
        |
        v
Respond within 2 hours (business hours)
        |
        v
Book demo via Calendly (or direct email)
        |
        v
Demo call (15 minutes)
        |
        v
Trial access (NutriCare: guided trial | RestroStock: self-serve trial)
        |
        v
Follow up: Day 3 → Day 7 → Day 12
        |
        v
Close or nurture
```

### Response Templates

**Initial Response (within 2 hours):**

> Hi [Name],
>
> Thanks for reaching out! I'd love to learn more about your [facility/restaurant] and show you how [Product] works.
>
> Would you be free for a quick 15-minute call this week? Here are a few times that work:
> - [Option 1]
> - [Option 2]
> - [Option 3]
>
> Or feel free to pick a time that suits you: [Calendly link]
>
> Cheers,
> [Your Name]

**Day 3 Follow-up:**

> Hi [Name],
>
> Just checking in — how are you finding [Product] so far? Happy to jump on a quick call if you have any questions or need help getting set up.
>
> Cheers,
> [Your Name]

**Day 7 Follow-up:**

> Hi [Name],
>
> Wanted to make sure you're getting the most out of your trial. A few things most people find helpful in the first week:
> - [Feature 1 relevant to their use case]
> - [Feature 2]
>
> Want me to walk you through anything?

**Day 12 Follow-up (decision time):**

> Hi [Name],
>
> Your trial wraps up in a couple of days. I'd love to hear your thoughts — is [Product] working for your team?
>
> If you'd like to continue, I can get you set up on the [Plan] plan. Happy to chat through any questions.

---

## Demo Model

| Product | Approach | Duration |
|---------|----------|----------|
| **NutriCare** | Demo-first, then guided trial | 15 min demo → 30-day guided trial |
| **RestroStock** | 14-day free trial + demo option | Self-serve trial, demo available on request |
| **QueueZero** | Free tier always available | In-app wizard, no demo needed |

### Why Demo-First for NutriCare
- Higher price point — needs trust building
- Compliance-driven purchase — decision makers need to see how it handles IDDSI
- Longer sales cycle — facility managers often need to present to management
- Demo lets you qualify the lead and tailor the trial

---

## Demo Script Outline (15 minutes)

### 1. Discovery (2 min)
- "Tell me about your current process for [dietary management / inventory]."
- "What's the biggest pain point?"
- "How many [residents / locations / staff] are you managing?"

### 2. Feature Showcase (8 min)
Show the 3 features most relevant to their pain point:

**NutriCare:**
- Resident dietary profile setup (IDDSI levels, allergies, preferences)
- Meal ordering workflow (multi-period, kitchen view)
- Production report generation

**RestroStock:**
- Adding stock items and setting reorder points
- Creating a purchase order and 3-way matching
- Supplier messaging and analytics dashboard

### 3. Pricing & Questions (3 min)
- Present the relevant plan
- Address questions
- "Based on what you've told me, the [Plan] at [$X/mo] would cover your needs."

### 4. Next Step (2 min)
- Set up trial access
- Schedule Day 3 check-in
- "I'll send you login details and a quick-start guide today."

---

## Objection Handling

### "It's too expensive."
**Response:** "I understand budget matters. Let me show you the ROI. If NutriCare prevents even one dietary incident per year, the liability and compliance cost alone pays for the software many times over. For RestroStock, most restaurants save 5-10% on food costs through better stock tracking — that's often $1,000+ per month for a single location."

### "We use spreadsheets and they work fine."
**Response:** "Spreadsheets are great until they're not. The error rate on manual dietary records is significant, and in aged care, errors can mean allergen exposure or IDDSI non-compliance. With [Product], the system catches conflicts automatically. Plus, your staff spend less time on data entry and more time on care / cooking."

### "We already have a system."
**Response:** "That's great — which system are you using? [Listen]. A lot of facilities find their current system wasn't built specifically for [IDDSI compliance / 3-way matching]. Would you be open to a quick comparison? I can show you how [Product] handles [specific gap] in about 10 minutes."

### "I need to check with my boss / board."
**Response:** "Absolutely — that's a smart move. Would it help if I joined that conversation? I can give a quick 10-minute overview and answer any questions they have. I've done this with several facility managers and it usually speeds things up."

### "Can you do a pilot?"
**Response:** "Yes, our trial is exactly that. Let's set you up with a focused pilot — we'll define success criteria upfront and I'll check in weekly to make sure you're getting results."

---

## CRM Recommendation

### Phase 1: First 20 Leads
Use a **Google Sheet** with these columns:
- Name | Email | Phone | Company | Product Interest | Source | Date | Status | Next Follow-up | Notes

### Phase 2: 20+ Leads
Switch to **HubSpot CRM** (free forever plan):
- Contact management
- Deal pipeline
- Email tracking
- Meeting scheduler
- Integrates with Gmail/Outlook

---

## Proposal Template Structure

When a prospect asks for a formal proposal:

1. **Cover Page** — Day Zero Solutions logo, prospect name, date
2. **Problem Summary** — Restate their specific pain points (from discovery call)
3. **Solution Overview** — How NutriCare/RestroStock addresses each pain point
4. **Key Features** — 5-6 bullet points most relevant to their needs
5. **Pricing** — Selected plan, annual discount option, what's included
6. **Implementation Timeline** — Onboarding steps and estimated go-live date
7. **About Day Zero** — Brief company overview, Australian-owned, support details
8. **Terms** — Payment terms, cancellation policy, data ownership
9. **Next Steps** — "Sign and return by [date] to begin onboarding"

---

## Onboarding Checklists

### NutriCare (30-Day Guided Onboarding)

**Week 1: Foundation**
- [ ] Account setup and admin user created
- [ ] Facility details configured (name, address, meal periods)
- [ ] Staff accounts created with appropriate roles
- [ ] Kick-off call completed (30 min)

**Week 2: Data Entry**
- [ ] Import resident list (or manual entry)
- [ ] Set up dietary profiles (IDDSI levels, allergies, preferences)
- [ ] Configure menu items and meal plans
- [ ] Check-in call (15 min)

**Week 3: Live Operations**
- [ ] First live meal ordering cycle completed
- [ ] Kitchen production report generated and reviewed
- [ ] Staff feedback collected
- [ ] Check-in call (15 min)

**Week 4: Optimise & Handoff**
- [ ] Address any issues or feature questions
- [ ] Train backup admin user
- [ ] Confirm billing setup
- [ ] Transition to standard support

### RestroStock (14-Day Self-Serve + Check-Ins)

**Day 1-3: Setup**
- [ ] Account created, locations configured
- [ ] Import or add initial stock items
- [ ] Set up supplier contacts
- [ ] Watch getting-started video (3 min)

**Day 4-7: Core Workflow**
- [ ] Create first purchase order
- [ ] Record a goods receipt
- [ ] Match an invoice (3-way match)
- [ ] Day 5 check-in email sent

**Day 8-14: Advanced Features**
- [ ] Set up low-stock alerts
- [ ] Record waste entries
- [ ] Review analytics dashboard
- [ ] Day 12 check-in: "Ready to subscribe?"

### QueueZero (In-App Wizard)
- [ ] Sign up for free tier
- [ ] Set up menu items
- [ ] Customise ordering page (branding, colours)
- [ ] Test order flow on mobile
- [ ] Go live at next event

---

## First Customer Strategy

**Offer for the first 2-3 customers per product:**

- 3 months free access (no credit card required)
- In exchange for:
  - A written testimonial or quote (2-3 sentences)
  - Permission to use their logo on the Day Zero website
  - A brief case study (we write it, they approve it)
  - Willingness to be a reference for future prospects

**Why this works:**
- Removes all risk for the customer
- Generates social proof fast
- Case studies and quotes are worth more than 3 months of revenue
- Creates champions who refer others

**How to present it:**

> "We're looking for a few founding customers to help shape [Product]. In exchange for your feedback and a testimonial, we'll give you 3 months completely free. No commitment after that — if it works, you continue on our standard pricing. If not, no hard feelings."
