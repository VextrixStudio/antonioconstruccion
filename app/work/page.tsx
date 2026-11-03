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
    "/IMG-20191105-WA0002.jpg",
    "/IMG-20191107-WA0018.jpg",
    "/IMG-20191206-WA0010.jpg",
    "/IMG-20191214-WA0005.jpg",
    "/IMG-20200115-WA0002.jpg",
    "/IMG-20200115-WA0005.jpg",
    "/IMG-20200115-WA0007.jpg",
    "/IMG-20200207-WA0008.jpg",
    "/IMG-20200207-WA0023.jpg",
    "/IMG-20200207-WA0024.jpg",
    "/IMG-20200207-WA0027.jpg",
    "/IMG-20200207-WA0030.jpg",
    "/IMG-20200207-WA0033.jpg",
    "/IMG-20200224-WA0001.jpg",
    "/IMG-20200224-WA0002.jpg",
    "/IMG-20200728-WA0001.jpeg",
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
        <div className="flex flex-col bg-black min-h-screen">

            {/* hero */}
            <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/5">
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col gap-6">
                        {/* Breadcrumb / label */}
                        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700">
                            <div className="h-[2px] w-10 bg-blue-500" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                                Project Gallery
                            </span>
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[11px] font-medium text-emerald-400/90">
                                Live
                            </span>
                        </div>

                        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
                            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold tracking-tight leading-[0.9] text-white">
                                Our Recent
                            </span>
                            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold tracking-tight leading-[0.9] text-zinc-500 mt-1">
                                Builds
                                <span className="text-blue-500">.</span>
                            </span>
                        </h1>

                        <p className="max-w-lg text-zinc-400 text-sm md:text-[15px] leading-relaxed mt-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Real work, real results. Browse through projects we&apos;ve completed across California. Tap any photo to see the details up close.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                                <Camera size={14} className="text-blue-400" />
                                {PROJECTS.length} Photos
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                                <MapPin size={14} className="text-emerald-400" />
                                California, USA
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* gallery grid */}
            <section className="px-4 md:px-6 py-16 md:py-20">
                <div className="mx-auto max-w-6xl">
                    {/* Section header */}
                    <div className="flex items-end justify-between mb-8 px-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                All Projects
                            </h2>
                            <p className="text-xs text-zinc-500 mt-1 font-medium">
                                Click any image to view in full
                            </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span className="tabular-nums text-white">{PROJECTS.length}</span>
                            <span>Total</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                        {PROJECTS.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => openLightbox(i)}
                                className="group relative aspect-square bg-zinc-900 overflow-hidden rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                                aria-label={`Open photo ${i + 1}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{ backgroundImage: `url(${src})` }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                {/* Number badge */}
                                <div className="absolute top-2.5 left-2.5 h-6 px-2 rounded-md bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-400 tabular-nums">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                {/* Expand icon */}
                                <div className="absolute bottom-2.5 right-2.5 h-9 w-9 rounded-xl bg-blue-500 border border-blue-400 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-400 scale-75 group-hover:scale-100">
                                    <ArrowUpRight size={15} strokeWidth={2.5} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* lightbox */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/97 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* Top bar */}
                    <div className="absolute top-0 left-0 right-0 px-5 md:px-10 py-4 flex items-center justify-between z-30">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                                    Photo
                                </span>
                                <span className="text-sm font-bold text-white tabular-nums">
                                    {String(activeIndex + 1).padStart(2, "0")}
                                </span>
                                <span className="text-zinc-600 text-xs">/</span>
                                <span className="text-xs text-zinc-500 tabular-nums">
                                    {PROJECTS.length}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black hover:border-white text-zinc-300 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                            aria-label="Close"
                        >
                            <X size={16} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Left arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 group"
                        aria-label="Previous"
                    >
                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-zinc-400 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 active:scale-95">
                            <ChevronLeft size={22} className="transition-transform group-hover:-translate-x-0.5" />
                        </div>
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 group"
                        aria-label="Next"
                    >
                        <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-zinc-400 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 active:scale-95">
                            <ChevronRight size={22} className="transition-transform group-hover:translate-x-0.5" />
                        </div>
                    </button>

                    {/* Main image */}
                    <div
                        className="relative w-full h-full flex items-center justify-center px-16 md:px-28 py-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            key={activeIndex}
                            className={`relative max-w-4xl w-full flex flex-col items-center ${direction === "right"
                                ? "animate-in fade-in slide-in-from-right-8 duration-400"
                                : "animate-in fade-in slide-in-from-left-8 duration-400"
                                }`}
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-zinc-900">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={PROJECTS[activeIndex]}
                                    alt={`Project ${activeIndex + 1}`}
                                    className="block max-w-full max-h-[72vh] w-auto h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-4 z-30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-1.5 overflow-x-auto no-scrollbar justify-start md:justify-center pb-1">
                            {PROJECTS.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > activeIndex ? "right" : "left");
                                        setActiveIndex(i);
                                    }}
                                    className={`relative shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${i === activeIndex
                                        ? "border-blue-500 scale-110 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                                        : "border-transparent opacity-40 hover:opacity-80 hover:border-white/30"
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

            {/* CTA */}
            <section className="py-32 md:py-40 px-6 border-t border-white/5 text-center relative overflow-hidden">
                <div className="mx-auto max-w-3xl space-y-8 relative z-10">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Hammer className="text-blue-400" size={24} />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-white">
                        Ready to
                        <br />
                        <span className="text-zinc-500">Start?</span>
                    </h2>

                    <p className="max-w-md mx-auto text-zinc-400 text-sm md:text-[15px] leading-relaxed">
                        No matter the size of the project, we bring the same dedication and craftsmanship. Let&apos;s talk about what you need.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/estimate"
                            className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-[1.03] active:scale-[0.98]"
                        >
                            Get an Estimate
                            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/40 active:scale-[0.98]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                                Quality
                            </p>
                            <p className="text-xs font-medium text-emerald-400 mt-0.5 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Solid &amp; Verified
                            </p>
                        </div>
                        <div className="w-px bg-white/10" />
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                                Service Area
                            </p>
                            <p className="text-xs font-medium text-blue-400 mt-0.5 flex items-center gap-1.5">
                                <MapPin size={10} />
                                California Based
                            </p>
                        </div>
                    </div>

                    <p className="text-[10px] font-medium text-zinc-600 tracking-wide">
                        Antonio Enriquez Construction · Est. 2016
                    </p>
                </div>
            </footer>
        </div>
    );
}