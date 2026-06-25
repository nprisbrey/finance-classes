import "./Discussion.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

export interface DiscussionProps {
  eyebrow?: string;
  title?: string;
  /** The questions to put to the group. */
  questions: ReactNode[];
  footerNote?: string;
}

/** A discussion-prompt slide — numbered, room-facing questions. */
export function Discussion({
  eyebrow = "Discuss",
  title = "Talk it through",
  questions,
  footerNote,
}: DiscussionProps) {
  return (
    <Slide variant="ink" footer={false}>
      <div className="wmt-discuss">
        <div className="wmt-discuss__head">
          <span className="wmt-eyebrow">{eyebrow}</span>
          <h1 className="wmt-discuss__title">{title}</h1>
        </div>
        <ol className="wmt-discuss__list">
          {questions.map((q, i) => (
            <li key={i} className="wmt-discuss__item">
              <span className="wmt-discuss__num wmt-num">{i + 1}</span>
              <p className="wmt-discuss__q">{q}</p>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
