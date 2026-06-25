import { Wordmark } from "compound-money-talk-design";

export const Full = () => <Wordmark variant="full" />;

export const Mark = () => <Wordmark variant="mark" />;

export const OnDark = () => (
  <div
    style={{
      background: "var(--cmt-ink)",
      padding: "32px 40px",
      borderRadius: "16px",
      display: "inline-block",
    }}
  >
    <Wordmark variant="full" tone="light" />
  </div>
);
