"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Platform", href: "#" },
  { name: "Modules", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 shadow-md shadow-indigo-500/20">
              <div className="h-4 w-4 rotate-45 rounded-sm border-2 border-white" />
            </div>

            <span className="text-xl font-bold tracking-tight text-zinc-900">
              CampusOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-zinc-600 transition-all duration-200 hover:text-zinc-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost">Login</Button>

            <Button className="rounded-xl px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="rounded-lg p-2 transition hover:bg-zinc-100 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-zinc-200 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-700 transition-colors hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              ))}

              <Button
                variant="ghost"
                className="justify-start px-0"
              >
                Login
              </Button>

              <Button className="rounded-xl">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}