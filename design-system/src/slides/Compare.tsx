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
      <div className="cmt-compare">
        <div className="cmt-compare__head">
          {eyebrow && <span className="cmt-eyebrow">{eyebrow}</span>}
          <h1 className="cmt-compare__title">{title}</h1>
        </div>
        <div
          className="cmt-compare__cols"
          data-count={Math.min(columns.length, 3)}
        >
          {columns.map((c, i) => (
            <div
              key={i}
              className={`cmt-compare__col cmt-compare__col--${c.tone ?? "neutral"}`}
            >
              <div className="cmt-compare__colhead">
                <span className="cmt-compare__chip">{c.head}</span>
                {c.sub && <span className="cmt-compare__sub">{c.sub}</span>}
              </div>
              <ul className="cmt-compare__list">
                {c.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {caption && <p className="cmt-compare__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
