import { StatCallout } from "compound-money-talk-design";

export const ThreeStats = () => (
  <StatCallout
    eyebrow="Why APR matters"
    title="A $15 fee per $100 isn't small"
    stats={[
      { value: "391%", label: "payday loan APR", source: "$15/$100 over 14 days · CFPB" },
      {
        value: "21.0%",
        label: "avg. U.S. card APR",
        delta: { value: "0.03", direction: "up" },
        source: "Fed G.19, Q1 2026",
      },
      { value: "$6,715", label: "avg. balance per borrower", source: "TransUnion, Q4 2025" },
    ]}
  />
);

export const SingleStat = () => (
  <StatCallout
    eyebrow="The headline number"
    stats={[
      {
        value: "391%",
        label: "effective APR on a $15-per-$100 payday loan rolled over for a year",
        source: "CFPB",
      },
    ]}
  />
);
