import {
  Eye,
  Maximize2,
  Smartphone,
  Zap,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneDisplayProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

export default function SmartphoneDisplay({
  specs,
}: SmartphoneDisplayProps) {
  const display = specs.display;

  if (!display) {
    return null;
  }

  const getSpec = (label: string) =>
    display.items.find((item) => item.label === label)?.value;

  const size = getSpec("Size");
  const type = getSpec("Type");
  const refreshRate = getSpec("Refresh Rate");
  const resolution = getSpec("Resolution");

  return (
    <section
      id="display"
      className="border-t border-neutral-200 bg-neutral-50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Display
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            A screen designed to stand out.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            Explore the display technology, size, resolution, and refresh
            rate that shape the everyday viewing experience.
          </p>
        </div>

        {/* Main Visual */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Visual Panel */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 lg:col-span-3">
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="relative aspect-[9/18] h-[360px] rounded-[2.5rem] border-[6px] border-neutral-700 bg-black shadow-2xl">
                {/* Screen */}
                <div className="absolute inset-[4px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-neutral-700 via-neutral-900 to-black">
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

                  <div className="absolute inset-x-6 top-8">
                    <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                      Display
                    </p>
                  </div>
                </div>

                {/* Dynamic Island / Camera area */}
                <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-medium text-white/60">
                {size ?? "Display"}
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {type ?? "Display technology"}
              </p>
            </div>
          </div>

          {/* Display Stats */}
          <div className="grid gap-4 lg:col-span-2">
            <DisplayStat
              icon={Maximize2}
              label="Size"
              value={size}
            />

            <DisplayStat
              icon={Eye}
              label="Technology"
              value={type}
            />

            <DisplayStat
              icon={Zap}
              label="Refresh Rate"
              value={refreshRate}
            />

            <DisplayStat
              icon={Smartphone}
              label="Resolution"
              value={resolution}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DisplayStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Maximize2;
  label: string;
  value?: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
        <Icon className="h-5 w-5 text-neutral-700" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {label}
        </p>

        <p className="mt-1 truncate text-base font-semibold text-neutral-900">
          {value ?? "—"}
        </p>
      </div>
    </div>
  );
}