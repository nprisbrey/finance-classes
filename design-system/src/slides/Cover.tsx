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
  /** Optional small kicker, e.g. a date or cohort. */
  meta?: string;
}

/** The opening title slide — dark, brand-forward, oversized topic. */
export function Cover({ title, subtitle, week, meta }: CoverProps) {
  return (
    <Slide variant="ink" footer={false}>
      <div className="wmt-cover">
        <div className="wmt-cover__top">
          <Wordmark tone="light" />
          {meta && <span className="wmt-cover__meta wmt-num">{meta}</span>}
        </div>
        <div className="wmt-cover__main">
          {week && <span className="wmt-eyebrow wmt-cover__week">{week}</span>}
          <h1 className="wmt-cover__title">{title}</h1>
          {subtitle && <p className="wmt-cover__subtitle">{subtitle}</p>}
          <span className="wmt-cover__rule" aria-hidden="true" />
        </div>
      </div>
    </Slide>
  );
}
