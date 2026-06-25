import { Quote } from "compound-money-talk-design";

export const Ink = () => (
  <Quote
    quote="A sovereign credit rating is just a credit score for a country."
    attribution="The tie-in"
    context="Aaa → Aa1 is like slipping from an 820 to ~790 — still excellent, no longer perfect."
  />
);

export const Light = () => (
  <Quote
    variant="light"
    quote="Your credit score is a rear-view mirror, not a windshield."
    attribution="Reframe"
    context="It rates how you've handled credit before — not whether you can afford something now."
    footerNote="Week 1 · Credit"
  />
);
