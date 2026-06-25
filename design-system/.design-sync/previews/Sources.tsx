import { Sources } from "compound-money-talk-design";

export const Grouped = () => (
  <Sources
    groups={[
      {
        label: "Scores & reports",
        items: [
          "myFICO — what's in your score",
          "VantageScore — 5.0 / 4.0 weights",
          "CFPB — report vs. score, disputes, freeze",
          "FTC — free weekly reports",
        ],
      },
      {
        label: "Rates & ratings",
        items: [
          "Federal Reserve G.19",
          "Freddie Mac PMMS",
          "S&P 2024 default study",
          "Moody's — U.S. rating action",
        ],
      },
    ]}
    footerNote="Week 1 · Credit"
  />
);

export const FlatList = () => (
  <Sources
    items={[
      "myFICO — what's in your score",
      "CFPB — credit reports & disputes",
      "Federal Reserve G.19 — consumer credit",
      "Moody's — U.S. rating action",
    ]}
    footerNote="Week 1 · Credit"
  />
);
