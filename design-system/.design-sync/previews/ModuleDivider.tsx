import { ModuleDivider } from "compound-money-talk-design";

export const WithBlurb = () => (
  <ModuleDivider
    id="M2"
    title="The cost of credit"
    minutes={7}
    blurb="Interest, APR, and why the minimum payment is the most expensive way to repay."
  />
);

export const TitleOnly = () => (
  <ModuleDivider id="M5" title="Building credit from scratch" minutes={7} />
);
