import React from "react";
// @ts-ignore
import { Base91 } from "@hpcc-js/wasm/base91";
import { useRequest } from "ahooks";
import { ActionButton } from "@src/componenst/ActionButton";
import { ToolAreaHeader } from "@src/componenst/ToolAreaHeader";
import { EncodersTextArea } from "@src/componenst/EncodersTextArea";
import {SizeDisplay} from "@pages/panel/encoders/SizeDisplay";

export const Base91Tab = () => {
  const [source, setSource] = React.useState("");
  const [encoded, setEncoded] = React.useState("");
  const { data: base91Instance, loading } = useRequest(() => {
    return Base91.load();
  });

  const handleEncode = () => {
    setEncoded(encode(base91Instance, source));
  };

  const handleDecode = () => {
    setSource(decode(base91Instance, encoded));
  };

  return loading ? (
    <>
      <h2>Loading Base91 instance...</h2>
    </>
  ) : (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <ToolAreaHeader
          name={"Source"}
          actions={
            <div>
              <SizeDisplay source={source} />
              <ActionButton onClick={handleEncode}>Encode</ActionButton>
            </div>
          }
        />
        <EncodersTextArea
          onInput={(e) => {
            setSource(e.currentTarget.value);
          }}
          value={source}
          style={{ minHeight: "300px" }}
        />

        <div style={{ height: 24 }} />

        <ToolAreaHeader
          name={"Encoded"}
          actions={
            <div>
              <SizeDisplay source={encoded} />
              <ActionButton onClick={handleDecode}>Decode</ActionButton>
            </div>
          }
        />

        <EncodersTextArea
          value={encoded}
          onInput={(e) => {
            setEncoded(e.currentTarget.value);
          }}
          style={{ minHeight: "100px" }}
        />
      </div>
    </div>
  );
};

function encode(base91: Base91, source: string) {
  return base91.encode(new TextEncoder().encode(source));
}

function decode(base91: Base91, source: string) {
  const decompressed = base91.decode(source);
  return new TextDecoder().decode(decompressed);
}
