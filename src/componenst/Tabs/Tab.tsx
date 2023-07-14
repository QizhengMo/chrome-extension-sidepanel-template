import * as React from "react";

type Props = {
  title: string;
  selected?: boolean;
};

export function Tab(props: Props) {
  const { title, selected } = props;
  return (
    <div>
      <span style={{ fontWeight: selected ? "bold" : "" }}>{title}</span>
    </div>
  );
}
