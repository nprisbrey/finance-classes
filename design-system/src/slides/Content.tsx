import "./Content.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export interface ContentPoint {
  text: ReactNode;
  /** One level of nested detail. */
  sub?: ReactNode[];
}

export interface ContentProps {
  /** Eyebrow above the title, e.g. "M2 · Interest & APR". */
  eyebrow?: string;
  /** Slide headline. */
  title: string;
  /** Optional lead sentence under the title. */
  lead?: string;
  /** Bullet points — plain strings or {text, sub} for nesting. */
  points?: Array<string | ContentPoint>;
  /** Optional content rendered in a right-hand column (Stat, Compare, etc.). */
  aside?: ReactNode;
  footerNote?: string;
}

function asPoint(p: string | ContentPoint): ContentPoint {
  return typeof p === "string" ? { text: p } : p;
}

/** The workhorse: eyebrow + headline + bullets, with an optional right aside. */
export function Content({
  eyebrow,
  title,
  lead,
  points = [],
  aside,
  footerNote,
}: ContentProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className={`wmt-content${aside ? " wmt-content--split" : ""}`}>
        <div className="wmt-content__main">
          {eyebrow && <span className="wmt-eyebrow">{eyebrow}</span>}
          <h1 className="wmt-content__title">{title}</h1>
          {lead && <p className="wmt-content__lead">{lead}</p>}
          {points.length > 0 && (
            <ul className="wmt-content__list">
              {points.map(asPoint).map((p, i) => (
                <li key={i} className="wmt-content__item">
                  <span className="wmt-content__bullet" aria-hidden="true" />
                  <div className="wmt-content__text">
                    <span>{p.text}</span>
                    {p.sub && p.sub.length > 0 && (
                      <ul className="wmt-content__sublist">
                        {p.sub.map((s, j) => (
                          <li key={j}>{s}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {aside && <div className="wmt-content__aside">{aside}</div>}
      </div>
    </Slide>
  );
}
