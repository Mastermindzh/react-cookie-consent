import React from "react";
import { CookieCategory, Labels } from "../types";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";
import "../css/out/rct_style.css";

interface FooterTailorProps {
  labels: Labels;
  categories: CookieCategory[];
}

const FooterTailor = ({ labels, categories }: FooterTailorProps) => {
  return (
    <div>
      <div className={"rct-flex rct-flex-row"}>
        <div className={"rct-basis-full md:rct-basis-9/12"}>
          <FooterMain labels={labels} />
        </div>
        <div className={"rct-basis-full md:rct-basis-3/12"}>
          <FooterTrailing labels={labels} />
        </div>
      </div>
      <hr />
      <FooterBar labels={labels} categories={categories} />
    </div>
  );
};

export default FooterTailor;
