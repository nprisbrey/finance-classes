import { Tranches, type Tranche } from "compound-money-talk-design";

const tranches: Tranche[] = [
  { rating: "AAA", label: "Senior", size: 80, note: "$80M · 80%", role: "paid first · loses last", tone: "senior" },
  { rating: "BBB", label: "Mezzanine", size: 15, note: "$15M · 15%", role: "paid second · loses second", tone: "mezz" },
  { rating: "—", label: "Equity", size: 5, note: "$5M · 5%", role: "paid last · first loss", tone: "equity" },
];

// Beat 3 — the machine working: a 5% loss wipes only the equity slice.
export const Normal = () => (
  <Tranches
    eyebrow="Act 1 · Build the machine"
    title={`How subprime became "AAA"`}
    poolLabel="$100M pool of 1,000 subprime mortgages"
    tranches={tranches}
    cushion={{ pct: 20, label: "20% cushion" }}
    loss={{ pct: 5, label: "5% loss" }}
    caption="Cash is paid top-down (senior first); losses fill bottom-up (equity first). ~80% of a subprime pool comes out stamped AAA."
    footerNote="Week 5 · The 2008 Financial Crisis"
  />
);

// Beat 4 — the machine breaking: a 25% loss punches through the cushion into AAA.
export const Crisis = () => (
  <Tranches
    eyebrow="Act 1 · The lie in the slice"
    title="When the cushion breaks"
    poolLabel="Same pool — but losses correlate across the whole country"
    tranches={tranches}
    cushion={{ pct: 20, label: "20% cushion" }}
    loss={{ pct: 25, label: "25% loss → AAA" }}
    caption={`A national price drop makes defaults hit together. Losses blow through the 20% cushion, and the "safe" senior slice takes a ~6% hit.`}
    footerNote="Week 5 · The 2008 Financial Crisis"
  />
);
