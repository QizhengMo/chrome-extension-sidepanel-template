// @flow
import * as React from "react";
import { Tab } from "@src/componenst/Tabs/Tab";
import { TabPanels } from "@src/componenst/Tabs/TabPanels";
import { Base64Tab } from "@pages/panel/encoders/Base64Tab";
import { ZstdTab } from "@pages/panel/encoders/ZstdTab";
import { Base91Tab } from "@pages/panel/encoders/Base91";
const TABS = {
  BASE64: "BASE64",
  BASE91: "BASE91",
  ZSTD: "ZSTD",
};

export function Encoders() {
  const [activeTab, setActiveTab] = React.useState(TABS.BASE64);

  return (
    <>
      <div className="tabs tabs-boxed mb-3">
        <Tab
          selected={activeTab}
          tabKey={TABS.BASE64}
          setSelected={setActiveTab}
        />
        <Tab
          selected={activeTab}
          tabKey={TABS.BASE91}
          setSelected={setActiveTab}
        />
        <Tab
          selected={activeTab}
          tabKey={TABS.ZSTD}
          setSelected={setActiveTab}
        />
      </div>

      <TabPanels
        panels={[
          { key: TABS.BASE64, panel: <Base64Tab /> },
          { key: TABS.BASE91, panel: <Base91Tab /> },
          { key: TABS.ZSTD, panel: <ZstdTab /> },
        ]}
        activeTabKey={activeTab}
      />
    </>
  );
}
