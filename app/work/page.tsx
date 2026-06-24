"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, Hammer, X, ChevronLeft, ChevronRight, Camera, MapPin } from "lucide-react";

const PROJECTS = [
    "/20180919_155141.jpg",
    "/20181005_125712.jpg",
    "/20181005_163103.jpg",
    "/20190105_122508.jpg",
    "/20190114_083432.jpg",
    "/20190301_171756.jpg",
    "/20190626_090747.jpg",
    "/20190626_090815.jpg",
    "/20191119_160019.jpg",
    "/20191208_152621.jpg",
    "/20191211_203810.jpg",
    "/IMG-20191023-WA0012.jpeg",
    "/IMG-20191107-WA0018.jpg",
    "/IMG-20191206-WA0010.jpg",
    "/IMG-20191214-WA0005.jpg",
    "/IMG-20200115-WA0005.jpg",
    "/IMG-20200115-WA0007.jpg",
    "/IMG-20200207-WA0023.jpg",
    "/IMG-20200207-WA0024.jpg",
    "/IMG-20200207-WA0030.jpg",
    "/IMG-20200224-WA0001.jpg",
    "/IMG-20200224-WA0002.jpg",
    "/IMG_20200306_154649.jpg",
    "/IMG_20200321_163715.jpg",
    "/IMG_20200331_150904.jpg",
    "/IMG_20200331_151120.jpg",
    "/IMG_20200403_151845.jpg",
    "/IMG_20200403_151943.jpg",
    "/IMG_20200429_123339.jpg",
    "/IMG_20200930_145701.jpg",
    "/IMG_20201104_152652.jpg",
    "/IMG_20201105_073737.jpg",
    "/IMG_20210823_150416.jpg",
    "/PXL_20210116_231731758.jpg",
    "/cosina.png",
    "/e56a6319af5045248d67ca211f5661d7.jpg",
];

