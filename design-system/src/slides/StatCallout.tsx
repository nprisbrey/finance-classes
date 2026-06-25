import "./StatCallout.css";
import { Slide } from "../lib/Slide";

export interface Stat {
  /** The headline figure, e.g. "391%" or "$6,715". */
  value: string;
  /** What it measures. */
  label: string;
  /** Optional change indicator. */
  delta?: { value: string; direction: "up" | "down" };
  /** Optional source caption under the stat. */
  source?: string;
}

export interface StatCalloutProps {
  eyebrow?: string;
  title?: string;
  /** 1–4 big figures shown as a responsive row of cards. */
  stats: Stat[];
  footerNote?: string;
}

/** Big-number callout — the slide that makes a figure land. */
export function StatCallout({
  eyebrow,
  title,
  stats,
  footerNote,
}: StatCalloutProps) {
  return (
    <Slide variant="mist" footerNote={footerNote}>
      <div className="wmt-stats">
        {(eyebrow || title) && (
          <div className="wmt-stats__head">
            {eyebrow && <span className="wmt-eyebrow">{eyebrow}</span>}
            {title && <h1 className="wmt-stats__title">{title}</h1>}
          </div>
        )}
        <div
          className="wmt-stats__grid"
          data-count={Math.min(stats.length, 4)}
        >
          {stats.map((s, i) => (
            <div key={i} className="wmt-stat">
              <div className="wmt-stat__value wmt-num">
                {s.value}
                {s.delta && (
                  <span
                    className={`wmt-stat__delta wmt-stat__delta--${s.delta.direction}`}
                  >
                    {s.delta.direction === "up" ? "▲" : "▼"} {s.delta.value}
                  </span>
                )}
              </div>
              <div className="wmt-stat__label">{s.label}</div>
              {s.source && <div className="wmt-stat__source">{s.source}</div>}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
