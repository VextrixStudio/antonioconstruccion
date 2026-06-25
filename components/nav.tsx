"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center p-4 transition-all duration-500 lg:top-6 ${
          scrolled ? "translate-y-[-4px]" : "translate-y-0"
        }`}
      >
        <nav className={`
          flex w-full max-w-6xl items-center justify-between 
          border border-white/5 px-6 py-3 transition-all duration-500
          ${scrolled ? "rounded-full bg-zinc-950/80 backdrop-blur-xl shadow-2xl" : "rounded-2xl bg-transparent"}
        `}>

          {/* logo */}
          <Link href="/" className="group flex items-center gap-1 text-lg font-black tracking-tighter text-zinc-100">
            ANTONIO<span className="text-amber-500 transition-transform group-hover:scale-150">.</span>
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                    link.name === "Media"
                      ? "text-amber-400 hover:text-amber-300"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-4 w-px bg-white/10" />

            <Link
              href="/estimate"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-tight text-black transition-all hover:bg-amber-500 hover:scale-105 active:scale-95"
            >
              Free Quote
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-100 transition-all hover:bg-white/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-10">
          <div className="grid grid-cols-1 gap-8">
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-4xl font-bold tracking-tighter transition-all duration-500 transform ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                } ${link.name === "Media" ? "text-amber-400" : "text-zinc-100"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="mr-4 text-amber-500/20">0{i + 1}</span>
                {link.name}
              </Link>
            ))}

            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="mt-10 flex items-center justify-between border-t border-white/10 pt-10 text-2xl font-black uppercase tracking-tighter text-amber-500"
            >
              Get an Estimate
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}