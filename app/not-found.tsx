import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page-not-found page-route flex min-h-[68vh] w-full items-center px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
          Error 404 · Page not found
        </p>
        <h1 className="max-w-3xl text-5xl font-normal leading-none tracking-tight text-white md:text-7xl">
          This page isn’t here.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-300">
          The address may have changed, or the page may no longer be available. Head back to the homepage or browse project photos.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
            Go to homepage <ArrowUpRight size={16} />
          </Link>
          <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white">
            Browse projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
