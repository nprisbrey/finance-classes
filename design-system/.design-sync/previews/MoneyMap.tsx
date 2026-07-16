import { MoneyMap } from "compound-money-talk-design";

// Level 3's centerpiece — every legal move between wrappers, all roads to Roth,
// and the HSA as the box with no exit arrow.
export const Week4 = () => (
  <MoneyMap
    eyebrow="Level 3 · The money map"
    title="Moving money between the boxes"
    flows={[
      {
        from: "Traditional IRA",
        fromSub: "pre-tax dollars",
        label: "conversion / backdoor",
        to: "Roth IRA",
      },
      {
        from: "After-tax 401(k)",
        fromSub: "beyond the $24,500 deferral",
        label: "mega backdoor",
        to: "Roth IRA",
      },
      {
        from: "Old 401(k)",
        fromSub: "from a job you left",
        label: "rollover — direct!",
        to: "IRA",
        tone: "neutral",
      },
      {
        from: "529",
        fromSub: "leftover college money",
        label: "SECURE 2.0 · $35k cap",
        to: "Roth IRA",
      },
      {
        from: "HSA",
        fromSub: "the shoebox",
        label: "no arrow out — ever",
        dead: true,
        tone: "muted",
      },
    ]}
    caption="Every arrow is a legal move, and every move is a tax decision. The HSA has no exit — and that's its superpower."
    footerNote="Week 4 · Tax-Advantaged Accounts"
  />
);