export default function WorkPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const openLightbox = (i: number) => setActiveIndex(i);
    const closeLightbox = useCallback(() => setActiveIndex(null), []);

    const goNext = useCallback(() => {
        setDirection("right");
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % PROJECTS.length));
    }, []);

    const goPrev = useCallback(() => {
        setDirection("left");
        setActiveIndex((prev) => (prev === null ? null : (prev - 1 + PROJECTS.length) % PROJECTS.length));
    }, []);

    // teclado y bloqueo de scroll
    useEffect(() => {
        if (activeIndex === null) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [activeIndex, closeLightbox, goNext, goPrev]);

    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 pt-12 pb-24 md:pt-20 md:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700">
                            <div className="h-px w-12 bg-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400">
                                Project Gallery
                            </span>
                        </div>

                        <h1 className="text-7xl md:text-[150px] font-black tracking-tighter leading-[0.8] uppercase animate-in fade-in slide-in-from-bottom-6 duration-1000 text-white">
                            Our Recent <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                Builds
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-sm md:text-base font-medium leading-relaxed italic">
                            We don&apos;t just talk — we get our hands dirty. A real gallery of what we&apos;ve been building across California. Tap any photo to view it in detail.
                        </p>

                        <div className="flex items-center gap-6 pt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                            <span className="flex items-center gap-2">
                                <Camera size={12} className="text-amber-500" />
                                {PROJECTS.length} Photos
                            </span>
                            <span className="h-3 w-px bg-white/20" />
                            <span className="flex items-center gap-2">
                                <MapPin size={12} className="text-amber-500" />
                                California, USA
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* galeria */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {PROJECTS.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => openLightbox(i)}
                                className="group relative aspect-square bg-zinc-950 overflow-hidden rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-500 cursor-pointer"
                                aria-label={`Open photo ${i + 1}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${src})` }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute top-3 left-3 h-7 px-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center text-[9px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all duration-500 tabular-nums">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <div className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                                    <ArrowUpRight size={16} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* lightbox */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* barra superior */}
                    <div className="absolute top-0 left-0 right-0 px-6 md:px-12 py-5 flex items-center justify-between z-30 bg-linear-to-b from-black/90 to-transparent">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-amber-400">
                                    Gallery
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-300">
                                <span className="text-white tabular-nums text-sm font-black">
                                    {String(activeIndex + 1).padStart(2, "0")}
                                </span>
                                <span className="text-zinc-600">/</span>
                                <span className="text-zinc-400 tabular-nums">
                                    {String(PROJECTS.length).padStart(2, "0")}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="h-11 w-11 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* flecha izquierda */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 group flex flex-col items-center gap-2"
                        aria-label="Previous"
                    >
                        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-white/20 bg-white/10 hover:bg-amber-500 hover:border-amber-500 hover:text-black text-white backdrop-blur-md flex items-center justify-center transition-all group-hover:scale-110 active:scale-95">
                            <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-0.5" />
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-amber-400 transition-colors hidden md:block">
                            Prev
                        </span>
                    </button>

                    {/* flecha derecha */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-30 group flex flex-col items-center gap-2"
                        aria-label="Next"
                    >
                        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-white/20 bg-white/10 hover:bg-amber-500 hover:border-amber-500 hover:text-black text-white backdrop-blur-md flex items-center justify-center transition-all group-hover:scale-110 active:scale-95">
                            <ChevronRight size={24} className="transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-amber-400 transition-colors hidden md:block">
                            Next
                        </span>
                    </button>

                    {/* imagen principal */}
                    <div
                        className="relative w-full h-full flex items-center justify-center px-20 md:px-32 py-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            key={activeIndex}
                            className={`relative max-w-5xl w-full flex flex-col items-center ${direction === "right"
                                    ? "animate-in fade-in slide-in-from-right-12 duration-500"
                                    : "animate-in fade-in slide-in-from-left-12 duration-500"
                                }`}
                        >
                            <div className="absolute -inset-8 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] bg-zinc-950">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={PROJECTS[activeIndex]}
                                    alt={`Project ${activeIndex + 1}`}
                                    className="block max-w-full max-h-[70vh] w-auto h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* miniaturas */}
                    <div
                        className="absolute bottom-0 left-0 right-0 px-6 py-5 z-30 bg-linear-to-t from-black/90 to-transparent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center pb-2">
                            {PROJECTS.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > activeIndex ? "right" : "left");
                                        setActiveIndex(i);
                                    }}
                                    className={`relative shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-xl overflow-hidden border transition-all duration-300 ${i === activeIndex
                                            ? "border-amber-500 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                                            : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/40"
                                        }`}
                                    aria-label={`Jump to photo ${i + 1}`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${src})` }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* cta */}
            <section className="py-40 px-6 border-t border-white/10 text-center relative overflow-hidden">
                <div className="mx-auto max-w-5xl space-y-12 relative z-10">
                    <Hammer className="mx-auto text-amber-500" size={32} />

                    <h2 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.8] text-white">
                        Ready to <br />
                        <span className="text-zinc-300 italic">Start?</span>
                    </h2>

                    <p className="max-w-xl mx-auto text-zinc-200 text-sm font-medium">
                        No matter the size of the project, we bring the same tools and the same effort. Let&apos;s talk about what you need.
                    </p>

                    <div className="pt-6">
                        <Link
                            href="/estimate"
                            className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-8 rounded-full text-xs font-black uppercase tracking-[0.4em] transition-all hover:bg-amber-500 hover:scale-105 active:scale-95"
                        >
                            Get an Estimate
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="py-20 border-t border-white/10 bg-zinc-950/40">
                <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-10">
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">
                                Project Quality
                            </p>
                            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mt-1 italic">
                                Solid &amp; Verified
                            </p>
                        </div>
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">
                                Service Area
                            </p>
                            <p className="text-[10px] font-bold text-zinc-200 uppercase tracking-widest mt-1">
                                California Based
                            </p>
                        </div>
                    </div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-zinc-400 italic">
                        Antonio Enriquez Construction · Est. 2016
                    </p>
                </div>
            </footer>

        </div>
    );
}