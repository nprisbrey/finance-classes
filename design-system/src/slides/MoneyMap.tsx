import "./MoneyMap.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export type FlowTone = "accent" | "neutral" | "pos" | "muted";

export interface MapFlow {
  /** Source box label, e.g. "Traditional IRA". */
  from: ReactNode;
  /** Optional small line under the source. */
  fromSub?: ReactNode;
  /** The move, sitting on the arrow, e.g. "conversion / backdoor". */
  label: ReactNode;
  /** Target box label, e.g. "Roth IRA". Omit (or set `dead`) for a dead-end. */
  to?: ReactNode;
  toSub?: ReactNode;
  tone?: FlowTone;
  /** Render as a terminal "no exit" node instead of an arrow to a target. */
  dead?: boolean;
}

export interface MoneyMapProps {
  eyebrow?: string;
  title: string;
  /** Each flow is one source → move → target row; columns align across rows. */
  flows: MapFlow[];
  caption?: ReactNode;
  footerNote?: string;
}

/**
 * The "money map" — labeled arrows between account wrappers, one legal move per
 * row. Sources, arrows, and targets align in three columns so a shared
 * destination (e.g. everything routing into a Roth) reads at a glance. A `dead`
 * flow renders a terminal "no exit" cap instead of a target.
 */
export function MoneyMap({
  eyebrow,
  title,
  flows,
  caption,
  footerNote,
}: MoneyMapProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className="cmt-map">
        <div className="cmt-map__head">
          {eyebrow && <span className="cmt-eyebrow">{eyebrow}</span>}
          <h1 className="cmt-map__title">{title}</h1>
        </div>
        <div className="cmt-map__flows">
          {flows.map((f, i) => {
            const tone = f.tone ?? "accent";
            const dead = f.dead || f.to === undefined;
            return (
              <div
                key={i}
                className={`cmt-map__flow cmt-map__flow--${tone}${dead ? " cmt-map__flow--dead" : ""}`}
              >
                <div className="cmt-map__node cmt-map__node--from">
                  <span className="cmt-map__node-label">{f.from}</span>
                  {f.fromSub && (
                    <span className="cmt-map__node-sub">{f.fromSub}</span>
                  )}
                </div>
                <div className="cmt-map__arrow" aria-hidden="true">
                  <span className="cmt-map__arrow-label">{f.label}</span>
                  <span className="cmt-map__arrow-line">
                    <i className="cmt-map__arrow-head" />
                  </span>
                </div>
                {dead ? (
                  <div className="cmt-map__node cmt-map__node--stop">
                    <span className="cmt-map__stop-mark" aria-hidden="true">
                      ⊘
                    </span>
                    <span className="cmt-map__node-sub">no exit</span>
                  </div>
                ) : (
                  <div className="cmt-map__node cmt-map__node--to">
                    <span className="cmt-map__node-label">{f.to}</span>
                    {f.toSub && (
                      <span className="cmt-map__node-sub">{f.toSub}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {caption && <p className="cmt-map__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
