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
      className="bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-zinc-400">
            The Details
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-black sm:text-6xl">
            Pro in every way.
          </h2>

          <p className="text-lg font-medium tracking-tight text-zinc-500 sm:text-xl">
            A closer look at the advanced hardware and key specifications that make it all possible.
          </p>
        </div>

        {/* Key Highlights (Bento Hero Stats) */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {highlightConfig.map((highlight) => {
            const section = specs[highlight.section];
            if (!section) return null;

            const firstItem = section.items[0];
            const Icon = sectionIcons[highlight.section as keyof typeof sectionIcons];

            return (
              <div
                key={highlight.section}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-zinc-50 p-8 text-center transition-all duration-500 hover:scale-[1.02] hover:bg-zinc-100 hover:shadow-2xl hover:shadow-black/5"
              >
                {/* Subtle background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <Icon className="mb-6 h-8 w-8 text-zinc-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-black" />
                
                <p className="relative z-10 mb-2 text-3xl font-bold tracking-tighter text-black sm:text-4xl">
                  {firstItem?.value ?? "—"}
                </p>
                
                <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  {highlight.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Specification Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(specs).map(([key, section]) => {
            const Icon =
              sectionIcons[key as keyof typeof sectionIcons] ?? Smartphone;

            return (
              <div
                key={key}
                className="group rounded-[2.5rem] bg-zinc-50 p-8 sm:p-10 transition-all duration-500 hover:bg-zinc-100"
              >
                {/* Card Header */}
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-black" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-black">
                    {section.title}
                  </h3>
                </div>

                {/* Specification List */}
                <div className="flex flex-col gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-start justify-between gap-6 ${
                        index !== section.items.length - 1
                          ? "border-b border-zinc-200/60 pb-4"
                          : ""
                      }`}
                    >
                      <span className="text-base font-medium text-zinc-500">
                        {item.label}
                      </span>

                      <span className="text-right text-base font-semibold text-black">
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