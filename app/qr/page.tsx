// app/qr/page.tsx
import { ArrowUpRight, Sparkles, QrCode, Hammer, Share2 } from "lucide-react";

const OPTIONS = [
    {
        title: "Our Work",
        subtitle: "See what we've built",
        description: "Browse our full portfolio of completed projects — kitchens, bathrooms, additions, full remodels and more.",
        url: "/work",
        icon: <Hammer size={28} />,
        color: "from-amber-500/20 to-orange-500/10",
        cta: "View Portfolio"
    },
    {
        title: "Social Media",
        subtitle: "Follow us everywhere",
        description: "Daily updates, project tours, behind-the-scenes clips and time-lapse builds across all our platforms.",
        url: "/media",
        icon: <Share2 size={28} />,
        color: "from-purple-500/20 to-amber-500/10",
        cta: "See Our Socials"
    }
];

export default function QRPage() {
    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
                            <Sparkles size={12} className="text-amber-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                Welcome
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-[100px] font-black tracking-tighter leading-[0.8] uppercase text-white">
                            THANKS FOR <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                SCANNING
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                            Welcome to Antonio Enriquez Construction. What would you like to explore?
                        </p>
                    </div>
                </div>
            </section>

            {/* qr icon decorativo */}
            <section className="px-6 -mt-4 mb-4">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                            <QrCode size={24} />
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                    </div>
                </div>
            </section>

            {/* opciones */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-3">
                            Choose an option
                        </p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                            Want to see what <br />
                            <span className="text-zinc-300">we can do</span>
                            <span className="text-amber-500">?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {OPTIONS.map((option, i) => (
                            <a
                                key={i}
                                href={option.url}
                                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 md:p-14 transition-all duration-500 hover:border-amber-500/50 hover:bg-amber-500/5"
                            >
                                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${option.color} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-all duration-700`} />

                                <div className="absolute -right-10 -top-10 text-amber-500/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                    <div className="scale-[10]">
                                        {option.icon}
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full justify-between gap-16">
                                    <div className="flex justify-between items-start">
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                                            {option.icon}
                                        </div>
                                        <ArrowUpRight className="text-zinc-400 transition-all group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                                    </div>

                                    <div>
                                        <p className="text-amber-400 text-sm font-bold italic tracking-tight mb-2">
                                            {option.subtitle}
                                        </p>
                                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-4">
                                            {option.title}
                                        </p>
                                        <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-sm mb-8">
                                            {option.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-500">
                                            {option.cta}
                                            <ArrowUpRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="relative py-32 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-white">
                        Ready to start <br />
                        <span className="text-zinc-300">your project?</span>
                    </h2>

                    <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto mb-10">
                        Get a free estimate today. We&apos;ll walk you through the entire process from start to finish.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/estimate"
                            className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
                        >
                            Get a Free Estimate
                            <ArrowUpRight size={14} />
                        </a>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-200 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                        >
                            Contact Us
                        </a>
                    </div>

                    <p className="mt-12 text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-400">
                        Antonio Enriquez Construction · Perris, California
                    </p>
                </div>
            </section>

        </div>
    );
}