import "./Timeline.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export type EventTone = "calm" | "rising" | "crisis";

export interface TimelineEvent {
  /** Date label, e.g. "Sep 15". */
  date: ReactNode;
  /** Short headline, e.g. "Lehman files". */
  label: ReactNode;
  /** Optional second line, e.g. "largest bankruptcy ever". */
  detail?: ReactNode;
  /** Bar height, 0–100 — use it to encode escalating severity. */
  severity?: number;
  tone?: EventTone;
  /** Flag the inflection point (drawn taller and marked). */
  peak?: boolean;
}

export interface TimelineProps {
  eyebrow?: string;
  title: string;
  events: TimelineEvent[];
  caption?: ReactNode;
  footerNote?: string;
}

/**
 * A horizontal escalation timeline — dated events as bars that rise (and warm
 * from amber toward red) as a crisis builds, with one event flagged as the
 * `peak` inflection. Built for the September-2008 collapse, but works for any
 * dated run of events.
 */
export function Timeline({
  eyebrow,
  title,
  events,
  caption,
  footerNote,
}: TimelineProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className="cmt-tl">
        <div className="cmt-tl__head">
          {eyebrow && <span className="cmt-eyebrow">{eyebrow}</span>}
          <h1 className="cmt-tl__title">{title}</h1>
        </div>
        <div className="cmt-tl__scroll">
          <ol className="cmt-tl__track">
            {events.map((e, i) => {
              const h = Math.max(6, Math.min(100, e.severity ?? 40));
              return (
                <li
                  key={i}
                  className={`cmt-tl__ev cmt-tl__ev--${e.tone ?? "calm"}${
                    e.peak ? " cmt-tl__ev--peak" : ""
                  }`}
                >
                  <div className="cmt-tl__barzone">
                    <div className="cmt-tl__bar" style={{ height: `${h}%` }}>
                      {e.peak && (
                        <span className="cmt-tl__peak" aria-hidden="true">
                          ▲
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="cmt-tl__axis" aria-hidden="true">
                    <span className="cmt-tl__dot" />
                  </div>
                  <div className="cmt-tl__meta">
                    <span className="cmt-tl__date cmt-num">{e.date}</span>
                    <span className="cmt-tl__label">{e.label}</span>
                    {e.detail && <span className="cmt-tl__detail">{e.detail}</span>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        {caption && <p className="cmt-tl__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
