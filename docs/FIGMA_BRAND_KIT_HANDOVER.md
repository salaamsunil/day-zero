# Day Zero Brand Kit - Figma Handover

Handover for a Day Zero umbrella agent (works across NutriCare, RestroStock,
QueueZero). The brand kit below was started in a NutriCare-scoped session on
2026-08-27 and should be continued from here.

## The Figma file

- **File:** Day Zero Brand Kit
- **File key:** `eRxQcSxJ5TMQoE0RBKe5Lr`
- **URL:** https://www.figma.com/design/eRxQcSxJ5TMQoE0RBKe5Lr
- **Owner/plan:** Sunil (bonjoursunil@gmail.com), team `team::1316253116061908294`, **Starter (free) tier**

### Access (nothing to install)
The Figma MCP is a **user-scoped** plugin and the OAuth is stored at account
level, so any Claude Code session on this machine already has it, authenticated
as Sunil. To act on this file, pass the file key above. Load the `figma-use`
skill before any `use_figma` call, and `figma-generate-library` for component
work (mandatory). First tool call may prompt for permission - approve once.

## What already exists in the file

**Page "Foundations":**
- `Primitives` collection (16 colours): `violet/{default,dark,light}`,
  `mint/*`, `orange/*`, `neutral/{ink,dark-card,dark-surface,gray,line,light,white}`.
  Scopes `[]` (hidden), WEB code syntax `var(--dz-*)`.
- `Color` collection (13 semantic tokens, single mode): `bg/*`, `text/*`,
  `border/default`, `brand/*`, `accent/*` - aliased to primitives.
- `Radius` collection: sm 10 / md 16 / pill 20 / full 9999.
- Effect styles: `shadow/default`, `shadow/large` (brand violet drop-shadows).
- Text styles (Inter): Display/Hero, Heading/H1, Heading/H2, Product Name,
  Subheading, Body/{Large,Default,Strong}, Label, Eyebrow.
- On-canvas docs: colour swatches (bound to the live variables) + type specimen.

**Page "Logo":**
- `Logo/Mark` **component** - the real four-petal "0" mark, imported clean from
  `day-zero.com.au/public/images/Day-Zero-Mar2026.svg` (filters/red-tint stripped).
- Presentation board with: primary on-dark, on-light, mono violet, reversed
  (knockout); horizontal + stacked wordmark lockups; product lockups for
  NutriCare (violet), RestroStock (mint), QueueZero (orange).

## Conventions to keep

- **No em dashes** anywhere in copy (Day Zero + NutriCare rule). Use hyphen/colon.
- Brand voice: direct, Australian English, practical, benefit-led (see
  `day-zero.com.au/BRAND-GUIDE.md`).
- Product colours: NutriCare = violet `#7C3AED`, RestroStock = mint `#10B981`,
  QueueZero = orange `#F97316`.
- Variable naming = slash paths; always set explicit `scopes` and WEB code syntax.

## Known constraint (Starter tier)

Free Figma caps a collection to **one mode**, so light/dark can't toggle as
modes - the tokens all exist but there's no mode switch. True light/dark theming
needs a paid seat. Same call to make on whether daily brand work justifies it.

## Suggested next steps (not yet done)

1. Add a Cover page (file thumbnail) + short usage/clear-space notes for the mark.
2. Export-ready logo assets (SVG/PNG lockups per product) if a downloadable kit
   is wanted.
3. Marketing collateral built on these tokens: sell sheets, LinkedIn/social
   cards, a deck template - one per product, sharing the foundation.
4. If a *new* mark exploration is ever wanted, that's a separate iterative pass
   with human art direction (the current mark was systematised, not redesigned).

## Source assets (in this repo)

- `public/images/Day-Zero-Mar2026.svg` - primary mark
- `public/images/dazero-icon.svg` - icon variant
- `public/images/DAZERO-1.svg` - mark + "DAY ZERO" wordmark lockup
- `BRAND-GUIDE.md` - full palette, type, tone, tokens
