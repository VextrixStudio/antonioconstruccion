// app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
    ArrowUpRight,
    Construction,
    Home,
    AlertTriangle,
    Wrench,
    HardHat,
    Ruler,
    Compass,
    Search
} from "lucide-react";

export default function NotFound() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [glitch, setGlitch] = useState(false);
    const [time, setTime] = useState("");
    const [coords, setCoords] = useState({ lat: "34.0522", lng: "118.2437" });
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse parallax
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    // Live clock (HUD vibe)
    useEffect(() => {
        const update = () => {
            const d = new Date();
            const h = String(d.getHours()).padStart(2, "0");
            const m = String(d.getMinutes()).padStart(2, "0");
            const s = String(d.getSeconds()).padStart(2, "0");
            setTime(`${h}:${m}:${s}`);
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    // Coordinate scrambler (looks like a scanner)
    useEffect(() => {
        const id = setInterval(() => {
            const rand = (base: number, range: number) =>
                (base + (Math.random() - 0.5) * range).toFixed(4);
            setCoords({ lat: rand(34.0522, 0.5), lng: rand(118.2437, 0.5) });
        }, 1200);
        return () => clearInterval(id);
    }, []);

    // Periodic glitch
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center px-6 py-20 select-none"
        >

            {/* ============================================= */}
            {/* === 3D PERSPECTIVE STAGE === */}
            {/* ============================================= */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
            >
                {/* === FLOOR GRID (animated infinite road) === */}
                <div
                    className="absolute bottom-0 left-1/2 w-[400%] h-[160%] -translate-x-1/2 origin-top"
                    style={{
                        transform: `rotateX(70deg) translateY(15%) translateX(${mousePos.x * -25}px) translateZ(0)`,
                        backgroundImage: `
                            linear-gradient(rgba(245,158,11,0.35) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(245,158,11,0.35) 1px, transparent 1px)
                        `,
                        backgroundSize: "90px 90px",
                        maskImage:
                            "radial-gradient(ellipse at 50% 0%, black 5%, transparent 65%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at 50% 0%, black 5%, transparent 65%)",
                        animation: "gridScrollFloor 6s linear infinite"
                    }}
                />

                {/* === SECONDARY FLOOR GRID (faster, finer) === */}
                <div
                    className="absolute bottom-0 left-1/2 w-[400%] h-[160%] -translate-x-1/2 origin-top opacity-50"
                    style={{
                        transform: `rotateX(70deg) translateY(15%) translateX(${mousePos.x * -25}px) translateZ(0)`,
                        backgroundImage: `
                            linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px",
                        maskImage:
                            "radial-gradient(ellipse at 50% 0%, black 5%, transparent 50%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at 50% 0%, black 5%, transparent 50%)",
                        animation: "gridScrollFast 3s linear infinite"
                    }}
                />

                {/* === CEILING GRID === */}
                <div
                    className="absolute top-0 left-1/2 w-[400%] h-[160%] -translate-x-1/2 origin-bottom opacity-30"
                    style={{
                        transform: `rotateX(-70deg) translateY(-15%) translateX(${mousePos.x * 25}px) translateZ(0)`,
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "90px 90px",
                        maskImage:
                            "radial-gradient(ellipse at 50% 100%, black 5%, transparent 65%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at 50% 100%, black 5%, transparent 65%)"
                    }}
                />

                {/* === FLOATING 3D WIREFRAME CUBES === */}
                <div
                    className="absolute top-1/3 left-1/4 hidden md:block"
                    style={{
                        transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 20}px, 0) rotateX(45deg) rotateY(45deg)`,
                        animation: "floatCube 8s ease-in-out infinite"
                    }}
                >
                    <div className="relative h-24 w-24" style={{ transformStyle: "preserve-3d" }}>
                        {[
                            "rotateY(0deg) translateZ(48px)",
                            "rotateY(90deg) translateZ(48px)",
                            "rotateY(180deg) translateZ(48px)",
                            "rotateY(-90deg) translateZ(48px)",
                            "rotateX(90deg) translateZ(48px)",
                            "rotateX(-90deg) translateZ(48px)"
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 border border-amber-500/30"
                                style={{ transform: t }}
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="absolute top-1/4 right-1/4 hidden md:block"
                    style={{
                        transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -25}px, 0)`,
                        animation: "floatCube 10s ease-in-out infinite reverse"
                    }}
                >
                    <div className="relative h-16 w-16" style={{ transformStyle: "preserve-3d", transform: "rotateX(35deg) rotateY(-30deg)" }}>
                        {[
                            "rotateY(0deg) translateZ(32px)",
                            "rotateY(90deg) translateZ(32px)",
                            "rotateY(180deg) translateZ(32px)",
                            "rotateY(-90deg) translateZ(32px)",
                            "rotateX(90deg) translateZ(32px)",
                            "rotateX(-90deg) translateZ(32px)"
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 border border-white/20"
                                style={{ transform: t }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* === AMBIENT GLOWS === */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-100 w-200 bg-amber-500/20 blur-[150px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-50 w-150 bg-amber-600/15 blur-[100px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/4 h-64 w-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* === SCANLINES === */}
            <div
                className="absolute inset-0 pointer-events-none z-10 opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)"
                }}
            />

            {/* ============================================= */}
            {/* === HUD CORNERS === */}
            {/* ============================================= */}

            {/* Top-left HUD */}
            <div className="absolute top-6 left-6 z-30 hidden md:flex items-start gap-3 font-mono text-[9px] text-amber-500/70 tracking-widest">
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <div className="h-3 w-3 border-t border-l border-amber-500" />
                    </div>
                </div>
                <div className="space-y-1 leading-tight">
                    <p>SYS://ANTONIO.CORE</p>
                    <p className="text-zinc-600">STATUS: <span className="text-red-500">CONNECTION_LOST</span></p>
                    <p className="text-zinc-600">UPTIME: {time}</p>
                </div>
            </div>

            {/* Top-right HUD */}
            <div className="absolute top-6 right-6 z-30 hidden md:flex items-start gap-3 font-mono text-[9px] text-amber-500/70 tracking-widest text-right">
                <div className="space-y-1 leading-tight">
                    <p>GEO://SCANNING</p>
                    <p className="text-zinc-600">LAT: <span className="text-zinc-400">{coords.lat}</span></p>
                    <p className="text-zinc-600">LNG: <span className="text-zinc-400">{coords.lng}</span></p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="h-3 w-3 border-t border-r border-amber-500" />
                </div>
            </div>

            {/* Bottom-left HUD */}
            <div className="absolute bottom-6 left-6 z-30 hidden md:flex items-end gap-3 font-mono text-[9px] text-amber-500/70 tracking-widest">
                <div className="flex flex-col items-start">
                    <div className="h-3 w-3 border-b border-l border-amber-500" />
                </div>
                <div className="space-y-1 leading-tight">
                    <p className="text-zinc-600">ERR_CODE: 0x404</p>
                    <p className="text-zinc-600">FILE_NOT_FOUND</p>
                </div>
            </div>

            {/* Bottom-right HUD */}
            <div className="absolute bottom-6 right-6 z-30 hidden md:flex items-end gap-3 font-mono text-[9px] text-amber-500/70 tracking-widest text-right">
                <div className="space-y-1 leading-tight">
                    <p className="text-zinc-600">REBUILD: <span className="text-amber-500">REQUIRED</span></p>
                    <p className="text-zinc-600">v3.0.1 / 2025</p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="h-3 w-3 border-b border-r border-amber-500" />
                </div>
            </div>

            {/* ============================================= */}
            {/* === MAIN CONTENT === */}
            {/* ============================================= */}
            <div
                className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center gap-10 animate-in fade-in zoom-in-95 duration-1000"
                style={{
                    transform: `perspective(1000px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * -2}deg)`,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.2s ease-out"
                }}
            >

                {/* Tag */}
                <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="h-px w-8 bg-amber-500" />
                    <AlertTriangle className="text-amber-500 animate-pulse" size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">
                        Critical System Error
                    </span>
                    <AlertTriangle className="text-amber-500 animate-pulse" size={14} />
                    <div className="h-px w-8 bg-amber-500" />
                </div>

                {/* 404 — Massive with depth */}
                <div className="relative" style={{ transform: "translateZ(50px)" }}>
                    {/* Echo layers (depth illusion) */}
                    <h1
                        aria-hidden
                        className="absolute inset-0 text-[180px] md:text-[340px] font-black tracking-tighter leading-[0.8] italic uppercase text-amber-500/5 blur-2xl"
                    >
                        404
                    </h1>
                    <h1
                        aria-hidden
                        className="absolute inset-0 text-[180px] md:text-[340px] font-black tracking-tighter leading-[0.8] italic uppercase text-amber-500/10 translate-x-2 translate-y-2"
                    >
                        404
                    </h1>

                    {/* Main 404 */}
                    <h1
                        className={`relative text-[180px] md:text-[340px] font-black tracking-tighter leading-[0.8] italic uppercase text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-300 to-zinc-900 transition-all duration-100 ${glitch ? "translate-x-1 skew-x-3" : ""
                            }`}
                        style={{
                            textShadow: glitch
                                ? "4px 0 #f59e0b, -4px 0 #06b6d4, 0 0 60px rgba(245,158,11,0.3)"
                                : "0 0 80px rgba(245,158,11,0.15)"
                        }}
                    >
                        404
                    </h1>

                    {/* Floating badges */}
                    <div className="absolute -top-2 -right-2 md:top-8 md:-right-8 rotate-12 bg-amber-500 text-black px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(245,158,11,0.4)] flex items-center gap-2 animate-in slide-in-from-right-8 fade-in duration-700 delay-500">
                        <Construction size={12} />
                        Under Construction
                    </div>

                    <div className="absolute -bottom-2 -left-2 md:bottom-12 md:-left-12 -rotate-12 bg-white text-black px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(255,255,255,0.15)] flex items-center gap-2 animate-in slide-in-from-left-8 fade-in duration-700 delay-700">
                        <HardHat size={12} />
                        Site Closed
                    </div>
                </div>

                {/* Title + description */}
                <div className="space-y-6 max-w-2xl" style={{ transform: "translateZ(30px)" }}>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic text-zinc-100">
                        This blueprint <br />
                        <span className="text-amber-500">doesn&apos;t exist.</span>
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed italic max-w-md mx-auto">
                        Looks like this page was demolished — or it was never built in the
                        first place. Let&apos;s get you back to solid ground.
                    </p>
                </div>

                {/* Quick stat strip */}
                <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-full overflow-hidden max-w-md w-full backdrop-blur-md" style={{ transform: "translateZ(20px)" }}>
                    {[
                        { icon: <Wrench size={12} />, label: "Status", value: "Offline" },
                        { icon: <Ruler size={12} />, label: "Depth", value: "0 ft" },
                        { icon: <Compass size={12} />, label: "Path", value: "Unknown" }
                    ].map((s, i) => (
                        <div key={i} className="bg-zinc-950/60 px-4 py-3 flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1.5 text-amber-500">
                                {s.icon}
                                <span className="text-[8px] font-black uppercase tracking-widest">{s.label}</span>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">{s.value}</span>
                        </div>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4" style={{ transform: "translateZ(40px)" }}>
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-4 bg-amber-500 text-black px-10 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95 hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)]"
                    >
                        <Home size={16} />
                        Return Home
                        <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </Link>

                    <Link
                        href="/work"
                        className="group relative inline-flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 hover:text-white hover:border-white/30 px-10 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all"
                    >
                        <Search size={14} />
                        Browse Projects
                        <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </Link>
                </div>

                {/* Footer stamp */}
                <div className="pt-8 flex items-center gap-4 opacity-60">
                    <div className="h-px w-12 bg-zinc-700" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-zinc-600 italic font-mono">
                        Antonio Construction • ERR_404 • Rebuilding Reality
                    </span>
                    <div className="h-px w-12 bg-zinc-700" />
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes gridScrollFloor {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 90px; }
                }
                @keyframes gridScrollFast {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 30px; }
                }
                @keyframes floatCube {
                    0%, 100% { transform: translate3d(0, 0, 0) rotateX(45deg) rotateY(45deg); }
                    50% { transform: translate3d(0, -30px, 0) rotateX(135deg) rotateY(225deg); }
                }
            `}</style>
        </section>
    );
}