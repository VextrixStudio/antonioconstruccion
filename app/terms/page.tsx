// app/terms/page.tsx
import Link from "next/link";
import { FileText, ScrollText, AlertCircle, Scale, Briefcase, Mail, ArrowUpRight, Sparkles } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
                            <ScrollText size={12} className="text-amber-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                Legal Terms
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
                            TERMS OF <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                SERVICE
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                            Plain-language terms covering your use of this website and the construction services we provide.
                        </p>

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                            Last updated · January 2025
                        </p>
                    </div>
                </div>
            </section>

            {/* secciones */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-4xl space-y-4">

                    {/* aceptacion */}
                    <TermsCard
                        num="01"
                        icon={<FileText size={20} />}
                        title="Acceptance of Terms"
                    >
                        <p>By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site or our services.</p>
                        <p className="mt-3">These terms may be updated at any time without prior notice.</p>
                    </TermsCard>

                    {/* uso del sitio */}
                    <TermsCard
                        num="02"
                        icon={<ScrollText size={20} />}
                        title="Use of Website"
                    >
                        <p>This website is provided to help you learn about and request construction services from Antonio Enriquez Construction.</p>
                        <p className="mt-3">You agree to use this site responsibly and not to:</p>
                        <ul className="space-y-2 pl-4 mt-3">
                            <li>• Submit false or misleading information</li>
                            <li>• Attempt to interfere with the site&apos;s normal operation</li>
                            <li>• Use the site for any unlawful purpose</li>
                            <li>• Copy or republish content without permission</li>
                        </ul>
                    </TermsCard>

                    {/* servicios y cotizaciones */}
                    <TermsCard
                        num="03"
                        icon={<Briefcase size={20} />}
                        title="Services & Quotes"
                    >
                        <p>Any quote provided through this site is an estimate based on the information you share. The final price may vary after an in-person evaluation of your project.</p>
                        <p className="mt-3">A formal written agreement will be provided before any construction work begins. All projects are subject to:</p>
                        <ul className="space-y-2 pl-4 mt-3">
                            <li>• On-site assessment and measurements</li>
                            <li>• Material availability and current pricing</li>
                            <li>• Required permits and code compliance</li>
                            <li>• A signed contract before work starts</li>
                        </ul>
                    </TermsCard>

                    {/* responsabilidades */}
                    <TermsCard
                        num="04"
                        icon={<Scale size={20} />}
                        title="Limitation of Liability"
                    >
                        <p>The content on this website is provided for informational purposes only. We make no warranties about the accuracy or completeness of the information shown.</p>
                        <p className="mt-3">Antonio Enriquez Construction is not liable for any indirect or consequential damages resulting from your use of this website.</p>
                        <p className="mt-3">All construction work performed is covered under separate project contracts with their own warranties and terms.</p>
                    </TermsCard>

                    {/* propiedad intelectual */}
                    <TermsCard
                        num="05"
                        icon={<AlertCircle size={20} />}
                        title="Intellectual Property"
                    >
                        <p>All content, photos, logos, and designs on this website are property of Antonio Enriquez Construction or used with permission.</p>
                        <p className="mt-3">You may not reproduce, distribute, or use any content for commercial purposes without our written consent.</p>
                    </TermsCard>

                    {/* ley aplicable */}
                    <TermsCard
                        num="06"
                        icon={<Scale size={20} />}
                        title="Governing Law"
                    >
                        <p>These Terms of Service are governed by the laws of the State of California, United States. Any disputes will be resolved in the appropriate California courts.</p>
                    </TermsCard>

                    {/* contacto */}
                    <TermsCard
                        num="07"
                        icon={<Mail size={20} />}
                        title="Contact"
                    >
                        <p>Questions about these terms? Get in touch:</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href="tel:+13237408161"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all text-[10px] font-black uppercase tracking-[0.3em]"
                            >
                                (323) 740-8161
                            </a>
                            <a
                                href="mailto:josezherrero@gmail.com"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 text-zinc-200 hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-[0.3em]"
                            >
                                Email
                            </a>
                        </div>
                    </TermsCard>

                </div>
            </section>

            {/* cta */}
            <section className="relative py-32 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mb-8">
                        <Sparkles size={11} className="text-amber-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">
                            Ready to Build?
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white">
                        Let&apos;s start your <br />
                        <span className="text-zinc-300">project today.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/estimate"
                            className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
                        >
                            Get an Estimate
                            <ArrowUpRight size={14} />
                        </Link>

                        <Link
                            href="/privacy"
                            className="inline-flex items-center gap-3 px-10 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-200 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    <p className="mt-12 text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-400">
                        Antonio Enriquez Construction · Perris, California
                    </p>
                </div>
            </section>

        </div>
    );
}

// componente reutilizable de card
function TermsCard({
    num,
    icon,
    title,
    children
}: {
    num: string;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="group relative p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

            <div className="relative">
                <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                        {icon}
                    </div>
                    <span className="text-2xl font-black text-zinc-500 group-hover:text-amber-400 tabular-nums transition-colors">
                        {num}
                    </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 text-white">
                    {title}
                </h2>

                <div className="text-zinc-300 text-base leading-relaxed font-light space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
}