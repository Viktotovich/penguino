//Components
import Link from "next/link";

//Types
type ReadMoreAnchorProps = {
  href: string;
  body: string;
};

export default function ReadMoreAnchor({ href, body }: ReadMoreAnchorProps) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-800 hover:cursor-pointer hover:text-slate-900"
    >
      {body}
    </Link>
  );
}
