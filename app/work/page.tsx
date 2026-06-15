// app/work/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Hammer } from "lucide-react";

// --- UTILS ---
function cn(...inputs: (string | boolean | undefined)[]) {
    return inputs.filter(Boolean).join(" ");
}

const PROJECTS = [
    {
        id: "AC-01",
        title: "Modern Beverly Hills Estate",
        category: "Residential",
        location: "Beverly Hills, CA",
        sqft: "5,400",
        year: "2023",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "AC-02",
        title: "Industrial Tech Office",
        category: "Commercial",
        location: "Santa Monica, CA",
        sqft: "12,000",
        year: "2022",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
    {
        id: "AC-03",
        title: "Minimalist Kitchen Remodel",
        category: "Remodeling",
        location: "Pasadena, CA",
        sqft: "850",
        year: "2023",
        img: "/cosina.png",
    },
    {
        id: "AC-04",
        title: "Luxury Condo Finishing",
        category: "Finishing",
        location: "Downtown LA",
        sqft: "2,200",
        year: "2024",
        img: "/Luxury-Condo.png",
    }
];

const CATEGORIES = ["All", "Residential", "Commercial", "Remodeling", "Finishing"];

export default function WorkPage() {
    const [filter, setFilter] = useState("All");
    const filtered = PROJECTS.filter(p => filter === "All" || p.category === filter);

    return (
        <div className="flex flex-col">

            {/* --- HERO --- */}
            <section className="relative px-6 pt-12 pb-24 md:pt-20 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700">
                            <div className="h-px w-12 bg-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Real Work</span>
                        </div>
                        <h1 className="text-7xl md:text-[150px] font-black tracking-tighter leading-[0.8] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            Our Recent <br />
                            <span className="text-zinc-800 transition-colors hover:text-zinc-700 cursor-default">Builds</span><span className="text-amber-500">.</span>
                        </h1>
                        <p className="max-w-xl text-zinc-500 text-sm md:text-base font-medium leading-relaxed italic">
                            We don&apos;t just talk; we get our hands dirty. From small remodels to full estates, here is what we&apos;ve been building across California.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- STICKY FILTER BAR --- */}
            <section className="sticky top-20 lg:top-22 z-30 bg-[#050505]/60 backdrop-blur-xl border-y border-white/5 px-6">
                <div className="mx-auto max-w-7xl flex items-center justify-between py-5 overflow-x-auto no-scrollbar">
                    <div className="flex gap-8 items-center shrink-0">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative pb-1",
                                    filter === cat ? "text-amber-500" : "text-zinc-500 hover:text-zinc-200"
                                )}
                            >
                                {cat}
                                {filter === cat && (
                                    <div className="absolute -bottom-5.25 left-0 w-full h-px bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                )}
                            </button>
                        ))}
                    </div>
                    <p className="hidden md:block text-[8px] font-bold text-zinc-700 uppercase tracking-widest italic">
                        Showing {filtered.length} Projects
                    </p>
                </div>
            </section>

            {/* --- PROJECTS GRID --- */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-4xl overflow-hidden shadow-2xl">
                        {filtered.map((p) => (
                            <div key={p.id} className="group relative aspect-4/3 md:aspect-square bg-zinc-950 overflow-hidden">

                                {/* Cinematic image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-30 grayscale group-hover:grayscale-0"
                                    style={{ backgroundImage: `url(${p.img})` }}
                                />

                                {/* Project content */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                ID: {p.id}
                                            </span>
                                            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[8px] font-bold uppercase tracking-widest text-zinc-300">
                                                {p.category}
                                            </span>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500 scale-75 group-hover:scale-100">
                                            <ArrowUpRight size={22} />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-100 group-hover:text-amber-500 transition-colors duration-500">
                                            {p.title}
                                        </h3>

                                        {/* Specs Grid */}
                                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                            <div>
                                                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Location</p>
                                                <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-300">{p.location}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Total Area</p>
                                                <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-300">{p.sqft} SQFT</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Finished</p>
                                                <p className="text-[10px] font-bold uppercase tracking-tight text-zinc-300">{p.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scanner Effect */}
                                <div className="absolute top-0 left-0 w-full h-px bg-amber-500/50 -translate-y-full group-hover:translate-y-100 transition-all duration-3000 ease-in-out opacity-0 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CONTACT SECTION --- */}
            <section className="py-40 px-6 border-t border-white/5 text-center relative overflow-hidden">
                <div className="mx-auto max-w-5xl space-y-12 relative z-10">
                    <Hammer className="mx-auto text-amber-500" size={32} />
                    <h2 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.8] text-zinc-100">
                        Ready to <br /> <span className="text-zinc-800 italic">Start?</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-zinc-500 text-sm font-medium">
                        No matter the size of the project, we bring the same tools and the same effort. Let&apos;s talk about what you need.
                    </p>
                    <div className="pt-6">
                        <Link
                            href="/estimate"
                            className="group relative inline-flex items-center gap-4 bg-zinc-100 text-black px-12 py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] transition-all hover:bg-amber-500 hover:scale-105 active:scale-95"
                        >
                            Get an Estimate
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-20 border-t border-white/5 bg-zinc-950/20">
                <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-10">
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700">Project Quality</p>
                            <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1 italic">Solid &amp; Verified</p>
                        </div>
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700">Service Area</p>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">California Based</p>
                        </div>
                    </div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-zinc-800 italic">
                        Antonio Construction • Est. 2016
                    </p>
                </div>
            </footer>

        </div>
    );
}