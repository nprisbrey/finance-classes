# Company Valuation

*How a stock's price is actually built, how to judge a business before you buy it, and how to manage what you own toward a goal.*

## Opener (10 min)

Standard round-table — go around the group:
- Anything new you did with money this week (opened an account, paid something off, a purchase decision)?
- Something interesting you learned about money or finance?
- A new investment you're looking at or like right now?

Valuation-flavored nudge for this week:
- Have you bought or sold a stock recently — and what was the actual *reason* (a number, a story, a price move, a tip)?
- Is there a company whose earnings or stock move you've been watching? What do you think is driving it?
- If you own an index fund, do you know what your single largest holding is right now? (Foreshadows the market moment.)

## Lesson (40 min)

**Pick your path.** Like the Credit week, the lesson is **8 self-contained modules**. The **default is to run them in order** — they build from "what moves a price" → "how to value a business" → "how to manage a portfolio" — but the group can vote at the start to skip, reorder, or zoom in. The times below **sum past 40 minutes on purpose**; choose.

1. **M1 · What actually moves a stock price** (~6 min)
2. **M2 · Reading the business — statements & earnings** (~7 min)
3. **M3 · Valuation I — multiples (relative value)** (~7 min)
4. **M4 · Valuation II — DCF & forecasting (intrinsic value)** (~7 min)
5. **M5 · What makes a "successful" stock — quality & the buy checklist** (~6 min) — *most actionable*
6. **M6 · How hedge funds & quants play it** (~5 min) — *survey / optional*
7. **M7 · Technical analysis & timing** (~6 min) — *advanced / optional*
8. **M8 · Building & managing the portfolio by goal + when to sell** (~7 min)

**Two suggested routes — put it to a vote up front.** Both share the same bookends — **M1** (why prices move) and **M8** (build & manage the portfolio) — and differ only in the middle:
- **Route A · "How to think like an investor"** — **M1 → M5 → M6 → M7 → M8.** Concept and strategy: what makes a great business, what hedge funds/quants actually do, how timing works, and how to run a portfolio. Lighter on math (~30 min).
- **Route B · "Value a company with me"** — **M1 → M2 → M3 → M4 → M8.** Hands-on mechanics: put **NVIDIA's latest earnings press release (and 10-Q)** on screen next to the slides and compute the statements, multiples, and a DCF *from the actual filing*, together. Runs slower than the listed times — plan to go deep on M2–M4 and carry M8 to next week if needed.

> Every figure below was researched against primary sources and independently fact-checked (June 2026). Live market multiples drift daily — **re-pull the comp tables the morning of class.** Running examples use four household names: **Nvidia (NVDA), Apple (AAPL), Coca-Cola (KO), Ford (F)**.

---

### M1 · What actually moves a stock price  ·  ~6 min

