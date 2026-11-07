"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3">
        <nav className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-xl transition-colors duration-200 md:px-6 ${scrolled ? "border-[#1b0624]/10 bg-[#f7f7f5]/95" : "border-[#1b0624]/[.07] bg-[#f7f7f5]/85"}`}>
          <Link href="/" className="flex flex-col leading-tight text-[#1b0624] no-underline" aria-label="Antonio Enriquez Construction home">
            <span className="text-[15px] font-medium tracking-[-.04em]">Antonio Enriquez</span>
            <span className="text-[9px] uppercase tracking-[.12em] text-[#766a7c]">Construction · California</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link key={link.name} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`rounded-full border px-3 py-2 text-[12px] text-[#1b0624] no-underline transition-colors duration-200 ${isActive(link.href) ? "border-[#1b0624]/15 bg-[#edece7]" : "border-transparent hover:border-[#1b0624]/10 hover:bg-white/75"}`}>
                {link.name}
              </Link>
            ))}
            <Link href="/estimate" className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#160f0c] px-[18px] py-3 text-sm text-white no-underline transition-colors hover:bg-[#292421]">
              Request an estimate <ArrowRight size={15} />
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1b0624]/15 bg-white/70 text-[#1b0624] transition-colors hover:bg-white md:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#f7f7f5] pt-24 transition-opacity duration-200 md:hidden ${open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}>
        <div className="flex h-full flex-col justify-between px-6 pb-8">
          <div>
            {links.map((link, index) => (
              <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className={`flex items-center justify-between border-b border-[#1b0624]/10 py-5 text-2xl no-underline ${isActive(link.href) ? "text-[#1b0624]" : "text-[#444444]"}`}>
                <span><span className="mr-4 font-mono text-xs text-[#898683]">0{index + 1}</span>{link.name}</span>
                <ArrowRight size={19} />
              </Link>
            ))}
          </div>
          <div>
            <Link href="/estimate" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-full bg-[#160f0c] px-5 py-4 text-sm text-white no-underline">Request an estimate <ArrowRight size={18} /></Link>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.12em] text-[#766a7c]">Perris · California</p>
          </div>
        </div>
      </div>
    </>
  );
}
