import { Cpu, Gauge, HardDrive, MemoryStick } from "lucide-react";
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

  // Extract performance image safely
  const image = (performance as { image?: string }).image;

  return (
    <section
      id="performance"
      className="relative overflow-hidden border-t border-neutral-900 bg-black px-6 py-24 sm:py-32 text-white selection:bg-white selection:text-black"
    >
      {/* Subtle Apple Metallic Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[150px]" />

      {/* Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Performance
          </span>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
           {performance.heading || "Performance: how much power do you actually get?" }
          </h2>

          <p className="text-lg leading-8 text-neutral-400">
            {performance.subheading || "A closer look at the advanced hardware and key specifications that make it all possible."}
          </p>
        </div>

        {/* Main Performance Showcase Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Visual Panel: Silicon / Chip Image */}
          <div className="group relative flex min-h-[420px] sm:min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/60 p-8 shadow-2xl backdrop-blur-xl lg:col-span-6">
            
            {/* Ambient Silver Internal Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            {/* Image Container */}
            {image ? (
              <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
                <img
                  src={image}
                  alt={chipset ?? "Processor Showcase"}
                  className="h-auto max-h-[380px] sm:max-h-[440px] w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Cpu className="h-20 w-20 text-neutral-500" />
              </div>
            )}

            {/* Floating Spec Badge Overlay */}
            <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl shadow-xl">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Architecture
              </p>
              <p className="mt-0.5 text-base font-semibold text-white">
                {chipset ?? "Pro Silicon"}
              </p>
            </div>
          </div>

          {/* Performance Stats & Details Column */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-6">
            
            {/* Top Stat: Processor Feature Card */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/80">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/10 transition-transform duration-500 group-hover:scale-110">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Processor
                  </p>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {chipset ?? "—"}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                The core engine handling heavy graphics rendering, machine learning models, and instant app launches with maximum energy efficiency.
              </p>
            </div>

            {/* Middle Grid: RAM & Storage */}
            <div className="grid gap-4 sm:grid-cols-2">
              <PerformanceStatCard
                icon={MemoryStick}
                label="RAM"
                value={ram}
                desc="Unified High-Bandwidth Memory"
              />
              <PerformanceStatCard
                icon={HardDrive}
                label="Storage"
                value={storage}
                desc="Ultra-Fast Flash Storage"
              />
            </div>

            {/* Bottom Card: Overall Workload Capacity */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md transition-all duration-500 hover:border-white/20">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/10">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Sustained Performance
                  </p>
                  <p className="text-sm font-medium text-neutral-200">
                    Handles intensive pro workflows and high-frame-rate gaming with high thermal efficiency.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footnote */}
        <div className="mt-12 flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-xs text-neutral-400">
          <Cpu className="h-4 w-4 shrink-0 text-neutral-500" />
          <p>
            Performance metrics based on system specifications. Actual efficiency and speeds may vary depending on workload, ambient temperature, and storage configuration.
          </p>
        </div>
      </div>
    </section>
  );
}

function PerformanceStatCard({
  icon: Icon,
  label,
  value,
  desc,
}: {
  icon: typeof Cpu;
  label: string;
  value?: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900/80">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          {label}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-neutral-300 border border-white/5 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold text-white">
        {value ?? "—"}
      </p>

      <p className="mt-1 text-xs text-neutral-400">
        {desc}
      </p>
    </div>
  );
}