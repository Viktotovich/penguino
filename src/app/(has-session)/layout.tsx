//SEO
import type { Metadata } from "next";

//styling
import "../globals.css";

//Fonts
import { cactus } from "~/core/fonts/fonts";

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
    <html lang="en">
      <body className={`${cactus.className} relative flex antialiased`}>
        <SidebarProvider>
          <SidebarScaffold />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
