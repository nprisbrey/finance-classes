# Compound Money Talk — how to build with it

A slide design system for a weekly finance class. **Every component is one full-bleed 16:9 slide** (`--cmt-slide-w` 1280 × `--cmt-slide-h` 720, `--cmt-pad` 64). You build a deck by **sequencing slide components, one per screen** — render each at native size; never wrap them in extra scaling, grids, or layout chrome.

## Setup — nothing to wrap
No provider, theme, or context is required. Importing the package binds the base layer (design tokens + the Inter webfont + root typography); `styles.css` is the whole style closure (it `@import`s `_ds_bundle.css`, which carries the tokens and every component's CSS). Components are configured **entirely through props — there is no utility-class system and you never put a `className` on them.** The `Slide` primitive is the canvas the others build on and applies `.cmt-root` itself.

## Slide vocabulary
- **Surfaces** via the `variant` prop (`Slide`, `Quote`): `light` (default content), `mist` (tinted), `ink` (dark — covers & dividers).
- **Chrome**: content slides auto-render a small brand mark top-right; pass `footerNote` (e.g. `"Week 1 · Credit"`) for the bottom-right wayfinding label. `Cover`, `ModuleDivider`, `Discussion`, and `Sources` carry the full wordmark instead, so they suppress the corner mark.
- **Tag** tones: `accent` | `neutral` | `pos` | `neg`. **Wordmark** `variant` `full` | `mark`, `tone` `ink` | `light`.

## Styling idiom — `var(--cmt-*)` tokens
For the rare bit of your own glue, use the tokens (don't invent values or hex):
- **Color**: `--cmt-ink` (text / dark surface), `--cmt-accent` (indigo brand), `--cmt-mist` (tinted surface), `--cmt-surface` (white), `--cmt-hairline` (borders), `--cmt-muted` / `--cmt-muted-2` (secondary text), `--cmt-pos` / `--cmt-neg` (gains / losses).
- **Type**: `--cmt-fs-display | -h1 | -h2 | -h3 | -body | -small | -caption`; weights `--cmt-fw-medium | -semibold | -bold | -extra`.
- **Spacing**: `--cmt-s1`…`--cmt-s8` (4 → 64px). **Radius**: `--cmt-r-sm | -md | -lg`.
- **Helper classes**: `.cmt-eyebrow` (uppercase accent label), `.cmt-num` (tabular figures).

## Where the truth lives
Read `styles.css` (and the `_ds_bundle.css` it imports) for the token definitions, and each component's `<Name>.d.ts` (prop contract) + `<Name>.prompt.md` (usage) before composing.

## Idiomatic deck
```tsx
import { Cover, Content, StatCallout, Sources } from "compound-money-talk-design";

// 1 — title slide (ink, full wordmark)
<Cover week="Week 1" title="Credit" subtitle="How borrowing works, and how to build a file that works for you." />

// 2 — a teaching slide
<Content
  eyebrow="M2 · Interest & APR"
  title="The minimum-payment trap"
  lead="A $1,500 student-card balance at a 24% APR, paying only the minimum."
  points={[
    { text: "First payment ≈ $45 — ~$30 is interest, only ~$15 touches principal." },
    { text: "Pay a fixed $100/month instead → gone in ~18 months, ~$300 interest." },
  ]}
  footerNote="Week 1 · Credit"
/>

// 3 — a big-number callout (1–4 stats fill the slide as tiles)
<StatCallout
  eyebrow="Why APR matters"
  title="A $15 fee per $100 isn't small"
  stats={[{ value: "391%", label: "payday loan APR", source: "CFPB" }]}
/>
```
