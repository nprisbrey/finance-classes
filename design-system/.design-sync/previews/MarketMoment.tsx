import { MarketMoment } from "compound-money-talk-design";

export const Moodys = () => (
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
);
