import { CookieCategory, CookieCategoryDefinition } from "../types";

export const mandatoryCookies: CookieCategoryDefinition = {
  id: 1,
  type: CookieCategory.MANDATORY,
  title: "Mandatory",
  description:
    "Necessary cookies help you use a website by enabling basic " +
    "functions such as page navigation and access to secure areas of the " +
    "website. The website cannot function properly without these cookies.",
  status: true,
  enabled: true,
};
