import React from "react";

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "inline-block" }}>Source</span>
          <button onClick={handleEncode}>Encode</button>
        </div>
        <textarea
          onInput={(e) => {
            setSource(e.currentTarget.value);
          }}
          value={source}
          style={{ boxSizing: "border-box", width: "100%", minHeight: "300px" }}
        />

        <div style={{height: 24}}/>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "inline-block" }}>Encoded</span>
          <button onClick={handleDecode}>Decode</button>
        </div>
        <textarea
          value={encoded}
          onInput={(e) => {
            setEncoded(e.currentTarget.value);
          }}
          style={{ boxSizing: "border-box", width: "100%", minHeight: "100px" }}
        />
      </div>
    </div>
  );
};
