import "./Quote.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export interface QuoteProps {
  /** The pull-quote text. */
  quote: ReactNode;
  /** Who/what it's attributed to. */
  attribution?: string;
  /** Extra context line, e.g. a date or source. */
  context?: string;
  /** Surface treatment. */
  variant?: "light" | "ink";
  footerNote?: string;
}

/** A single, large pull-quote — for a definition, stat, or notable line. */
export function Quote({
  quote,
  attribution,
  context,
  variant = "ink",
  footerNote,
}: QuoteProps) {
  return (
    <Slide variant={variant} footer={variant !== "ink"} footerNote={footerNote}>
      <figure className="wmt-quote">
        <span className="wmt-quote__mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="wmt-quote__text">{quote}</blockquote>
        {(attribution || context) && (
          <figcaption className="wmt-quote__cite">
            {attribution && <span className="wmt-quote__who">{attribution}</span>}
            {context && <span className="wmt-quote__ctx">{context}</span>}
          </figcaption>
        )}
      </figure>
    </Slide>
  );
}
