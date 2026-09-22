"use client";

import { useEffect, useRef, useState } from "react";
import {
  BatteryCharging,
  Camera,
  Cpu,
  Smartphone,
  Sparkles,
} from "lucide-react";

import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneOverviewProps = {
  specs: Record<string, SmartphoneSpecSection>;
  specsOverview?: {
    heading: string;
    subheading: string;
  } | undefined;
};

const sectionIcons = {
  display: Smartphone,
  performance: Cpu,
  camera: Camera,
  battery: BatteryCharging,
};

// Custom visual themes per spec section for subtle neon ambient accents
const sectionThemes: Record<
  string,
  {
    gradient: string;
    glow: string;
    accentText: string;
    badgeBg: string;
    borderHover: string;
  }
> = {
  display: {
    gradient: "from-sky-500/10 via-indigo-500/5 to-transparent",
    glow: "group-hover:shadow-sky-500/10",
    accentText: "text-sky-500",
    badgeBg: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    borderHover: "group-hover:border-sky-500/30",
  },
  performance: {
    gradient: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    glow: "group-hover:shadow-purple-500/10",
    accentText: "text-purple-500",
    badgeBg: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    borderHover: "group-hover:border-purple-500/30",
  },
  camera: {
    gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
    glow: "group-hover:shadow-rose-500/10",
    accentText: "text-rose-500",
    badgeBg: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    borderHover: "group-hover:border-rose-500/30",
  },
  battery: {
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    glow: "group-hover:shadow-emerald-500/10",
    accentText: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    borderHover: "group-hover:border-emerald-500/30",
  },
};

const defaultTheme = {
  gradient: "from-zinc-500/10 via-neutral-500/5 to-transparent",
  glow: "group-hover:shadow-zinc-500/10",
  accentText: "text-zinc-600",
  badgeBg: "bg-zinc-500/10 text-zinc-600 border-zinc-500/20",
  borderHover: "group-hover:border-zinc-400/40",
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
  specsOverview
}: SmartphoneOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/50 to-white px-6 py-24 sm:py-32"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500/5 to-sky-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-rose-500/5 to-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            The Details
          </div>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
            {specsOverview?.heading || " Specs Overview"}
          </h2>

          <p className="text-lg font-medium leading-relaxed tracking-tight text-zinc-500 sm:text-xl">
            {specsOverview?.subheading || "A closer look at the advanced hardware and key specifications that make it all possible."}
          </p>
        </div>

        {/* Key Highlights (Bento Hero Stats) */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {highlightConfig.map((highlight, index) => {
            const section = specs[highlight.section];
            if (!section) return null;

            const firstItem = section.items[0];
            const Icon =
              sectionIcons[highlight.section as keyof typeof sectionIcons] ??
              Smartphone;
            const theme = sectionThemes[highlight.section] ?? defaultTheme;

            return (
              <div
                key={highlight.section}
                style={{
                  transitionDelay: `${isVisible ? index * 120 + 200 : 0}ms`,
                }}
                className={`group relative flex flex-col items-center justify-between overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white/90 p-8 text-center shadow-lg shadow-zinc-900/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  theme.glow
                } ${theme.borderHover} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                {/* Background Ambient Gradient fill on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Subtle top glare sweep */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent group-hover:via-zinc-400 transition-all duration-500" />

                {/* Icon Container with Micro-animation */}
                <div
                  className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${theme.badgeBg} shadow-sm transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon
                    className={`h-7 w-7 transition-transform duration-500 ${
                      highlight.section === "performance"
                        ? "group-hover:rotate-180"
                        : highlight.section === "battery"
                        ? "group-hover:animate-bounce"
                        : "group-hover:scale-110"
                    }`}
                  />
                </div>

                {/* Primary Stat Value */}
                <p className="relative z-10 mb-2 text-3xl font-extrabold tracking-tighter text-zinc-900 sm:text-4xl">
                  {firstItem?.value ?? "—"}
                </p>

                {/* Label */}
                <p className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600">
                  {highlight.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Specification Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {Object.entries(specs).map(([key, section], sectionIdx) => {
            const Icon =
              sectionIcons[key as keyof typeof sectionIcons] ?? Smartphone;
            const theme = sectionThemes[key] ?? defaultTheme;

            return (
              <div
                key={key}
                style={{
                  transitionDelay: `${
                    isVisible ? sectionIdx * 150 + 600 : 0
                  }ms`,
                }}
                className={`group relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-zinc-900/5 transition-all duration-700 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                {/* Background Subtle Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Card Header */}
                <div className="relative z-10 mb-8 flex items-center gap-5">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${theme.badgeBg} shadow-sm transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>

                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${theme.accentText}`}
                    >
                      Specifications
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                      {section.title}
                    </h3>
                  </div>
                </div>

                {/* Specification List */}
                <div className="relative z-10 flex flex-col gap-3">
                  {section.items.map((item, index) => (
                    <div
                      key={item.label}
                      className={`group/row flex items-center justify-between gap-6 rounded-xl p-3.5 transition-all duration-300 hover:bg-zinc-50/80 ${
                        index !== section.items.length - 1
                          ? "border-b border-zinc-100"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-semibold text-zinc-500 transition-colors duration-200 group-hover/row:text-zinc-900">
                        {item.label}
                      </span>

                      <span className="text-right text-sm font-bold text-zinc-900">
                        {item.value ?? "—"}
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