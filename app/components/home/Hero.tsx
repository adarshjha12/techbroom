import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-6 py-20">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-400" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            The technology decision platform
          </span>
        </div>

        {/* Main heading */}
        <div className="max-w-5xl">
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-6xl md:text-7xl lg:text-8xl">
            Technology,
            <br />
            <span className="text-neutral-400">
              without the confusion.
            </span>
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="mt-8 flex max-w-2xl flex-col gap-7">
          <p className="text-base leading-7 text-neutral-500 sm:text-lg">
            Explore products, compare what actually matters, and make
            technology decisions with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/smartphones"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-neutral-800"
            >
              Explore technology
              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/comparisons"
              className="inline-flex items-center px-3 py-3 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
            >
              See comparisons
            </Link>
          </div>
        </div>

        {/* Visual discovery strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-4">

          <Link
            href="/smartphones"
            className="group bg-white p-6 transition-colors duration-300 hover:bg-neutral-50"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Explore
            </span>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-900">
              Smartphones
            </h2>

            <ArrowRight
              size={16}
              className="mt-6 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
            />
          </Link>

          <Link
            href="/comparisons"
            className="group bg-white p-6 transition-colors duration-300 hover:bg-neutral-50"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Discover
            </span>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-900">
              Comparisons
            </h2>

            <ArrowRight
              size={16}
              className="mt-6 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
            />
          </Link>

          <Link
            href="/ev"
            className="group bg-white p-6 transition-colors duration-300 hover:bg-neutral-50"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Explore
            </span>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-900">
              Electric Vehicles
            </h2>

            <ArrowRight
              size={16}
              className="mt-6 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
            />
          </Link>

          <Link
            href="/ai"
            className="group bg-white p-6 transition-colors duration-300 hover:bg-neutral-50"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              Explore
            </span>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-900">
              AI & Tech
            </h2>

            <ArrowRight
              size={16}
              className="mt-6 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
            />
          </Link>

        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            Keep exploring
          </span>

          <ArrowDown
            size={16}
            strokeWidth={1.5}
            className="animate-bounce text-neutral-400"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;