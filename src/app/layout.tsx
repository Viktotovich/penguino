//SEO
import type { Metadata } from "next";

//styling
import "./globals.css";

//Fonts
import { lusitana } from "~/core/fonts/fonts";

// UI Wrapper

//Components
import Header from "~/core/ui/Header";

export const metadata: Metadata = {
  title: "Penguino, home of entrepreneurs",
  description:
    "Penguino, the main website for entrepreneurs to discuss, share ideas, and make valuable, long lasting connections online, completely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} antialiased dark:bg-gradient-blue`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
