# Semakare Website UI Kit

High-fidelity recreation of the Semakare homepage based on the Figma export (`assets/reference-full.png`).

## Files
- `index.html` — full homepage, all sections composed in order
- `components.jsx` — shared primitives: `Button`, `Brand`, `TM`, `ArrowUR`, `WhatsAppGlyph`, `PillarIcon`, `FlowerMedal`, `Eyebrow`, and the `SK` asset paths object
- `Hero.jsx` — `Header`, `Hero`, `CompanionStrip` (top wash band)
- `HowItWorks.jsx` — `HowItWorks` (video tile) + `DayOne` (three feature cards with phone mockups)
- `WhyPillars.jsx` — `CommunityBand` (community grid + CTA) + `WhyPillars` (phone + 4 pillars)
- `FAQ.jsx` — `FAQ`, `FAQRow`, `Footer`, `FooterCol`, `StoreBadge`

## Sections covered (from Semakare Website.md, section A)
1. **Landing hero** — headline with blue "Simpler" outcome word, two CTAs, full-bleed cyclist image, soft curve hand-off
2. **Complimentary companion strip** — pale blue wash
3. **Your SemaKare™. Your Complimentary Companion.** — intro + video tile
4. **How SemaKare™ supports you from day one** — 3 feature cards with phone mockups
5. **You're not alone** — community grid CTA band
6. **Why SemaKare™?** — 4 pillars around a central phone
7. **FAQ** — expandable rows with FAQ portrait
8. **Footer** — logo + download badges + two link columns

## Sections NOT yet built
- **Patient Stories / KOL statement** — no specific copy provided in the MD beyond titles; the community band is the closest analogue. Ask for real quotes before building.
- **Tools / Affordability / Get Support / HCP** — separate pages listed in the MD but with only titles, no layouts. Build next as separate kits when we have content.

## Substitutions flagged
- **Font** — DM Sans (Google Fonts) as closest match for the brand sans
- **Icons** — Lucide-shaped glyphs, manually drawn inline, rendered inside a filled purple circle
- **Flower medal** — approximated radial gradient petals; the raster is provided in `assets/phone-diary.png` if you need the exact asset

## How to read the code
Each section is a single component that imports shared primitives from `window`. Style is inline via React style objects that reference CSS variables from `colors_and_type.css` — swap a variable at the root and the whole page reflects it.
