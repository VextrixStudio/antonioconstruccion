import Link from "next/link";
import { 
  ArrowRight, HardHat, Building2, PaintBucket, 
  Hammer, Ruler, Briefcase, ShieldCheck, 
  Clock, Award, Users, Wrench, Layers, Home as HomeIcon, Store,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "General Contracting",
    icon: <HardHat size={28} />,
    desc: "Complete project oversight from conception to final inspection. Residential and commercial — we manage every detail of the build.",
    features: ["Project Management", "Site Supervision", "Subcontractor Coordination"]
  },
  {
    title: "Residential Build",
    icon: <HomeIcon size={28} />,
    desc: "Crafting luxury custom homes and high-end residential developments with architectural integrity.",
    features: ["Custom Estates", "Modern ADUs", "Foundation to Roof"]
  },
  {
    title: "Commercial Spaces",
    icon: <Building2 size={28} />,
    desc: "Building high-performance environments for retail, office spaces, restaurants and industrial facilities.",
    features: ["Tenant Improvements", "Retail Build-outs", "Structural Repairs"]
  },
  {
    title: "Full Remodeling",
    icon: <Hammer size={28} />,
    desc: "Complete residential and commercial remodels — transforming existing spaces into modern masterpieces.",
    features: ["Kitchen & Bath", "Full Layout Redesign", "Custom Millwork"]
  },
  {
    title: "Interior Design",
    icon: <Ruler size={28} />,
    desc: "Tailored interior renovations and smart structural redesigns for homes and businesses.",
    features: ["Space Planning", "Finish Selection", "Lighting Design"]
  },
  {
    title: "Professional Painting",
    icon: <PaintBucket size={28} />,
    desc: "Surgical precision in painting and aesthetic coatings for residential and commercial surfaces.",
    features: ["Interior/Exterior", "Cabinet Refinishing", "Industrial Coatings"]
  },
  {
    title: "Concrete Works",
    icon: <Briefcase size={28} />,
    desc: "Heavy-duty structural work including foundations, driveways, and reinforced concrete systems.",
    features: ["Foundations", "Reinforced Walls", "Decorative Concrete"]
  },
  {
    title: "Metal Works",
    icon: <Layers size={28} />,
    desc: "Custom steel framing, railings, gates and structural metal fabrication built to last.",
    features: ["Steel Framing", "Railings & Gates", "Custom Fabrication"]
  },
  {
    title: "Repairs & Maintenance",
    icon: <Wrench size={28} />,
    desc: "Reliable repair services and ongoing maintenance for all residential and commercial properties.",
    features: ["Emergency Repairs", "Scheduled Service", "Property Upkeep"]
  },
  {
    title: "Retail Build-Outs",
    icon: <Store size={28} />,
    desc: "Turnkey commercial build-outs designed to launch your business fast and on budget.",
    features: ["Turnkey Solutions", "Brand Integration", "Fast Delivery"]
  },
  {
    title: "Drywall & Framing",
    icon: <Ruler size={28} />,
    desc: "Precision drywall installation, framing and seamless finishing work for any project.",
    features: ["Wood & Steel Framing", "Drywall Install", "Finish Texturing"]
  },
  {
    title: "Tenant Improvements",
    icon: <Building2 size={28} />,
    desc: "Custom upgrades and improvements for commercial tenant spaces of any scale.",
    features: ["Office Buildouts", "Code Compliance", "Custom Upgrades"]
  }
];

export default function ServicesPage() {
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
                Core Expertise
              </span>
            </div>

            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
              OUR <br />
              <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                SERVICES
              </span>
              <span className="text-amber-500">.</span>
            </h1>

            <p className="max-w-xl text-zinc-200 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
              Comprehensive residential and commercial construction solutions — backed by nearly a decade of technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* servicios */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-zinc-900/60 hover:border-amber-500/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-black text-zinc-500 group-hover:text-amber-400 tabular-nums tracking-widest transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-white">
                    {s.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed font-light mb-6">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {s.features.map((f, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-zinc-200"
                      >
                        <div className="h-1 w-1 rounded-full bg-amber-500" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* proceso */}
      <section className="py-32 px-6 border-y border-white/10 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                The Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter italic text-white">
              The Build Process
            </h2>
            <p className="text-zinc-300 uppercase text-[10px] tracking-[0.4em]">
              Structured for efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Consultation", d: "Understanding vision and budget goals.", icon: <Users size={20} /> },
              { t: "Planning", d: "Technical blueprints and material selection.", icon: <Ruler size={20} /> },
              { t: "Execution", d: "High-precision construction with site oversight.", icon: <HardHat size={20} /> },
              { t: "Delivery", d: "Final inspection and keys in hand.", icon: <Award size={20} /> }
            ].map((step, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-[2rem] border border-white/10 bg-zinc-950/60 hover:border-amber-500/40 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-zinc-500 group-hover:text-amber-400 tabular-nums transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-white">
                    {step.t}
                  </h4>
                  <p className="text-zinc-300 text-sm leading-relaxed font-light">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* engineering peace of mind */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="grid grid-cols-2 gap-3">
              {[
                { l: "Insured", v: "100%", i: <ShieldCheck size={24} /> },
                { l: "Reliable", v: "Mon - Sat", i: <Clock size={24} /> }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-500 overflow-hidden flex flex-col items-center text-center gap-4"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-500">
                    {item.i}
                  </div>
                  <p className="relative text-2xl font-black italic text-white">{item.v}</p>
                  <p className="relative text-[10px] uppercase tracking-[0.3em] text-zinc-300 font-bold">
                    {item.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <ShieldCheck className="text-amber-400" size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                  Trust & Standards
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight text-white">
                Engineering <br />
                <span className="text-zinc-300">Peace of Mind.</span>
              </h2>

              <p className="text-zinc-200 text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
                Since 2016, Antonio Enriquez Construction has prioritized transparency and precision. Every project — residential or commercial — is a testament to our commitment to California&apos;s highest building standards.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 group"
              >
                Learn more about our standards
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Ready to build <br />
            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
              your dream?
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Request an Estimate
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-200 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 rounded-full transition-all"
            >
              Contact Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-12 text-[8px] font-medium uppercase tracking-[0.5em] text-zinc-400">
            33°46&apos;48.3&quot;N 117°14&apos;59.1&quot;W · Perris, California
          </p>
        </div>
      </section>
      
    </div>
  );
}