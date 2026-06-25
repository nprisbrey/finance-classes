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
      <div className="wmt-market">
        <div className="wmt-market__bar">
          <span className="wmt-eyebrow">{eyebrow}</span>
          {date && <span className="wmt-market__date wmt-num">{date}</span>}
        </div>
        <div className="wmt-market__card">
          <h1 className="wmt-market__headline">{headline}</h1>
          {dek && <p className="wmt-market__dek">{dek}</p>}
          {stats && stats.length > 0 && (
            <div className="wmt-market__ticker">
              {stats.map((s, i) => (
                <div key={i} className={`wmt-tick wmt-tick--${s.direction ?? "flat"}`}>
                  <span className="wmt-tick__value wmt-num">
                    {s.direction === "up" ? "▲ " : s.direction === "down" ? "▼ " : ""}
                    {s.value}
                  </span>
                  <span className="wmt-tick__label">{s.label}</span>
                </div>
              ))}
            </div>
          )}
          {source && <p className="wmt-market__source">{source}</p>}
        </div>
      </div>
    </Slide>
  );
}
