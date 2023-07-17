import * as React from "react";

export function EncodersTextArea(
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
) {
  return (
    <textarea
      {...props}
      className="textarea textarea-primary w-full"
    />
  );
}
