import Link from "next/link";
import {
  ArrowUpRight,
  HardHat,
  Building2,
  PaintBucket,
  Hammer,
  Ruler,
  Briefcase,
  Phone,
  CheckCircle2,
  Wrench,
  Layers,
  Home as HomeIcon,
  Store,
  QrCode,
  MapPin,
} from "lucide-react";

const SERVICES = [
  { title: "General Contracting", icon: HardHat, d: "Complete project management from start to finish, residential and commercial." },
  { title: "Residential Build", icon: HomeIcon, d: "Custom new construction, family homes and private estates." },
  { title: "Commercial Spaces", icon: Building2, d: "Modern retail, restaurants and corporate office developments." },
  { title: "Full Remodeling", icon: Hammer, d: "Complete remodels — kitchens, baths and layout redesigns." },
  { title: "Interior Design", icon: Ruler, d: "Tailored interior renovations and smart structural redesigns." },
  { title: "Concrete Works", icon: Briefcase, d: "Solid foundations, driveways and architectural concrete." },
  { title: "Metal Works", icon: Layers, d: "Custom steel framing, railings, gates and metal fabrication." },
  { title: "Professional Painting", icon: PaintBucket, d: "High-end interior and exterior finishes for every property." },
  { title: "Repairs & Maintenance", icon: Wrench, d: "Reliable repair services and ongoing property maintenance." },
  { title: "Retail Build-Outs", icon: Store, d: "Turnkey commercial build-outs to launch your business fast." },
  { title: "Drywall & Framing", icon: Ruler, d: "Precision drywall installation, framing and finish work." },
  { title: "Tenant Improvements", icon: Building2, d: "Custom upgrades and improvements for commercial tenants." },
];

const STATS = [
  { label: "Experience", val: "10+", suffix: "Years" },
  { label: "Spaces Built", val: "240+", suffix: "Units" },
  { label: "Based In", val: "CA", suffix: "USA" },
  { label: "Satisfaction", val: "100", suffix: "%" },
];

const HIGHLIGHTS = [
  { t: "10+ Years Experience", d: "A decade of proven work across California." },
  { t: "Craft You Can Trust", d: "Honest timelines, honest quotes, honest work." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-32 pb-20">
        <div className="relative z-10 mx-auto max-w-6xl w-full">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              Taking 2026 Projects
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-14 items-start">
            {/* Left: Headline */}
            <div className="lg:col-span-8 space-y-10">
              <h1 className="text-6xl md:text-[110px] font-extrabold tracking-tight leading-[0.9] text-white animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Humans
                <br />
                <span className="text-zinc-500">Building</span>
                <span className="text-blue-500">.</span>
              </h1>

              <p className="max-w-xl text-zinc-400 text-base md:text-lg leading-relaxed border-l-2 border-blue-500 pl-5 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                Real craftsmanship by hand, for people who care about their space. Full-service residential and commercial construction, remodeling, painting and metal works — precision in every square foot.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Link
                  href="/estimate"
                  className="group flex items-center gap-3 bg-white px-7 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-blue-500 hover:text-white active:scale-[0.97]"
                >
                  Request Free Quote
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="tel:+13237408161"
                  className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-7 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-white transition-all duration-300"
                >
                  <Phone size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  Direct Line
                </a>

                {/* Social icons */}
                <div className="flex items-center gap-2 pl-1">
                  <a
                    href="https://www.instagram.com/antonioenriquezconstruction/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/40 transition-all"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/@antonioenriquezconstructionon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/40 transition-all"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>

                  <a
                    href="https://antonioenriquezconstruction.com/qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/40 transition-all"
                    aria-label="QR Code"
                  >
                    <QrCode size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Highlights card */}
            <div className="lg:col-span-4 lg:pt-24 animate-in fade-in slide-in-from-right-6 duration-1000 delay-200">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                    Why Us
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>

                {HIGHLIGHTS.map((item, i) => (
                  <div key={i} className="group flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-500 shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.t}
                      </h4>
                      <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="mt-24 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`p-8 transition-colors hover:bg-white/[0.03] ${
                  i < STATS.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/5" : ""
                } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-4xl font-extrabold tabular-nums text-white tracking-tight">
                    {stat.val}
                  </p>
                  <span className="text-xs font-medium text-zinc-500">
                    {stat.suffix}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-10 bg-blue-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                  What We Do
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9] text-white">
                Our Craft<span className="text-blue-500">.</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm">
              Full-service construction, from the first swing of the hammer to the final coat of paint.
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-400 hover:bg-white/[0.04] hover:border-blue-500/30"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-all duration-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {s.d}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Link a servicios completos */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              View all services
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 md:py-40 px-6 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-20 text-center">
            {/* Corner markers */}
            <span className="absolute top-5 left-5 h-6 w-6 border-l-2 border-t-2 border-blue-500/40 rounded-tl-lg" />
            <span className="absolute top-5 right-5 h-6 w-6 border-r-2 border-t-2 border-blue-500/40 rounded-tr-lg" />
            <span className="absolute bottom-5 left-5 h-6 w-6 border-l-2 border-b-2 border-blue-500/40 rounded-bl-lg" />
            <span className="absolute bottom-5 right-5 h-6 w-6 border-r-2 border-b-2 border-blue-500/40 rounded-br-lg" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                  Let&apos;s Talk
                </span>
              </div>

              <h2 className="mb-8 text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tight text-white">
                Build your
                <br />
                <span className="text-zinc-500">Vision</span>
                <span className="text-blue-500">.</span>
              </h2>

              <p className="mb-10 max-w-md text-base leading-relaxed text-zinc-400">
                Free quotes. Honest timelines. Work you&apos;ll actually be proud of.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/estimate"
                  className="group flex items-center gap-3 bg-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-blue-500 hover:text-white active:scale-[0.97]"
                >
                  Request Free Estimate
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="tel:+13237408161"
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors px-4 py-4"
                >
                  <Phone size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  (323) 740-8161
                </a>
              </div>

              {/* Location footer inside card */}
              <div className="mt-14 pt-8 border-t border-white/5 w-full max-w-md flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600">
                <MapPin size={11} />
                Perris, California · USA
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}