import { ArrowRight, Camera, Cpu, BatteryCharging } from "lucide-react";

import type { SmartphoneComparison } from "@/lib/content/types";

type SmartphoneComparisonsProps = {
  comparisons: SmartphoneComparison[];
};

export default function SmartphoneComparisons({
  comparisons,
}: SmartphoneComparisonsProps) {
  if (!comparisons.length) {
    return null;
  }

  return (
    <section
      id="comparisons"
      className="border-t border-neutral-200 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            How it compares
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            How does it stack up?
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            A phone rarely exists in isolation. Comparing it with relevant
            alternatives makes it easier to understand where it fits.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <article
              key={comparison.slug}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition hover:border-neutral-300"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {comparison.brand}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                    {comparison.name}
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200 transition group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5 text-neutral-700" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                {comparison.description}
              </p>

              <div className="mt-8 grid gap-3">
                {comparison.highlights.map((highlight, index) => {
                  const icons = [Cpu, Camera, BatteryCharging];
                  const Icon = icons[index] ?? Cpu;

                  return (
                    <div
                      key={highlight.label}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-neutral-500" />

                        <span className="text-sm font-medium text-neutral-700">
                          {highlight.label}
                        </span>
                      </div>

                      <span className="text-right text-sm text-neutral-500">
                        {highlight.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-900"
              >
                View comparison
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}