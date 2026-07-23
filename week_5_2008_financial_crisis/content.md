# The 2008 Financial Crisis

*Not the tiered format this week: one continuous story in two acts — **build the machine** (~20 min: a single mortgage → MBS → tranches → CDOs → synthetic CDOs → the AAA stamp → 30:1 leverage), then **break it** (~20 min: the 2007 cracks → Bear → the September 2008 week → TARP). Weeks 1–4 were personal mechanics — credit, valuation, buying a share, tax wrappers; tonight we zoom out to the whole system all of that lives inside.*

> Every figure below was researched against primary sources (the FCIC report, the Federal Reserve, GAO, Treasury, FDIC, FHFA, BLS, S&P/Case-Shiller, and NBER papers) and independently fact-checked. **Two items are live 2025–26 court fights — the CFPB's survival and the Fannie/Freddie release — so re-verify both the morning of class.**

> **Format note (new this week):** not the tiered format. One narrative in two acts — build the machine (~20 min), then break it (~20 min) — closing on the legacy: what 2008 still does to *you*. If the room wants to linger in Act 1, let it; Act 2 is the payoff and reads fast once the machine is built. The three **Myth** slides carry `**Speaker notes:**` blocks — evidence meant for the presenter, kept off the slide face.

## Opener (10 min)

Standard round-table — go around the group:
- Anything new you did with money this week?
- Something interesting you learned about money or finance?
- A new investment you're looking at or like right now?

This week's nudges:
- Show of hands: who actually remembers 2008 — and who had a parent lose a job, a home, or savings? *(For most of the room it's history, not memory — gauge how much lived context you're working with.)*
- Say one thing you already "know" caused 2008. *(Collect these out loud — the lesson will confirm, complicate, or debunk each. Three of them are the misconceptions Act 2 dismantles.)*
- Seen *The Big Short*, *Margin Call*, or *Too Big to Fail*? What stuck? *(A great shared anchor — and a warning that the movies compress a lot.)*
- What's something in your life today you suspect traces back to 2008, but you're not sure how? *(Collect these; the closer answers them — the rules on your loans, why a house feels un-buyable, crypto, the politics.)*

## Lesson (40 min)

### Act 1 · Build the machine  ·  ~20 min

*The whole crisis is one machine, and every part was holding up the next. We build it link by link now — so in Act 2, when we pull the thread, you'll know exactly what each piece was doing when it failed. The spine of the night: **a machine turned the riskiest mortgages in America into bonds rated as safe as US Treasuries — and almost everyone believed it.***

#### 1 · A single mortgage — the broken incentive

*Visual: one mortgage as a brick handed down a line — borrower → lender → Wall Street — with the lender's "can they actually repay?" incentive dropping out at the very first handoff.*

For most of history, the bank that made your loan held it for 30 years, so it cared whether you could pay. By the 2000s the model was **originate-to-distribute**: the lender sold the loan within days, booked a fee, and moved on — so the incentive flipped to *volume*, not repayment. The FCIC's verdict: the model "undermined responsibility and accountability" and "contributed to the poor quality of mortgage loans" ([FCIC Final Report](https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf)). (One honest caveat: originators weren't *fully* off the hook — they kept repurchase/"buyback" liability, and it was those buyback demands that later bankrupted many of them.)

#### 2 · Pool them — the mortgage-backed security

*Visual: thousands of little mortgages pouring into one pool → the pool issues bonds out the other side.*

Thousands of mortgages go into one pool (legally, a trust); the pool issues bonds; your monthly payment — times thousands — is the cash that pays those bonds. Nothing is wrong yet. This is just how the 30-year fixed mortgage gets funded, and it works fine for decades ([FCIC Final Report](https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf)).

#### 3 · Slice them — how subprime became "AAA"

