import { createRoot } from "react-dom/client";
import type { ReactNode } from "react";
import {
  Cover,
  Opener,
  ModuleMenu,
  ModuleDivider,
  Content,
  StatCallout,
  Compare,
  Quote,
  MarketMoment,
  Discussion,
  Sources,
} from "../src/index";

function Thumb({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="thumb">
      <div className="thumb__label">{label}</div>
      <div className="thumb__scale">
        <div className="thumb__frame">{children}</div>
      </div>
    </div>
  );
}

const modules = [
  { id: "M1", title: "Credit 101 — what it is & its types", minutes: 6 },
  { id: "M2", title: "The cost of credit — interest & APR", minutes: 7 },
  { id: "M3", title: "Credit scores & what moves them", minutes: 8 },
  { id: "M4", title: "Your report, inquiries & your rights", minutes: 5 },
  { id: "M5", title: "Building credit from scratch", minutes: 7, note: "most actionable" },
  { id: "M6", title: "Borrowing with others & qualifying", minutes: 5 },
  { id: "M7", title: "Credit beyond you — bond ratings", minutes: 8, note: "deep dive" },
];

function App() {
  return (
    <div className="grid">
      <Thumb label="Cover">
        <Cover week="Week 1" title="Credit" subtitle="How borrowing works, and how to build a file that works for you." />
      </Thumb>
      <Thumb label="Opener">
        <Opener
          prompts={[
            "Anything new you did with money this week?",
            "Something interesting you learned about finance?",
            "A new investment you're looking at or like?",
          ]}
          nudge="has anyone checked their credit score lately, or done something that moved it?"
        />
      </Thumb>
      <Thumb label="ModuleMenu">
        <ModuleMenu modules={modules} footerNote="Week 1 · Credit" />
      </Thumb>
      <Thumb label="ModuleDivider">
        <ModuleDivider id="M2" title="The cost of credit" minutes={7} blurb="Interest, APR, and why the minimum payment is the most expensive way to repay." />
      </Thumb>
      <Thumb label="Content">
        <Content
          eyebrow="M2 · Interest & APR"
          title="The minimum-payment trap"
          lead="A $1,500 student-card balance at a 24% APR, paying only the minimum."
          points={[
            { text: "First payment ≈ $45 — ~$30 is pure interest, only ~$15 touches principal." },
            { text: "Paid off in ~6.7 years and ~$1,400 in interest — nearly doubling what you borrowed.", sub: ["Total repaid ≈ $2,940"] },
            { text: "Pay a fixed $100/month instead → gone in ~18 months, ~$300 interest." },
          ]}
          footerNote="Week 1 · Credit"
        />
      </Thumb>
      <Thumb label="StatCallout">
        <StatCallout
          eyebrow="Why APR matters"
          title="A $15 fee per $100 isn't small"
          stats={[
            { value: "391%", label: "payday loan APR", source: "$15/$100 over 14 days · CFPB" },
            { value: "21.0%", label: "avg. U.S. card APR", delta: { value: "0.03", direction: "up" }, source: "Fed G.19, Q1 2026" },
            { value: "$6,715", label: "avg. balance per borrower", source: "TransUnion, Q4 2025" },
          ]}
        />
      </Thumb>
      <Thumb label="Compare">
        <Compare
          eyebrow="M1 · Types of credit"
          title="Secured vs. unsecured"
          columns={[
            { head: "Secured", tone: "accent", sub: "backed by collateral", points: ["Mortgage, auto, HELOC, secured card", "Lower APR — lender can recover losses", "Default → repossession / foreclosure"] },
            { head: "Unsecured", tone: "neutral", sub: "no collateral", points: ["Most cards, personal & student loans", "Higher APR — only recourse is the courts", "Default → collections / charge-off"] },
          ]}
          caption="A $12,000 used car: ~$2,440 interest secured vs. ~$3,800 unsecured — a ~$1,360 premium."
          footerNote="Week 1 · Credit"
        />
      </Thumb>
      <Thumb label="Quote">
        <Quote
          quote="A sovereign credit rating is just a credit score for a country."
          attribution="The tie-in"
          context="Aaa → Aa1 is like slipping from an 820 to ~790 — still excellent, no longer perfect."
        />
      </Thumb>
      <Thumb label="MarketMoment">
        <MarketMoment
          date="May 16, 2025"
          headline="Moody's strips the U.S. of its last AAA rating"
          dek="Downgraded Aaa → Aa1 — the last of the Big Three to cut the U.S. from top tier, a status held since 1917."
          stats={[
            { value: "5.01%", label: "30-yr Treasury yield", direction: "up" },
            { value: "6.81→6.89%", label: "30-yr mortgage, 2 wks", direction: "up" },
            { value: "~20.1%", label: "avg. card APR", direction: "flat" },
          ]}
          source="Moody's · Freddie Mac · LendingTree"
        />
      </Thumb>
      <Thumb label="Discussion">
        <Discussion
          questions={[
            "What's the personal-finance equivalent of 'debt at 134% of GDP'?",
            "Does a rating still matter if markets shrug it off?",
            "Buying a house in 18 months — which lever do you actually pull?",
          ]}
        />
      </Thumb>
      <Thumb label="Sources">
        <Sources
          groups={[
            { label: "Scores & reports", items: ["myFICO — what's in your score", "VantageScore — 5.0 / 4.0 weights", "CFPB — report vs. score, disputes, freeze", "FTC — free weekly reports"] },
            { label: "Rates & ratings", items: ["Federal Reserve G.19", "Freddie Mac PMMS", "S&P 2024 default study", "Moody's — U.S. rating action"] },
          ]}
          footerNote="Week 1 · Credit"
        />
      </Thumb>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
