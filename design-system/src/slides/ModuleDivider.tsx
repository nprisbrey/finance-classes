import "./ModuleDivider.css";
import { Slide } from "../lib/Slide";
import { Tag } from "../lib/Tag";

export interface ModuleDividerProps {
  /** Module id, e.g. "M3". */
  id: string;
  title: string;
  minutes?: number;
  /** One-line description of the module. */
  blurb?: string;
}

/** A dark section divider announcing the next module. */
export function ModuleDivider({ id, title, minutes, blurb }: ModuleDividerProps) {
  return (
    <Slide variant="ink" footer={false}>
      <div className="cmt-divider">
        <span className="cmt-divider__id">{id}</span>
        <h1 className="cmt-divider__title">{title}</h1>
        {blurb && <p className="cmt-divider__blurb">{blurb}</p>}
        {typeof minutes === "number" && (
          <div className="cmt-divider__meta">
            <Tag tone="accent">{minutes} min</Tag>
          </div>
        )}
      </div>
    </Slide>
  );
}
