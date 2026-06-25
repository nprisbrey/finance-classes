import "./Slide.css";
import type { ReactNode } from "react";

export type SlideVariant = "light" | "mist" | "ink";

export interface SlideProps {
  /** Slide content. */
  children: ReactNode;
  /** Surface style. `ink` is the dark cover / section-divider treatment. */
  variant?: SlideVariant;
  /**
   * Show the small brand mark in the top-right corner. The full
   * "Compound Money Talk" wordmark is reserved for the Cover / dividers,
   * which set this `false`.
   */
  footer?: boolean;
  /** Small bottom-right wayfinding note, e.g. "Week 1 · Credit". */
  footerNote?: string;
  className?: string;
}

/**
 * The fixed 16:9 canvas every slide renders inside. Owns the corner brand
 * mark, the bottom-right note, and the three surface treatments
 * (light, mist, ink).
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
      {footer && (
        <span className="cmt-slide__mark" aria-hidden="true">
          <span className="cmt-slide__bars">
            <i />
            <i />
            <i />
          </span>
        </span>
      )}
      <div className="cmt-slide__body">{children}</div>
      {footerNote && (
        <footer className="cmt-slide__footer">
          <span className="cmt-slide__note cmt-num">{footerNote}</span>
        </footer>
      )}
    </section>
  );
}
