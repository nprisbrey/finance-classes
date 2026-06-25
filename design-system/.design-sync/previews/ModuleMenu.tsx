import { ModuleMenu } from "compound-money-talk-design";

export const PickYourPath = () => (
  <ModuleMenu
    modules={[
      { id: "M1", title: "Credit 101 — what it is & its types", minutes: 6 },
      { id: "M2", title: "The cost of credit — interest & APR", minutes: 7 },
      { id: "M3", title: "Credit scores & what moves them", minutes: 8 },
      { id: "M4", title: "Your report, inquiries & your rights", minutes: 5 },
      { id: "M5", title: "Building credit from scratch", minutes: 7, note: "most actionable" },
      { id: "M6", title: "Borrowing with others & qualifying", minutes: 5 },
      { id: "M7", title: "Credit beyond you — bond ratings", minutes: 8, note: "deep dive" },
    ]}
    footerNote="Week 1 · Credit"
  />
);

export const Compact = () => (
  <ModuleMenu
    title="Today's three"
    modules={[
      { id: "A", title: "What a score actually measures", minutes: 10 },
      { id: "B", title: "Building a file from scratch", minutes: 10, note: "most actionable" },
      { id: "C", title: "Bond ratings — credit at country scale", minutes: 10 },
    ]}
    footerNote="Week 1 · Credit"
  />
);
