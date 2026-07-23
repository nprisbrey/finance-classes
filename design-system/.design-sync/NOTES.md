# design-sync notes — compound-money-talk-design

Repo-specific facts for future re-syncs. Read this first.

## Build & shape
- Package shape (no Storybook). Entry: `dist/index.js` (ESM, built by `pnpm build` / tsup). Types `dist/index.d.ts`, CSS `dist/index.css` (→ `cfg.cssEntry`). Global: `window.CMT`.
- `--node-modules ./node_modules` (the package's own; `react` resolves there).
- 18 components: 3 primitives (`Slide`, `Tag`, `Wordmark`) + 15 slides. `Table` and `MoneyMap` added 2026-07-16 (week 4). `Tranches` (securitization capital stack — proportional bands + cushion reference line + hatched loss fill; teaches both loss scenarios from one component) and `Timeline` (dated escalation bars, amber→red, a `peak` inflection) added 2026-07-22 (week 5 — the tranche pyramid and the Sep-2008 collapse). All authored previews live in `.design-sync/previews/`.

## Every component is a full 1280×720 slide
- That's why each full-slide component has an override `{ cardMode: "single", viewport: "1280x720", primaryStory: "<Export>" }`. `Tag` and `Wordmark` are small and intentionally have NO override (they show all exports in the default grid).
- **`primaryStory` is required, not optional**: single-mode picks the *alphabetically-first* export when `primaryStory` is unset (it showed `CustomTitle` before `Questions`, `TitleOnly` before `WithBlurb`, etc.). If you rename or reorder a preview's exports, update the matching `primaryStory` in `cfg.overrides`.

## Verification was manual, not machine-checked
- Playwright/chromium was **not** installed (user opted to verify via the connected browser instead). So `package-validate.mjs` ran with `--no-render-check` and `package-capture.mjs` (grading) was **not** run — there are no `.grade.json` files. All 14 cards were verified by eye in `.review.html` (served via `.ds-sync/storybook/http-serve.mjs`) and looked correct/styled.
- A future re-sync that wants the automated render-check + grading should install playwright + chromium first.
- **2026-07-16 re-sync (Table + MoneyMap):** same story — no playwright cache (`~/.cache/ms-playwright` empty), though `/usr/bin/google-chrome` is present. Ran the driver with `--no-render-check`; `package-capture.mjs` exited 2 (no chromium for screenshots). Verified the two new cards **live in the connected browser** instead: served `ds-bundle` via `http-serve.mjs`, opened the real compiled `Table.html`/`MoneyMap.html`, and confirmed with DOM measurements (`.cmt-table__scroll` not overflowing; MoneyMap = 5 flows / 4 to-nodes / 1 stop, no vertical overflow at 1280). Grades hand-written to `.design-sync/.cache/review/{Table,MoneyMap}.grade.json`. `report_validate` skipped (no `.render-check.json` receipt).
- **2026-07-22 re-sync (Tranches + Timeline):** same pattern — no playwright cache, `/usr/bin/google-chrome` present. Driver (`resync.mjs`) run with `--no-render-check`; diff was clean (16 unchanged, 2 added, 0 changed/removed, `deletePaths: []`, `upload.any: true`). `package-capture.mjs` exited 2 (no chromium). Verified the two new cards by rendering the **real compiled `ds-bundle` cards** headless — `google-chrome --headless=new --screenshot` on `file://…/ds-bundle/components/slides/{Tranches,Timeline}/*.html` at 1280×720 — both correct (Tranches: 80/15/5 stack, 20% cushion line, hatched loss fill, no text overlap; Timeline: escalating bars, Lehman as the red peak). Grades hand-written to `.design-sync/.cache/review/{Tranches,Timeline}.grade.json`. `report_validate` skipped. **Gotcha:** re-fetch the CURRENT remote `_ds_sync.json` into `.cache/remote-sync.json` before diffing — the cached copy was stale (14-component era, pre-Table/MoneyMap) and, left as-is, would have mis-flagged Table+MoneyMap as `added`.

## Known render warns (expected — not new on re-sync)
- `[FONT_REMOTE] "Inter"` — Inter loads via a Google Fonts `@import` in the base layer; it is not shipped with the bundle and is served at runtime. Expected.
- `[RENDER_SKIPPED]` — only because of `--no-render-check`; expected while playwright is absent.
- `[DOCS_UNMAPPED]` for all 18 — there are no per-component doc files; `.prompt.md` is synthesized from `.d.ts` + the authored previews. Fine.

## Re-sync risks (watch-list)
- **Viewport scaling is assumed, not locally verified.** The local `.review.html` does NOT scale iframes, so the 1280×720 slides appear clipped there — that's a dev-preview artifact. The real claude.ai/design pane is expected to scale by the `viewport="1280x720"` we set. **Confirm in the actual DS pane** (https://claude.ai/design/p/50bc3a07-8293-4435-aa7a-599e7888a94a); if cards clip instead of scaling, revisit the viewport/cardMode approach.
- `primaryStory` pins must stay in sync with the export names in `.design-sync/previews/*.tsx` (see above).
- Preview content for `MarketMoment` cites a real dated event (Moody's, May 16 2025) — that's intentional content, not a template timestamp. Per user preference, do not add fabricated dates to previews/templates.
- **Connected-browser window caps at ~1052 CSS px in this env.** When eyeballing a card at a narrow window, `.cmt-slide`'s `max-width:100%` shrinks the fixed 1280px slide (e.g. to ~1037px) and content looks tight at the edge — a viewport artifact, NOT overflow (measure `scrollWidth` vs `clientWidth` to confirm). The DS pane scales the whole 1280 card, so it renders correctly there. `Table`'s master-table story packs 7 columns; it fits 1280 with room, but that's the width-tightest slide — sanity-check it first if the token/spacing scale ever changes.
