//SEO
import type { Metadata } from "next";

//styling
import "../globals.css";

//Components
import { SidebarProvider, SidebarTrigger } from "~/core/components/ui/sidebar";
import SidebarScaffold from "../../core/components/nav/SidebarScaffold";

export const metadata: Metadata = {
  title: "Penguino, home of entrepreneurs",
  description:
    "Penguino, the main website for entrepreneurs to discuss, share ideas, and make valuable, long lasting connections online, completely free.",
};

export default function UserOnlyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarScaffold />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
