import "./Wordmark.css";

export interface WordmarkProps {
  /** Full name or the short "CMT" monogram. */
  variant?: "full" | "mark";
  /** Color treatment for the surface it sits on. */
  tone?: "ink" | "light";
  className?: string;
}

/** The Compound Money Talk logo: an ascending-bars glyph + wordmark. */
export function Wordmark({
  variant = "full",
  tone = "ink",
  className,
}: WordmarkProps) {
  return (
    <span
      className={`cmt-root cmt-wordmark cmt-wordmark--${tone}${
        className ? " " + className : ""
      }`}
    >
      <span className="cmt-wordmark__glyph" aria-hidden="true">
        <span className="cmt-wordmark__bars">
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="cmt-wordmark__name">
        {variant === "full" ? "Compound Money Talk" : "CMT"}
      </span>
    </span>
  );
}
