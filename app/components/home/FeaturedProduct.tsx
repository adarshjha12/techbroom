import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

function FeaturedProduct() {
  return (
    <section className="overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Section label */}
        <div className="mb-16 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-600" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Featured right now
          </span>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Product visual placeholder */}
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-900 sm:min-h-[520px]">

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute h-72 w-72 rounded-full bg-neutral-700/30 blur-3xl"
            />

            {/* Product placeholder */}
            <div className="relative flex h-[330px] w-[170px] items-center justify-center rounded-[2.2rem] border border-neutral-700 bg-neutral-800 shadow-2xl sm:h-[420px] sm:w-[215px]">
              <div className="absolute left-4 top-5 h-24 w-24 rounded-2xl border border-neutral-700 bg-neutral-900" />

              <span className="text-xs uppercase tracking-widest text-neutral-600">
                Product
              </span>
            </div>

          </div>

          {/* Product information */}
          <div>

            <span className="text-sm font-medium text-neutral-500">
              Smartphone
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
              iPhone 18 Pro
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
              A closer look at the design, camera, performance, battery,
              and everything that actually matters before you buy.
            </p>

            {/* Quick scores */}
            <div className="mt-10 space-y-5">

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Camera</span>
                  <span className="font-medium text-white">92</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
                  <div className="h-full w-[92%] bg-white" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Display</span>
                  <span className="font-medium text-white">95</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
                  <div className="h-full w-[95%] bg-white" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Performance</span>
                  <span className="font-medium text-white">97</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
                  <div className="h-full w-[97%] bg-white" />
                </div>
              </div>

            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-neutral-500" />
                Pro camera system
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-neutral-500" />
                High refresh display
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-neutral-500" />
                Flagship performance
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Check size={16} className="text-neutral-500" />
                Long-term software support
              </div>

            </div>

            {/* CTA */}
            <Link
              href="/smartphones/iphone-18-pro"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 hover:gap-3 hover:bg-neutral-200"
            >
              Explore the full breakdown

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProduct;