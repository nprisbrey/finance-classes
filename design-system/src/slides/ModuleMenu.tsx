import "./ModuleMenu.css";
import { Slide } from "../lib/Slide";
import { Tag } from "../lib/Tag";

export interface MenuModule {
  /** Short id shown in the index chip, e.g. "M1". */
  id: string;
  /** Module title. */
  title: string;
  /** Time budget in minutes. */
  minutes?: number;
  /** Optional one-word note, e.g. "deep dive". */
  note?: string;
}

export interface ModuleMenuProps {
  eyebrow?: string;
  /** Defaults to "Pick your path". */
  title?: string;
  modules: MenuModule[];
  footerNote?: string;
}

/** The agenda slide: a choosable menu of modules with time budgets. */
export function ModuleMenu({
  eyebrow = "Today's menu",
  title = "Pick your path",
  modules,
  footerNote,
}: ModuleMenuProps) {
  return (
    <Slide footerNote={footerNote}>
      <div className="cmt-menu">
        <div className="cmt-menu__head">
          <span className="cmt-eyebrow">{eyebrow}</span>
          <h1 className="cmt-menu__title">{title}</h1>
        </div>
        <ol className="cmt-menu__list">
          {modules.map((m) => (
            <li key={m.id} className="cmt-menu__item">
              <span className="cmt-menu__id">{m.id}</span>
              <span className="cmt-menu__label">{m.title}</span>
              <span className="cmt-menu__meta">
                {m.note && <Tag tone="accent">{m.note}</Tag>}
                {typeof m.minutes === "number" && (
                  <Tag tone="neutral">{m.minutes} min</Tag>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
