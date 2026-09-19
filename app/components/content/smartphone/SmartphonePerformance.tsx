import {
  Cpu,
  HardDrive,
  MemoryStick,
  Gauge,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphonePerformanceProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

export default function SmartphonePerformance({
  specs,
}: SmartphonePerformanceProps) {
  const performance = specs.performance;

  if (!performance) {
    return null;
  }

  const getSpec = (label: string) =>
    performance.items.find((item) => item.label === label)?.value;

  const chipset = getSpec("Chipset");
  const ram = getSpec("RAM");
  const storage = getSpec("Storage");

  return (
    <section
      id="performance"
      className="border-t border-neutral-200 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Performance
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Built for speed.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            The processor, memory, and storage work together to determine how
            quickly the phone handles everyday tasks and demanding workloads.
          </p>
        </div>

        {/* Main Performance Card */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 text-white">
          <div className="grid lg:grid-cols-2">
            {/* Chipset */}
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Cpu className="h-6 w-6" />
              </div>

              <p className="mt-10 text-sm font-medium uppercase tracking-wider text-white/50">
                Processor
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {chipset ?? "—"}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                The chipset is the core of the phone&apos;s performance, handling
                everything from everyday apps to demanding games and
                multitasking.
              </p>
            </div>

            {/* Performance Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <PerformanceStat
                icon={MemoryStick}
                label="RAM"
                value={ram}
              />

              <PerformanceStat
                icon={HardDrive}
                label="Storage"
                value={storage}
              />

              <PerformanceStat
                icon={Gauge}
                label="Performance"
                value="Everyday + demanding workloads"
              />

              <div className="flex flex-col justify-center border-t border-white/10 p-8 sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  What this means
                </p>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                  Strong hardware can improve app loading, multitasking,
                  gaming, camera processing, and overall responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex items-start gap-3 text-sm text-neutral-500">
          <Cpu className="mt-0.5 h-4 w-4 shrink-0" />

          <p>
            Actual performance can vary depending on software optimization,
            thermal conditions, workload, and storage configuration.
          </p>
        </div>
      </div>
    </section>
  );
}

function PerformanceStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Cpu;
  label: string;
  value?: string;
}) {
  return (
    <div className="border-b border-white/10 p-8 sm:border-l">
      <Icon className="h-5 w-5 text-white/60" />

      <p className="mt-6 text-xs font-medium uppercase tracking-wider text-white/40">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value ?? "—"}
      </p>
    </div>
  );
}