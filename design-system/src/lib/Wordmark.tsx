import "./Wordmark.css";

export interface WordmarkProps {
  /** Full name or the short "WMT" monogram. */
  variant?: "full" | "mark";
  /** Color treatment for the surface it sits on. */
  tone?: "ink" | "light";
  className?: string;
}

/** The Weekly Money Talk logo: an ascending-bars glyph + wordmark. */
export function Wordmark({
  variant = "full",
  tone = "ink",
  className,
}: WordmarkProps) {
  return (
    <span
      className={`wmt-root wmt-wordmark wmt-wordmark--${tone}${
        className ? " " + className : ""
      }`}
    >
      <span className="wmt-wordmark__glyph" aria-hidden="true">
        <span className="wmt-wordmark__bars">
          <i />
          <i />
          <i />
        </span>
      </span>
      <span className="wmt-wordmark__name">
        {variant === "full" ? "Weekly Money Talk" : "WMT"}
      </span>
    </span>
  );
}
