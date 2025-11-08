"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Penguino?", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    { label: "Join now", href: "/register" },
  ];

  return (
    <header className="bg-primary-500 absolute w-full">
      <div className="flex items-center justify-between px-6 py-6 md:px-12 xl:px-24">
        <Link href="/">
          <div className="text-xl font-bold text-white">Logo</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="rounded hover:cursor-pointer hover:bg-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="h-full space-y-2 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full py-2 text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
