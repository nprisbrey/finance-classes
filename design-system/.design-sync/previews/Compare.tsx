import { Compare } from "compound-money-talk-design";

export const TwoColumns = () => (
  <Compare
    eyebrow="M1 · Types of credit"
    title="Secured vs. unsecured"
    columns={[
      {
        head: "Secured",
        tone: "accent",
        sub: "backed by collateral",
        points: [
          "Mortgage, auto, HELOC, secured card",
          "Lower APR — lender can recover losses",
          "Default → repossession / foreclosure",
        ],
      },
      {
        head: "Unsecured",
        tone: "neutral",
        sub: "no collateral",
        points: [
          "Most cards, personal & student loans",
          "Higher APR — only recourse is the courts",
          "Default → collections / charge-off",
        ],
      },
    ]}
    caption="A $12,000 used car: ~$2,440 interest secured vs. ~$3,800 unsecured — a ~$1,360 premium."
    footerNote="Week 1 · Credit"
  />
);

export const ThreeColumns = () => (
  <Compare
    eyebrow="M1 · Types of credit"
    title="Three shapes of credit"
    columns={[
      { head: "Revolving", sub: "cards, HELOC", points: ["Borrow, repay, reuse", "Utilization is what shows"] },
      { head: "Installment", tone: "accent", sub: "auto, student, mortgage", points: ["Fixed term & payment", "Builds payment history"] },
      { head: "Open", sub: "charge cards, utilities", points: ["Paid in full each month", "Reported, not revolving"] },
    ]}
    footerNote="Week 1 · Credit"
  />
);
