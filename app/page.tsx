import Link from "next/link";
import { ArrowUpRight, HardHat, Building2, PaintBucket, Hammer, Ruler, Briefcase, Phone, CheckCircle2, Wrench, Layers, Home as HomeIcon, Store } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] flex-col justify-center px-6">
        <div className="relative z-10 mx-auto max-w-7xl w-full">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">Available for 2026 Projects</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] uppercase transition-all duration-700 text-white">
                Humans <br />
                <span className="text-zinc-300 hover:text-white transition-colors cursor-default">Building</span>
                <span className="text-amber-500">.</span>
              </h1>

              <p className="max-w-xl text-zinc-200 text-lg md:text-xl font-light leading-relaxed border-l-2 border-amber-500/50 pl-6">
                Real craftsmanship by humans, for humans. Full-service residential and commercial construction, remodeling, painting, metal works and more — precision in every square foot.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                <Link href="/estimate" className="group relative flex items-center gap-4 bg-white px-10 py-6 text-[10px] font-black uppercase text-black transition-all hover:bg-amber-500 hover:scale-105 active:scale-95">
                  Request Free Quote
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <a href="tel:+13237408161" className="flex items-center gap-4 border border-white/20 bg-white/10 px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/20">
                  <Phone size={16} className="text-amber-400 animate-pulse" />
                  Direct Line
                </a>

                <div className="flex items-center gap-4 pl-2">
                  <a href="https://www.instagram.com/antonioenriquezconstruction/
" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/20 bg-white/10 text-zinc-200 hover:text-amber-400 hover:border-amber-500/50 transition-all rounded-none" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.youtube.com/@antonioenriquezconstructionon" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/20 bg-white/10 text-zinc-200 hover:text-amber-400 hover:border-amber-500/50 transition-all rounded-none" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-16">
              <div className="grid gap-8 border-l-2 border-amber-500/30 pl-8">
                {[
                  { t: "Licensed & Insured", d: "Peace of mind guaranteed." },
                  { t: "10+ Years Experience", d: "Proven track record in CA." },
                  { t: "Human-Centric Quality", d: "Built to elevate daily life." }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white group-hover:text-amber-400 transition-colors">
                      <CheckCircle2 size={16} className="text-amber-500" />
                      {item.t}
                    </h4>
                    <p className="text-zinc-300 text-sm mt-2 font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 w-full grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 bg-zinc-950/60 backdrop-blur-sm">
          {[
            { label: "Our Experience", val: "10+ Years" },
            { label: "Spaces Built", val: "240+ Units" },
            { label: "Core Location", val: "CA Area" },
            { label: "Client Satisfaction", val: "100%" },
          ].map((stat, i) => (
            <div key={i} className="border-r border-white/10 p-12 transition-colors hover:bg-white/5">
              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-3">{stat.label}</p>
              <p className="text-3xl font-light tracking-tighter tabular-nums italic text-white">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
              Our Craft<span className="text-amber-500">.</span>
            </h2>
            <div className="h-px flex-1 bg-white/10 mx-12 hidden md:block" />
            <p className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.4em]">Residential & Commercial • Full-Service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: "General Contracting", icon: <HardHat size={22} />, d: "Complete project management from start to finish, residential and commercial." },
              { title: "Residential Build", icon: <HomeIcon size={22} />, d: "Custom new construction, luxury estates and full family homes." },
              { title: "Commercial Spaces", icon: <Building2 size={22} />, d: "Modern retail, restaurants and corporate office developments." },
              { title: "Full Remodeling", icon: <Hammer size={22} />, d: "Complete residential and commercial remodels — kitchens, baths, layouts." },
              { title: "Interior Design", icon: <Ruler size={22} />, d: "Tailored interior renovations and smart structural redesigns." },
              { title: "Concrete Works", icon: <Briefcase size={22} />, d: "Solid foundations, driveways and architectural concrete structures." },
              { title: "Metal Works", icon: <Layers size={22} />, d: "Custom steel framing, railings, gates and structural metal fabrication." },
              { title: "Professional Painting", icon: <PaintBucket size={22} />, d: "High-end interior and exterior finishes for homes and businesses." },
              { title: "Repairs & Maintenance", icon: <Wrench size={22} />, d: "Reliable repair services and ongoing maintenance for all properties." },
              { title: "Retail Build-Outs", icon: <Store size={22} />, d: "Turnkey commercial build-outs designed to launch your business fast." },
              { title: "Drywall & Framing", icon: <Ruler size={22} />, d: "Precision drywall installation, framing and seamless finishing work." },
              { title: "Tenant Improvements", icon: <Building2 size={22} />, d: "Custom upgrades and improvements for commercial tenant spaces." },
            ].map((s, i) => (
              <div key={i} className="group bg-[#050505] p-12 transition-all duration-500 hover:bg-zinc-900/60">
                <div className="mb-10 text-amber-500 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-4 text-white group-hover:text-amber-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">{s.d}</p>
                <div className="mt-8 h-px w-0 bg-amber-500/70 transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-48 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-linear-to-b from-white/5 to-transparent p-12 md:p-24 text-center backdrop-blur-md transition-all duration-700 hover:border-white/30">

            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="relative z-20 flex flex-col items-center">
              <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">Start Your Legacy</span>
              </div>

              <h2 className="mb-12 text-5xl md:text-[100px] font-bold leading-[0.8] tracking-tighter uppercase text-white transition-all">
                Build your <br />
                <span className="text-zinc-300">Vision</span><span className="text-amber-500">.</span>
              </h2>

              <p className="mb-12 max-w-lg text-lg font-light leading-relaxed text-zinc-200">
                Where human dedication meets architectural precision. Ready to take the next step?
              </p>

              <div className="flex flex-col items-center gap-8 sm:flex-row">
                <Link
                  href="/estimate"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Request Free Estimate</span>
                  <div className="absolute inset-0 z-0 translate-y-full bg-amber-500 transition-transform duration-500 group-hover:translate-y-0" />
                </Link>

                <div className="flex items-center gap-6">
                  <a
                    href="tel:+13237408161"
                    className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:text-white"
                  >
                    <Phone size={14} className="text-amber-400 group-hover:scale-110 transition-transform" />
                    Consultation
                  </a>

                  <a href="https://www.instagram.com/antonioenriquezconstruction/
" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.youtube.com/@antonioenriquezconstructionon" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-12 hidden md:block">
              <p className="text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-400">
                33°46&apos;48.3&quot;N 117°14&apos;59.1&quot;W • Perris, California
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}