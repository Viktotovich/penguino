"use client";
//types
import { ButtonHTMLAttributes } from "react";

type CopyToClipboardButtonProps = {
  cb: () => void;
  body: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CopyToClipboardButton({
  cb,
  body,
  ...attr
}: CopyToClipboardButtonProps) {
  return (
    <>
      <button onClick={cb} {...attr}>
        {body}
      </button>
    </>
  );
}
