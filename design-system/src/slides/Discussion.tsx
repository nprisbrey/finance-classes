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
      <div className="cmt-discuss">
        <div className="cmt-discuss__head">
          <span className="cmt-eyebrow">{eyebrow}</span>
          <h1 className="cmt-discuss__title">{title}</h1>
        </div>
        <ol className="cmt-discuss__list">
          {questions.map((q, i) => (
            <li key={i} className="cmt-discuss__item">
              <span className="cmt-discuss__num cmt-num">{i + 1}</span>
              <p className="cmt-discuss__q">{q}</p>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
