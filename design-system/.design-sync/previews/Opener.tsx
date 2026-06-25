import { Opener } from "compound-money-talk-design";

export const RoundTable = () => (
  <Opener
    prompts={[
      "Anything new you did with money this week?",
      "Something interesting you learned about finance?",
      "A new investment you're looking at or like?",
    ]}
    nudge="has anyone checked their credit score lately, or done something that moved it?"
  />
);

export const CustomHeading = () => (
  <Opener
    eyebrow="Opener · 10 min"
    title="Wins & questions"
    prompts={[
      "A money win — big or small — from this week?",
      "Anything that confused or surprised you?",
    ]}
    nudge="we'll start on credit once everyone's shared."
  />
);
