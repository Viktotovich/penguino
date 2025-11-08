//SEO
import type { Metadata } from "next";

//styling
import "./globals.css";

//Fonts
import { cactus } from "~/core/fonts/fonts";

// UI Wrapper

//Components
import Header from "~/core/sections/Header";

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
      <body className={`${cactus.className} relative antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
