import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SmartphoneComparison } from "@/lib/content/types";

type SmartphoneComparisonsProps = {
  slug: string;
  comparisons: SmartphoneComparison[];
};

export default function SmartphoneComparisons({
  slug,
  comparisons,
}: SmartphoneComparisonsProps) {
  return (
    <section className="border-t border-neutral-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
            Comparisons
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            How it compares
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <article
              key={comparison.slug}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-xl font-bold text-neutral-900">
                {comparison.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {comparison.description}
              </p>

              <div className="mt-5 space-y-3">
                {comparison.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-3 last:border-0"
                  >
                    <span className="text-sm text-neutral-500">
                      {highlight.label}
                    </span>

                    <span className="text-right text-sm font-semibold text-neutral-900">
                      {highlight.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/compare/${slug}-vs-${comparison.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:underline"
              >
                View comparison
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}