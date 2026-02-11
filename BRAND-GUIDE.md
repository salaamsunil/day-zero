# Day Zero Solutions - Brand Guide

## Tagline
**"From Day Zero to Day One."**

---

## Color Palette

### Primary Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Violet | `#7C3AED` | Primary brand, CTAs, accents |
| Violet Dark | `#5B21B6` | Hover states, emphasis |
| Violet Light | `#A78BFA` | Gradient text, highlights |

### Product Colors
| Product | Color | Hex | Dark | Light |
|---------|-------|-----|------|-------|
| NutriCare | Violet | `#7C3AED` | `#5B21B6` | `#A78BFA` |
| RestroStock | Mint | `#10B981` | `#059669` | `#34D399` |
| QueueZero | Orange | `#F97316` | `#EA580C` | `#FB923C` |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Dark | `#0F0F1A` | Hero bg, footer bg, headings |
| Dark Card | `#1A1A2E` | Card backgrounds on dark sections |
| Dark Surface | `#16162A` | Surface color on dark sections |
| Gray | `#94A3B8` | Body text, secondary text |
| Light | `#F8FAFC` | Section backgrounds |
| White | `#FFFFFF` | Card backgrounds, text on dark |

---

## Typography

**Font Family:** Inter (Google Fonts)
**Fallback Stack:** `-apple-system, BlinkMacSystemFont, sans-serif`

### Weight Usage
| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text, descriptions |
| 500 | Medium | Nav links, labels |
| 600 | SemiBold | Buttons, emphasis |
| 700 | Bold | Section tags, subheadings, badges |
| 800 | ExtraBold | Section titles, product names |
| 900 | Black | Hero headline, stat numbers |

### Size Scale
| Element | Size | Line Height |
|---------|------|-------------|
| Hero title | `clamp(2.5rem, 6vw, 4.5rem)` | 1.1 |
| Section title | `2.75rem` (2rem on mobile) | 1.15 |
| Product name | `2rem` | default |
| Body text | `1rem` - `1.15rem` | 1.7 - 1.8 |
| Section tag | `0.85rem` | default |
| Small text | `0.85rem` - `0.9rem` | default |

---

## Product Color Assignments

Each product has a distinct color identity used consistently across badges, icons, buttons, and accents:

- **NutriCare** = Violet (`#7C3AED`) — Primary brand, aged care, trust
- **RestroStock** = Mint (`#10B981`) — Growth, freshness, restaurant industry
- **QueueZero** = Orange (`#F97316`) — Energy, speed, food trucks

---

## Tone of Voice

### Personality
- **Direct** — Say what you mean. No corporate waffle.
- **Australian** — Speak like a local. Use natural Australian English (organise, not organize; colour, not color).
- **Empathetic** — We know the operators' pain points because we've been there.
- **Confident, not arrogant** — We believe in our products, but we listen first.
- **Practical** — Focus on outcomes, not features lists.

### Writing Guidelines
- Use active voice: "We build tools" not "Tools are built by us"
- Keep sentences short and punchy
- Avoid jargon unless it's industry-specific (e.g., IDDSI is fine for aged care audience)
- Use "you" and "your" — speak directly to the reader
- Headlines should be benefit-driven, not feature-driven
- OK to use contractions (we're, you'll, it's)
- Avoid exclamation marks in body copy (one per page max)

### Examples
| Instead of... | Say... |
|---------------|--------|
| "Our comprehensive solution enables seamless integration" | "It just works with what you already use" |
| "Leverage our innovative platform" | "Use a tool built for how you actually work" |
| "We are passionate about disrupting the industry" | "We build the tools we wish we'd had" |

---

## Logo Usage

### Current Logo
- File: `images/logo.png`
- Used in navbar (40px height) and footer (36px height)

### Usage Rules
- Always maintain clear space around the logo (minimum: half the logo height)
- Do not stretch, rotate, or distort the logo
- On dark backgrounds, use a white/light version if available
- Minimum size: 24px height for digital use
- The logo should link to the homepage

### File Formats Needed
- `logo.svg` — Scalable, for web and print
- `logo.png` — 512x512px, for general use
- `favicon.ico` — Multi-size favicon
- `favicon-16x16.png` — Browser tab
- `favicon-32x32.png` — Browser tab (retina)
- `apple-touch-icon.png` — 180x180px, iOS home screen
- `og-image.png` — 1200x630px, social sharing preview

---

## Design Tokens

### Spacing & Layout
- Max content width: `1200px`
- Section padding: `100px 0` (desktop)
- Container padding: `0 2rem` (1.25rem on small mobile)
- Card padding: `3rem` (2rem 1.5rem on small mobile)

### Border Radius
- Large (cards): `16px`
- Small (buttons, inputs): `10px`
- Pill (badges): `20px`
- Circle (icons): `50%`

### Shadows
- Default: `0 4px 24px rgba(124, 58, 237, 0.08)`
- Large (hover): `0 12px 48px rgba(124, 58, 237, 0.15)`

### Transitions
- Default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
