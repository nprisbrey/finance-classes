import { Discussion } from "compound-money-talk-design";

export const Questions = () => (
  <Discussion
    questions={[
      "What's the personal-finance equivalent of 'debt at 134% of GDP'?",
      "Does a rating still matter if markets shrug it off?",
      "Buying a house in 18 months — which lever do you actually pull?",
    ]}
  />
);

export const CustomTitle = () => (
  <Discussion
    title="Before we close"
    questions={[
      "What's one thing you'll change about how you use credit?",
      "Who's going to pull their free report this week?",
    ]}
  />
);
