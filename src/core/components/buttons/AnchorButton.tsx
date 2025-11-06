import Link from "next/link";

type ButtonProps = {
  href: string;
  cta: string;
  isPrimary: boolean;
};

export default function AnchorButton({ href, cta, isPrimary }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`border-border rounded-3xl border px-7 py-2 text-center text-base ${isPrimary && "text-primary-500 bg-white font-bold"}`}
    >
      {cta}
    </Link>
  );
}
