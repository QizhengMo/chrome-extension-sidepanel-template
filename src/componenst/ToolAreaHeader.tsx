// @flow
import * as React from "react";
import { ReactElement } from "react";

type Props = {
  name: string;
  actions: ReactElement;
};

export function ToolAreaHeader(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 8,
      }}
    >
      <label
        className="block uppercase tracking-wide text-gray-700 text-s font-bold"
      >
        {props.name}
      </label>
      <div>{props.actions}</div>
    </div>
  );
}
