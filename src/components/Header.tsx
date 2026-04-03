"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Our Philosophy" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-sand-dark">
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <span className="text-xl font-semibold tracking-tight text-ink">
            Conscious Rest
          </span>
          <span className="block text-xs text-ink-muted tracking-widest uppercase">
            Mattress reviews rooted in body awareness
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-light hover:text-sage transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="bg-sage text-white px-4 py-2 rounded-md hover:bg-sage-dark transition-colors"
          >
            Find Your Mattress
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sand-dark bg-sand">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-ink-light hover:text-sage transition-colors text-sm font-medium py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quiz"
              onClick={() => setOpen(false)}
              className="bg-sage text-white px-4 py-2 rounded-md hover:bg-sage-dark transition-colors text-sm font-medium text-center mt-1"
            >
              Find Your Mattress
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
