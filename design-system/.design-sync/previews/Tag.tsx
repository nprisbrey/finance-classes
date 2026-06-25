import { Tag } from "compound-money-talk-design";

export const AllTones = () => (
  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
    <Tag tone="accent">Accent</Tag>
    <Tag tone="neutral">Neutral</Tag>
    <Tag tone="pos">+2.1%</Tag>
    <Tag tone="neg">−0.8%</Tag>
  </div>
);

export const InContext = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Tag tone="accent">7 min</Tag>
    <Tag tone="neutral">deep dive</Tag>
  </div>
);
