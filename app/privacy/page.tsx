// app/privacy/page.tsx
import Link from "next/link";
import { Shield, Lock, Eye, Mail, ArrowUpRight, FileText, Sparkles } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="flex flex-col">

            {/* hero */}
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
                            <Shield size={12} className="text-amber-400" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                                Your Privacy
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
                            PRIVACY <br />
                            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                                POLICY
                            </span>
                            <span className="text-amber-500">.</span>
                        </h1>

                        <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                            We respect your privacy. Here&apos;s exactly what information we collect, how we use it, and how we keep it safe.
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

                    {/* informacion que recopilamos */}
                    <PolicyCard
                        num="01"
                        icon={<Eye size={20} />}
                        title="Information We Collect"
                    >
                        <p>When you request a quote or contact us, we may collect:</p>
                        <ul className="space-y-2 pl-4 mt-3">
                            <li>• Your full name</li>
                            <li>• Phone number and email address</li>
                            <li>• Project address and location details</li>
                            <li>• Details about the service you&apos;re requesting</li>
                            <li>• Any messages you send us</li>
                        </ul>
                        <p className="mt-3">We do not collect sensitive personal information like payment details through this website.</p>
                    </PolicyCard>

                    {/* como la usamos */}
                    <PolicyCard
                        num="02"
                        icon={<FileText size={20} />}
                        title="How We Use Your Information"
                    >
                        <p>The information you provide is used only to:</p>
                        <ul className="space-y-2 pl-4 mt-3">
                            <li>• Respond to your quote request or inquiry</li>
                            <li>• Schedule site visits and consultations</li>
                            <li>• Provide accurate construction estimates</li>
                            <li>• Communicate about your project</li>
                        </ul>
                        <p className="mt-3">We never sell, rent or share your information with third parties for marketing.</p>
                    </PolicyCard>

                    {/* seguridad */}
                    <PolicyCard
                        num="03"
                        icon={<Lock size={20} />}
                        title="Data Security"
                    >
                        <p>Your information is handled with care. Messages submitted through our quote form are sent directly to us via SMS — we do not store them in any external database.</p>
                        <p className="mt-3">We take reasonable measures to protect any information you share with us.</p>
                    </PolicyCard>

                    {/* cookies */}
                    <PolicyCard
                        num="04"
                        icon={<Shield size={20} />}
                        title="Cookies & Tracking"
                    >
                        <p>This website does not use tracking cookies or third-party analytics that collect personal data. We focus on providing a clean, fast experience without intrusive tracking.</p>
                    </PolicyCard>

                    {/* tus derechos */}
                    <PolicyCard
                        num="05"
                        icon={<Sparkles size={20} />}
                        title="Your Rights"
                    >
                        <p>You have the right to:</p>
                        <ul className="space-y-2 pl-4 mt-3">
                            <li>• Request a copy of any information we have about you</li>
                            <li>• Ask us to delete your information</li>
                            <li>• Opt out of any future communications</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, just contact us directly.</p>
                    </PolicyCard>

                    {/* contacto */}
                    <PolicyCard
                        num="06"
                        icon={<Mail size={20} />}
                        title="Contact Us"
                    >
                        <p>If you have any questions about this privacy policy or how we handle your information, please reach out:</p>
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
                    </PolicyCard>

                </div>
            </section>

            {/* cta */}
            <section className="relative py-32 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white">
                        Questions? <br />
                        <span className="text-zinc-300">We&apos;re here to help.</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3"
                        >
                            Contact Us
                            <ArrowUpRight size={14} />
                        </Link>

                        <Link
                            href="/terms"
                            className="inline-flex items-center gap-3 px-10 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-200 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                        >
                            Terms of Service
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
function PolicyCard({
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