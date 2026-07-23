import { Timeline } from "compound-money-talk-design";

// Act 2 · beat 4 — the September 2008 collapse, Lehman as the inflection.
export const September2008 = () => (
  <Timeline
    eyebrow="Act 2 · Break the machine"
    title="September 2008 — the week it broke"
    events={[
      { date: "Sep 7", label: "Fannie & Freddie seized", detail: "into conservatorship", severity: 42, tone: "rising" },
      { date: "Sep 15", label: "Lehman files Chapter 11", detail: "~$639B — largest ever", severity: 100, tone: "crisis", peak: true },
      { date: "Sep 16", label: "AIG rescued", detail: "$85B → ~$182B", severity: 78, tone: "crisis" },
      { date: "Sep 16", label: "Reserve Primary breaks the buck", detail: ">$40B flees in 2 days", severity: 70, tone: "crisis" },
      { date: "Oct 3", label: "TARP authorized", detail: "$700B — the circuit-breaker", severity: 55, tone: "rising" },
    ]}
    caption="Severity escalates and the bars warm from amber to red; Lehman is the inflection the whole system pivots on."
    footerNote="Week 5 · The 2008 Financial Crisis"
  />
);

// The fuller Act 2 arc — cracks in 2007 building to the September panic.
export const FullArc = () => (
  <Timeline
    eyebrow="Act 2 · Break the machine"
    title="From the first crack to the panic"
    events={[
      { date: "Aug 2007", label: "BNP Paribas freezes funds", detail: "can't value them", severity: 22, tone: "calm" },
      { date: "Sep 2007", label: "Northern Rock run", detail: "first UK bank run in ~140 yrs", severity: 34, tone: "calm" },
      { date: "Mar 2008", label: "Bear Stearns fails", detail: "$2/share in a weekend", severity: 52, tone: "rising" },
      { date: "Sep 2008", label: "Lehman + AIG", detail: "the week it broke", severity: 100, tone: "crisis", peak: true },
      { date: "Oct 2008", label: "TARP", detail: "the circuit-breaker", severity: 60, tone: "rising" },
    ]}
    footerNote="Week 5 · The 2008 Financial Crisis"
  />
);
