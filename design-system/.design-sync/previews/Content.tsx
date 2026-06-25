import { Content } from "compound-money-talk-design";

export const BulletsWithSub = () => (
  <Content
    eyebrow="M2 · Interest & APR"
    title="The minimum-payment trap"
    lead="A $1,500 student-card balance at a 24% APR, paying only the minimum."
    points={[
      { text: "First payment ≈ $45 — ~$30 is pure interest, only ~$15 touches principal." },
      {
        text: "Paid off in ~6.7 years and ~$1,400 in interest — nearly doubling what you borrowed.",
        sub: ["Total repaid ≈ $2,940"],
      },
      { text: "Pay a fixed $100/month instead → gone in ~18 months, ~$300 interest." },
    ]}
    footerNote="Week 1 · Credit"
  />
);

export const PlainBullets = () => (
  <Content
    eyebrow="M5 · Building credit"
    title="Three ways to start a file from scratch"
    points={[
      "Become an authorized user on a trusted card.",
      "Open a secured card and keep utilization under 10%.",
      "Report rent through a service like MyCreditLift.",
    ]}
    footerNote="Week 1 · Credit"
  />
);
