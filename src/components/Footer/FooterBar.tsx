import React from "react";
import { Labels } from "../../types";

interface FooterBarProps {
  labels: Labels;
}

export const FooterBar = ({ labels }: FooterBarProps) => {
  return (
    <div>
      <div>
        <div>
          {labels.main.switchMandatory}
          {labels.main.switchPreferences}
          {labels.main.switchStatistics}
          {labels.main.switchMarketing}
          {labels.main.moreSettings}
        </div>
      </div>
    </div>
  );
};
