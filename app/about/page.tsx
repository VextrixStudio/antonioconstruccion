import Link from "next/link";
import { User, Code, Globe, Cpu, ShieldCheck, Zap, ArrowUpRight, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* --- HERO --- */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500">The Vision</span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase">
              LEGACY <br />
              <span className="text-zinc-800 transition-colors hover:text-zinc-700 cursor-default">MEETS DIGITAL</span><span className="text-amber-500">.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- SECTION 01: THE CRAFTSMAN (ANTONIO) --- */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
            <div className="relative group aspect-square bg-zinc-900/20 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
              <User size={120} className="text-zinc-800 group-hover:text-amber-500/20 transition-colors duration-700" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500">Antonio</p>
                <p className="text-2xl font-black uppercase tracking-tighter text-white">Founder & Master Builder</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-black text-xl">01.</span>
                <h2 className="text-4xl font-bold tracking-tighter uppercase">The Foundation</h2>
              </div>
              <p className="text-zinc-400 text-lg font-light leading-relaxed italic">
                &quot;Construction isn&apos;t just about wood and concrete; it&apos;s about the trust built between people.&quot;
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Fundada por Antonio, un orgulloso constructor de raíces mexicanas, Antonio Construction ha liderado proyectos con una ética de trabajo incansable desde 2016. Antonio combina la rica tradición artesanal de su herencia con los estándares técnicos de California, enfocándose en la precisión quirúrgica y una comunicación transparente.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <p className="text-2xl font-black italic text-zinc-100">10+ Years</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold font-sans">Industry Leader</p>
                </div>
                <div>
                  <p className="text-2xl font-black italic text-zinc-100">Mexicano</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold font-sans">Heritage & Pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: THE CREATOR (JONATAN) --- */}
      <section className="px-6 py-32 bg-white/5 border-y border-white/5">
        <div className="mx-auto max-w-7xl text-left">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-black text-xl">02.</span>
                <h2 className="text-4xl font-bold tracking-tighter uppercase">Digital Architecture</h2>
              </div>
              <h3 className="text-xl font-bold text-zinc-200">
                Engineered by <span className="text-amber-500 transition-colors hover:text-amber-400">Jonatan</span> <br />
                Founder of Vextrix Studio.
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wider font-medium">
                Vextrix Studio se enfoca en ayudar a negocios locales a establecer una presencia online profesional a través de sitios modernos y soluciones digitales de alto rendimiento.
              </p>

              <div className="flex gap-6 pt-4">
                <a href="mailto:vextrixstudio@outlook.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Modern Design", icon: <Globe size={18} />, d: "Clean, responsive interfaces." },
                { title: "Credibility", icon: <ShieldCheck size={18} />, d: "Helping local businesses grow." },
                { title: "Clean Code", icon: <Code size={18} />, d: "React, TSX, and Tailwindcss." },
                { title: "Fast Loading", icon: <Zap size={18} />, d: "Performance-first optimization." }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-white/5 bg-zinc-950 rounded-2xl hover:border-amber-500/30 transition-all duration-500">
                  <div className="mb-4 text-amber-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-zinc-600 text-xs font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Cpu className="mx-auto text-amber-500 mb-8" size={32} />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10">
            Providing professional <br />
            <span className="text-zinc-800 transition-colors hover:text-zinc-700 cursor-default">solutions for local</span> entrepreneurs.
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {["Responsive", "Modern", "Credible", "Efficient"].map((word, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 hover:text-amber-500 transition-colors cursor-default">
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-white/5 bg-[#050505]">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-none mb-12">
            Build your <br /> <span className="text-zinc-800 transition-colors hover:text-zinc-700 cursor-default">legacy today.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/estimate" className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl">
              Get an Estimate
            </Link>
            <Link href="/contact" className="group flex items-center gap-3 px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
              Contact Studio <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}