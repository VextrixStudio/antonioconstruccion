import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Antonio Enriquez Construction | Premium Building & Remodeling",
  description: "High-end residential and commercial construction since 2016. Serving Perris and all of California."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="color-scheme" content="dark only" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-white`}
      >
        <BackgroundSystem />

        <Nav />

        <main className="relative flex flex-col pt-20 lg:pt-28">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}

function BackgroundSystem() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-150 bg-amber-500/10 blur-[120px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-950/50 py-16 px-6 backdrop-blur-md">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 items-start">

        {/* brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tighter uppercase text-white">
            Antonio Enriquez<span className="text-amber-500">.</span>
          </h3>
          <p className="text-xs text-zinc-300 uppercase tracking-[0.3em]">
            Building Excellence Since 2016
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-500">
            Perris · California
          </p>
        </div>

        {/* links legales */}
        <div className="flex flex-wrap gap-3 md:justify-center">
          <Link
            href="/privacy"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
          >
            Contact
          </Link>
        </div>

        {/* copyright */}
        <div className="text-center md:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-zinc-500 mt-2 italic">
            Crafted by Vextrix Studio
          </p>
        </div>
      </div>
    </footer>
  );
}