#### Price vs. value
- **Price** is what someone will pay *right now* — set by mood, momentum, liquidity, and flows. **Value** is the present value of the cash the business will generate — driven by growth, margins, reinvestment, and risk. They're tied by a long, loose leash, not a rigid rod.
- **Mr. Market** (Benjamin Graham, *The Intelligent Investor*, 1949, Ch. 8): imagine a manic-depressive business partner who quotes you a buy/sell price every day — euphoric some days, despairing others. His mood is a *service* you can transact against when his price diverges from value, not a *guide* to what your stake is worth. ([Mr. Market](https://en.wikipedia.org/wiki/Mr._Market)) Buffett lays out the metaphor at length in his 1987 letter; the "Chapters 8 and 20 have been the bedrock of my investing activities" line is from his preface to the revised *Intelligent Investor*, not the letter. ([Berkshire 1987 letter](https://www.berkshirehathaway.com/letters/1987.html))
- **Advanced framing:** "the market is wrong" is only *actionable* if you can name **which input** the price implies — growth, margin, discount rate, duration — and say why you disagree. Over short horizons price tracks the *change in narrative/expectations*; over long horizons it converges to per-share economics.

#### The master equation — total shareholder return (TSR)
- **Long-run TSR ≈ dividend yield + EPS growth ± change in the P/E multiple (re-rating).** EPS growth is the *durable engine* (and splits into net-income growth + change in share count); multiple change is *volatile and mean-reverting* — it can add or subtract for years but can't compound forever. ([Mauboussin & Callahan, *Total Shareholder Return*, Morgan Stanley Counterpoint Global, Oct 25 2023](https://www.morganstanley.com/im/publication/insights/articles/article_totalshareholderreturns.pdf))
    - **"Re-rating" = a change in the *multiple* the market will pay per dollar of earnings — not a change in the earnings themselves.** If a stock's P/E climbs from 15× to 20×, investors now hand over $20 for the same $1 of annual profit: the stock *re-rated up* (a.k.a. multiple expansion). The reverse — paying *less* per dollar of profit — is a *de-rating* (multiple contraction). Re-rating reflects shifting expectations and sentiment, not what the business earned this year.
- **Benchmark decomposition — S&P 500, 2012–2021: TSR 16.6%/yr**, built from:
    - EPS growth **+7.4%** (net-income growth +6.7%, share-count reduction +0.7%)
    - P/E multiple expansion **+6.9%** → price appreciation +14.3%
    - Dividends **+2.3%** (yield +2.0%, reinvestment +0.3%) — sums to **16.6%**. *(same source)*
- **Teaching point:** nearly half that decade's return was *re-rating* — paying a higher multiple — which is not repeatable indefinitely. Strip out the multiple change to see a business's true compounding rate.

#### Expectations vs. reality — why a beat can still tank a stock
- **The move is vs. consensus, not vs. last year.** The price already embeds the consensus forecast (plus an unofficial "whisper number" usually above it). The stock reacts to the *surprise* and to *forward guidance* — not the headline year-over-year growth.
- **Three ways to beat and still fall:** (a) the beat was already priced in (stock ran up into the print); (b) guidance disappointed vs. the whisper; (c) quality-of-beat issues (mix, margins, one-offs, a soft segment).
- **Live example — NVDA, Q1 FY2027 (reported May 20, 2026):** record revenue **$81.6B (+85% YoY, +20% QoQ)**, a beat on revenue, EPS, *and* the outlook (guided ~**$91B ±2%** next quarter) — yet the stock **fell ~2%** the next session. It was the **4th consecutive** beat-and-fall, because shares had run ~20% into the print near an all-time high. ([Motley Fool, May 22 2026](https://www.fool.com/investing/2026/05/22/nvidia-just-crushed-earnings-estimates-but-the-sto/); [CNBC, May 21 2026](https://www.cnbc.com/2026/05/21/here-we-go-again-with-nvidia-falling-on-earnings-what-the-sellers-are-missing.html))
- **Analyst estimate *revisions* are the real fuel.** What moves price over time is the *change* in the consensus estimate curve. Rising forward estimates power sustained outperformance; a beat that triggers *downward* forward revisions sells off. (This is the basis of "earnings-revision momentum.")

#### The discount-rate channel — rates and multiples
- A stock's value = PV of future cash flows discounted at **r = risk-free rate + equity risk premium (ERP)** — the return investors demand to hold it. Higher r → lower present value → lower fair multiple.
- **The Gordon shorthand, in plain English — `P/E ≈ payout ÷ (r − g)`:** the multiple you'll pay *per dollar of earnings* equals the slice of earnings handed back to you, divided by the gap between the return you *demand* and the growth you *expect*. Term by term:
    - **payout** — the fraction of profit returned to shareholders (dividends + buybacks). More cash back → worth more.
    - **r** — your required return (risk-free rate + a premium for risk). Demand *more* compensation → you'll pay *less* today → lower multiple.
    - **g** — how fast that profit grows, forever. Faster growth → the cash stream is bigger later → worth more today → higher multiple.
    - **why (r − g) is on the bottom** — it's the "net" rate after growth offsets part of your required return. As g creeps toward r the denominator shrinks and the value balloons — which is exactly why fast-growers are so sensitive to interest-rate moves (and why the formula breaks when g ≥ r; more in M4).
    - **one-line example:** $2 of payout, r = 8%, g = 4% → value = $2 ÷ (0.08 − 0.04) = **$50**. Nudge r up to 9% and it's $2 ÷ 0.05 = **$40 — a 20% drop on the *same* business**, purely because the discount rate rose. *That* is the rate channel in one number. *(computed)*
- **Current inputs:** 10-yr Treasury **4.40%** (as of Jun 25 2026, [Fed H.15](https://www.federalreserve.gov/releases/h15/) / [FRED DGS10](https://fred.stlouisfed.org/series/DGS10)); Damodaran implied **ERP 4.23%** (as of Jan 1 2026, ~the long-run average — risk priced roughly "normally") ([Damodaran](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html)); **S&P 500 forward P/E 20.1**, above its 5-yr (19.9) and 10-yr (19.0) averages (trailing 27–31×) ([FactSet Earnings Insight](https://insight.factset.com/sp-500-earnings-season-update-may-8-2026)).
- **Why growth gets hit hardest:** "long-duration" stocks hold most of their value in far-future cash flows, which a higher discount rate shrinks more. Illustrative Gordon math: a 1-pt rise in r (8%→9%) takes a *value* name (g=4%) from 25× to 20× (**−20%**) but a *growth* name (g=6%) from 50× to 33× (**−33%**). *(illustrative)*

#### Supply, demand & flows (mechanical and behavioral)
- **Buybacks → mechanical EPS lift:** fewer shares means higher EPS even with flat net income (EPS = net income ÷ shares).
- **The "index effect" — what it is:** when a stock is *added* to a big index like the S&P 500, every index fund that tracks that benchmark has to buy it to keep matching the index — a wave of forced, price-insensitive buying that historically *popped* the new member's price (and the reverse on deletions). That predictable jump is the "index effect."
    - **It has largely disappeared:** the median excess return of S&P 500 *additions* fell from **+8.32% (1995–1999)** to **−0.04% (2011–2021)** — because so much money is now passive, and traders front-run the well-telegraphed changes and arbitrage the pop away before it happens. ([Greenwood & Sammon, HBS WP 23-025](https://www.hbs.edu/ris/Publication%20Files/23-025_563e45c6-df92-4d9c-ae05-608d4d0acab1.pdf); [S&P DJI](https://www.spglobal.com/spdji/en/documents/research/research-what-happened-to-the-index-effect.pdf))
- **Passive flows & price-insensitive demand:** as money shifts active → passive, more buying/selling is mechanical (valuation-indifferent), which can amplify moves. ([BIS](https://www.bis.org/publ/qtrpdf/r_qt1803j.pdf); [Fed FEDS 2018-060](https://www.federalreserve.gov/econres/feds/files/2018060pap.pdf))
- **Positioning / sentiment / rotation:** short-term, *who has to trade* can dominate fundamentals — and a lot of trading isn't a view on the business at all:
    - **Forced de-grossing** — a leveraged fund that's losing money or hits a risk limit must quickly cut *both* its longs and its shorts to shrink its exposure ("gross" = longs + shorts), dumping good and bad names alike regardless of fundamentals.
    - **Dealer hedging** — options market-makers who've sold options must buy or sell the underlying stock as it moves to stay hedged; when many options pile up at similar prices, that mechanical flow can amplify (or "pin") a move.
    - **Quarter-end rebalancing** — big pensions, target-date, and model portfolios mechanically trim what rallied and add to what lagged to hit target weights on a calendar date, creating predictable flows with no news behind them.
    - Add **crowd positioning** and **sector rotation** (capital piling into, say, AI/semis and out of staples re-rates whole groups at once) and you get large short-term moves untethered from any single company's earnings.

#### Worked example — Apple's ~10-year return, decomposed (FY2016 → Jun 26 2026, ~9.8 yrs)
- Split-adjusted EPS **$2.08 → $8.25** (≈3.97×, **+15.2%/yr**); trailing P/E **13.6 → 34.4** (≈2.5×, **+10.0%/yr**); dividends **~+1.2%/yr**. ([SEC XBRL](https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/EarningsPerShareDiluted.json); [stockanalysis](https://stockanalysis.com/stocks/aapl/statistics/))
- **Total return ≈ +28%/yr**, of which ~**15 pts** came from earnings growth, ~**10 pts** from **re-rating** — the P/E roughly *tripling* from 13.6× to 34.4×, i.e., investors choosing to pay ~2.5× as much for each dollar of Apple's earnings (a one-time shift in sentiment, not repeatable) — and ~**1 pt** from dividends. *(computed)*
- **Split the EPS engine further (FY2016→FY2025):** net income **$45.7B → $112.0B** (+10.5%/yr) and the diluted share count **22.0B → 15.0B** (−32%, +4.3%/yr of "free" EPS). Apple retired ~7B shares and spent **>$800B** on buybacks over FY2013–FY2025 — the largest repurchase program in corporate history. ([SEC XBRL](https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/NetIncomeLoss.json))
- **Punchline:** roughly a third of Apple's *return* and a third of its *EPS growth* came from things other than the core business growing — re-rating and buybacks. Know which engine you're betting on.

---

### M2 · Reading the business — statements & earnings  ·  ~7 min

> **Route B run-of-show** — *teacher note: run NVIDIA's filing and the slides side by side.*
> **Setup:** open NVIDIA's **Q1 FY2027 earnings press release** (the 8-K exhibit — statements + segments + the GAAP↔non-GAAP reconciliation) and pull a **live NVDA quote** (price + shares outstanding); keep the **10-Q** open as backup.
> 1. **M2 — walk the four statements (this module).** In the press release: **income statement** → revenue, gross/operating/net margins, EPS. → **GAAP→non-GAAP reconciliation table** → the SBC + equity-gain bridge (why GAAP EPS *exceeds* non-GAAP here). → **cash-flow statement** → OCF − capex = FCF, and the "net income > OCF" tell. → **balance sheet** → receivables & inventory → the DSO check.
> 2. **M3 — combine the filing with the price.** Keep the filing's fundamentals up, add the **live price** → market cap, EV, trailing & forward P/E, P/S, PEG, yields (name which inputs came from the filing vs. the quote).
> 3. **M4 — turn cash flow into a value.** Take the filing's **FCF** → build the CAPM discount rate → terminal value → the reverse-DCF "what growth is priced in?"
> 4. **M8 (if time) — from valuing it to owning it:** position sizing, account/tax treatment, and when to sell.

#### The three statements & how they link
- **First, the rulebook — GAAP (Generally Accepted Accounting Principles):** the standardized U.S. accounting rules every public company must follow in its official, audited SEC filings. GAAP is what lets you compare one company's "revenue" or "net income" to another's. The three core statements below are all reported under it — and later, "**non-GAAP**" just means a company's *own* adjusted version of these numbers.
- **Income statement** (accrual-based) ranks profit by layer: revenue → gross profit (− COGS) → operating income (− opex) → net income (− interest, taxes, one-offs). Each margin answers a different question: gross = pricing power/unit economics; operating = core efficiency; net = what's left after capital structure and taxes.
- **Balance sheet** — a point-in-time snapshot: **Assets = Liabilities + Equity**. Watch cash, total debt, and **working capital** (current assets − current liabilities), especially receivables and inventory.
- **Cash flow statement** reconciles accrual profit to actual cash across three buckets: **operating cash flow (OCF — the cash the core business actually throws off), investing** (capex, acquisitions), and **financing** (debt, dividends, buybacks). Hardest to fake — cash is cash.
- **The linkage:** net income flows into the top of OCF and into retained earnings; OCF adds back non-cash items (D&A, SBC) and adjusts for working-capital swings; ending cash becomes the next balance sheet's cash line. That internal consistency is exactly what red-flag analysis exploits.

#### Free cash flow (FCF)
- **FCF = operating cash flow − capital expenditures.** It's a **non-GAAP** measure (no single GAAP definition) — always read the footnote. It's *owner's cash*: what funds dividends, buybacks, debt paydown, and reinvestment without issuing stock or debt.
- **Capital intensity shows up in the OCF→FCF gap:** NVDA (fabless) converts almost all OCF to FCF; Ford (heavy manufacturing + a finance arm) can post *negative* automotive FCF even with positive net income.

#### Earnings season mechanics
- The reaction is **result vs. consensus**, not the absolute number. Consensus = mean/median of sell-side estimates for revenue and (usually non-GAAP) EPS.
- **Forward guidance usually moves the stock more than the reported quarter.** A trailing-quarter beat with soft guidance often sells off.
- The **conference call** (prepared remarks + Q&A) is where guidance is contextualized and demand signals (backlog, bookings, segment color) are given — often more price-relevant than the press release.
- **Whisper number** = the unofficial "real" expectation among traders, usually above published consensus for hot names. Beat consensus but miss the whisper → can still drop.

#### GAAP vs. non-GAAP ("adjusted")
- Non-GAAP figures exclude items management deems non-core. Common add-backs: **stock-based compensation (SBC)**, **amortization of acquired intangibles**, **restructuring**, **acquisition costs**, **mark-to-market gains/losses**.
- **SEC Regulation G + Item 10(e) (2003)** require any non-GAAP disclosure to show the **most comparable GAAP measure** and a **reconciliation**, and not be misleading. ([SEC](https://www.sec.gov/rules-regulations/2003/03/conditions-use-non-gaap-financial-measures))
- **Skeptic's view — SBC is a real cost** (it dilutes shareholders). The standard is tightening: **NVIDIA stopped adding back SBC** starting Q1 FY2027 — its non-GAAP measures "no longer exclude stock-based compensation expense," effectively conceding SBC ($1.93B that quarter) is an operating cost.
- **Adjustment quality ladder:** D&A / intangible amortization (genuinely non-cash) → restructuring (only if truly non-recurring) → SBC (real, recurring, most-abused) → "one-time" charges that recur every year (red flag).

#### Quality-of-earnings red flags
- **OCF/FCF diverging from net income** — rising NI but flat OCF suggests accrual-driven (not cash) earnings.
- **Receivables or inventory growing faster than revenue** — possible channel-stuffing / weak collections / demand air-pocket — *unless* it's a deliberate pre-build (context matters).
- **Recurring "one-time" charges** — items that appear every quarter are operating costs in disguise. (Watch one-time *benefits* too.)
- **Aggressive revenue recognition** — cross-check revenue vs. deferred revenue and receivables.
- **EPS propped up by buybacks** — compare **EPS growth vs. net-income growth**; a persistent gap = buyback-driven, not operations-driven.

#### Worked example — reading NVIDIA's Q1 FY2027 report line by line (quarter ended Apr 26 2026; reported May 20 2026)
*This is the spine of **Route B**. Put NVIDIA's **earnings press release** on screen next to the slides — the 8-K exhibit carries the three statements, the segment breakdown, **and** the GAAP→non-GAAP reconciliation table (a 10-Q is GAAP-only and won't show that bridge); keep the **10-Q** handy for the MD&A and notes. Then pull each raw number off the statement it lives on and compute the metric together — the same figures come back in M3 and M4.* ([NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027); [CNBC](https://www.cnbc.com/2026/05/20/nvidia-nvda-earnings-report-q1-2027.html))
- **Raw inputs, grouped by where they sit in the filing** (so the group can find each one live):
    - *Income statement:* revenue **$81.615B**; GAAP gross margin **74.9%**; GAAP operating income **$53.536B**; GAAP net income **$58.321B**; diluted shares **24.391B**; the non-operating **"gain on equity securities" $15.936B**.
    - *GAAP→non-GAAP reconciliation table (in the press release):* non-GAAP net income **$45.548B**; SBC add-back **$1.928B**.
    - *Cash-flow statement:* operating cash flow **$50.344B**; capex **$1.757B**.
    - *Balance sheet:* accounts receivable **$40.71B** (vs. $22.13B a year ago); inventory **$25.80B** (vs. $11.33B).
- **1 · Margins = each profit layer ÷ revenue.** Gross profit = 74.9% × $81.615B = **$61.1B** (so COGS ≈ $20.5B); operating margin = $53.536B ÷ $81.615B = **65.6%**; net margin = $58.321B ÷ $81.615B = **71.5%**.
- **2 · EPS = net income ÷ diluted shares.** GAAP = $58.321B ÷ 24.391B = **$2.39**; non-GAAP = $45.548B ÷ 24.391B = **$1.87**.
- **3 · The teaching twist — GAAP EPS $2.39 > non-GAAP $1.87, which is backwards** (non-GAAP is *usually* the higher number). GAAP is *flattered* by the **$15.9B non-cash "gain on equity securities"** (NVDA's stakes in AI firms, marked up) that non-GAAP removes. Reconcile: $58.3B GAAP − $15.9B gain ≈ $42.4B, then non-GAAP *adds back* SBC $1.9B and a few smaller items (net of tax) → **$45.5B**. *Read what's in — and out of — each number.* (Note NVDA **stopped** adding back SBC this quarter, conceding it's a real cost.)
- **4 · Free cash flow = OCF − capex** = $50.344B − $1.757B = **$48.554B**; FCF margin = $48.554B ÷ $81.615B = **59.5%** (fabless → almost all OCF becomes FCF). **The tell:** net income **$58.3B > OCF $50.3B** — unusual, and only because the $15.9B gain sits in net income but is *non-cash*, so it's stripped out to reach OCF. **Cash flow is the truth-teller.**
- **5 · Red-flag check with DSO** (days sales outstanding = how fast you collect) **= (receivables ÷ revenue) × days in quarter (~91).** This quarter: ($40.71B ÷ $81.615B) × 91 ≈ **45 days**; a year ago: ($22.13B ÷ ~$44.1B) × 91 ≈ **46 days.** Receivables grew +84% ≈ revenue +85%, so **DSO is flat → collections are healthy** (no channel-stuffing signal). **Inventory is the yellow flag:** +128% vs. revenue +85% (days-inventory ≈ $25.8B ÷ ~$20.5B COGS × 91 ≈ 115 days) — most plausibly a Blackwell/Rubin **pre-build** ahead of the guided ramp. *Context decides whether a flag is real.*
- **6 · The beat & the reaction:** revenue $81.6B beat the ~$78.9B consensus; non-GAAP EPS $1.87 beat ~$1.77 (~+5.6%); Data Center **$75.2B (+92%)**. Yet the stock **fell ~2%** — the 4th straight beat-and-fall, "a well-telegraphed garden-variety beat." The number that actually mattered was next quarter's **$91B ±2% guide.**

#### Worked example — Salesforce (CRM), the clean SBC case (Q1 FY2027, ended Apr 30 2026)
- GAAP operating income **$2,347M (21.1% margin)** → non-GAAP **$3,874M (34.8%)**. Bridge: **SBC +$870M**, amortization of intangibles +$561M, restructuring/acq ~$96M. ([Salesforce IR](https://s205.q4cdn.com/626266368/files/doc_financials/2027/q1/CRM-Q1-FY27-Earnings-Press-Release.pdf))
- **SBC alone ≈ 7.8% of revenue.** Strip out **SBC only** and operating income rises ~**+37%** ($2,347M → ~$3,217M); strip out **all** the adjustments and it's ~**+65%** ($2,347M → $3,874M). The skeptic's point: how much of "adjusted" profit is just *not counting* a real, recurring cost. *(computed)*

#### Two quick contrasts
- **Ford (Q1 2026)** — net income $2.5B **included a $1.3B one-time tariff benefit**, and OCF was +$1.3B while *adjusted FCF was −$1.9B*: positive net income, negative free cash flow. ([Ford 8-K](https://www.sec.gov/Archives/edgar/data/0000037996/000003799626000084/exhibit99toapril292026fo.htm)) *Strip the one-timer; watch the cash.*
- **Apple (Q2 FY2026)** — diluted EPS **+22%** outran net-income growth (~+19%); the gap is the buyback shrinking the share count. Apple reports **GAAP only** (no headline non-GAAP) — a clean counterexample to heavy adjusting. ([Apple Newsroom](https://www.apple.com/newsroom/2026/04/apple-reports-second-quarter-results/))

---

### M3 · Valuation I — multiples (relative value)  ·  ~7 min

#### The multiples — what each is for, and its weakness
- **Trailing P/E** = price ÷ TTM EPS. *Use:* stable earners. *Weak:* backward-looking; meaningless when earnings are negative/depressed. ([Investopedia](https://www.investopedia.com/terms/p/price-earningsratio.asp))
- **Forward P/E** = price ÷ next-12-mo consensus EPS. *Use:* turnarounds, growth, cyclicals. *Weak:* only as good as the estimate (analysts skew optimistic).
- **Earnings yield (E/P)** = inverse of P/E. *Use:* compare to bond yields. **PEG** = P/E ÷ growth %. *Use:* normalize P/E for growth (<1 often "cheap for growth"). *Weak:* hostage to the growth number you plug; ignores risk and durability.
- **P/S** and **EV/Sales** — *Use:* unprofitable/early or margin-depressed firms (EV/Sales is leverage-neutral). *Weak:* ignore profitability.
- **EV/EBITDA** and **EV/EBIT** — *Use:* capital-intensive, levered, cyclical, M&A (neutral to leverage). *Weak:* EBITDA ignores capex and isn't cash flow; EV/EBIT charges for depreciation.
- **P/B** — *Use:* banks/insurers/asset-heavy (book ≈ economic value); pairs with ROE. *Weak:* useless where value is intangible.
- **P/FCF** — *Use:* cash-generative mature firms (harder to game than earnings). *Weak:* FCF is lumpy.
- **Dividend yield** — *Use:* income names. *Weak:* a *high* yield is often distress or a payout about to be cut; ignores buybacks (total shareholder yield is fuller).

#### Enterprise value & why EV multiples beat market-cap multiples
- **EV = market cap + total debt − cash** (+ preferred, minority interest). It's the **takeover price** — what you'd pay for the whole operating business, net of the cash you'd inherit. ([Investopedia](https://www.investopedia.com/terms/e/enterprisevalue.asp))
- P/E and P/S are *equity-only* and ignore the balance sheet. Two firms with identical operations but different debt show different P/Es. EV multiples put levered and unlevered firms on the same footing.
- **The four anchors make it vivid** (as of Jun 26–28 2026, [stockanalysis](https://stockanalysis.com/stocks/nvda/statistics/)):
    - **NVDA — net cash $40B** → EV $4.62T **<** market cap $4.66T
    - **AAPL — net cash $62B** → EV $4.11T **<** market cap $4.17T
    - **KO — net debt $31B** → EV $386B **>** market cap $356B
    - **F — heavy net debt $138B** → EV $194B = **3.4× market cap $56B** (most of the debt is Ford Credit financing)
- *Worked EV — Apple (SEC 10-Q, Mar 28 2026):* liquid assets $146.6B, total debt $84.7B → EV = $4,170B + $84.7B − $146.6B = **$4.11T**, net-cash $62B. Note the judgment call: counting only cash + short-term investments swings EV ~2%. **EV is an estimate — define your cash/debt treatment and apply it consistently.**

#### Which multiple fits which business
- Unprofitable growth → **P/S or EV/Sales**. Capital-intensive/cyclical/levered → **EV/EBITDA or EV/EBIT**. Banks/asset-heavy → **P/B + ROE**. Mature/dividend → **P/E + yield**.
- **Cross-sector P/E comparisons mislead** because P/E embeds growth, ROIC, risk, *and* leverage. Damodaran's Jan 2026 industry aggregates show the dispersion: trailing P/E Semiconductors ~100×, Computers/Peripherals ~81×, Soft Beverages ~48×, total US market ~58×. ([Damodaran P/E data](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/pedata.html)) *(these are aggregate ratios incl. tiny/loss-making firms — use directionally, not as precise comps.)*

#### Re-rating, and the two traps
- **Price change ≈ earnings growth + multiple change + dividends.** Separate "did the E grow?" from "did the market pay more *per dollar* of E?" Read a multiple two ways: **vs. the company's own history** and **vs. peers.**
- **Value trap — a low P/E isn't always cheap (Ford).** Ford screens cheap (P/S 0.30, forward P/E 9.6, yield 4.25%) — but **trailing P/E is N/M because TTM earnings are negative** (FY2025 net loss $8.2B, driven by a ~$19.5B EV-strategy special-items charge). A low headline multiple on *peak* or *charge-distorted* earnings is a mirage. And consolidated **EV/EBITDA 25.6×** is meaningless here because EV includes ~$160B of mostly *Ford Credit* debt — value the finance arm separately. ([Ford 8-K](https://www.sec.gov/Archives/edgar/data/0000037996/000003799626000084/exhibit99toapril292026fo.htm))
- **A high P/E isn't always expensive (NVDA).** Trailing P/E ~29× but **forward P/E ~19× — below the S&P 500's 20×** — and PEG 0.43, because earnings are still ~doubling. TTM EPS ≈ $6.53; $192.53 ÷ $6.53 = 29.5× exactly, and the forward multiple collapses as E races up. The risk isn't the multiple; it's *growth durability.*
- **PEG bridges them** — Ford forward P/E 9.6 / PEG 0.46, NVDA 19.4 / PEG 0.43 — but PEG ignores *risk and durability*: Ford's "growth" is a rebound off a loss (low quality); NVDA's is secular but capex-dependent. Same PEG, very different risk.

#### Worked example — comp table (as of Jun 26–28 2026; re-pull morning-of)
| Metric | NVDA | AAPL | KO | F | **S&P 500** |
|---|---|---|---|---|---|
| Price | $192.53 | $283.78 | $82.63 | $14.13 | — |
| Market cap | $4.66T | $4.17T | $355.5B | $56.3B | — |
| Enterprise value | $4.62T | $4.11T | $386.3B | $194.0B | — |
| **Trailing P/E** | 29.49 | 34.40 | 25.98 | **N/M (neg.)** | 27.3 |
| **Forward P/E** | 19.37 | 31.15 | 25.01 | 9.58 | 20.1 |
| EV/EBITDA | 27.93 | 25.67 | 23.11 | 25.61* | — |
| P/S | 18.40 | 9.23 | 7.21 | 0.30 | — |
| **Dividend yield** | 0.52% | 0.37% | 2.57% | 4.25% | — |
| PEG | 0.43 | 2.71 | 3.19 | 0.46 | — |
| P/B | 23.86 | 39.09 | 10.57 | 1.50 | — |

*Sources: [stockanalysis.com](https://stockanalysis.com/stocks/nvda/statistics/) (anchors); [FactSet](https://insight.factset.com/sp-500-earnings-season-update-may-8-2026) (S&P 500). \*Ford EV/EBITDA distorted by Ford Credit debt.*

- **Why they differ (one line each):** **NVDA** — high P/S (margins so high each sales dollar converts to huge profit) but forward P/E ~market (E is racing up): *growth + margins + ROIC.* **AAPL** — highest P/E, modest P/S, PEG 2.71: you pay up for *quality/durability*, and returns cash via buybacks (tiny yield). **KO** — mid P/E, high yield: a mature staple where *dividend durability* carries the thesis. **F** — every multiple needs an asterisk: cyclical, thin-margin, loss-distorted, finance-arm debt. **The multiple is the question, not the answer — it tells you what the market expects; you judge whether that expectation is right.**

#### Worked example — building NVDA's multiples from scratch (as of Jun 26–28 2026)
*Every ratio in the table above comes from a handful of raw numbers — and they come from two places, which is worth pointing out live:*
- ***From the filing** (the same M2 statements): TTM EPS **$6.53**, TTM revenue **~$253B**, TTM FCF **~$119B**, annual dividend **~$1.00**, cash & equivalents **$53.2B**, total debt **$12.8B**.*
- ***From a live quote** (pull it the morning of class): price **$192.53** and shares outstanding **~24.2B** — so every ratio with a price in it moves daily, while the filing inputs are fixed until the next report.*
- **Market cap** = price × shares = $192.53 × 24.2B = **$4.66T.**
- **Enterprise value (EV)** = market cap + debt − cash = $4,660B + $12.8B − $53.2B = **$4.62T.** NVDA holds ~$40B more cash than debt (**net cash**), so **EV < market cap.** *(Count short-term investments as cash too and net cash is ~$68B, EV ≈ $4.59T — the same "which cash counts?" judgment call as Apple above.)*
- **Trailing P/E** = price ÷ TTM EPS = $192.53 ÷ $6.53 = **29.5×.**
- **Forward P/E** = price ÷ *next-year* EPS. At **19.4×**, the market's implied forward EPS = $192.53 ÷ 19.37 = **~$9.94** — it expects EPS to climb from $6.53 to ~$9.94 (**~+52%**) in a year. The forward multiple is low *because* E is expected to race up.
- **Earnings yield** = 1 ÷ P/E = 1 ÷ 29.5 = **3.4%** (the flip of P/E — compare it to the 10-yr Treasury's 4.40%).
- **P/S** = market cap ÷ TTM revenue = $4,660B ÷ $253B = **18.4×** (sky-high because ~75% gross margins turn each sales dollar into huge profit). **EV/Sales** = $4,620B ÷ $253B = **18.2×** — nearly identical, because NVDA has almost no net debt.
- **PEG** = forward P/E ÷ growth% = 19.37 ÷ 45 = **0.43** → rearranged, the price bakes in **~45%** forward EPS growth.
- **P/FCF** = market cap ÷ TTM FCF = $4,660B ÷ $119B = **~39×** (TTM FCF runs above FY2026's $97B because Q1 FY27 alone was $48.6B).
- **Dividend yield** = annual dividend ÷ price = $1.00 ÷ $192.53 = **0.52%** (NVDA returns cash mostly via *buybacks*, not dividends).
- **EV/EBITDA** = EV ÷ EBITDA, where **EBITDA = operating income + depreciation & amortization.** NVDA is fabless (little D&A), so EBITDA ≈ operating income → the reported **~27.9×** on TTM.

---

### M4 · Valuation II — DCF & forecasting (intrinsic value)  ·  ~7 min

#### The live inputs to build any DCF this week
- **Risk-free rate (10-yr Treasury) = 4.40%** (Jun 25 2026, [Fed H.15](https://www.federalreserve.gov/releases/h15/)). **Implied ERP ≈ 4.23%** (early 2026, [Damodaran](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html)). **Corporate tax 21%.**
- **The single most useful anchor:** cost of equity for a β=1.0 stock ≈ 4.40% + 1.0×4.23% = **~8.6%.** Every CAPM number flexes off this via beta.

#### The DCF logic
- A company is worth the **present value of its future free cash flows.** Steps: (1) forecast FCF ~5–10 yrs; (2) pick a discount rate (WACC); (3) compute a **terminal value** for everything after; (4) discount each year + TV back; (5) sum = enterprise value; (6) +net cash / −debt = equity value; (7) ÷ diluted shares = **intrinsic value per share.**

#### The discount rate — WACC
- **WACC = (E/V)·cost of equity + (D/V)·after-tax cost of debt**, weighted by *market* values.
- **Cost of equity via CAPM** = risk-free + β × ERP. **After-tax cost of debt** = borrowing rate × (1 − 21%).
- **Beta** = sensitivity of the stock to the market (systematic risk only). Regression betas are noisy → Damodaran prefers **bottom-up betas** (industry unlevered beta, relevered to the firm). For net-cash names (NVDA) or lightly levered ones (AAPL, KO), WACC ≈ cost of equity.

#### Terminal value — usually the biggest single piece
- **Gordon growth:** TV = FCF × (1+g) ÷ (WACC − g). The perpetual **g must be ≤** long-run nominal GDP / the risk-free rate (~4%) — a higher g implies the firm eventually *becomes* the economy.
- **Exit multiple:** final-year metric × an assumed multiple (cross-check the implied g).
- **TV is typically 60–80% of total DCF value** — above ~85% is a flag to revisit assumptions. ([Damodaran](https://pages.stern.nyu.edu/~adamodar/pdfiles/blog/TermValueMyth5.pdf)) (It's a heuristic, not a law — the NVDA cases below land ~58–62%, low because the high discount rate shrinks the perpetuity.)

#### Reverse DCF — the best "what's priced in?" tool
- Instead of guessing inputs to derive a price, **start from today's price and solve for the growth the market is already paying for.** The price sets how high the bar is; your job is judging whether the company can clear it. ([Rappaport & Mauboussin, *Expectations Investing*](https://cup.columbia.edu/book/expectations-investing/9780231554848/))

#### Honest limits of DCF
- **Garbage-in/garbage-out** — output is only as good as the FCF and rate assumptions; a "$130.00" answer is really "roughly $100–180."
- **Terminal-value dominance** — most of the value sits in years you can't forecast.
- **Hyper-sensitivity** to WACC and g. → analysts **triangulate** DCF with multiples and a reverse-DCF sanity check; never a single point estimate.

#### Worked example — NVDA's discount rate (CAPM → WACC) and a terminal-value plug
- **Cost of equity (CAPM)** = risk-free + β × ERP. NVDA's β ≈ **2.20** (a high-beta, volatile stock). = 4.40% + 2.20 × 4.23% = 4.40% + 9.31% = **13.71%.**
- **WACC ≈ 13.71%** for NVDA: with ~$68B net cash and negligible debt, there's essentially no debt weight to blend in, so WACC ≈ cost of equity. *(For a levered firm you'd add (D/V) × borrowing rate × (1 − 21%) for the debt piece.)*
- **A Gordon terminal-value plug:** say NVDA's FCF reaches **$956B in year 10** (the reverse-DCF path below). TV = FCF₁₀ × (1 + g) ÷ (WACC − g) = $956B × 1.04 ÷ (0.1371 − 0.04) = **~$10.2T — as of year 10.** Discount that back 10 years at 13.71% (÷ 1.1371¹⁰ ≈ ÷ 3.61) = **~$2.8T today**, roughly **62%** of NVDA's ~$4.6T operating value. *That's "terminal value dominates," in numbers — most of the worth sits in a year you can't actually forecast.*

#### Worked example A — reverse DCF on NVDA: "what growth is priced in?"
- Inputs: price $192.53, market cap $4.66T, net cash ~$68B (total debt ~$12.35B), base FCF = FY2026 ~$97B, CAPM cost of equity = 4.40% + **2.20×4.23% = 13.71%** ≈ WACC, 10-yr window, terminal g 4%. ([NVIDIA FY2026](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026))
- Solving for the constant 10-yr FCF growth that reproduces the ~$4.59T value of operations → **implied FCF growth ≈ 25.7%/yr for a decade** (then 4% forever), compounding FCF from $97B to ~$956B. At a lower beta (1.70, WACC 11.6%) it's ~21%/yr. *(computed)*
- **The bar is historic.** Reverse DCF reframes "is NVDA expensive?" into the answerable question: **"can it grow FCF ~20%+ for 10 years?"**

#### Worked example A′ — NVDA forward-DCF sensitivity (the fragility headline)
Assume FCF grows 20%/yr for 10 yrs, vary WACC and terminal g, add net cash, ÷ 24.4B shares → value/share:

| WACC \ terminal g | 3% | 4% | 5% |
|---|---|---|---|
| 12.0% | $153 | $165 | $181 |
| 13.7% (base) | $123 | **$130** | $139 |
| 15.0% | $106 | $111 | $117 |

- Base case **$130 vs. $192.53 price** → a 20%/yr forecast doesn't justify the price (consistent with the reverse DCF needing ~26%). The grid spans **$106 → $181 (~70%)** from moving WACC ±1.3 pts and g ±1 pt. *That sensitivity is the honest core of DCF.* *(computed)*

#### Worked example B — dividend discount model on KO
- **DDM:** value = D₁ ÷ (cost of equity − g). KO annual dividend **$2.12** (64th consecutive annual increase; ~4% growth) → D₁ = $2.205. ([Coca-Cola IR](https://investors.coca-colacompany.com/news-events/press-releases/detail/1152/))
- **Reverse-DDM cross-check:** at $82.63 with g = 4%, implied (r − g) = $2.205 ÷ $82.63 = 2.67% → implied cost of equity **6.67%** → **implied beta ≈ 0.54** — internally consistent with KO as a low-beta defensive. *(computed)*
- **The fragility lesson:** with the reported 0.35 beta, cost of equity (5.88%) sits only ~1.9 pts above g, so the model *explodes* to ~$117. For low-beta defensives in a 4%+ rate world, the **(r − g) spread does all the work** — values swing from ~$47 to ~$123 across plausible inputs. Treat DDM/DCF as a *range*, not a number.

---

### M5 · What makes a "successful" stock — quality & the buy checklist  ·  ~6 min  ·  *most actionable*

#### Economic moats — Morningstar's five sources
- **Intangible assets** (brands, patents, licenses) · **switching costs** · **network effect** · **cost advantage (scale)** · **efficient scale** (a market big enough for only a few players). ([Morningstar](https://www.morningstar.com/investing-terms/economic-moat))
- **Prevalence among ~200 wide-moat names** (per Morningstar's summary): intangibles **72%**, cost advantage **47%**, switching costs **37%**, network effect **20%**, efficient scale **12%** (the *least* common). A company can have more than one.
- **Width = durability:** **wide moat** ≈ edge expected to persist ~20 yrs; **narrow** ~10 yrs; **none** = no durable edge.
- **Anchor mapping:** AAPL — switching costs (iCloud/iMessage/App Store lock-in) + brand (46.9% FY2025 gross margin). KO — brand + global bottling scale. NVDA — IP + the **CUDA ecosystem** (acts as switching cost *and* developer network effect). Ford — essentially **no durable moat** (commoditized, cyclical, capital-intensive).

#### The math of a moat — ROIC vs. WACC
- **ROIC = NOPAT ÷ invested capital** — NOPAT ("net operating profit after tax") is the profit the core business earns after tax but *before* financing costs, so ROIC measures after-tax operating profit per dollar of operating capital. A moat is only real if **ROIC sustainably exceeds WACC** — growth at ROIC *below* the cost of capital **destroys value.**
    - **NVDA, worked:** FY2026 NOPAT **$119.4B** ÷ invested capital **$105.0B** = **113.8% ROIC**, against a ~10.6% semiconductor WACC → a **+103-point** spread. Every $1 of operating capital throws off ~$1.14 of after-tax operating profit a year while costing ~11¢ to fund. *That gap, sustained, is the math of a moat.*
- **Value creation vs. destruction** (ROIC from [Stock Analysis on Net](https://www.stock-analysis-on.net/NASDAQ/Company/NVIDIA-Corp/Performance-Measure/Return-on-Capital); WACC from [Damodaran Jan 2026](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/wacc.html)):

| Company | ROIC | Industry WACC | Spread | Verdict |
|---|---|---|---|---|
| **NVDA** | 113.8% (FY Jan 2026) | Semis 10.55% | +103 pts | Massive value creation |
| **AAPL** | 126.2% (FY Sep 2025) | Computers 9.71% | +116 pts | Massive value creation |
| **KO** | 15.1% (FY Dec 2025) | Beverage 6.33% | +8.8 pts | Solid compounder |
| **F (GAAP)** | −6.4% (FY Dec 2025) | Auto 9.38% | −15.8 pts | Value destruction |
| **F (adjusted)** | ~8.8% | Auto 9.38% | ≈ −0.6 pt | Barely earns its cost of capital |

- **Caveat:** ROIC magnitudes vary by methodology (operating vs. broader capital base) — pick one source and state the definition. The *direction* (ROIC ≫ WACC for AAPL/NVDA/KO; ≤ WACC for Ford) holds under any definition.

#### Other quality markers
- **Gross-margin level & durability** — NVDA ~70%+, KO ~62%, AAPL ~47% vs. **Ford 5.8% (down from 8.4%)**. High and *stable* = pricing power; thin/volatile = commodity.
- **Operating leverage, FCF conversion, reinvestment runway (TAM — total addressable market, how big the opportunity can ultimately get)** — quality firms turn a high share of earnings into FCF and can *redeploy* high-ROIC capital at scale (NVDA grew invested capital $47B→$105B in a year and still earned 113% ROIC). KO is high-ROIC but low-reinvestment → returns cash instead.
- **Balance-sheet strength & capital allocation** — buy back stock when *cheap, not dear*; sensible M&A; covered dividends; insider alignment. AAPL repurchased **$89.3B** in FY2025 (new $100B authorization); NVDA returned **~$41.1B** in FY2026 (~$40.1B buybacks; $60B authorization added Aug 2025). Red-flag counter-example: Ford's **$17.4B of 2025 special items** (incl. ~$8.4B Model e/EV impairment) — capital deployed into programs that were written down.

#### Great company ≠ great stock
- A wonderful business bought at a rich multiple can be a poor *stock.* The moat accrues to the *company*; your *return* depends on what's already priced in. **Separate the business-quality judgment from the valuation judgment — both must clear the bar.**

#### Base rates — the honest reality (SPIVA)
- Over long horizons, **most active pickers underperform the index.** Share of all-large-cap U.S. funds underperforming the S&P 500: **10-yr ~86%, 15-yr ~88%, 20-yr ~91%** (mid-2025); on a *risk-adjusted* basis, 15-yr ~98%. In calendar 2025 alone, **79% of active large-cap funds underperformed** — the 4th-worst year in the scorecard's 25-yr history. ([SPIVA Mid-Year 2025](https://d1e00ek4ebabms.cloudfront.net/production/uploaded-files/spiva-us-mid-year-2025-bc7a7f61-4b27-48b0-b20a-856cc87521d0.pdf); [SPIVA U.S.](https://www.spglobal.com/spdji/en/spiva/article/spiva-us/))
- **Winning isn't persistent:** of top-quartile funds in 2021, **0%** stayed top-quartile through 2025; only **4.5%** of above-median large-cap funds stayed above median — *worse than the 6.25% you'd get by coin flip.* ([SPIVA Persistence YE2025](https://www.spglobal.com/spdji/en/documents/spiva/persistence-scorecard-year-end-2025.pdf))
- **Frame for the group:** own a **low-cost index core**, and treat stock-picking as a deliberate, *sized* satellite bet — not the foundation.

#### The pre-buy checklist (~10 yes/no questions)
1. **Moat?** Can you name which of the 5 sources applies — and is it widening or narrowing?
2. **ROIC > WACC, sustainably?**
3. **Durable, profitable growth** with a long reinvestment runway?
4. **Margins high & stable** (pricing power, not commodity)?
5. **Strong FCF conversion** after capex?
6. **Healthy balance sheet** — can it survive a downturn?
7. **Disciplined capital allocation** — buybacks when cheap, sensible M&A, covered dividend, insider alignment?
8. **Reasonable valuation** vs. its own history and peers?
9. **What's priced in?** What must the business deliver to justify today's multiple — and is that plausible?
10. **What would break the thesis?** Pre-commit the disconfirming signals that would make you sell.

---

### M6 · How hedge funds & quants play it  ·  ~5 min  ·  *survey / optional*

*Goal: recognize the landscape, not execute it. One tight explainer per strategy.*

#### Factor investing / smart beta
- A handful of systematic **factors** — not stock-picking genius — explain most of the cross-section of returns: **value, momentum, quality, size, low-volatility.** Smart beta = packaging these into cheap, rules-based products.
- **The lineage, stated precisely:** CAPM (1 factor: market) → **Fama-French 1993** (+ size, value) → **Carhart 1997** (+ momentum) → **Fama-French 2015 five-factor** (+ profitability, investment — note it *omits* momentum). "Quality" as a single named factor is an **AQR construct ("Quality Minus Junk")**, not a Fama-French factor.
- **Momentum has the most robust evidence:** Jegadeesh & Titman (1993) — buy 3–12-month winners, short losers → ~**1.31%/month** — and it shows up across markets and asset classes. *But* it's crash-prone. ([Jegadeesh & Titman](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.1993.tb04702.x))

#### Long/short equity & market-neutral
- **Long/short:** buy expected winners, **short** expected losers (the original hedge-fund template, A.W. Jones 1949).
- **Short-selling, high level:** borrow shares → sell now → buy back later (hopefully cheaper) → return them. Profit = sale − buyback − borrow fee. **Losses are theoretically unlimited** (a stock can rise without bound), vs. a long's max loss of 100%. ([Investopedia](https://www.investopedia.com/terms/s/shortselling.asp))
- **Short squeeze — GameStop (Jan 2021):** GME ran from ~$20 to a **$347.51 closing high (Jan 27)** — intraday ~$483 on Jan 28; volume averaged ~100M shares/day Jan 13–29 (>1,400% above 2020). **The SEC's key finding: it was *positive sentiment*, not short-covering, that sustained the run-up** — covering was a small fraction of buy volume, and there was **no gamma squeeze.** ([SEC Staff Report, Oct 2021](https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf))
- **Market-neutral:** size longs and shorts so net market exposure (beta) ≈ 0 — returns depend on the *spread*, not market direction.

#### Event-driven · global macro · activist
- **Merger / risk arbitrage:** after a deal is announced, the target trades below the offer (the "spread") because the deal might break; the arb captures the spread if it closes. **Special situations** (spinoffs, restructurings) and **distressed debt** round out the bucket.
- **Global macro:** top-down bets on rates, currencies, commodities, whole countries — discretionary or systematic (trend-following CTAs). (Soros's 1992 sterling short is the archetype.)
- **Activist:** take a stake, then push for change (board seats, buybacks, breakups). A **Schedule 13D** is required once beneficial ownership tops **5%** — now due within **5 business days** (shortened from 10 calendar days, effective Feb 5 2024). ([SEC](https://www.sec.gov/newsroom/press-releases/2023-219))

#### Quant / stat arb & alternative data
- **Stat arb:** algorithms harvest many tiny, fleeting statistical edges (mean-reversion across related securities), winning on scale and breadth, not one big call. Pairs trading is the ancestor; Renaissance's Medallion the legend.
- **Alternative data:** non-traditional datasets to forecast fundamentals *before* the print — satellite imagery (parking-lot counts), card-transaction panels, web traffic/app downloads. Spend is real but modest for most: roughly **$1–5M/yr per fund** (industry average ~$1–2M), with only the largest multi-strats reaching tens of millions.

#### Options (name only) · leverage
- **Covered call** (own stock + sell a call) = income, capped upside. **Protective put** (own stock + buy a put) = downside insurance, keep upside. ([AnalystPrep](https://analystprep.com/cfa-level-1-exam/derivatives/covered-calls-protective-puts/))
- **Leverage** amplifies *both* gains and losses and forces selling at the worst time. **LTCM (1998)** — Nobel-laureate-run, ~25–30:1 balance-sheet leverage (far higher on a notional basis) — lost **~$4.6B in under four months** and needed a **$3.6B, 14-bank rescue brokered by the NY Fed.** ([Fed History](https://www.federalreservehistory.org/essays/ltcm-near-failure))

#### The honest note — "sophisticated" ≠ "beats the market"
- **Buffett's $1M bet (2008–2017):** a low-cost S&P 500 index fund returned **+125.8% cumulative (~8.5%/yr)**; the five funds-of-funds returned **+21.7%, +42.3%, +87.7%, +2.8%, +27.0%** (low single digits annualized). Buffett won decisively. ([Berkshire 2017 letter](https://www.berkshirehathaway.com/letters/2017ltr.pdf); [Long Bets #362](https://longbets.org/362/))
- **Fair framing:** "hedge fund" is a *fee/legal structure*, not an asset class — many funds (market-neutral, macro) intentionally run low equity beta, so out-earning a 100%-equity index in a bull market isn't their mandate; they sell *risk-adjusted* return and downside protection, classically for "**2 and 20**." **The takeaway for us:** for an investor whose alternative is simply buying the market, a low-cost index fund has been *very hard to beat after fees.* (Industry capital is still at a record **~$5.22T**, 1Q 2026 — [HFR](https://www.hfr.com/media/market-commentary/investor-inflows-drive-global-hedge-fund-industry-capital-to-new-record-as-geopolitical-risks-surge/).)

---

### M7 · Technical analysis & timing  ·  ~6 min  ·  *advanced / optional*

*Framed honestly: TA is a **timing overlay**, not a stock-selection system. (Fundamentals = the "what/should I own this"; TA = the "when do I get in/out.")*

#### What TA claims, and the EMH challenge
- **Premises:** price/volume already discount the info; short-run prices are driven by supply/demand and crowd psychology; trends/patterns persist until they reverse. ([Damodaran, Investment Philosophies](https://pages.stern.nyu.edu/~adamodar/pdfiles/invphiloh/overview.pdf))
- **The central challenge — weak-form EMH** (Fama 1970): future returns can't be predicted from *past prices/volume* — which directly says charting has no edge. ([Fama 1970](https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1970.tb00518.x)) Fama later softened "weak-form" to "tests for return predictability" (1991), conceding some predictability exists.
- **The room TA claims — Grossman-Stiglitz (1980):** a *perfectly* efficient market is impossible (no one would pay to gather info), so someone must be able to profit. Reality is "mostly efficient with exploitable frictions" — but the burden of proof is on the chartist. ([Grossman & Stiglitz](https://www.aeaweb.org/aer/top20/70.3.393-408.pdf))

#### The core tools (what each measures)
- **Moving averages (50/200-day):** smooth price to define trend. **Golden cross** = 50-day rises above 200-day (bullish); **death cross** = the reverse.
- **Support & resistance / trendlines / breakouts:** price floors/ceilings where reversals cluster; a breakout (ideally on rising volume) reads as continuation.
- **Momentum oscillators:** **RSI** (0–100; >70 overbought, <30 oversold, Wilder's 14-period) and **MACD** (12/26/9). **Volume** confirms moves.
- **Chart patterns:** head-and-shoulders / double top (reversal-down), double bottom (reversal-up).

#### The evidence — be balanced
- **TA overall: mixed-to-weak.** Park & Irwin's survey of 95 studies (56 positive, 20 negative, 19 mixed) found most are compromised by **data-snooping** and undercounted costs, with profitability fading after the early 1990s. ([Park & Irwin 2007](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-6419.2007.00519.x))
- **The data-snooping smoking gun:** Sullivan, Timmermann & White (1999) took Brock-Lakonishok-LeBaron's rules and expanded them to a universe of **7,846 trading rules** over ~100 years of DJIA data; once you correct for having *tried so many*, the apparent edge **does not hold out-of-sample.** ([STW 1999](https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.00163))
- **Chart patterns, carefully tested:** Lo, Mamaysky & Wang (2000) found several patterns carry *modest "incremental information"* — a rare concession — but stop short of a tradable, after-cost profit. ([Lo et al.](https://www.nber.org/system/files/working_papers/w7613/w7613.pdf))
- **The one robust exception — cross-sectional momentum.** Jegadeesh & Titman (1993): ~1.31%/month (winners minus losers, NYSE+AMEX 1965–1989) — *but* it **mean-reverts long-term** (the 6-month-formation portfolio gains ~9.5% over the next year, then loses more than half over the following two). It became a priced factor (Carhart 1997) and is **pervasive across all size groups** (Fama-French 2008). The fat tail: **"momentum crashes"** — in **Mar–May 2009, past-loser stocks +163% vs. past-winner +8%; momentum lost >73% in three months.** ([Daniel & Moskowitz](https://www.nber.org/system/files/working_papers/w20439/w20439.pdf))
- **The distinction that is the whole honesty of this module:** the robust phenomenon is *systematic, diversified, cross-sectional relative-strength momentum* — **not** reading a chart on a single name.

#### Behavioral basis & how a fundamental investor uses it
- **Why levels can self-perpetuate:** herding, anchoring (a prior high/low or your purchase price), self-fulfilling levels (everyone watches the same 50/200-day MAs and round numbers), and trend-following flows.
- **Legitimate uses — only as an overlay on a thesis you already hold:** entry/exit *timing* (scale into a name you've decided to own on a pullback to support), **position sizing & stop-losses**, and avoiding "catching a falling knife." **What TA must never do:** be the *reason to own the business.*
- **Risks to flag:** overtrading (costs + taxes erode any edge), false signals/whipsaws, hindsight bias, and data-mining your own backtests.

#### Worked example — the golden cross (conceptual)
- A golden cross can only happen *after* price has already risen enough, for long enough, to drag the 50-day above the 200-day — so it's a **lagging indicator** that gets you in late and out late, and it **whipsaws** in choppy markets. Useful as a coarse *regime filter* ("only add to longs while in a golden-cross regime"); **useless as a precise standalone buy trigger.** A golden cross *describes* a trend that already exists — it doesn't *predict* one.

---

### M8 · Building & managing the portfolio by goal + when to sell  ·  ~7 min

#### Goal → horizon → risk capacity → allocation
- Allocation should be driven by **when you need the money** and **how much loss you can absorb without derailing the goal** — not just feelings.
- **Short-term (0–3 yr) = capital preservation:** cash, T-bills, money-market funds. Current yields are real money: Fed funds **3.50–3.75%** (held Jun 17 2026), 4-week T-bill **~3.67%**, 13-week **~3.75%**, Vanguard's VMFXX 7-day SEC yield **~3.56%.** *(T-bill interest is state-tax-exempt.)* ([Fed](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm); [Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_bill_rates))
- **Long-term (10+ yr) = equity-heavy** — with a decade-plus runway, volatility is tolerable.
- **Retirement = a glide path** that de-risks with age. Vanguard's target-date default holds ~**90% equities** early, straight-lines to **30% equity / 70% bonds by age 72**, then holds. ([Vanguard](https://workplace.vanguard.com/investment/strategies/tdf-glide-path.html))
- **"110/120 minus age"** equity heuristic (updated from "100 − age" for longer lifespans). **Critique:** age is a crude proxy — it ignores other income, job stability, debt, and dependents, and can leave long-lived retirees too conservative to outpace inflation. Use it as a sanity check, not a prescription.

#### Diversification, correlation, concentration
- The "free lunch" comes from **imperfect correlation.** Adding five mega-cap AI names diversifies far less than it looks — they're highly correlated. **Single-stock risk is uncompensated** — the market doesn't pay extra expected return for risk you could have diversified away.
- **Why the stock-picking sleeve sits on top of a diversified core (humility):** see the SPIVA base rates in M5 — ~86% of large-cap funds lag over 10 years. Keep the satellite a *minority* of the portfolio; size positions so one blow-up can't sink the plan.
- *Reality check:* a cap-weighted S&P 500 fund already carries heavy AI/mega-cap concentration **before** you add a stock sleeve (see the market moment).

#### Rebalancing
- Two disciplines: **calendar** (e.g., annually) and **threshold/band** (act only when an asset class drifts beyond ±5 pts). Many hybridize: "check on a schedule, act only if a band is breached."
- It mechanically **enforces buy-low/sell-high** — you trim what rallied and add to what lagged. Do tax-sensitive rebalancing inside tax-advantaged accounts first, or use new contributions/dividends to rebalance without selling.

#### Account types by goal — 2026 IRS numbers
- **401(k)/403(b)/457/TSP elective deferral: $24,500** (catch-up 50+ **$8,000**; ages 60–63 "super catch-up" **$11,250**). New under SECURE 2.0: high earners (>$150k FICA wages from that employer) must make catch-ups as **Roth.** Combined employer+employee 415(c) cap: **$72,000.** ([IRS IR-2025-111](https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500))
- **IRA / Roth IRA: $7,500** (catch-up 50+ **$1,100**). Roth income phase-outs: single **$153k–$168k**, MFJ **$242k–$252k.**
- **Roth vs. traditional = tax-now vs. tax-later.** ("Deduction" = a tax break *this year* — money you contribute isn't counted as taxable income now.)
    - **Traditional:** contribute **pre-tax → you get the deduction now** (lower taxable income today), the money grows tax-deferred, and you pay ordinary income tax when you **withdraw.** Tax-*later*.
    - **Roth:** contribute **after-tax → no deduction** (you pay the tax up front, *that's the trade*), and in exchange growth and **qualified withdrawals come out completely tax-free**, with **no RMDs** (required minimum distributions — the withdrawals the IRS forces out of *traditional* accounts starting in your 70s). Tax-*now*.
    - Above the Roth income limits, the **backdoor Roth** (contribute to a nondeductible traditional IRA, then convert) remains the workaround.
- **HSA — the only "triple tax advantage"** (pre-tax in, tax-free growth, tax-free out for medical). 2026: self-only **$4,400**, family **$8,750**, 55+ catch-up **$1,000** (requires an HDHP — a high-deductible health plan). ([IRS Rev. Proc. 2025-19](https://www.irs.gov/pub/irs-drop/rp-25-19.pdf)) *Strategy: pay current medical costs out of pocket, let the HSA compound as a stealth retirement account, reimburse yourself later.*
- **Taxable brokerage:** no cap, full liquidity, but gains/dividends taxed annually — where tax-lot management actually matters.

#### Capital gains & taxes — 2026
- **Holding period:** **>1 year = long-term**; **≤1 year = short-term.**
- **Short-term = ordinary income** (brackets to 37%). **Long-term = 0/15/20%:** 0% up to **$49,450** single / **$98,900** MFJ; 15% up to **$545,500** single / **$613,700** MFJ; 20% above. ([IRS Rev. Proc. 2025-32](https://www.irs.gov/pub/irs-drop/rp-25-32.pdf); [Tax Foundation](https://taxfoundation.org/data/all/federal/2026-tax-brackets/))
- **NIIT surtax: +3.8%** on net investment income when MAGI > $200k single / $250k MFJ (*not* indexed → catches more people each year). Top effective LT rate = **23.8%.** ([IRS Topic 559](https://www.irs.gov/taxtopics/tc559))
- **Capital losses** offset gains, then up to **$3,000/yr** of ordinary income, with the remainder carrying forward.
- **Wash-sale rule:** a loss is **disallowed** if you buy substantially identical securities within **30 days before or after** the sale (a 61-day window) — the loss is added to the replacement's basis (deferred, not destroyed). ([IRS Pub 550](https://www.irs.gov/publications/p550))
- **Tax-loss harvesting:** realize losers to offset gains and up to $3,000 of ordinary income; avoid the wash-sale trap by rotating into a *similar-but-not-identical* holding for 31 days. Harvested losses are most valuable against **short-term** gains.

#### When to sell — a sell-discipline framework
Five legitimate sell triggers (most else is noise):
- **(a) The thesis breaks** — the reason you bought is no longer true. Sell on the facts, regardless of price.
- **(b) Valuation/price target hit** — fair value reached or implausible growth now priced in.
- **(c) A materially better opportunity** — capital is finite (opportunity cost).
- **(d) Rebalancing / position-size management** — restore targets or cap concentration.
- **(e) Tax-loss harvesting.**
- **Core discipline — the "would I buy it at today's price?" test.** If you wouldn't initiate the position today with what you now know, holding is just inertia. This strips out your purchase price.

#### Behavioral traps (and the tax tie-in)
- **Disposition effect:** investors **sell winners too early and ride losers too long** — empirically ~1.5× more likely to sell a winner, *not* justified by subsequent returns. ([Odean 1998](https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/areinvestorsreluctant.pdf))
- **Anchoring** ("I'll sell when it gets back to what I paid" — the market doesn't know your cost basis) and **loss aversion** (a loss hurts ~2× an equal gain) → people freeze.
- **Tax tie-in:** the disposition effect is doubly costly — selling winners early often triggers *short-term* (ordinary-rate) tax, and holding losers forgoes harvesting. The tax-optimal instinct (defer gains past 1 year; harvest losses promptly) is the near-mirror image of the behavioral mistake. **But don't let the tax tail wag the dog** — refusing to sell a broken thesis just to avoid a gains bill *is* the thesis-break error in disguise.

#### Worked examples
- **A. Rebalancing (60/40 → 70/30).** Start $100k (60/40). Equities **+50% → $90k**, bonds **−5% → $38k**, total $128k → equity weight **70.3%**, breaching the 65% band. Restore: target equity 0.60×$128k = **$76,800** → **sell $13,200 of equities, buy bonds.** You mechanically sold what rallied and bought what fell — discipline, not forecasting. *(computed)*
- **B. Same gain, short-term vs. long-term (2026).** Single filer, ~$120k income (24% ordinary / 15% LT band $49,451–$545,500), realizes a **$20,000 gain.** Held ≤1 yr → $20,000 × 24% = **$4,800.** Held >1 yr → $20,000 × 15% = **$3,000.** **Crossing the 1-year mark saves $1,800 (37.5% less tax) on the identical gain.** For a top-bracket investor it's **40.8% vs. 23.8%** — a 17-point wedge for waiting. *(computed)*
- **C. Thesis-break — Ford.** Original thesis (hypothetical): "ICE/truck cash flows fund the EV build-out; Model e turns profitable soon and re-rates the stock." Facts (mid-2026): Ford guides **Model e to lose ~$4–4.5B in 2026**, **>$16B cumulative EV losses since 2022**, and pushes EV profitability to **2029**; FY2025 was an **$8.2B net loss on record $187.3B revenue**, so trailing P/E is N/M. **Verdict:** the inflection slipped *years* out → **thesis materially changed (trigger a).** If the only reasons to hold are the dividend and "it'll bounce back to my cost," that's anchoring + loss aversion. **Nuance:** Q1 2026 EV loss *narrowed* to ~$777M — the discipline is honestly separating a genuine thesis-break from a temporary dip.

---

## Market moment (10 min) — The most concentrated index in history meets the AI-capex bill

**What happened**
- The S&P 500 is **more concentrated than at any point in its history** — a handful of AI-levered mega-caps now drive its level, valuation, and earnings — and in spring 2026 the debate moved from market chatter into official channels.
- The **Magnificent 7 are ~32.7% of the S&P 500's market cap** (~$22T combined), mid-June 2026: NVDA 7.4%, Alphabet 6.6%, Apple 6.4%, Microsoft 4.2%, Amazon 3.8%, Tesla 2.2%, Meta 2.1%. ([Motley Fool](https://www.fool.com/research/magnificent-seven-sp-500/))
- The **top 10 stocks are ~41% of the index** (end-2025) — vs. ~19% in 2015 and ~27% at the 2000 dot-com peak. **Today's concentration is ~1.5× the dot-com record.** ([RBC, "The Great Narrowing"](https://www.rbcwealthmanagement.com/en-us/insights/the-great-narrowing-sp-500-concentration))

**The numbers**
- **The valuation tell — cap share vs. earnings share:** the top 10 are ~41% of *weight* but only ~32% of *earnings* (in 2015 both were ~19%). The cap-weighted S&P 500 trades at a **~30% premium to its equal-weighted version**, up from ~13% pre-pandemic. ([RBC](https://www.rbcwealthmanagement.com/en-us/insights/the-great-narrowing-sp-500-concentration))
- **S&P 500 forward P/E 20.1**, above its 5-yr (19.9) and 10-yr (19.0) averages. ([FactSet](https://insight.factset.com/sp-500-earnings-season-update-may-8-2026))
- **The twist on NVDA:** its forward P/E (**19.4**) is actually *below* the index (20.1) — the "expensive" label comes from its trailing multiple (~30×), its size, and its sales multiple. A **PEG of 0.43** means the price bakes in roughly **45% forward EPS growth** — an enormous embedded promise.
- **The AI-capex bill:** the four big hyperscalers plan **~$725B of capex in 2026, +77% from ~$410B in 2025** — increasingly debt-funded. ([Tom's Hardware](https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion)) The Street's worry: "there's not enough revenue or profit yet to show for the capital already allocated."
- **Officialdom is now flagging it:** the Fed's **May 2026 Financial Stability Report** put AI as the **3rd-most-cited potential shock** among surveyed market contacts (up from 5th the prior fall), naming "equity valuations" and "capital expenditures increasingly funded by debt." ([Fed FSR](https://www.federalreserve.gov/publications/files/financial-stability-report-20260508.pdf))

**Market reaction**
- **NVDA beat on every line on May 20 and the stock fell ~2%** — the 4th straight beat-and-fall — and it's **down ~18% year-to-date even as earnings rose 85%.** That's almost pure **multiple compression**: a high multiple is a promise, and meeting a sky-high bar isn't enough when the price already embedded it.
- The market has been *rewarding* the AI build-out broadly while *punishing* its chief beneficiary's stock on good news — the clearest possible illustration of expectations-vs-reality.

**Why it matters — the tie-in to today's lesson**
- **Index investors are less diversified than they think.** Buying "the S&P 500" now means a ~33% bet on 7 correlated AI names and a ~7–8% single-name bet on NVDA. A **$10,000** index investment implicitly buys ~**$3,270 of the Mag 7** and ~**$740 of NVIDIA alone** — vs. ~$140 across those names in an equal-weighted fund. *(computed)*
- **A high multiple is a promise (reverse DCF made real).** NVDA's PEG-implied ~45% growth and the index's forward P/E above its 10-yr average are *implicit forecasts.* The "beat-and-fall" is the mechanism: when expectations are sky-high, the stock needs to beat the *whisper*, not the published consensus.
- **Cap share > earnings share is the tell** — the gap (41% vs. 32%) is the market paying up for *future* growth, exactly what a multiple-compression year closes.
- **The capex round-trip risk** — $725B of mostly debt-funded spending, with some "AI revenue" circulating among the same few firms (note NVDA's $15.9B gain on its stakes in AI companies, sitting *inside* reported net income). If returns on that capex disappoint, the concentration that drove the index up works in reverse.
- **The diversification lesson:** consider equal-weight (e.g., RSP), ex-mega-cap, or international sleeves; size single-name AI exposure deliberately; and keep separating "great company" from "great stock *at this price*."

**Discussion questions**
- NVDA beat on every metric and the stock *fell* — and it's down ~18% YTD while earnings are up 85%. What exactly was "priced in," and how would you have known the bar was that high *before* the print? (Connect to forward P/E and PEG as embedded forecasts.)
- The top 10 are 41% of the index's weight but only 32% of its earnings. Is that gap justified by superior growth, or is it concentration/valuation risk — and does it change your view of "just buy the S&P 500"?
- The hyperscalers will spend ~$725B in 2026, increasingly with debt. Using a reverse-DCF mindset, what level of AI revenue/profit does that spending *have* to produce to justify today's prices — and what's the contagion path if it doesn't?

## Sources

*Every figure above is cited inline; the key authoritative sources, grouped by section.*

**What moves a price / total return**
- Mauboussin & Callahan, *Total Shareholder Return* (Morgan Stanley, Oct 2023): https://www.morganstanley.com/im/publication/insights/articles/article_totalshareholderreturns.pdf
- Graham *Mr. Market* / Berkshire 1987 letter: https://en.wikipedia.org/wiki/Mr._Market · https://www.berkshirehathaway.com/letters/1987.html
- Fed H.15 / FRED DGS10 (10-yr Treasury); Damodaran implied ERP: https://www.federalreserve.gov/releases/h15/ · https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histimpl.html
- FactSet Earnings Insight (S&P 500 forward P/E): https://insight.factset.com/sp-500-earnings-season-update-may-8-2026
- Greenwood & Sammon, "The Disappearing Index Effect": https://www.hbs.edu/ris/Publication%20Files/23-025_563e45c6-df92-4d9c-ae05-608d4d0acab1.pdf
- Apple EPS/net income/shares/buybacks (SEC XBRL): https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/

**Statements & earnings**
- NVIDIA Q1 FY2027 results: https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027
- SEC Regulation G / non-GAAP: https://www.sec.gov/rules-regulations/2003/03/conditions-use-non-gaap-financial-measures
- Salesforce Q1 FY2027 release (SBC reconciliation): https://s205.q4cdn.com/626266368/files/doc_financials/2027/q1/CRM-Q1-FY27-Earnings-Press-Release.pdf
- Ford Q1 2026 (8-K) & Apple Q2 FY2026 (Newsroom): https://www.sec.gov/Archives/edgar/data/0000037996/000003799626000084/exhibit99toapril292026fo.htm · https://www.apple.com/newsroom/2026/04/apple-reports-second-quarter-results/

**Valuation — multiples & DCF**
- stockanalysis.com statistics (NVDA/AAPL/KO/F live multiples): https://stockanalysis.com/stocks/nvda/statistics/
- Damodaran industry P/E, EV/EBITDA, WACC datasets (Jan 2026): https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/pedata.html · /wacc.html
- Apple 10-Q (EV inputs, Mar 28 2026): SEC EDGAR CIK 0000320193
- Rappaport & Mauboussin, *Expectations Investing* (reverse DCF): https://cup.columbia.edu/book/expectations-investing/9780231554848/
- Coca-Cola dividend / NVIDIA FY2026 results: https://investors.coca-colacompany.com/ · https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026

**Quality & base rates**
- Morningstar economic-moat framework: https://www.morningstar.com/investing-terms/economic-moat
- ROIC (NVDA/AAPL/KO/F), Stock Analysis on Net: https://www.stock-analysis-on.net/NASDAQ/Company/NVIDIA-Corp/Performance-Measure/Return-on-Capital
- SPIVA U.S. Mid-Year 2025 & Persistence Year-End 2025: https://www.spglobal.com/spdji/en/spiva/article/spiva-us/ · https://www.spglobal.com/spdji/en/documents/spiva/persistence-scorecard-year-end-2025.pdf

**Hedge funds, quants & technicals**
- Jegadeesh & Titman (momentum); Carhart (1997); Fama-French (1993/2015): https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.1993.tb04702.x
- SEC GameStop staff report (2021); SEC 13D rule change (2023): https://www.sec.gov/files/staff-report-equity-options-market-struction-conditions-early-2021.pdf · https://www.sec.gov/newsroom/press-releases/2023-219
- LTCM (Fed History); Buffett bet (2017 letter / Long Bets #362); HFR AUM: https://www.federalreservehistory.org/essays/ltcm-near-failure · https://www.berkshirehathaway.com/letters/2017ltr.pdf · https://longbets.org/362/
- Fama (1970 EMH); Grossman-Stiglitz (1980); Park & Irwin (2007); Sullivan-Timmermann-White (1999); Lo-Mamaysky-Wang (2000); Daniel-Moskowitz momentum crashes: https://www.aeaweb.org/aer/top20/70.3.393-408.pdf · https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.00163 · https://www.nber.org/system/files/working_papers/w20439/w20439.pdf

**Portfolio & taxes (2026)**
- IRS 2026 retirement limits (IR-2025-111); HSA (Rev. Proc. 2025-19); capital gains (Rev. Proc. 2025-32): https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500 · https://www.irs.gov/pub/irs-drop/rp-25-19.pdf · https://www.irs.gov/pub/irs-drop/rp-25-32.pdf
- Wash sale (IRS Pub 550); NIIT (Topic 559); Vanguard glide path; Odean disposition effect (1998): https://www.irs.gov/publications/p550 · https://workplace.vanguard.com/investment/strategies/tdf-glide-path.html · https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/areinvestorsreluctant.pdf

**Market moment — concentration & AI capex**
- Motley Fool (Mag 7 weights); RBC "The Great Narrowing" (concentration vs. history): https://www.fool.com/research/magnificent-seven-sp-500/ · https://www.rbcwealthmanagement.com/en-us/insights/the-great-narrowing-sp-500-concentration
- FactSet (S&P forward P/E); Tom's Hardware (hyperscaler capex ~$725B): https://insight.factset.com/sp-500-earnings-season-update-may-8-2026 · https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion
- Federal Reserve Financial Stability Report (May 2026): https://www.federalreserve.gov/publications/files/financial-stability-report-20260508.pdf
