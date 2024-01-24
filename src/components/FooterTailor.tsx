import React from "react";
import { Labels } from "../types";
import { FooterBar, FooterMain, FooterTrailing } from "./Footer";

interface FooterTailorProps {
  labels: Labels;
}

const FooterTailor = ({ labels }: FooterTailorProps) => {
  return (
    <div>
      <FooterMain labels={labels} />
      <FooterTrailing labels={labels} />
      <hr />
      <FooterBar labels={labels} />
    </div>
  );
};

export default FooterTailor;
