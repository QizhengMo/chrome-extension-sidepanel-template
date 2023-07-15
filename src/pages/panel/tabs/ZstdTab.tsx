import React from "react";
// @ts-ignore
import { Zstd } from "@hpcc-js/wasm/zstd";
import { useRequest } from "ahooks";

export const ZstdTab = () => {
  const [source, setSource] = React.useState("");
  const [compressed, setCompressed] = React.useState("");
  const { data: zstdInstance, loading } = useRequest(() => {
    return Zstd.load();
  });

  const handleCompress = () => {
    setCompressed(compress(zstdInstance, source));
  };

  const handleDecode = () => {
    setSource(decompress(zstdInstance, compressed));
  };

  return loading ? (
    <>
      <h2>Loading ZSTD instance...</h2>
    </>
  ) : (
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

        <div style={{ height: 24 }} />
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

function compress(zstd: Zstd, source: string) {
  const compressedArr = zstd.compress(new TextEncoder().encode(source));
  return bytesToBase64(compressedArr);
}

function decompress(zstd: Zstd, source: string) {
  const bytes = base64ToBytes(source);
  const decompressed = zstd.decompress(bytes);
  return new TextDecoder().decode(decompressed);
}

function base64ToBytes(base64: string): Uint8Array {
  const binString: ArrayLike<string> = atob(base64);
  return Uint8Array.from<string>(binString, (m: string) => m.codePointAt(0)!);
}

function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
  return btoa(binString);
}
