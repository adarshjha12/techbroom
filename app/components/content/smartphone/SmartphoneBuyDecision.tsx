import {
  Check,
  CircleAlert,
  Sparkles,
  UserRound,
} from "lucide-react";

import type { SmartphoneBuyDecision as BuyDecision } from "@/lib/content/types";

type SmartphoneBuyDecisionProps = {
  decision: BuyDecision;
};

export default function SmartphoneBuyDecision({
  decision,
}: SmartphoneBuyDecisionProps) {
  return (
    <section
      id="buy"
      className="border-t border-neutral-200 bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Should you buy it?
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Is it the right phone for you?
          </h2>

          <p className="mt-6 text-base leading-7 text-neutral-400">
            There is no single phone that makes sense for everyone. The right
            choice depends on your priorities, budget, and what you expect from
            your next device.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-900 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-800">
              <Sparkles className="h-5 w-5 text-neutral-200" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Our take
              </p>

              <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-300">
                {decision.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Buy / Skip */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <DecisionCard
            title="Reasons to consider it"
            icon={Check}
            items={decision.reasonsToBuy}
          />

          <DecisionCard
            title="Reasons to think twice"
            icon={CircleAlert}
            items={decision.reasonsToSkip}
          />
        </div>

        {/* Audience */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <AudienceCard
            title="Best for"
            icon={UserRound}
            items={decision.bestFor}
          />

          <AudienceCard
            title="Probably not for"
            icon={CircleAlert}
            items={decision.notFor}
          />
        </div>
      </div>
    </section>
  );
}

function DecisionCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof Check;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800">
          <Icon className="h-5 w-5 text-neutral-200" />
        </div>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />

            <span className="text-sm leading-6 text-neutral-400">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AudienceCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof UserRound;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900">
          <Icon className="h-5 w-5 text-neutral-300" />
        </div>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm leading-6 text-neutral-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}