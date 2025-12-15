//types
import { ButtonHTMLAttributes } from "react";

type CopyToClipboardButtonProps = {
  link: string;
  body: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CopyToClipboardButton({
  link,
  body,
  ...attr
}: CopyToClipboardButtonProps) {
  function copyToClipboard() {
    return navigator.clipboard.writeText(link);
  }

  return (
    <button onClick={copyToClipboard} {...attr}>
      {body}
    </button>
  );
}
