import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Sparkles, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                Available Now
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
                            LET&apos;S <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                START
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                            Reach out anytime — message, call or email. We respond fast and visit on-site for free estimates.
                        </p>
                    </div>
                </div>
            </section>

            {/* contacto directo */}
            <section className="px-6 py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-4">

                        {/* sms card */}
                        <a
                            href="sms:+13237408161"
                            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 md:p-16 transition-all hover:border-amber-500/50 hover:bg-amber-500/5"
                        >
                            <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 group-hover:bg-amber-500/20 blur-3xl rounded-full transition-all duration-700" />

                            <div className="absolute -right-10 -top-10 text-amber-500/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                <MessageSquare size={300} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                                        <MessageSquare size={20} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-400 transition-all group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 mb-5">
                                        <Sparkles size={11} className="text-amber-400" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-400">
                                            Fastest Response
                                        </span>
                                    </div>
                                    <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                                        Send a <br />
                                        <span className="text-amber-400">Message</span>
                                    </p>
                                    <p className="mt-6 text-zinc-200 text-sm font-bold italic uppercase tracking-widest">
                                        (323) 740-8161
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* email card */}
                        <a
                            href="mailto:josezherrero@gmail.com"
                            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 md:p-16 transition-all hover:border-white/30 hover:bg-white/10"
                        >
                            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/0 group-hover:bg-white/5 blur-3xl rounded-full transition-all duration-700" />

                            <div className="absolute -right-10 -top-10 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                                <Mail size={300} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between gap-20">
                                <div className="flex justify-between items-start">
                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-zinc-200 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
                                        <Mail size={20} />
                                    </div>
                                    <ArrowUpRight className="text-zinc-400 transition-all group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 mb-5">
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-200">
                                            Official Inquiry
                                        </span>
                                    </div>
                                    <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                                        Email <br />
                                        Us
                                    </p>
                                    <p className="mt-6 text-zinc-200 text-sm font-bold lowercase tracking-wider">
                                        josezherrero@gmail.com
                                    </p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* area de servicio */}
            <section className="py-32 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-8">
                                <MapPin size={11} className="text-amber-400" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                    Service Area
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-[80px] font-black uppercase tracking-tighter leading-none text-white">
                                ENTIRE <br />
                                <span className="text-zinc-300 hover:text-amber-400 transition-colors cursor-default">
                                    CALIFORNIA
                                </span>
                            </h2>
                        </div>

                        <div className="lg:col-span-4 border-l-2 border-amber-500/40 pl-6 pb-4">
                            <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed">
                                Operating from Perris across Southern California and beyond — bringing premium construction standards to your location.
                            </p>
                        </div>
                    </div>

                    {/* cards de ubicacion */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { l: "Primary Hub", v: "Perris, CA" },
                            { l: "Region", v: "Southern CA" },
                            { l: "License", v: "Statewide" },
                            { l: "Operations", v: "Mon - Sat" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

                                <div className="relative">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-3">
                                        {item.l}
                                    </p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-white">
                                        {item.v}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta amarilla */}
            <section className="bg-amber-500 py-16 px-6 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

                <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/30 bg-black/10 w-fit mx-auto md:mx-0">
                            <Clock size={11} className="text-black" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">
                                This Week
                            </span>
                        </div>
                        <h3 className="text-black text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            Need an Estimate?
                        </h3>
                        <p className="text-black/70 text-[10px] font-bold uppercase tracking-[0.4em]">
                            Fast site visits available this week
                        </p>
                    </div>

                    <a
                        href="tel:+13237408161"
                        className="group flex items-center gap-4 bg-black text-white px-12 py-8 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 hover:shadow-2xl"
                    >
                        Call Now
                        <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </div>
            </section>

            {/* footer ubicacion */}
            <footer className="py-16 border-t border-white/10 text-center">
                <div className="flex flex-col items-center gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30">
                        <MapPin size={18} className="text-amber-400" />
                    </div>
                    <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-400">
                        33°46&apos;48.3&quot;N 117°14&apos;59.1&quot;W · Perris, California
                    </p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-zinc-500 italic mt-2">
                        Antonio Enriquez Construction · Est. 2016
                    </p>
                </div>
            </footer>

        </div>
    );
}