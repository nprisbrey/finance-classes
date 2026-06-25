import "./MarketMoment.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export interface MarketStat {
  value: string;
  label: string;
  direction?: "up" | "down" | "flat";
}

export interface MarketMomentProps {
  eyebrow?: string;
  /** Dateline, e.g. "May 16, 2025". */
  date?: string;
  headline: string;
  /** Summary / sub-headline. */
  dek?: ReactNode;
  /** A ticker-style row of figures (yields, rates, deltas). */
  stats?: MarketStat[];
  source?: string;
  footerNote?: string;
}

/** The closing market-moment slide, styled like a news/markets card. */
export function MarketMoment({
  eyebrow = "Market moment · 10 min",
  date,
  headline,
  dek,
  stats,
  source,
  footerNote,
}: MarketMomentProps) {
  return (
    <Slide variant="mist" footerNote={footerNote}>
      <div className="cmt-market">
        <div className="cmt-market__bar">
          <span className="cmt-eyebrow">{eyebrow}</span>
          {date && <span className="cmt-market__date cmt-num">{date}</span>}
        </div>
        <div className="cmt-market__card">
          <h1 className="cmt-market__headline">{headline}</h1>
          {dek && <p className="cmt-market__dek">{dek}</p>}
          {stats && stats.length > 0 && (
            <div className="cmt-market__ticker">
              {stats.map((s, i) => (
                <div key={i} className={`cmt-tick cmt-tick--${s.direction ?? "flat"}`}>
                  <span className="cmt-tick__value cmt-num">
                    {s.direction === "up" ? "▲ " : s.direction === "down" ? "▼ " : ""}
                    {s.value}
                  </span>
                  <span className="cmt-tick__label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
          {source && <p className="cmt-market__source">{source}</p>}
        </div>
      </div>
    </Slide>
  );
}
