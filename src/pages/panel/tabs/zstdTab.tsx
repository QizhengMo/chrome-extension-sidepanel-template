import React from "react";
import {ZstdInit, ZstdCodec} from '@oneidentity/zstd-js';

export const ZstdTab = () => {
  const [source, setSource] = React.useState("");
  const [compressed, setCompressed] = React.useState("");
  const handleCompress = () => {
    compress(source).then((compressed) => {
      setCompressed(compressed)
    })
    // setCompressed(btoa(source));
  };

  const handleDecode = () => {
    decompress(compressed).then((source) => {
      setSource(source)
    })
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ display: "inline-block" }}>Source</span>
          <button onClick={handleCompress}>Compress</button>
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
          <button onClick={handleDecode}>Decompress</button>
        </div>
        <textarea
          value={compressed}
          onInput={(e) => {
            setCompressed(e.currentTarget.value);
          }}
          style={{ boxSizing: "border-box", width: "100%", minHeight: "100px" }}
        />
      </div>
    </div>
  );
};

async function compress(source: string) {
  const {ZstdSimple} = await ZstdInit()
  const data = ZstdSimple.compress(new TextEncoder().encode(source))
  return new TextDecoder().decode(data).toString()
}

async function decompress(source: string) {
  const {ZstdSimple} = await ZstdInit()
  const data = ZstdSimple.decompress(new TextEncoder().encode(source))
  return new TextDecoder().decode(data).toString();
}
