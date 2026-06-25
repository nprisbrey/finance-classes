import "./Sources.css";
import { Slide } from "../lib/Slide";
import { Wordmark } from "../lib/Wordmark";

export interface SourceGroup {
  label: string;
  items: string[];
}

export interface SourcesProps {
  title?: string;
  /** Grouped sources (preferred). */
  groups?: SourceGroup[];
  /** Or a flat list, if you don't want groups. */
  items?: string[];
  footerNote?: string;
}

/** The closing sources slide — compact, credible, on-brand. */
export function Sources({
  title = "Sources",
  groups,
  items,
  footerNote,
}: SourcesProps) {
  const resolved: SourceGroup[] =
    groups ?? (items ? [{ label: "", items }] : []);
  // footer={false}: this slide shows the full Wordmark in its head, so
  // suppress the redundant corner mark. The footerNote still renders.
  return (
    <Slide variant="mist" footer={false} footerNote={footerNote}>
      <div className="cmt-sources">
        <div className="cmt-sources__head">
          <h1 className="cmt-sources__title">{title}</h1>
          <Wordmark tone="ink" />
        </div>
        <div className="cmt-sources__cols">
          {resolved.map((g, i) => (
            <div key={i} className="cmt-sources__group">
              {g.label && <div className="cmt-sources__label">{g.label}</div>}
              <ul className="cmt-sources__list">
                {g.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
