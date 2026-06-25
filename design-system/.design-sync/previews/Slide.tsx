import { Slide } from "compound-money-talk-design";

const Body = ({ surface }: { surface: string }) => (
  <>
    <span className="cmt-eyebrow">The frame</span>
    <h1
      style={{
        fontSize: "var(--cmt-fs-h1)",
        fontWeight: 700,
        marginTop: "var(--cmt-s3)",
        letterSpacing: "var(--cmt-tracking-tight)",
        maxWidth: "20ch",
      }}
    >
      Every slide renders inside Slide
    </h1>
    <p
      style={{
        fontSize: "var(--cmt-fs-h3)",
        color: "var(--cmt-muted)",
        marginTop: "var(--cmt-s4)",
        maxWidth: "54ch",
      }}
    >
      {surface}
    </p>
  </>
);

export const Light = () => (
  <Slide footerNote="Week 1 · Credit">
    <Body surface="The light surface is the default for content slides. The brand mark sits quietly in the top-right corner." />
  </Slide>
);

export const Mist = () => (
  <Slide variant="mist" footerNote="Week 1 · Credit">
    <Body surface="The mist surface — a soft tint that lifts cards and tables off the page without going dark." />
  </Slide>
);

export const Ink = () => (
  <Slide variant="ink">
    <Body surface="The ink surface — the dark treatment for covers and section dividers, with a subtle brand glow." />
  </Slide>
);
