# Day Zero brand guideline (studio / umbrella)

The identity for Day Zero Solutions, the studio, and the parent that its products
(NutriCare, RestroAI, QueueZero) co-sign to. Confident, technical, restrained: the
league of Anthropic, Stripe, Linear, Vercel. This doc is the logo and identity
rules. Voice and positioning: `docs/GTM-MASTER-PLAN.md` and the brand-voice memory.

---

## The idea

**From Day Zero to Day One.** The studio builds the software that gets an operation
ready for Day One. The mark says it in one glyph: a **"0" (Day Zero) with a "1"
inside (Day One)**, which is also the binary **0 / 1** of a software studio.

## The mark

A four-petal **"0"** resolving to a single central **"1"** bar. The petal
construction (four quarter-petals with hairline gaps) is the distinctive silhouette,
not a plain ring. Mono ink is the primary; the petals can carry product colour as an
expressive variant (see below).

- **Canonical source:** `images/dazero-icon.svg` (mirrored to `public/images/`).
- **Assets:** `dazero-icon.svg` (nav, footer, JSON-LD logo), `dazero-tile.svg`
  (square ink tile + white mark, for favicon / app icon / avatar / social),
  `favicon.svg` and `Day-Zero-Mar2026.svg` (kept in sync, mono mark),
  `apple-touch-icon.png` (180), `favicon-96x96.png`. Co-sign lockup PNGs for
  products live in each product repo (e.g. `QueueZero/public/brand/dayzero-logo*.png`).

### Construction (183 x 262 grid)

| Element | Geometry | Fill |
|---|---|---|
| Petal "0" | four quarter-petal paths, centre axis `x89`, ring `y4`..`246` | ink `#17110b` |
| Central "1" | `rect x75 y75`, `28 x 100`, radius `14` (fully rounded) | ink `#17110b` |

The "1" is centred at the counter's optical centre (`x89, y125`), short enough to
leave clear negative space above and below (the space is what reads as considered,
not filled in). History: refined Sep 2026 from the earlier portrait mark (arbitrary
mint/violet/grey split, drop shadows, a stray 14%-red layer, and a thin off-centre
centre-line). The idea and the petal silhouette are unchanged; it was reduced to one
ink, squared for icon use, and the "1" was centred and shortened.

### Colouring in the site (how it stays visible)

The mark's native fill is ink, so it reads on light and frosted grounds. On the dark
hero and the footer, CSS applies `filter: brightness(0) invert(1)` to render it white
(see `.header:not(.scrolled) .logo-icon` and `.footer-logo-icon` in `global.css`).
Any solid fill survives that filter, so keep the mark a single solid colour.

## Variants

- **Mono (primary, default):** one ink. Nav, footer, favicon, co-sign, small sizes,
  any functional use. A parent brand stays neutral and does not wear a child's colour.
- **Tile:** ink rounded-square + white mark (`dazero-tile.svg`). Favicon, app icon,
  avatar, social. On dark, invert to a cream tile + ink mark.
- **On dark:** white mark (via the CSS filter, or the tile).
- **Colour "expressive" (hero / marketing ONLY):** the four petals carry the product
  accents (violet NutriCare `#7C3AED`, mint RestroAI `#10B981`, orange QueueZero
  `#F97316`); the fourth petal stays neutral = room for the next product; the central
  "1" stays ink. Use sparingly, for a "meet the studio" moment, never as the everyday
  mark. If used, make the neutral petal intentional (a warm neutral), not a dimmed grey.

The family reads as one through the **shared system** (same petal-"0" geometry, the
rounded-tile language, the Poppins logotype, the ink/cream palette), not by making the
parent colourful. Day Zero is the calm parent; the products are the colourful children.

## The wordmark & lockup

- Wordmark: **DAY ZERO** (caps, letter-spaced) in the nav/footer, set in the site UI
  font. As a **graphic** logotype (co-sign lockups, marketing art) it is set in
  **Poppins 700/800**, matching the product family; this is the logotype face, not the
  UI font.
- Lockup: mark on the left, wordmark to the right, mark optically centred to cap
  height, gap ≈ the mark's own width. Co-sign PNGs are the reference lockup.

## Colour

| Role | Hex |
|---|---|
| Ink (mark, text) | `#17110b` |
| Cream (light ground) | `#fbf7ef` |
| Espresso (dark ground) | `#14100b` |
| Product accents (expressive only) | NutriCare `#7C3AED` · RestroAI `#10B981` · QueueZero `#F97316` |

The umbrella is mono ink on warm neutrals. Product accents belong to the products;
the parent borrows them only in the expressive variant, sparingly.

## Voice

- **No em dashes, ever.** Comma, period, colon, parentheses, or rewrite.
- Confident, technical, specific; never apologetic or humble-theatre. Australian
  English. Full rules: brand-voice + no-AI-slop memories, and `CLAUDE.md`.
- Tagline: **From Day Zero to Day One.**

## Misuse

Don't: re-add drop shadows, gradients, or the stray red layer; stretch/skew/rotate;
put the "1" off-centre or full-height (it must be centred and short); use the colour
expressive variant as the everyday mark; recolour the mono mark to a single product's
accent; or place the mark on a busy photo without a solid or scrim backing.
