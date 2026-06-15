import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col">

            {/* --- HERO: CONTACT --- */}
            <section className="relative px-6 py-24 md:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-amber-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 animate-pulse">Available Now</span>
                        </div>
                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase">
                            LET&apos;S <br />
                            <span className="text-zinc-800 transition-colors hover:text-zinc-700 cursor-default">START</span><span className="text-amber-500">.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* --- DIRECT ACTION GRID --- */}
            <section className="px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* SMS / TEXT CARD (Prioridad 1) */}
                        <a
                            href="sms:+13237408161"
                            className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-950 p-10 md:p-16 transition-all hover:border-amber-500/50"
                        >
                            <div className="absolute -right-10 -top-10 text-amber-500/5 transition-transform group-hover:scale-110 group-hover:-rotate-12">
                                <MessageSquare size={300} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center text-amber-500 transition-all group-hover:bg-amber-500 group-hover:text-black">
                                        <MessageSquare size={20} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-800 transition-colors group-hover:text-amber-500" />
                                </div>
                                <div>
                                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4">Fastest Response</h2>
                                    <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100">Send a <br /> <span className="text-amber-500">Message</span></p>
                                    <p className="mt-6 text-zinc-500 text-sm font-light italic uppercase tracking-widest">(323) 740-8161</p>
                                </div>
                            </div>
                        </a>

                        {/* EMAIL CARD */}
                        <a
                            href="mailto:josezherrero@gmail.com"
                            className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-950 p-10 md:p-16 transition-all hover:border-white/10"
                        >
                            <div className="absolute -right-10 -top-10 text-white/5 transition-transform group-hover:scale-110 group-hover:rotate-12">
                                <Mail size={300} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 transition-all group-hover:bg-zinc-100 group-hover:text-black">
                                        <Mail size={20} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-800 transition-colors group-hover:text-zinc-100" />
                                </div>
                                <div>
                                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-4">Official Inquiry</h2>
                                    <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100 transition-colors group-hover:text-zinc-400">Email <br /> Us</p>
                                    <p className="mt-6 text-zinc-500 text-sm font-light lowercase tracking-wider group-hover:text-zinc-200">josezherrero@gmail.com</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* --- SERVICE AREA: CALIFORNIA GRID --- */}
            <section className="py-32 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-8 bg-zinc-800" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Service Area</span>
                            </div>
                            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none">
                                ENTIRE <br />
                                <span className="text-zinc-800 hover:text-amber-500/10 transition-colors cursor-default">CALIFORNIA</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 border-l border-white/5 pl-8 pb-4">
                            <p className="text-zinc-400 text-lg font-light leading-relaxed">
                                Operating from Los Angeles to Southern California and beyond. We bring our premium construction standards to your location.
                            </p>
                        </div>
                    </div>

                    {/* Location Tech Labels */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                        {[
                            { l: "Primary Hub", v: "Los Angeles" },
                            { l: "Region", v: "Southern CA" },
                            { l: "License", v: "Statewide" },
                            { l: "Operations", v: "Mon - Sat" }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-950 p-8">
                                <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600 mb-2">{item.l}</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-zinc-200">{item.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- QUICK CALL STRIP --- */}
            <section className="bg-amber-500 py-16 px-6 overflow-hidden">
                <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-black text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Need an Estimate?</h3>
                        <p className="text-black/60 text-[10px] font-bold uppercase tracking-[0.4em]">Fast site visits available this week</p>
                    </div>
                    <a
                        href="tel:+13237408161"
                        className="flex items-center gap-6 bg-black text-white px-12 py-8 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-transform hover:scale-105 active:scale-95"
                    >
                        Call Now <Phone size={16} />
                    </a>
                </div>
            </section>

            {/* --- FOOTER LOCATION MARK --- */}
            <footer className="py-12 border-t border-white/5 text-center">
                <div className="flex flex-col items-center gap-4">
                    <MapPin size={20} className="text-amber-500/20" />
                    <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-700">
                        34.0522° N, 118.2437° W • Los Angeles, CA
                    </p>
                </div>
            </footer>

        </div>
    );
}