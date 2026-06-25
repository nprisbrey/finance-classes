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
      <figure className="cmt-quote">
        <span className="cmt-quote__mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="cmt-quote__text">{quote}</blockquote>
        {(attribution || context) && (
          <figcaption className="cmt-quote__cite">
            {attribution && <span className="cmt-quote__who">{attribution}</span>}
            {context && <span className="cmt-quote__ctx">{context}</span>}
          </figcaption>
        )}
      </figure>
    </Slide>
  );
}
