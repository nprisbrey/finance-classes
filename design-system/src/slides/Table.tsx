import "./Table.css";
import type { ReactNode } from "react";
import { Slide } from "../lib/Slide";

/** Cell tint — the finance/tax semantics reused across the deck. */
export type CellTone = "pos" | "neg" | "warn" | "accent" | "muted";

export interface TableColumn {
  head: ReactNode;
  align?: "left" | "center" | "right";
  /** Fixed width hint, e.g. "22%" or "160px". Omit to auto-size. */
  width?: string;
  /** Tint the header cell with the brand accent. */
  accent?: boolean;
}

export interface TableCell {
  content: ReactNode;
  tone?: CellTone;
  strong?: boolean;
}

/** A cell is either a bare value or a `{ content, tone, strong }` object. */
export type CellInput = ReactNode | TableCell;

export interface TableRow {
  /**
   * A full-width band label (e.g. "Band 1 · The core four"). When set, the
   * row renders as a section divider and `cells` is ignored.
   */
  band?: ReactNode;
  cells?: CellInput[];
  /** Emphasize the whole row (e.g. the row you're prosecuting). */
  highlight?: boolean;
}

export interface TableProps {
  eyebrow?: string;
  title: string;
  columns: TableColumn[];
  rows: TableRow[];
  /** Optional takeaway caption under the table. */
  caption?: ReactNode;
  /** Tighten type + padding for many-row tables. */
  dense?: boolean;
  footerNote?: string;
}

function isCellObject(c: unknown): c is TableCell {
  return (
    typeof c === "object" &&
    c !== null &&
    "content" in c &&
    !("$$typeof" in c)
  );
}

/**
 * A generic tabular slide — the master account table, the three-moment grid,
 * the early-withdrawal penalty map, or any multi-column comparison. Bands group
 * rows into sections; cell tones tint values (taxed → `neg`, free → `pos`).
 */
export function Table({
  eyebrow,
  title,
  columns,
  rows,
  caption,
  dense,
  footerNote,
}: TableProps) {
  const anyWidth = columns.some((c) => c.width);
  return (
    <Slide footerNote={footerNote}>
      <div className={`cmt-table${dense ? " cmt-table--dense" : ""}`}>
        <div className="cmt-table__head">
          {eyebrow && <span className="cmt-eyebrow">{eyebrow}</span>}
          <h1 className="cmt-table__title">{title}</h1>
        </div>
        <div className="cmt-table__scroll">
          <table className="cmt-table__grid">
            {anyWidth && (
              <colgroup>
                {columns.map((c, i) => (
                  <col key={i} style={c.width ? { width: c.width } : undefined} />
                ))}
              </colgroup>
            )}
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th
                    key={i}
                    className={`cmt-table__th${c.accent ? " cmt-table__th--accent" : ""}`}
                    style={{ textAlign: c.align ?? "left" }}
                  >
                    {c.head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                if (row.band !== undefined) {
                  return (
                    <tr key={ri} className="cmt-table__band">
                      <td colSpan={columns.length}>{row.band}</td>
                    </tr>
                  );
                }
                return (
                  <tr
                    key={ri}
                    className={`cmt-table__row${row.highlight ? " cmt-table__row--hl" : ""}`}
                  >
                    {columns.map((c, ci) => {
                      const raw = row.cells?.[ci];
                      const cell = isCellObject(raw)
                        ? raw
                        : { content: raw as ReactNode };
                      const toneClass = cell.tone
                        ? ` cmt-table__td--${cell.tone}`
                        : "";
                      return (
                        <td
                          key={ci}
                          className={`cmt-table__td${toneClass}${cell.strong ? " cmt-table__td--strong" : ""}`}
                          style={{ textAlign: c.align ?? "left" }}
                        >
                          {cell.content}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {caption && <p className="cmt-table__caption">{caption}</p>}
      </div>
    </Slide>
  );
}
