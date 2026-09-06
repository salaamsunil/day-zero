# Day Zero site elevation plan

Bringing day-zero.com.au up to the standard of the products. Written Sep 2026, after
the four brand foundations (Day Zero umbrella, QueueZero, NutriCare, RestroAI) were
locked. Canonical; work against it. Companion to `GTM-MASTER-PLAN.md` and
`MARKETING-ENGINEERING.md`.

## The problem, stated plainly

The site was built before any product brand was locked. The shopfront now undersells
and, worse, **contradicts** the merchandise. The products are an A; the site is a B-.
That gap is the highest-leverage inconsistency in the whole GTM surface, because the
studio site is the first thing a skeptical operator sees.

## Evidence (from the live site, Sep 2026)

1. **The site contradicts the locked brand.**
   - NutriCare is shown in **violet** (kicker, tagline, CTA, gallery border) on the
     homepage and `/products`. NutriCare is **teal** now.
   - The umbrella hero uses a **rainbow gradient** headline, a **violet** primary
     button, and a **purple chat widget**. The locked system is: mono ink parent;
     products carry colour (QueueZero ember, NutriCare pine-teal, RestroAI aubergine
     + gold). Violet/rainbow are off-system (violet was the retired NutriCare
     assumption).
2. **Stale product screenshots.** Galleries show the pre-rebrand apps (old green
   NutriCare / RestroAI). The new marks and palettes are invisible where proof lives.
3. **"Good template," not state of the art.** Centered single column; rainbow-gradient
   hero (a generic-AI-design tell); generic accent; product blocks that are identical
   spec-sheets (kicker + tagline + 6 checkmarks + gallery). Competent 2021 startup, not
   Anthropic/Stripe/Linear.
4. **None of the craft shows.** Every product has a signature motion; the site is inert.
   The one exception, the "AI that answers to the record" chat cards, is the best thing
   on the page and the quality bar for the rest.

## Merchandising (how products are listed)

Keep the **studio-hub IA** (home = co-equal flagship cards; `/products` = deep pages;
product domains link out). It is right: scalable, more verticals coming, mono studio
frame + coloured products. Change the **unit**: today every product is the same
spec-sheet. Shift each block from "list what it does" to **"show the one job it does"**,
the signature moment:
- NutriCare: catch the allergen / IDDSI texture conflict at the point of order.
- RestroAI: flag the supplier price drift on the invoice line; protect the bottom line.
- QueueZero: clear the queue at the window.
Lead with proof-in-action; features become secondary. Each block wears its product's
locked colour, so the page reads as one coherent system (mono studio chrome + product
colour per block). The "answers to the record" section is the reference standard for
this show-don't-tell quality.

## The plan (phased)

### Phase 0 , Brand-align (fast, highest ROI) , IN PROGRESS
Retire the rainbow gradient and every violet/purple accent. Apply the locked system:
mono umbrella; per-product teal (NutriCare) / aubergine + gold (RestroAI) / ember
(QueueZero). Restyle or replace the purple chat widget. Update `global.css` accent
tokens and the per-product kicker/button classes. Goal: the site stops contradicting
the brand.

### Phase 1 , Reshoot everything
Re-capture all product screenshots on the **rebranded** apps (teal NutriCare, aubergine
RestroAI, ember QueueZero), device-framed and legible. Replace the stale assets in
`src/assets/products/` and `public/images/products/`. Biggest single credibility lift;
unblocked now that the apps are rebranded. Includes the QueueZero in-app screenshots
(currently none embed the R1 mark).

### Phase 2 , Elevate presentation
New hero true to the mono "0 to 1" idea (drop the rainbow; one restrained signature
motion, e.g. the four-petal 0 resolving to the 1). Convert product cards from
spec-sheets to "show-the-job" blocks. Tighten the type scale, spacing, and motion
discipline. Bento/proof sections where they earn their place.

### Phase 3 , Depth & merchandising
Per-product page storytelling (job-per-section, the "answers to the record" quality
extended across the page). Social-proof scaffolding as real proof becomes available
(never fabricated).

### Phase 4 , Polish & AEO
Performance, accessibility, and finish the AEO/GEO layer already in flight (entity
JSON-LD graph + `llms.txt` are staged; add FAQPage + per-product schema, validate in
Search Console).

## Sequencing decision (Sep 2026)

Start with **Phase 0 + 1 together**: brand-align the site and reshoot screenshots.
That closes most of the gap and removes the active contradiction before the larger
Phase 2 redesign investment.

## Guardrails (unchanged)

No em dashes. No fabricated customers/logos/testimonials, and no apologising for being
early. Studio-level copy stays industry-agnostic and scalable; per-product copy goes
vertical-deep. AI is grounded/cited decision-support, never the headline or a badge.
Never publish the street address. Craft over speed: lock and self-critique before
publishing.
