import React from "react";
import "@pages/panel/Panel.css";
import { Tab } from "@src/componenst/Tabs/Tab";
import { Base64Tab } from "@pages/panel/tabs/Base64Tab";
import { ZstdTab } from "@pages/panel/tabs/ZstdTab";
import { TabPanels } from "@src/componenst/Tabs/TabPanels";

const TABS = {
  BASE64: "BASE64",
  ZSTD: "ZSTD",
};

export default function Panel(): JSX.Element {
  const [activeTab, setActiveTab] = React.useState(TABS.BASE64);

  return (
    <div style={{ width: "100%" }}>
      <h1>Tools</h1>
      <div style={{ borderBottom: "1px solid black", display: "flex" }}>
        <Tab selected={activeTab} tabKey={TABS.BASE64} setSelected={setActiveTab} />
        <Tab selected={activeTab} tabKey={TABS.ZSTD} setSelected={setActiveTab} />
      </div>

      <TabPanels
        panels={[
          { key: TABS.BASE64, panel: <Base64Tab /> },
          { key: TABS.ZSTD, panel: <ZstdTab /> },
        ]}
        activeTabKey={activeTab}
      />
    </div>
  );
}
