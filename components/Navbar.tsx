"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#05050A]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND NAME */}
        <Link 
          href="/" 
          className="text-3xl font-semibold tracking-tight 
                     bg-gradient-to-r from-[#3A6DFF] to-[#232C85] 
                     bg-clip-text text-transparent"
        >
          WebX AI
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-lg font-medium hover:text-white transition relative group"
            >
              {link.name}

              {/* Minimal underline */}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-accent group-hover:w-full 
                  transition-all duration-300
                "
              />
            </Link>
          ))}

          {/* NEW FUTURISTIC CTA BUTTON */}
          <Link
            href="/contact"
            className="
              px-5 py-2 rounded-lg
              bg-accent/15
              text-accent
              border border-accent/20
              backdrop-blur-md
              transition-all duration-300
              hover:bg-accent/25
              hover:border-accent/40
            "
          >
            Start Project
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#05050A]/95 backdrop-blur-xl px-6 py-5 border-t border-white/10 flex flex-col gap-5">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-xl hover:text-white transition pb-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            className="bg-accent/20 text-accent text-center py-3 rounded-md font-medium border border-accent/30"
          >
            Start Project
          </Link>

        </div>
      )}
    </nav>
  );
}
