import "./Cover.css";
import { Slide } from "../lib/Slide";
import { Wordmark } from "../lib/Wordmark";

export interface CoverProps {
  /** The week's topic, e.g. "Credit". */
  title: string;
  /** One-line framing under the title. */
  subtitle?: string;
  /** Eyebrow line, e.g. "Week 1". */
  week?: string;
  /** Optional small kicker, e.g. a series or cohort label. Avoid dates — they age the template. */
  meta?: string;
}

/** The opening title slide — dark, brand-forward, oversized topic. */
export function Cover({ title, subtitle, week, meta }: CoverProps) {
  return (
    <Slide variant="ink" footer={false}>
      <div className="cmt-cover">
        <div className="cmt-cover__top">
          <Wordmark tone="light" />
          {meta && <span className="cmt-cover__meta cmt-num">{meta}</span>}
        </div>
        <div className="cmt-cover__main">
          {week && <span className="cmt-eyebrow cmt-cover__week">{week}</span>}
          <h1 className="cmt-cover__title">{title}</h1>
          {subtitle && <p className="cmt-cover__subtitle">{subtitle}</p>}
          <span className="cmt-cover__rule" aria-hidden="true" />
        </div>
      </div>
    </Slide>
  );
}
