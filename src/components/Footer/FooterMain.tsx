import React from "react";
import { Labels } from "../../types";
import { defaultFontFamily } from "../../constants";

interface FooterMainProps {
  labels: Labels;
}

export const FooterMain = ({ labels }: FooterMainProps) => {
  return (
    <div>
      <span
        style={{
          color: "#000",
          fontFamily: defaultFontFamily,
          fontWeight: 600,
          letterSpacing: 0.25,
          lineHeight: "1.6em",
          marginBottom: "0.5em",
        }}
      >
        {labels.main.title}
      </span>{" "}
      <br />
      <span
        style={{
          color: "#000",
          fontFamily: defaultFontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "1.6em",
        }}
      >
        {labels.main.description}
      </span>
    </div>
  );
};
