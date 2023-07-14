import * as React from "react";
import { ReactElement } from "react";

type Props = {
  activeTabKey: string;
  panels: { key: string; panel: ReactElement }[];
};

export function TabPanels(props: Props) {
  const { panels } = props;
  return (
    <div>{panels.find((panel) => panel.key === props.activeTabKey)?.panel}</div>
  );
}
