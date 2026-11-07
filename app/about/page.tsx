import Link from "next/link";
import Image from "next/image";
import { Ruler, MessageSquare, HardHat, ShieldCheck, Zap, ArrowUpRight, Mail, Hammer, Sparkles } from "lucide-react";
import { socialMetadata } from "../social-metadata";

export const metadata = socialMetadata(
  "/about",
  "Built with care, from the ground up",
  "Get to know Antonio Enriquez Construction, a family-run general contractor founded in Perris in 2016 and built on clear communication and careful work."
);

export default function AboutPage() {
  return (
    <div className="page-route page-about flex flex-col">

      {/* hero */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 w-fit">
              <Sparkles size={12} className="text-amber-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                About the company
              </span>
            </div>

            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.8] uppercase text-white">
              Built with care <br />
              <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
                from the ground up
              </span>
              <span className="text-amber-500">.</span>
            </h1>

            <p className="max-w-xl text-zinc-300 text-base md:text-lg font-light leading-relaxed pl-4 border-l-2 border-amber-500/40">
              Antonio Enriquez Construction is a Perris-based general contractor working on residential and commercial construction, remodeling, and finish projects.
            </p>
          </div>
        </div>
      </section>

      {/* seccion 01 - antonio */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* foto antonio */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative aspect-square bg-zinc-900 border border-white/15 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/joseEnriquez.jpg"
                  alt="Jose Antonio Enriquez, founder of Antonio Enriquez Construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                {/* badge flotante */}
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <Hammer size={11} className="text-amber-400" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
                    Established 2016
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400 mb-2">
                    Jose Antonio Enriquez
                  </p>
                  <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none">
                    Founder &amp; <br /> General Contractor
                  </p>
                </div>
              </div>
            </div>

            {/* texto antonio */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 font-black text-sm">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase text-white">
                  The company
                </h2>
              </div>

              <div className="relative pl-6 border-l-2 border-amber-500/40">
                <p className="text-zinc-200 text-lg md:text-xl font-light leading-relaxed italic">
                  A clear conversation is the start of a well-run project.
                </p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Founded by Jose Antonio Enriquez in 2016, the company works across construction, remodeling, metal work, concrete, painting, and related trades. Each project begins with the customer&apos;s goals and a clear understanding of the work ahead.
              </p>

              {/* stats */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-500">
                  <p className="text-3xl font-black italic text-white mb-2">2016</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-300 font-bold">
                    Founded in Perris
                  </p>
                </div>
                <div className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-500">
                  <p className="text-3xl font-black italic text-white mb-2">CA</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-300 font-bold">
                    Based in California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* seccion 02 - jonatan */}
      <section className="px-6 py-32 border-y border-white/10 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 font-black text-sm">02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase text-white">
                  A hands-on process
                </h2>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Clear communication at{" "}
                <span className="text-amber-400 transition-colors hover:text-amber-300">
                  every stage
                </span>
                <br />
                <span className="text-zinc-300 text-xl md:text-2xl font-light">
                  From the first conversation to the final walkthrough.
                </span>
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                We take time to understand the scope, talk through practical options, and keep the next steps clear as the work moves forward.
              </p>

              <a
                href="/estimate"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-zinc-200 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 group"
              >
                <Mail size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Discuss a project
                </span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* cards material */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                { title: "Planning", icon: <Ruler size={20} />, d: "Talk through the project scope, priorities, and site conditions." },
                { title: "Communication", icon: <MessageSquare size={20} />, d: "Keep decisions, questions, and next steps easy to follow." },
                { title: "Craft", icon: <Hammer size={20} />, d: "Coordinate construction and finish work with care." },
                { title: "Follow-through", icon: <Zap size={20} />, d: "Review the work together before the project wraps up." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-8 border border-white/10 bg-zinc-950/60 rounded-3xl hover:border-amber-500/40 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/10 blur-3xl rounded-full transition-all duration-700" />

                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-300 text-xs font-light leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* mision */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-500/15 border border-amber-500/30 mb-10">
            <HardHat className="text-amber-400" size={28} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-white">
            Good work begins <br />
            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
              with a conversation
            </span>{" "}
            about your space.
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {["Plan", "Build", "Review", "Complete"].map((word, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 cursor-default"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Have a project <br />
            <span className="text-zinc-300 transition-colors hover:text-white cursor-default">
              in mind?
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/estimate"
              className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Request an estimate
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-6 text-[10px] font-bold uppercase tracking-widest text-zinc-200 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 rounded-full transition-all"
            >
              Discuss a project
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
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
