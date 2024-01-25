import React from "react";
import { CookieCategory, CookieCategoryDefinition, Labels } from "../../types";

interface FooterBarProps {
  labels: Labels;
  categories: CookieCategory[];
}

export const FooterBar = ({ labels, categories }: FooterBarProps) => {
  const getCategoryTitleAndDescription = (category: CookieCategory) => {
    switch (category) {
      case CookieCategory.MANDATORY:
        return {
          title: labels.cookieCategory.mandatory.title,
          description: labels.cookieCategory.mandatory.description,
        };
      case CookieCategory.PREFRENCES:
        return {
          title: labels.cookieCategory.preferences.title,
          description: labels.cookieCategory.preferences.description,
        };
      case CookieCategory.STATISTICS:
        return {
          title: labels.cookieCategory.statistics.title,
          description: labels.cookieCategory.statistics.description,
        };
      case CookieCategory.MARKETING:
        return {
          title: labels.cookieCategory.marketing.title,
          description: labels.cookieCategory.marketing.description,
        };
      default:
        return {
          title: labels.cookieCategory.unclassified.title,
          description: labels.cookieCategory.unclassified.description,
        };
    }
  };

  const mandatoryCookies: CookieCategoryDefinition = {
    id: 0,
    title: getCategoryTitleAndDescription(CookieCategory.MANDATORY).title,
    description: getCategoryTitleAndDescription(CookieCategory.MANDATORY).description,
    enabled: false,
    status: true,
    type: CookieCategory.MANDATORY,
  };

  const providedCategories: CookieCategoryDefinition[] = categories.map((category, idx) => {
    const categoryTitleAndDescription = getCategoryTitleAndDescription(category);
    return {
      id: idx + 1,
      title: categoryTitleAndDescription.title,
      description: categoryTitleAndDescription.description,
      enabled: true,
      status: true,
      type: category,
    };
  });

  const enabledCategories: CookieCategoryDefinition[] = [mandatoryCookies, ...providedCategories];

  return (
    <>
      <div
        className={
          "rct-grid rct-grid-flow-row-dense rct-grid-cols-2 " +
          "md:rct-grid-cols-4 lg:rct-grid-cols-5 grid-rows-3"
        }
      >
        {enabledCategories.map((category, idx) => (
          <div className={"rct-border rct-m-3 rct-rounded"} id={`category_${idx}`}>
            <label htmlFor="one" className={"rct-h-6 rct-relative rct-inline-block"}>
              <span
                className={
                  "rct-mr-2 rct-text-blue-950 rct-font-bold rct-font-sans rct-tracking-wide"
                }
              >
                {category.title}
              </span>
              <input
                id={`${category.type.toLowerCase()}_checkbox`}
                type="checkbox"
                checked={category.enabled ? undefined : true}
                disabled={!category.enabled}
              />
            </label>
          </div>
        ))}
        <div className={"rct-border rct-rounded rct-mt-3 rct-ml-3"}>
          <span className={"rct-text-blue-950 rct-font-bold rct-font-sans rct-tracking-wide"}>
            {labels.main.moreSettings}
            {" > "}
          </span>
        </div>
      </div>
    </>
  );
};
