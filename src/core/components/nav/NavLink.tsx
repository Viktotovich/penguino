//Components
import Link from "next/link";

//types
import { ComponentProps } from "react";

// Utils
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export default function NavLink(props: ComponentProps<typeof Link>){
    const pathname = usePathname()

    return (
        <>
            <Link {...props} href={props.href} className={cn("text-white p-2 rounded-sm hover:cursor-pointer transition duration-300 hover:bg-white hover:text-primary-500", pathname === props.href && "bg-white text-primary-500")} />
        </>
    )
}