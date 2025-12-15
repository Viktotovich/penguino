//Components
import Link from "next/link";

//types
import { ComponentProps } from "react";

// Utils
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export default function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <>
      <Link
        {...props}
        href={props.href}
        className={cn(
          "hover:text-primary-500 rounded-sm p-2 text-white transition duration-300 hover:cursor-pointer hover:bg-white",
          pathname === props.href && "text-primary-500 bg-white",
        )}
      />
    </>
  );
}
