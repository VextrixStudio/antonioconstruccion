"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open + ESC key
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center p-4 transition-all duration-500 lg:top-6`}
      >
        <nav
          className={`
            flex w-full max-w-6xl items-center justify-between 
            px-5 md:px-6 py-3 transition-all duration-500
            ${
              scrolled
                ? "rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
                : "rounded-2xl bg-black/40 backdrop-blur-md border border-white/5"
            }
          `}
        >
          {/* logo */}
          <Link
            href="/"
            className="group flex items-center gap-1 text-lg font-black tracking-tighter text-white"
          >
            ANTONIO
            <span className="text-blue-500 transition-transform duration-300 group-hover:scale-150">
              .
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex gap-1">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 ${
                      active
                        ? "text-white bg-white/5"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-[2px] w-5 bg-blue-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="h-5 w-px bg-white/10" />

            <Link
              href="/estimate"
              className="group flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-blue-500 hover:text-white active:scale-95"
            >
              Free Quote
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-95 md:hidden"
          >
            <div className="relative h-4 w-4">
              <Menu
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={18}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/97 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-8 pt-28 pb-10">
          {/* Links */}
          <div className="flex flex-col gap-2">
            {links.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-white/5 transition-all duration-500 transform ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-mono font-bold text-blue-500/50 tabular-nums">
                      0{i + 1}
                    </span>
                    <span
                      className={`text-3xl font-bold tracking-tight transition-colors ${
                        active
                          ? "text-blue-400"
                          : "text-white group-hover:text-blue-400"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>
                  <ArrowRight
                    size={20}
                    className={`transition-all duration-300 ${
                      active
                        ? "text-blue-400 translate-x-0 opacity-100"
                        : "text-zinc-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`flex flex-col gap-5 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${links.length * 70 + 100}ms` : "0ms" }}
          >
            <Link
              href="/estimate"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between bg-white hover:bg-blue-500 text-black hover:text-white rounded-2xl px-6 py-5 transition-all duration-300 active:scale-[0.98]"
            >
              <span className="text-sm font-bold uppercase tracking-wider">
                Get an Estimate
              </span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  Available Now
                </span>
              </div>
              <span className="text-[10px] font-medium text-zinc-600 tracking-wider">
                CALIFORNIA · EST. 2016
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}