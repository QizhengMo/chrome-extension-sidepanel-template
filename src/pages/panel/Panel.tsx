import React from "react";
import "@pages/panel/Panel.css";
import { Tab } from "@src/componenst/Tabs/Tab";
import { TabPanel } from "@src/componenst/Tabs/TabPanel";
import { Base64Tab } from "@pages/panel/tabs/Base64Tab";

const TABS = {
  BASE64: "BASE64",
}

export default function Panel(): JSX.Element {
  const [activeTab, setActiveTab] = React.useState(TABS.BASE64);
  return (
    <div style={{ width: "100%" }}>
      <h1>Tools</h1>
      <div style={{borderBottom: "1px solid black", marginBottom: 16}}>
        <Tab selected={activeTab === TABS.BASE64} title={TABS.BASE64} />
      </div>

      <TabPanel content={<Base64Tab />} />
    </div>
  );
}
