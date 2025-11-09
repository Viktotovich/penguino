//Components
import Link from "next/link";

//types
import { ComponentProps } from "react";

// Utils
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export default function NavLinkWithCB(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <>
      <Link
        {...props}
        href={props.href}
        className={cn(
          "block w-full py-2 text-white",
          pathname === props.href && "underline",
        )}
      />
    </>
  );
}
