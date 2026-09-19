import {
  BatteryCharging,
  Camera,
  Cpu,
  Smartphone,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneOverviewProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

const sectionIcons = {
  display: Smartphone,
  performance: Cpu,
  camera: Camera,
  battery: BatteryCharging,
};

const highlightConfig = [
  {
    section: "display",
    label: "Display",
  },
  {
    section: "performance",
    label: "Performance",
  },
  {
    section: "camera",
    label: "Camera",
  },
  {
    section: "battery",
    label: "Battery",
  },
];

export default function SmartphoneOverview({
  specs,
}: SmartphoneOverviewProps) {
  return (
    <section
      id="overview"
      className="border-t border-neutral-200 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Everything important at a glance.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            A quick look at the key hardware and specifications of this
            smartphone.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 md:grid-cols-4">
          {highlightConfig.map((highlight, index) => {
            const section = specs[highlight.section];

            if (!section) {
              return null;
            }

            const firstItem = section.items[0];

            return (
              <div
                key={highlight.section}
                className={`p-5 md:p-6 ${
                  index !== 0
                    ? "border-t border-neutral-200 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {highlight.label}
                </p>

                <p className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                  {firstItem?.value ?? "—"}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  {firstItem?.label ?? ""}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Specification Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(specs).map(([key, section]) => {
            const Icon =
              sectionIcons[key as keyof typeof sectionIcons] ??
              Smartphone;

            return (
              <div
                key={key}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:bg-neutral-100"
              >
                {/* Card Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-neutral-200">
                    <Icon className="h-5 w-5 text-neutral-700" />
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900">
                    {section.title}
                  </h3>
                </div>

                {/* Specification List */}
                <div className="divide-y divide-neutral-200">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-6 py-3.5"
                    >
                      <span className="text-sm text-neutral-500">
                        {item.label}
                      </span>

                      <span className="text-right text-sm font-medium text-neutral-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}