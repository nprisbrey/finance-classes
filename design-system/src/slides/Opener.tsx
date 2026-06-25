import "./Opener.css";
import { Slide } from "../lib/Slide";

export interface OpenerProps {
  eyebrow?: string;
  title?: string;
  /** The round-table prompts. */
  prompts: string[];
  /** Optional topic-specific nudge for the week. */
  nudge?: string;
  footerNote?: string;
}

/** The 10-minute group round-table that opens every class. */
export function Opener({
  eyebrow = "Opener · 10 min",
  title = "What's new with your money?",
  prompts,
  nudge,
  footerNote,
}: OpenerProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className="wmt-opener">
        <div className="wmt-opener__head">
          <span className="wmt-eyebrow">{eyebrow}</span>
          <h1 className="wmt-opener__title">{title}</h1>
        </div>
        <div className="wmt-opener__grid" data-count={Math.min(prompts.length, 3)}>
          {prompts.map((p, i) => (
            <div key={i} className="wmt-opener__card">
              <span className="wmt-opener__num wmt-num">{i + 1}</span>
              <p className="wmt-opener__prompt">{p}</p>
            </div>
          ))}
        </div>
        {nudge && (
          <p className="wmt-opener__nudge">
            <strong>This week:</strong> {nudge}
          </p>
        )}
      </div>
    </Slide>
  );
}
