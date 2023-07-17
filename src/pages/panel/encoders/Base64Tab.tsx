import React from "react";
import {ActionButton} from "@src/componenst/ActionButton";
import {ToolAreaHeader} from "@src/componenst/ToolAreaHeader";
import {EncodersTextArea} from "@src/componenst/EncodersTextArea";

export const Base64Tab = () => {
  const [source, setSource] = React.useState("");
  const [encoded, setEncoded] = React.useState("");
  const handleEncode = () => {
    setEncoded(btoa(source));
  };

  const handleDecode = () => {
    setSource(atob(encoded))
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <ToolAreaHeader
          name={"Source"}
          actions={
            <ActionButton onClick={handleEncode}>Encode</ActionButton>
          }
        />
        <EncodersTextArea
          onInput={(e) => {
            setSource(e.currentTarget.value);
          }}
          style={{ minHeight: "100px" }}
          value={source}
        />

        <ToolAreaHeader
          name={"Encoded"}
          actions={
            <ActionButton onClick={handleDecode}>Decode</ActionButton>
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
