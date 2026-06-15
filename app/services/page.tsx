import Link from "next/link";
import { 
  ArrowRight, HardHat, Building2, PaintBucket, 
  Hammer, Ruler, Briefcase, ShieldCheck, 
  Clock, Award, Users 
} from "lucide-react";

const services = [
  {
    title: "General Contracting",
    icon: <HardHat size={32} />,
    desc: "Complete project oversight from conception to final inspection. We manage every detail of the build.",
    features: ["Project Management", "Site Supervision", "Subcontractor Coordination"]
  },
  {
    title: "Residential Build",
    icon: <Hammer size={32} />,
    desc: "Crafting luxury custom homes and high-end residential developments with architectural integrity.",
    features: ["Custom Estates", "Modern ADUs", "Foundation to Roof"]
  },
  {
    title: "Commercial Spaces",
    icon: <Building2 size={32} />,
    desc: "Building high-performance environments for retail, office spaces, and industrial facilities.",
    features: ["Tenant Improvements", "Retail Build-outs", "Structural Repairs"]
  },
  {
    title: "Interior Remodeling",
    icon: <Ruler size={32} />,
    desc: "Transforming existing spaces into modern masterpieces through high-end design and execution.",
    features: ["Kitchen & Bath", "Full Layout Redesign", "Custom Millwork"]
  },
  {
    title: "Professional Finish",
    icon: <PaintBucket size={32} />,
    desc: "Surgical precision in painting and aesthetic coatings for residential and commercial surfaces.",
    features: ["Interior/Exterior", "Cabinet Refinishing", "Industrial Coatings"]
  },
  {
    title: "Concrete & Structure",
    icon: <Briefcase size={32} />,
    desc: "Heavy-duty structural work including foundations, driveways, and reinforced concrete systems.",
    features: ["Foundations", "Reinforced Walls", "Decorative Concrete"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      
      {/* --- HERO: TITULO TÉCNICO --- */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500">Core Expertise</span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase">
              OUR <br />
              <span className="text-zinc-800">SERVICES</span><span className="text-amber-500">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
              We provide comprehensive construction solutions backed by nearly a decade of technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID: DETAILED VIEW --- */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-[#050505] p-12 transition-all duration-500 hover:bg-zinc-900/40">
                <div className="mb-10 text-amber-500 transition-transform duration-500 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                      <div className="h-1 w-1 bg-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                {/* Decoration */}
                <div className="absolute top-6 right-10 text-[8px] font-black text-white/5 group-hover:text-amber-500/10 transition-colors">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE PROCESS: APPLE STYLE NUMERATION --- */}
      <section className="py-32 px-6 border-y border-white/5 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">The Build Process</h2>
            <p className="mt-4 text-zinc-600 uppercase text-[10px] tracking-[0.4em]">Structured for efficiency</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { t: "Consultation", d: "Understanding vision and budget goals.", icon: <Users size={16} /> },
              { t: "Planning", d: "Technical blueprints and material selection.", icon: <Ruler size={16} /> },
              { t: "Execution", d: "High-precision construction with site oversight.", icon: <HardHat size={16} /> },
              { t: "Delivery", d: "Final inspection and keys in hand.", icon: <Award size={16} /> }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 transition-all group-hover:border-amber-500">
                  <span className="text-3xl font-black text-zinc-800 transition-colors group-hover:text-amber-500/20">0{i + 1}</span>
                  <div className="text-amber-500">{step.icon}</div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{step.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY US (PROMETE CONFIANZA) --- */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Insured", v: "100%", i: <ShieldCheck /> },
                { l: "Reliable", v: "Mon - Sat ", i: <Clock /> }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-12 rounded-2xl border border-white/10 flex flex-col items-center gap-4 hover:border-amber-500/30 transition-colors">
                   <div className="text-amber-500">{item.i}</div>
                   <p className="text-3xl font-black italic">{item.v}</p>
                   <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">{item.l}</p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tighter uppercase leading-tight">
                Engineering <br /> <span className="text-zinc-500">Peace of Mind.</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Since 2016, Antonio Construction has prioritized transparency and precision. Every project is a testament to our commitment to California&apos;s highest building standards.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-amber-500 border-b border-amber-500 pb-2 hover:gap-6 transition-all">
                Learn more about our standards <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: FINAL CINEMATIC --- */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
            Ready to build <br /> <span className="text-zinc-800">your dream?</span>
          </h2>
          <Link href="/estimate" className="inline-block bg-white text-black px-12 py-6 text-xs font-black uppercase tracking-[0.3em] rounded-full transition-transform hover:scale-105 active:scale-95 shadow-2xl">
            Request an Estimate
          </Link>
        </div>
      </section>
      
    </div>
  );
}