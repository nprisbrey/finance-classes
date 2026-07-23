import "./Tranches.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export type TrancheTone = "senior" | "mezz" | "equity";

export interface Tranche {
  /** Rating badge shown in the band, e.g. "AAA", "BBB", "—". */
  rating?: ReactNode;
  /** Tranche name for the legend, e.g. "Senior". */
  label: ReactNode;
  /** Share of the pool. Use percentages that sum to ~100 so `loss` / `cushion`
   *  line up with the band boundaries. */
  size: number;
  /** Priority line in the legend, e.g. "paid first · loses last". */
  role?: ReactNode;
  /** Size note in the legend, e.g. "$80M · 80%". */
  note?: ReactNode;
  tone?: TrancheTone;
}

export interface TranchesProps {
  eyebrow?: string;
  title: string;
  /** Sub-line under the title, e.g. "$100M pool of 1,000 subprime mortgages". */
  poolLabel?: ReactNode;
  /** Tranches top → bottom (senior first). */
  tranches: Tranche[];
  /** A loss level rising from the base, as a % of the whole stack (equity
   *  first). Set it to teach the calm case (below the cushion) or the crisis
   *  case (above it) from the same slide. */
  loss?: { pct: number; label?: ReactNode };
  /** The buffer that must be wiped before the senior/AAA slice takes a loss,
   *  drawn as a reference line at this % of the stack. */
  cushion?: { pct: number; label?: ReactNode };
  caption?: ReactNode;
  footerNote?: string;
}

/**
 * The tranche pyramid — a mortgage pool sliced into a priority stack (senior on
 * top, equity at the base). Cash is paid top-down; losses fill bottom-up. An
 * optional `loss` fills from the base and an optional `cushion` marks the buffer
 * under the senior slice, so the same component teaches both the calm case
 * (loss below the line) and the crisis case (loss punching through into AAA).
 */
export function Tranches({
  eyebrow,
  title,
  poolLabel,
  tranches,
  loss,
  cushion,
  caption,
  footerNote,
}: TranchesProps) {
  const total = tranches.reduce((s, t) => s + t.size, 0) || 1;
  return (
    <Slide footerNote={footerNote}>
      <div className="cmt-tr">
        <div className="cmt-tr__head">
          {eyebrow && <span className="cmt-eyebrow">{eyebrow}</span>}
          <h1 className="cmt-tr__title">{title}</h1>
          {poolLabel && <p className="cmt-tr__pool">{poolLabel}</p>}
        </div>

        <div className="cmt-tr__body">
          <div className="cmt-tr__stackwrap">
            <span className="cmt-tr__dir">
              cash paid ↓<em>senior first</em>
            </span>
            <div className="cmt-tr__stack">
              {tranches.map((t, i) => {
                const pct = Math.round((t.size / total) * 100);
                // Only label inside the band when it's tall enough to hold text
                // without colliding with the cushion / loss overlays; thin
                // bands are carried by the legend instead.
                const inband = pct >= 25;
                return (
                  <div
                    key={i}
                    className={`cmt-tr__band cmt-tr__band--${t.tone ?? "senior"}`}
                    style={{ flexGrow: t.size }}
                  >
                    {inband && t.rating && (
                      <span className="cmt-tr__rating">{t.rating}</span>
                    )}
                    {inband && <span className="cmt-tr__pct cmt-num">{pct}%</span>}
                  </div>
                );
              })}
              {loss && (
                <div className="cmt-tr__loss" style={{ height: `${loss.pct}%` }}>
                  <span className="cmt-tr__loss-label cmt-num">
                    {loss.label ?? `${loss.pct}% loss`}
                  </span>
                </div>
              )}
              {cushion && (
                <div
                  className="cmt-tr__cushion"
                  style={{ bottom: `${cushion.pct}%` }}
                >
                  <span className="cmt-tr__cushion-label">
                    {cushion.label ?? `${cushion.pct}% cushion`}
                  </span>
                </div>
              )}
            </div>
            <span className="cmt-tr__dir cmt-tr__dir--loss">
              losses fill ↑<em>equity first</em>
            </span>
          </div>

          <ul className="cmt-tr__legend">
            {tranches.map((t, i) => (
              <li key={i} className="cmt-tr__leg">
                <span className={`cmt-tr__swatch cmt-tr__swatch--${t.tone ?? "senior"}`} />
                <span className="cmt-tr__leg-main">
                  <span className="cmt-tr__leg-top">
                    {t.rating && <span className="cmt-tr__leg-rating">{t.rating}</span>}
                    <span className="cmt-tr__leg-label">{t.label}</span>
                    {t.note && <span className="cmt-tr__leg-note cmt-num">{t.note}</span>}
                  </span>
                  {t.role && <span className="cmt-tr__leg-role">{t.role}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {caption && <p className="cmt-tr__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
