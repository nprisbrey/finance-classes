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
  return (
    <Slide variant="mist" footerNote={footerNote}>
      <div className="wmt-sources">
        <div className="wmt-sources__head">
          <h1 className="wmt-sources__title">{title}</h1>
          <Wordmark tone="ink" />
        </div>
        <div className="wmt-sources__cols">
          {resolved.map((g, i) => (
            <div key={i} className="wmt-sources__group">
              {g.label && <div className="wmt-sources__label">{g.label}</div>}
              <ul className="wmt-sources__list">
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