*Visual: THE tranche pyramid — the core slide of Act 1. A $100M pool at the base; three stacked slices (Senior 80% / Mezzanine 15% / Equity 5%); one arrow showing cash paid top-down, another showing losses filling bottom-up; the "20% cushion" bracketed under the AAA slice.*

You don't sell one bond backed by the whole risky pool — you carve it into **tranches** stacked by priority, and that pecking order is the whole trick. Take a **$100 million pool of 1,000 subprime mortgages** and slice it:

| Tranche | Size | Paid… | Loses… | Rating |
|---|---|---|---|---|
| **Senior** | $80M (80%) | first | last | **AAA** |
| **Mezzanine** | $15M (15%) | second | second | BBB |
| **Equity** | $5M (5%) | last | **first** | unrated |

Two directions, one ladder: **cash flows top-down** (the "waterfall" — the senior slice is paid first, everything below is overflow), while **losses fill bottom-up** (the equity slice is destroyed before mezzanine loses a cent, and mezzanine is destroyed before senior loses a cent). So for the senior slice to lose a single dollar, the pool has to lose more than **$20M — 20% of the pool** — because equity + mezzanine sit beneath it as a cushion. Subprime pools historically never lost 20%, so the agencies stamped that $80M **AAA — "as safe as Treasuries"** — even though not one underlying loan was AAA-quality. The alchemy: **junky loans in the bottom, ~80% "safe" bonds out the top** ([Coval, Jurek & Stafford, *J. Econ. Perspectives* 2009](https://www.aeaweb.org/articles?id=10.1257/jep.23.1.3)).

**Normal times — the pool loses 5% ($5M):** the equity slice eats the whole $5M and is wiped out; mezzanine and senior are paid in full. The machine works exactly as designed — the bottom row drowns, everyone above stays dry.

#### 4 · The lie in the slice — the correlation trick

*Visual: two panels sharing the beat-3 pool — LEFT "what the model assumed" (5% loss, defaults scattered, only the equity slice drowns, senior safe); RIGHT "what happened" (25% loss, one national shock, the loss climbs through equity → mezzanine → up into the AAA slice).*

Why call the top slice "safe"? Because the math assumed home-loan defaults weren't very *correlated* — a default in Nevada told you little about one in Florida. The tool was the **Gaussian copula** ([David X. Li, 2000](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=187289)). Fed a **low, stable correlation number** — calibrated off a benign stretch when US national home prices hadn't fallen since the 1930s — it manufactured those big AAA tranches. The flaw: every mortgage shared one dominant risk — **national home prices**. When those fell everywhere at once, defaults hit together and the "safe" senior slices failed together. The diversification was mostly an illusion ([Coval, Jurek & Stafford](https://www.aeaweb.org/articles?id=10.1257/jep.23.1.3)). *(Precise version: the copula doesn't itself "assume" low correlation — correlation is an input; the failure was plugging in one low, constant number and trusting it.)*

**The crisis — the same pool loses 25% ($25M):** equity ($5M) gone, mezzanine ($15M) gone — and the leftover **$5M of losses lands on the "AAA" senior slice** (a ~6% hit on the thing sold as safe as Treasuries). The 20% cushion that justified the rating was breached, because the one scenario the model treated as near-impossible — losses correlated across the *whole* pool at once — is exactly what a national price drop delivers.

#### 5 · Repackage the leftovers — CDOs and CDO²

*Visual: CDO nesting — the BBB middle slices of many MBS funnel into a new CDO that again spits out an AAA top slice; a second arrow shows CDO² (a CDO built from other CDOs' slices).*

The riskier mezzanine (BBB) slices were hard to sell. So banks pooled *those* into a new security — a **CDO** — sliced it again, and out came a fresh batch of "AAA" from the leftovers nobody wanted. Pool CDO slices into yet another CDO and you get **CDO-squared**. Same trick, one level more abstract, one level harder to see through ([FCIC Ch. 8, "The CDO Machine"](https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_chapter8.pdf)).

#### 6 · Clone the bet — synthetic CDOs and credit default swaps

*Visual: one toxic BBB bond in the center, wired out to many synthetic CDOs — "the same bet, copied" — the multiplier that made total losses bigger than the actual mortgages.*

*Define — credit default swap (CDS): insurance on a bond. The buyer pays a regular premium; the seller pays out if the bond defaults. Two twists made it dangerous — you didn't have to own the bond to buy "insurance" on it (so one bond could be insured many times over), and because it was called a "swap," the seller (like AIG) wasn't forced to hold reserves the way a real insurer is.*

Here it stops being about houses at all. A **synthetic CDO** holds *no mortgages* — it just *references* a set of real mortgage bonds through **credit default swaps** (insurance-like contracts that pay off if those bonds go bad). So the same toxic bond could be referenced by dozens of synthetic CDOs — meaning the system's *exposure* to subprime was no longer capped by the number of actual mortgages. Losses could, and did, run past the face value of the real bonds many times over ([FCIC Ch. 8](https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_chapter8.pdf)). The notorious example, Goldman's **Abacus 2007-AC1**, is where a hedge fund helped *pick* the reference bonds and then *bet against them*; the SEC later fined Goldman **$550 million** ([SEC, 2010](https://www.sec.gov/news/press/2010/2010-123.htm)).

#### 7 · The stamp on every link — the rating agencies

*Visual: the AAA rubber-stamp reappearing at every link of the chain; a side arrow shows the conflict — the bank that builds the deal pays the firm that rates it.*

None of this sells without a AAA stamp — and the same three firms (Moody's, S&P, Fitch) stamped the MBS, the CDOs, *and* the synthetics. The rot was in who paid: **the bank that built the deal paid the agency to rate it** ("issuer-pays"), so banks could shop for the friendliest grade. The scale was industrial — Moody's alone put AAA on tens of thousands of mortgage securities in the boom. When the mass downgrades finally came in 2007, they detonated the whole stack. The FCIC's conclusion: the rating agencies were "**essential cogs in the wheel of financial destruction**" and "**key enablers of the financial meltdown**" ([FCIC Conclusions](https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_conclusions.pdf)).

#### 8 · The ground it all stood on — leverage and overnight money

*Visual: a 30:1 bar — a thin sliver of equity under a huge stack of assets — beside a "funded overnight" clock; caption: a 3% dip erases the sliver.*

*Define — repo (repurchase agreement): an overnight loan secured by bonds as collateral — you "sell" the bonds tonight and buy them back in the morning. Banks roll it over every single day to hold a huge bond portfolio on very little of their own cash; the morning lenders refuse to roll it, the bank is instantly stranded.*

Two last facts make the tower fragile. First, **leverage**: the big investment banks ran roughly **30-to-1** assets to capital (Bear ~33, Lehman ~31; the FCIC cites leverage "as high as 40 to 1"), so a **~3% drop** in asset value wipes out *all* their equity ([Ball, "The Fed and Lehman Brothers," NBER 2016](https://conference.nber.org/confer/2016/SI2016/ME/Ball.pdf)). Second, **how they funded it**: not with patient deposits but with **overnight repo** — borrowing every single night against those mortgage bonds. A tower of long-term, hard-to-value assets, financed one night at a time. That's the setup for the phrase that organizes the whole night: **a bank run without a bank.** *(One caveat for a sharp room: the popular "a 2004 SEC rule let them lever up" story is genuinely debated — comparable leverage existed before, and the rule applied at the broker-dealer level, not a holding-company cap. Say "often blamed," not "caused.")*

---

### Act 2 · Break the machine  ·  ~20 min

*Now pull the thread. Same machine, running in reverse — and because you just built it, each collapse points straight at the part that failed.*

#### 1 · 2006–07 — the first cracks

*Visual: the Case-Shiller curve cresting in 2006 and rolling over, with the first two "domino" markers (Bear's funds, BNP Paribas) pinned to mid- and late-2007.*

US home prices peak in **mid-2006** and start to fall — the first national decline since the 1930s, the one the models said couldn't happen ([FDIC, *Crisis and Response*](https://www.fdic.gov/resources/publications/crisis-response/book/crisis-response-chapter-1.pdf)). Subprime borrowers default; the "AAA" bonds built on them wobble. Two early tremors: **Bear Stearns'** two subprime hedge funds freeze redemptions and file for bankruptcy (**July 2007**) ([FCIC Ch. 12](https://fcic-static.law.stanford.edu/cdn_media/fcic-reports/fcic_final_report_chapter12.pdf)); weeks later France's **BNP Paribas freezes three funds (Aug 9, 2007)**, saying it literally *cannot value* them — the day the interbank funding market first seizes.

#### 2 · The run goes public — Northern Rock

*Visual: the depositor queue outside Northern Rock; caption "this is a run — the rest of them you can't see."*

In **September 2007**, British depositors queue around the block to pull their money from **Northern Rock** — the first run on a big British bank in about **140 years**. It's nationalized months later ([UK Parliament, Public Accounts Committee](https://publications.parliament.uk/pa/cm200809/cmselect/cmpubacc/394/394.pdf)). Hold onto this picture: it's the only *visible* run of the crisis. The bigger runs are invisible — they happen in the plumbing.

#### 3 · Bear Stearns — too interconnected to fail

*Visual: a timeline tick at March 2008 — "$2 a share, in a weekend" — with a thought bubble: who's next?*

**March 2008.** Bear Stearns — one of the five big US investment banks — runs out of overnight funding in a single *weekend*; nobody will lend against its collateral anymore. The Fed backstops a fire-sale to **JPMorgan** at **$2 a share** (later raised to $10), taking **$29 billion** of Bear's toxic assets onto its own books via a vehicle called "Maiden Lane" ([Federal Reserve](https://www.federalreserve.gov/regreform/reform-bearstearns.htm)). The repo run just took down a major dealer. The market's next question: *who's next?*

#### 4 · September 2008 — the week it broke

*Visual: THE collapse timeline — the core slide of Act 2 — five escalating severity bars across Sep 7–16, color shifting yellow → red, Lehman the tallest spike.*

Then, in ten days:
- **Sep 7** — the government seizes **Fannie Mae and Freddie Mac**, which stand behind roughly half of all US mortgages, into "conservatorship" ([FHFA](https://www.fhfa.gov/conservatorship/history)).
- **Sep 15** — **Lehman Brothers** files the **largest bankruptcy in US history — ~$639 billion in assets** ([NY Fed](https://www.newyorkfed.org/medialibrary/media/research/epr/2014/1412flem.pdf)). No bailout this time. Panic.
- **Sep 16** — **AIG**, which had insured much of the AAA universe with **~$527 billion** of swaps but posted almost no collateral, gets an **$85 billion** Fed rescue (ultimately **~$182 billion** committed) ([CRS](https://www.congress.gov/crs-product/R42953)). One firm, insuring everyone — a single point of failure.
- **Sep 16** — the **Reserve Primary Fund**, a money-market fund people treated like cash, "**breaks the buck**" on **$785 million** of Lehman paper; **over $40 billion** flees in two days ([Yale, *J. of Financial Crises*](https://elischolar.library.yale.edu/cgi/viewcontent.cgi?article=1655&context=journal-of-financial-crises)). Now the run has reached ordinary savers.

*Define — money-market fund: a fund that holds only short-term, ultra-safe debt and that people and companies use like a cash account — put in $1, take out $1 anytime. It feels like a bank deposit, but is not FDIC-insured.*

*Define — breaking the buck: when a money-market fund's share price slips below its promised $1.00 (Reserve Primary fell to ~97¢) — "cash" that suddenly lost money. It sets off a stampede to redeem, because safety was the only thing the fund promised.*

#### 5 · The bank run without a bank

*Visual: the contagion web — AIG at the center, wired by swaps to every major bank; Lehman's node flips red and collateral-call arrows cascade outward.*

Step back and name what just happened. There was no line of depositors — but there was a **run**. Lenders in the **repo** market yanked their overnight money and demanded more collateral; funding to US dealers collapsed by roughly **$900 billion** ([Gorton, Metrick & Ross, "Who Ran on Repo?" NBER](https://www.nber.org/system/files/working_papers/w18455/w18455.pdf)). Money funds ran. Credit froze for *everyone* — companies that had nothing to do with mortgages suddenly couldn't make payroll. That's the thesis of the night: **2008 was a bank run without a bank** — a panic in the unregulated, short-term-funded shadow-banking system, where mortgage risk had been securitized, rated AAA, and stacked on 30:1 leverage, so an ordinary housing downturn hit a machine with almost no shock absorbers.

#### 6 · The circuit-breaker — TARP

*Visual: the run as a fire and TARP as the foam that smothers it — $700B authorized, capital forced into the banks, the panic arrested over the following weeks. A small "did it cost a fortune?" tag points forward to Myth 3.*

**October 3, 2008:** with credit frozen, Congress authorizes **TARP** — up to **$700 billion** (later capped at $475B) — to inject capital straight into the banks, backstop money funds, and stop the run ([GAO, 2024](https://www.gao.gov/products/gao-24-107033)). It's the most hated bill in memory, and it worked: the free-fall halts over the following weeks. Whether it was the taxpayer giveaway everyone remembers is a myth we settle in a minute (Myth 3, below).

#### 7 · The damage, and the verdict

*Visual: the damage scorecard (−27% home prices · 5% → 10% jobless · 8.7M jobs · −$11T wealth) beside a one-line thesis card: "a bank run without a bank." Take-home slide.*

The bill for the real economy: home prices fell **~27% nationally** (worse — **~35%** across the 20 biggest cities) ([S&P/Case-Shiller via FRED](https://fred.stlouisfed.org/series/CSUSHPINSA)); unemployment doubled from **5% to 10%** and about **8.7 million jobs** vanished ([BLS](https://www.bls.gov/opub/ted/2011/ted_20110504.htm)); household wealth dropped roughly **$11 trillion in 2008 alone** ([Federal Reserve](https://www.federalreserve.gov/newsevents/speech/warsh20090406a.htm)).

And the verdict — with the honest caveat. The consensus on the *mechanism* is strong: securitization + AAA mis-rating + leverage + a runnable funding market. But economists still genuinely split on the deepest "why the recession was so deep": was it mainly the **financial panic** freezing credit (Ben Bernanke's line — the framework that shared the **2022 Nobel**, though the prize cited his 1930s work) ([NobelPrize.org](https://www.nobelprize.org/prizes/economic-sciences/2022/bernanke/facts/)), or **over-indebted households** who stopped spending (**Mian & Sufi**: home-equity borrowing added **$1.25 trillion** and explains **≥39%** of 2006–08 defaults) ([Mian & Sufi, NBER](https://www.nber.org/papers/w15283))? And blame still splits three ways — deregulation, government housing policy, or a global flood of cheap capital.

**One last move before the closer — three comfortable myths to clear.** 2008 is easy to pin on a single villain; in each case the evidence points somewhere less satisfying. One slide each.

#### Myth 1 — "It was greedy homebuyers"

*Visual: the FICO-620 experiment — two near-identical borrowers on either side of the securitization cutoff; the one *just above* the line (easier to sell off) defaults *more*. Caption: "the lender stopped checking once it could sell the loan."*

**The claim:** ordinary people took out loans they knew they couldn't afford. **The problem with it:** the push came from the **supply** side — brokers were paid on *volume* and sold the loan within days, bearing no default risk. **The tell:** loans *just above* the FICO-620 line, where they became easy to securitize, actually **defaulted more** — because once a lender could offload a loan, it stopped screening the borrower.

**Speaker notes:**
- FCIC: "lenders made loans that they knew borrowers could not afford" and "simply took eager borrowers' qualifications on faith" ([FCIC](https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf)).
- The 620 evidence is the cleanest proof: Keys, Mukherjee, Seru & Vig (2010, QJE) showed the *ability to securitize* caused laxer screening — the driver was the pipeline, not the borrower.
- Mian & Sufi: credit surged into ZIP codes with *falling* incomes — supply-push, not demand-pull — precisely because the loans were being sold off.
- The era's "liar loans"/no-doc products were pushed by brokers, often with inflated appraisals; the fraud was frequently on the origination side.
- **Honest nuance:** the FCIC did *not* clear borrowers — Conclusion 4 names "excessive borrowing… by households." Accurate line: not blameless, but the *engine* was reckless credit supply, not a sudden epidemic of consumer greed.

#### Myth 2 — "The CRA and Fannie & Freddie did it"

*Visual: two facts side by side — "~94% of high-cost loans had nothing to do with CRA goals" and a 2004–06 market-share chart showing the GSEs *losing* ground to private-label Wall Street during the worst years.*

**The claim:** government rules forced banks to lend to unqualified borrowers, and the GSEs bought it all. **The evidence against:** only about **6%** of high-cost loans involved CRA-driven lending; the worst subprime came from *nonbank* lenders the CRA never covered; and in the peak years (2004–06), Fannie & Freddie were *losing* share to Wall Street, not leading the charge.

**Speaker notes:**
- Fed Gov. Kroszner (Dec 2008): only ~6% of higher-priced loans were CRA-covered lenders lending to lower-income borrowers/areas *within their assessment areas*; "the evidence does not support the view that the CRA contributed in any substantive way" ([Kroszner, Federal Reserve](https://www.federalreserve.gov/newsevents/speech/kroszner20081203a.htm)).
- The CRA (1977) only covers deposit-taking banks; the worst subprime came from independent nonbanks (New Century, Ameriquest, Countrywide's subprime arm) — and a 1977 law sat 30 years without a crisis.
- FCIC majority: the GSEs "contributed to the crisis, but were not a primary cause"; the CRA "was not a significant factor."
- **Precision:** ~94% means "had nothing to do with CRA *goals*," not "made by non-CRA banks" (some of that 94% was CRA banks lending outside their assessment areas).
- **Not innocent:** Fannie & Freddie held enormous exposure, piled into Alt-A late chasing lost share, and needed a ~$190B rescue — they *amplified* the crisis; they weren't the trigger.
- **Genuinely contested:** the Wallison dissent (AEI) calls government housing policy the crisis's "sine qua non." Frame it as *rejected by the majority, defended by a minority* — not settled.

#### Myth 3 — "The bailouts lost a fortune"

*Visual: the $700B authorization shrinking to a ~$31B net — most of it tagged "housing grants (never meant to be repaid)" — with the bank program (+$16B) and AIG (+$23B) shown net-positive; a second panel "the real cost →" points at moral hazard.*

**The claim:** TARP cost taxpayers hundreds of billions. **The reality:** lifetime net cost was about **$31 billion** — most of it housing *grants* — while the bank-capital program turned a **~$16B profit** and even AIG ended **~$23B net-positive**. The direct injections were largely repaid. **The real cost** wasn't the dollars — it was **moral hazard**, and the fact that Main Street got far less help than Wall Street.

**Speaker notes:**
- GAO: ~$443.5B disbursed; ~$31.1B lifetime net cost; the bank-capital program (CPP) ~+$16.3B; the AIG rescue ~+$22.7B once the government's ~80% stake was sold ([GAO, 2024](https://www.gao.gov/products/gao-24-107033)).
- **The honest caveat (a sharp room will push):** that "profit" is cash accounting that omits opportunity cost *and* the value of the guarantees that never hit a ledger — FDIC backstops, the money-fund guarantee, the Fed's *trillions* in emergency lending below market. "Direct injections largely repaid, net fiscal cost small" is solid; "the bailout was free/profitable overall" is contested.
- TARP was only one slice of the response; the Fed's balance-sheet expansion and the guarantees dwarfed it.
- The critique that actually holds up: too-big-to-fail got *entrenched* (the big banks came out bigger), and the rescue's benefits were lopsided toward Wall Street.

## Market moment (10 min) — 2008 never left: the world it built

*Not a single market event — a synthesis of what 2008 still does to* you, *in three buckets (the rulebook · the habits · the echoes), opening on a live 2025–26 hook. Run-of-show: setup (~1 min) → the rulebook (~3) → the habits (~3) → the echoes (~2) → discussion (~1). The CFPB and Fannie/Freddie items are live court fights — re-verify both the morning of class.*

#### Setup — you didn't live it, you live in it

*Visual: a "born from 2008" callout — the CFPB's job (your cards, student loans, mortgage) beside the 2025–26 headline that it's being gutted.*

You were a kid in 2008. But the crisis quietly rewrote the rules on your loans, the price of your rent, and the politics you inherited. Start with the sharpest proof it isn't history: **the one federal agency created *because* of 2008 — the one that polices your credit cards, student loans, and mortgage — is being dismantled right now, and as of mid-2026 it's alive only by court order.**

#### Bucket 1 — the rulebook (the laws on your money)

*Visual: a before/after "rules that didn't exist in 2007" table — no-doc loans, no stress tests, no consumer bureau → all created after 2008.*

*Define — CFPB (Consumer Financial Protection Bureau): the federal watchdog Dodd-Frank created in 2010 to police consumer finance — credit cards, mortgages, student and auto loans. As of 2026 it's neither abolished nor replaced by a new agency: it's been defunded and gutted by the administration and survives only by court order, its fate unresolved.*

*Define — NINJA loan: shorthand for "No Income, No Job or Assets" — a pre-2008 mortgage a lender would approve without verifying the borrower had any of those. The 2014 Ability-to-Repay rule made them effectively illegal on a primary home.*

- **Dodd-Frank (2010)** rebuilt the guardrails: the **Volcker Rule** (banks can't gamble with depositors' money), **annual stress tests** and thicker capital, an **orderly-liquidation** process so the next Lehman can fail without a blank check — and the **CFPB** ([Federal Reserve History](https://www.federalreservehistory.org/essays/dodd-frank-act)).
- The one you touch most: the **Ability-to-Repay / Qualified Mortgage rule** (2014). It's *why the no-doc "NINJA" loan is dead* — a lender now has to document that you can actually repay ([Federal Register](https://www.federalregister.gov/documents/2013/01/30/2013-00736/ability-to-repay-and-qualified-mortgage-standards-under-the-truth-in-lending-act-regulation-z)). Pre-2008, you could get a mortgage by *stating* an income nobody checked.
- **Live hook — the CFPB is being unwound in real time.** In 2025 the administration ordered a stop-work and sent layoff notices to **~1,400** of ~1,700 staff; in **December 2025** a federal judge called the shutdown a "legally baseless pretext" and ordered it kept funded; in **June 2026** an appeals court sent the fight back down, still unresolved ([NPR](https://www.npr.org/2025/12/30/nx-s1-5661581/cfpb-funding-order)). Courts keep blocking the full shutdown — so it's *hollowed out but alive*, litigation by litigation.
- **Live hook — Fannie & Freddie are still wards of the state.** The "temporary" September 2008 rescue is the crisis's longest-running loose end: **17+ years later they remain in conservatorship** ([FHFA](https://www.fhfa.gov/conservatorship/history)), and a 2025 push to take them public again keeps slipping ("no rush") ([CNN](https://www.cnn.com/2025/08/08/business/fannie-freddie-ipo)).

#### Bucket 2 — the habits and money-world it left behind

*Visual: the Fed-funds rate flatlining at zero across 2008–2015, or a "who owns the starter homes now" panel.*

- **The cheap-money decade.** To stop the bleeding the Fed dropped rates to ~zero (**Dec 16, 2008 → Dec 16, 2015** — a clean seven years) and printed money to buy bonds, ballooning its balance sheet from **~$0.9T to ~$4.5T** ([Federal Reserve](https://www.federalreserve.gov/newsevents/pressreleases/monetary20081216b.htm)). That near-decade of free money *shaped* nearly every asset boom you've watched since — stocks, housing, crypto, startups.
- **A generation started behind.** Graduating into a recession leaves a lasting mark — the classic study finds a **6–7% wage hit for every point of unemployment** at graduation, still measurable ~15 years out ([Kahn, *Labour Economics* 2010](https://www.sciencedirect.com/science/article/abs/pii/S0927537109001018)). It's a real reason your generation rents longer and buys later.
- **Wall Street became your landlord.** Private equity bought the foreclosures: **Blackstone** created **Invitation Homes** in 2012, spent **~$10 billion** scooping up **30,000+** houses, and became the country's largest single-family landlord ([Blackstone](https://www.blackstone.com/insights/article/correcting-the-record-on-blackstone-and-invitation-homes/)). The starter home you're bidding on, an institution may have bought first — out of the wreckage of 2008.
- **"Too big to fail" got bigger.** The rescues *concentrated* the industry: JPMorgan swallowed Bear and Washington Mutual, Bank of America took Merrill, Wells took Wachovia ([Federal Reserve](https://www.federalreserve.gov/newsevents/press/orders/20081126a.htm)). The banks we couldn't afford to lose came out larger.

#### Bucket 3 — the echoes (things you know, rooted in 2008)

*Visual: THE "children of 2008" web — Bitcoin, the Tea Party, Occupy, and Airbnb/Uber all branching from one root labeled "2008." Take-home slide.*

*Define — the Tea Party: a right-wing populist movement that erupted in 2009 around anger at the bailouts and government spending, pushing lower taxes and smaller government. It reshaped the Republican Party and powered the 2010 midterm wave.*

*Define — Occupy Wall Street: a left-wing protest movement that began in September 2011 in a park beside Wall Street, protesting economic inequality and the power of banks after the bailouts. Its slogan "we are the 99%" put inequality into everyday language.*

- **Bitcoin.** The very first Bitcoin block (**Jan 3, 2009**) has a message buried in its code: *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"* — a real newspaper front page ([Bitcoin genesis block](https://en.bitcoin.it/wiki/Genesis_block)). Crypto was *born* as a protest against bank bailouts.
- **The politics — both sides.** The **Tea Party** traces to a CNBC trading-floor rant against mortgage relief (**Feb 2009**) ([CNBC](https://www.cnbc.com/video/2015/02/06/santellis-tea-party-rant-february-19-2009.html)); **Occupy Wall Street** — "we are the 99%" — hit Zuccotti Park in **2011**. Left and right populism both light their fuse on the same bailouts.
- **The gig economy.** **Airbnb (2008)** and **Uber (2009)** were founded in the downturn as ways to squeeze income from a spare room or a car ([Britannica](https://www.britannica.com/money/Airbnb)) — then scaled on Bucket 2's cheap money.

#### Discussion prompts

- You were a kid in 2008. Which of these do you actually *feel* — renting longer, distrusting banks, or investing into the cheap-money boom it created?
- The CFPB was built to protect you and is being dismantled right now. Should it exist — and if not it, who watches out for the consumer?
- Bitcoin was invented to escape the system that got bailed out. Did it escape — or just become one more asset in the same casino?
- Seventeen years on, the too-big-to-fail banks are bigger and Fannie & Freddie are still wards of the state. Be honest: did we fix 2008, or just paper over it?
