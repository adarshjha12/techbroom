import Link from "next/link";
import { ArrowRight, Minus } from "lucide-react";

const comparisons = [
  {
    category: "Smartphones",
    productA: "iPhone 18 Pro",
    productB: "Galaxy S26 Ultra",
    label: "Flagship showdown",
  },
  {
    category: "Smartphones",
    productA: "Pixel 11 Pro",
    productB: "iPhone 18",
    label: "Camera battle",
  },
  {
    category: "EV",
    productA: "Tata Curvv EV",
    productB: "Hyundai Creta Electric",
    label: "Electric SUV",
  },
];

function ComparisonShowcase() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Compare what matters
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-5xl">
              Don&apos;t just compare specs.
              <br />
              <span className="text-neutral-400">
                Compare the experience.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500">
              See how products stack up across the things that actually
              affect your everyday experience.
            </p>
          </div>

          <Link
            href="/comparisons"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-900"
          >
            View all comparisons

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Comparison cards */}
        <div className="mt-16 space-y-4">

          {comparisons.map((comparison) => (
            <Link
              key={`${comparison.productA}-${comparison.productB}`}
              href="/comparisons"
              className="group block border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm sm:p-8"
            >
              {/* Top */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                    {comparison.category}
                  </span>

                  <p className="mt-2 text-sm text-neutral-500">
                    {comparison.label}
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  strokeWidth={1.6}
                  className="hidden text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-900 sm:block"
                />

              </div>

              {/* Products */}
              <div className="mt-8 grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">

                {/* Product A */}
                <div className="min-h-28 border border-neutral-100 bg-neutral-50 p-6">
                  <span className="text-xs text-neutral-400">
                    Product A
                  </span>

                  <h3 className="mt-3 text-xl font-medium tracking-tight text-neutral-950">
                    {comparison.productA}
                  </h3>
                </div>

                {/* VS */}
                <div className="flex items-center justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white">
                    <Minus
                      size={14}
                      strokeWidth={1.5}
                      className="text-neutral-400"
                    />
                  </div>
                </div>

                {/* Product B */}
                <div className="min-h-28 border border-neutral-100 bg-neutral-50 p-6">
                  <span className="text-xs text-neutral-400">
                    Product B
                  </span>

                  <h3 className="mt-3 text-xl font-medium tracking-tight text-neutral-950">
                    {comparison.productB}
                  </h3>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                <span className="text-xs text-neutral-400">
                  Compare performance, camera, battery & more
                </span>

                <span className="text-xs font-medium text-neutral-900 sm:hidden">
                  Compare →
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ComparisonShowcase;