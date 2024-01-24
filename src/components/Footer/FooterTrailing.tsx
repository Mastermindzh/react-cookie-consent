import React from "react";
import { Labels } from "../../types";

interface FooterTrailingProps {
  labels: Labels;
}

export const FooterTrailing = ({ labels }: FooterTrailingProps) => {
  return (
    <div>
      <div>
        {labels.main.buttonAllow}
        <br />
        {labels.main.buttonDefault}
      </div>
    </div>
  );
};
