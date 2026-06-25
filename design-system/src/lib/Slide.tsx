import "./Slide.css";
import type { ReactNode } from "react";

export type SlideVariant = "light" | "mist" | "ink";

export interface SlideProps {
  /** Slide content. */
  children: ReactNode;
  /** Surface style. `ink` is the dark cover / section-divider treatment. */
  variant?: SlideVariant;
  /** Show the Weekly Money Talk footer bar. */
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
      className={`wmt-root wmt-slide wmt-slide--${variant}${
        className ? " " + className : ""
      }`}
    >
      <div className="wmt-slide__body">{children}</div>
      {footer && (
        <footer className="wmt-slide__footer">
          <span className="wmt-slide__brand">
            <span className="wmt-slide__dot" aria-hidden="true" />
            Weekly Money Talk
          </span>
          {footerNote && <span className="wmt-slide__note wmt-num">{footerNote}</span>}
        </footer>
      )}
    </section>
  );
}
