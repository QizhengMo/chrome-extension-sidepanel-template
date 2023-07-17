import React from "react";
import "@pages/panel/Panel.css";
import { Encoders } from "@pages/panel/encoders/Encoders";
import { Header } from "@pages/panel/Header";

const MODULES: Record<string, string> = {
  ENCODERS: "ENCODERS",
};

export default function Panel(): JSX.Element {
  return (
    <div style={{ width: "100%"}}>
      <Header />
      <div className="p-6">
        <Encoders />
      </div>
    </div>
  );
}
