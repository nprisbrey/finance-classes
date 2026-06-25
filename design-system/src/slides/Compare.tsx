import "./Compare.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export interface CompareColumn {
  /** Column header, e.g. "Secured". */
  head: string;
  /** Header chip tone. */
  tone?: "accent" | "neutral" | "pos" | "neg";
  /** Optional one-line subhead. */
  sub?: string;
  points: ReactNode[];
}

export interface CompareProps {
  eyebrow?: string;
  title: string;
  /** Two or three columns laid out side by side. */
  columns: CompareColumn[];
  /** Optional takeaway caption under the columns. */
  caption?: ReactNode;
  footerNote?: string;
}

/** Side-by-side comparison — secured vs. unsecured, FICO vs. VantageScore, etc. */
export function Compare({
  eyebrow,
  title,
  columns,
  caption,
  footerNote,
}: CompareProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className="wmt-compare">
        <div className="wmt-compare__head">
          {eyebrow && <span className="wmt-eyebrow">{eyebrow}</span>}
          <h1 className="wmt-compare__title">{title}</h1>
        </div>
        <div
          className="wmt-compare__cols"
          data-count={Math.min(columns.length, 3)}
        >
          {columns.map((c, i) => (
            <div
              key={i}
              className={`wmt-compare__col wmt-compare__col--${c.tone ?? "neutral"}`}
            >
              <div className="wmt-compare__colhead">
                <span className="wmt-compare__chip">{c.head}</span>
                {c.sub && <span className="wmt-compare__sub">{c.sub}</span>}
              </div>
              <ul className="wmt-compare__list">
                {c.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {caption && <p className="wmt-compare__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
