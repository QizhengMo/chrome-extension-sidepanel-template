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
      style={{ fontWeight: selfSelected ? "bold" : "", fontSize: '2em', marginRight: 16 }}
      onClick={() => setSelected(tabKey)}
    >
      {tabKey}
    </div>
  );
}
