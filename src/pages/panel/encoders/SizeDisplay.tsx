import * as React from "react";
import { humanReadableSize } from "@src/utils/BytesUtil";

export const SizeDisplay = ({ source }: { source: string }) => {
  return (
    <span className="mr-8 text-gray-700 font-semibold font-mono">
      {humanReadableSize(new TextEncoder().encode(source).byteLength)}
    </span>
  );
};
