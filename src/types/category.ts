export enum CookieCategory {
  MANDATORY = "mandatory",
  MARKETING = "marketing",
  PREFRENCES = "preferences",
  STATISTICS = "statistics",
  UNCLASSIFIED = "unclassified",
}

export interface CookieCategoryDefinition {
  id: number;
  type: CookieCategory;
  title: string;
  description: string;
  status: boolean;
  enabled: boolean;
}
