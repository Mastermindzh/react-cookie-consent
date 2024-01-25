import React from "react";
import { Labels } from "../../types";
import "../../css/out/rct_style.css";

interface FooterTrailingProps {
  labels: Labels;
}

export const FooterTrailing = ({ labels }: FooterTrailingProps) => {
  const buttonWidth = "240px";

  return (
    <div>
      <div>
        <button
          className={
            "rct-bg-blue-700 hover:rct-bg-blue-500 rct-float-right rct-py-4 rct-my-2 " +
            "rct-font-sans rct-font-bold rct-text-white rct-tracking-wide rct-uppercase"
          }
          style={{ width: buttonWidth }}
        >
          {labels.main.buttonAllow}
        </button>
        <br />
        <button
          className={
            "rct-border-2 rct-border-blue-950 hover:rct-bg-blue-700 rct-float-right rct-py-4 rct-my-2 " +
            "hover:rct-text-white rct-font-sans rct-font-bold rct-text-blue-950 rct-tracking-wide rct-uppercase"
          }
          style={{ width: buttonWidth }}
        >
          {labels.main.buttonDefault}
        </button>
      </div>
    </div>
  );
};
