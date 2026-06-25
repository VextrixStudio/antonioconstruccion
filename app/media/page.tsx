// app/media/page.tsx
import { ArrowUpRight, Sparkles } from "lucide-react";

const SOCIALS = [
    {
        name: "YouTube",
        handle: "@antonioenriquezconstructionon",
        url: "https://www.youtube.com/@antonioenriquezconstructionon",
        icon: <YouTubeIcon />,
        description: "Watch our latest projects, behind the scenes and time-lapse builds.",
        color: "from-red-500/20 to-amber-500/10"
    },
    {
        name: "Instagram",
        handle: "@antonioconstrucsion",
        url: "https://www.instagram.com/",
        icon: <InstagramIcon />,
        description: "Daily photos, stories and updates from active job sites.",
        color: "from-pink-500/20 to-amber-500/10"
    },
    {
        name: "Facebook",
        handle: "Antonio Enriquez Construction",
        url: "https://www.facebook.com/",
        icon: <FacebookIcon />,
        description: "Community updates, reviews and project announcements.",
        color: "from-blue-500/20 to-amber-500/10"
    },
    {
        name: "TikTok",
        handle: "@antonioconstruction",
        url: "https://www.tiktok.com/",
        icon: <TikTokIcon />,
        description: "Quick clips, tips and the most viral builds we've done.",
        color: "from-purple-500/20 to-amber-500/10"
    }
];

// iconos custom
function YouTubeIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
        </svg>
    );
}

export default function MediaPage() {
    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
                            <Sparkles size={12} className="text-amber-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                Follow Our Work
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
                            SOCIAL <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                MEDIA
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                            Stay connected with Antonio Enriquez Construction. Follow us across all platforms for daily updates, project tours and inspiration.
                        </p>
                    </div>
                </div>
            </section>

            {/* grid de redes */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SOCIALS.map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 md:p-14 transition-all duration-500 hover:border-amber-500/50 hover:bg-amber-500/5"
                            >
                                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-linear-to-br ${social.color} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-all duration-700`} />

                                <div className="absolute -right-10 -top-10 text-amber-500/5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                    <div className="scale-[10]">
                                        {social.icon}
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full justify-between gap-16">
                                    <div className="flex justify-between items-start">
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                                            {social.icon}
                                        </div>
                                        <ArrowUpRight className="text-zinc-400 transition-all group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                                    </div>

                                    <div>
                                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-4">
                                            {social.name}
                                        </p>
                                        <p className="text-amber-400 text-sm font-bold italic tracking-tight mb-4">
                                            {social.handle}
                                        </p>
                                        <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-sm">
                                            {social.description}
                                        </p>
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
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white">
                        Got a project? <br />
                        <span className="text-zinc-300">Let&apos;s talk.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/estimate"
                            className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
                        >
                            Get an Estimate
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