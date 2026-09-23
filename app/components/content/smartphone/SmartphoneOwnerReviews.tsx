import {
  Check,
  MessageSquareQuote,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import type { SmartphoneOwnerReviews } from "@/lib/content/types";

type SmartphoneOwnerReviewsProps = {
  reviews: SmartphoneOwnerReviews;
  sectionOverview?: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
  };
};

export default function SmartphoneOwnerReviews({
  reviews,
  sectionOverview,
}: SmartphoneOwnerReviewsProps) {
  if (!reviews) {
    return null;
  }

  return (
    <section
      id="owners"
      className="bg-[#fbfbfd] px-6 py-24 sm:py-32 border-t border-neutral-200/60 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#86868b]">
            {sectionOverview?.eyebrow || "Real-world usage"}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl lg:text-6xl">
            {sectionOverview?.heading || "The everyday experience."}
          </h2>

          <p className="mt-6 text-lg font-medium tracking-tight text-[#86868b] md:text-xl">
            {sectionOverview?.subheading ||
              "Specifications outline capability. Long-term owner insights clarify daily usability and real-world performance."}
          </p>
        </div>

        {/* Summary Card */}
        {reviews.summary && (
          <div className="mb-8 rounded-[2.5rem] border border-neutral-200/80 bg-white/80 p-8 md:p-12 backdrop-blur-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-100/80 text-neutral-900">
                <MessageSquareQuote className="h-6 w-6 text-neutral-800" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  Consolidated Sentiment
                </p>

                <p className="mt-2 text-base md:text-lg leading-relaxed text-neutral-700 font-normal">
                  {reviews.summary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Positives / Negatives Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.positives && reviews.positives.length > 0 && (
            <ReviewList
              title="Reported Advantages"
              icon={ThumbsUp}
              items={reviews.positives}
              accentColor="text-emerald-600"
              iconBg="bg-emerald-50 text-emerald-600"
            />
          )}

          {reviews.negatives && reviews.negatives.length > 0 && (
            <ReviewList
              title="Reported Considerations"
              icon={ThumbsDown}
              items={reviews.negatives}
              accentColor="text-amber-600"
              iconBg="bg-amber-50 text-amber-600"
            />
          )}
        </div>

        {/* Themes Grid */}
        {reviews.themes && reviews.themes.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.themes.map((theme) => (
              <article
                key={theme.title}
                className="group rounded-[2.25rem] border border-neutral-200/80 bg-white/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-neutral-300 hover:shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                  {theme.title}
                </p>

                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ReviewList({
  title,
  icon: Icon,
  items,
  iconBg,
}: {
  title: string;
  icon: typeof ThumbsUp;
  items: string[];
  accentColor: string;
  iconBg: string;
}) {
  return (
    <div className="rounded-[2.5rem] border border-neutral-200/80 bg-white/80 p-8 md:p-10 backdrop-blur-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
            <Icon className="h-5 w-5" />
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h3>
        </div>

        <div className="mt-8 space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 group"
            >
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <Check className="h-3 w-3" />
              </div>

              <p className="text-base leading-6 text-neutral-600 font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}