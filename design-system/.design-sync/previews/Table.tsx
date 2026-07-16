import { Table } from "compound-money-talk-design";

// The flagship: the account master table, one band, tone-tinted tax columns,
// the row you're prosecuting highlighted.
export const MasterTable = () => (
  <Table
    eyebrow="Level 2 · The wide sweep"
    title="Every box, one row each"
    dense
    columns={[
      { head: "Account", width: "17%" },
      { head: "Who can open it", width: "22%" },
      { head: "2026 limit", width: "17%" },
      { head: "In", align: "center" },
      { head: "Growth", align: "center" },
      { head: "Out", align: "center" },
      { head: "The catch", width: "24%" },
    ]}
    rows={[
      { band: "Band 1 · The core four" },
      {
        highlight: true,
        cells: [
          { content: "Roth IRA ★", strong: true },
          "Anyone with earned income under the MAGI cap",
          { content: "$7,500", strong: true },
          { content: "taxed", tone: "neg" },
          { content: "free", tone: "pos" },
          { content: "free", tone: "pos" },
          "Income phases out $153k–$168k single",
        ],
      },
      {
        cells: [
          { content: "Traditional IRA", strong: true },
          "Anyone with earned income",
          { content: "$7,500" },
          { content: "deduct*", tone: "pos" },
          { content: "free", tone: "pos" },
          { content: "ordinary", tone: "neg" },
          "*Deduction phases out if covered at work",
        ],
      },
      {
        cells: [
          { content: "401(k)", strong: true },
          "Employees whose employer offers one",
          { content: "$24,500" },
          { content: "pre-tax", tone: "pos" },
          { content: "free", tone: "pos" },
          { content: "ord. / free", tone: "warn" },
          "Roth 401(k) has NO income cap",
        ],
      },
      {
        cells: [
          { content: "HSA ★", strong: true },
          "On an HDHP, not on Medicare, not a dependent",
          { content: "$4,400 / $8,750" },
          { content: "pre-tax", tone: "pos" },
          { content: "free", tone: "pos" },
          { content: "free†", tone: "pos" },
          "†Tax-free out only for medical",
        ],
      },
    ]}
    caption="Bands 2–3 (work & self-employment, education & other) continue the same columns on the next slides."
    footerNote="Week 4 · Tax-Advantaged Accounts"
  />
);

// The founding frame — three taxable moments, four deals.
export const ThreeMoments = () => (
  <Table
    eyebrow="Level 1 · The three moments"
    title="A dollar gets taxed at up to three moments"
    columns={[
      { head: "Box", width: "28%" },
      { head: "In", align: "center" },
      { head: "Growth", align: "center" },
      { head: "Out", align: "center" },
    ]}
    rows={[
      {
        cells: [
          { content: "Taxable", strong: true },
          { content: "taxed", tone: "neg" },
          { content: "taxed", tone: "neg" },
          { content: "taxed", tone: "neg" },
        ],
      },
      {
        cells: [
          { content: "Traditional / pre-tax", strong: true },
          { content: "skipped", tone: "pos" },
          { content: "skipped", tone: "pos" },
          { content: "taxed", tone: "neg" },
        ],
      },
      {
        cells: [
          { content: "Roth", strong: true },
          { content: "taxed", tone: "neg" },
          { content: "skipped", tone: "pos" },
          { content: "skipped", tone: "pos" },
        ],
      },
      {
        highlight: true,
        cells: [
          { content: "HSA", strong: true },
          { content: "skipped", tone: "pos" },
          { content: "skipped", tone: "pos" },
          { content: "skipped", tone: "pos" },
        ],
      },
    ]}
    caption="A tax-advantaged account is one that switches off at least one of the three. The HSA switches off all three."
    footerNote="Week 4 · Tax-Advantaged Accounts"
  />
);

// The early-withdrawal penalty map — the two outliers stand out by tone.
export const PenaltyMap = () => (
  <Table
    eyebrow="Level 2 · Getting money out early"
    title="The penalty map, box by box (before 59½)"
    dense
    columns={[
      { head: "Box", width: "26%" },
      { head: "Income tax", width: "22%" },
      { head: "Penalty", align: "center", width: "14%" },
      { head: "The thing to know" },
    ]}
    rows={[
      {
        highlight: true,
        cells: [
          { content: "Roth IRA — contributions", strong: true },
          "none",
          { content: "none", tone: "pos" },
          "Out anytime, any reason — the escape hatch",
        ],
      },
      {
        cells: [
          { content: "Traditional IRA / 401(k)", strong: true },
          "ordinary income",
          { content: "10%", tone: "neg" },
          "401(k) has no college or first-home exception",
        ],
      },
      {
        cells: [
          { content: "Governmental 457(b)", strong: true },
          "ordinary income",
          { content: "NONE", tone: "pos" },
          "The one plan with no early penalty — ever",
        ],
      },
      {
        cells: [
          { content: "HSA — non-medical", strong: true },
          "ordinary income",
          { content: "20%", tone: "neg" },
          "Double the usual penalty; gone at 65",
        ],
      },
      {
        cells: [
          { content: "529 — non-qualified", strong: true },
          "on earnings only",
          { content: "10%", tone: "warn" },
          "Penalty hits earnings only — never principal",
        ],
      },
    ]}
    footerNote="Week 4 · Tax-Advantaged Accounts"
  />
);
