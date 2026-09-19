import {
  Check,
  MessageCircle,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import type { SmartphoneOwnerReviews } from "@/lib/content/types";

type SmartphoneOwnerReviewsProps = {
  reviews: SmartphoneOwnerReviews;
};

export default function SmartphoneOwnerReviews({
  reviews,
}: SmartphoneOwnerReviewsProps) {
  return (
    <section
      id="owners"
      className="border-t border-neutral-200 bg-neutral-50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            What owners say
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            The everyday experience.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            Specs tell you what a phone has. Owner experiences help explain
            what it is actually like to live with.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-6 rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-100">
              <MessageCircle className="h-5 w-5 text-neutral-700" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Owner experience
              </p>

              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                {reviews.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Positives / Negatives */}
        <div className="grid gap-6 md:grid-cols-2">
          <ReviewList
            title="What people like"
            icon={ThumbsUp}
            items={reviews.positives}
          />

          <ReviewList
            title="Things to consider"
            icon={ThumbsDown}
            items={reviews.negatives}
          />
        </div>

        {/* Themes */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.themes.map((theme) => (
            <article
              key={theme.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {theme.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {theme.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewList({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof ThumbsUp;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <Icon className="h-5 w-5 text-neutral-700" />
        </div>

        <h3 className="text-lg font-semibold text-neutral-900">
          {title}
        </h3>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <Check className="mt-1 h-4 w-4 shrink-0 text-neutral-500" />

            <p className="text-sm leading-6 text-neutral-600">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}