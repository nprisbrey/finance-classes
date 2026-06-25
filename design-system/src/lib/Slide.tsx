import "./Slide.css";
import type { ReactNode } from "react";

export type SlideVariant = "light" | "mist" | "ink";

export interface SlideProps {
  /** Slide content. */
  children: ReactNode;
  /** Surface style. `ink` is the dark cover / section-divider treatment. */
  variant?: SlideVariant;
  /** Show the Compound Money Talk footer bar. */
  footer?: boolean;
  /** Small right-aligned footer note, e.g. "Week 1 · Credit". */
  footerNote?: string;
  className?: string;
}

/**
 * The fixed 16:9 canvas every slide renders inside. Owns the brand footer
 * and the three surface treatments (light, mist, ink).
 */
export function Slide({
  children,
  variant = "light",
  footer = true,
  footerNote,
  className,
}: SlideProps) {
  return (
    <section
      className={`cmt-root cmt-slide cmt-slide--${variant}${
        className ? " " + className : ""
      }`}
    >
      <div className="cmt-slide__body">{children}</div>
      {footer && (
        <footer className="cmt-slide__footer">
          <span className="cmt-slide__brand">
            <span className="cmt-slide__dot" aria-hidden="true" />
            Compound Money Talk
          </span>
          {footerNote && <span className="cmt-slide__note cmt-num">{footerNote}</span>}
        </footer>
      )}
    </section>
  );
}
