import "./Tag.css";
import type { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  /** Visual tone. */
  tone?: "accent" | "neutral" | "pos" | "neg";
  className?: string;
}

/** A small pill label — module tags, time budgets, up/down markers. */
export function Tag({ children, tone = "neutral", className }: TagProps) {
  return (
    <span className={`wmt-tag wmt-tag--${tone}${className ? " " + className : ""}`}>
      {children}
    </span>
  );
}
