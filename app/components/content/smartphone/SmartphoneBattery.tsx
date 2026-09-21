"use client";

import { useEffect, useRef, useState } from "react";
import {
  BatteryCharging,
  Clock3,
  PlugZap,
  ShieldCheck,
  Zap,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneBatteryProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

export default function SmartphoneBattery({
  specs,
}: SmartphoneBatteryProps) {
  const battery = specs.battery;
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!battery) {
    return null;
  }

  const getSpec = (label: string) =>
    battery.items.find((item) => item.label === label)?.value;

  const capacity = getSpec("Capacity");
  const wiredCharging = getSpec("Wired Charging");
  const wirelessCharging = getSpec("Wireless Charging");

  return (
    <section
      ref={sectionRef}
      id="battery"
      className="relative overflow-hidden border-t border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/50 to-white px-6 py-28"
    >
      {/* Ambient background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            <Zap className="h-3.5 w-3.5 animate-pulse text-emerald-500" />
            Energy & Endurance
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Power that keeps up.
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-600">
            Battery capacity is only part of the story. Charging speed,
            efficiency, software, and everyday usage all affect how long a
            phone lasts.
          </p>
        </div>

        {/* Main Battery Layout */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Battery Visual Hero Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-xl shadow-neutral-900/5 transition-all duration-500 hover:border-emerald-500/30 lg:col-span-3 lg:p-12">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative flex min-h-[380px] flex-col items-center justify-center">
              {/* Battery Graphic Container */}
              <div className="relative">
                {/* Outer Glow on Scroll */}
                <div
                  className={`absolute -inset-4 rounded-[40px] bg-emerald-500/20 blur-xl transition-all duration-1000 ${
                    hasScrolledIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />

                {/* Battery Body */}
                <div className="relative h-44 w-80 rounded-[32px] border-4 border-neutral-900 bg-neutral-950 p-2.5 shadow-2xl">
                  {/* Battery Liquid Fill Animation */}
                  <div
                    className={`relative h-full overflow-hidden rounded-[22px] bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 transition-all duration-1500 ease-out ${
                      hasScrolledIn ? "w-[82%]" : "w-[0%]"
                    }`}
                  >
                    {/* Shimmer / Liquid shine effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                    
                    {/* Energy wave lines */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                  </div>

                  {/* Battery Terminal Pin */}
                  <div className="absolute -right-4 top-1/2 h-12 w-3.5 -translate-y-1/2 rounded-r-md bg-neutral-900 border-r-2 border-t-2 border-b-2 border-neutral-800" />

                  {/* Center Floating Charging Icon & Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900/90 text-emerald-400 shadow-lg ring-1 ring-emerald-500/30 backdrop-blur-md transition-transform duration-500 hover:scale-110">
                      <BatteryCharging className="h-7 w-7 animate-bounce text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Capacity Details */}
              <div className="mt-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Total Battery Capacity
                </p>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  {capacity ?? "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Charging Information Stat Cards */}
          <div className="grid gap-4 lg:col-span-2">
            <BatteryStat
              icon={PlugZap}
              label="Wired charging"
              value={wiredCharging}
              highlight
            />

            <BatteryStat
              icon={BatteryCharging}
              label="Wireless charging"
              value={wirelessCharging}
            />

            <BatteryStat
              icon={Clock3}
              label="Everyday endurance"
              value="Depends on usage"
            />

            <BatteryStat
              icon={ShieldCheck}
              label="Battery health"
              value="Usage and charging dependent"
            />
          </div>
        </div>

        {/* Battery Context Box */}
        <div className="mt-6 rounded-3xl border border-neutral-200/85 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Optimization & Intelligence
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Screen brightness, adaptive refresh rate, mobile network strength,
              gaming load, camera processing, background apps, and AI software
              optimization all dynamically balance real-world battery efficiency.
              Capacity alone is only the starting point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BatteryStat({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: typeof PlugZap;
  label: string;
  value?: string;
  highlight?: boolean;
}) {
  return (
    <div className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
      highlight 
        ? "border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.03] to-transparent" 
        : "border-neutral-200/80 bg-white hover:border-neutral-300"
    }`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
        highlight 
          ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" 
          : "bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200/60"
      }`}>
        <Icon className="h-5 w-5" />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </p>

      <p className="mt-1.5 text-base font-bold text-neutral-900">
        {value ?? "—"}
      </p>
    </div>
  );
}