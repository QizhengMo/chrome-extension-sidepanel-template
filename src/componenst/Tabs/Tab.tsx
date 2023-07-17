import * as React from "react";

type Props = {
  tabKey: string;
  selected: string;
  setSelected: (key: string) => void;
};

export function Tab(props: Props) {
  const { tabKey, selected, setSelected } = props;
  const selfSelected = selected === tabKey;
  return (
    <div
      className={selfSelected ? "tab tab-active" : "tab"}
      onClick={() => setSelected(tabKey)}
    >
      {tabKey}
    </div>
  );
}
