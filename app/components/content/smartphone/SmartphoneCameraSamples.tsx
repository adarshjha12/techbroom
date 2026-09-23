"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { SmartphoneCameraSample, SmartphoneCameraVerdict } from "@/lib/content/types";

// Helper component for the animated circular score ring
const CircularScore = ({ score }: { score: number }) => {
  const [animated, setAnimated] = useState(0);
  const percentage = (score / 10) * 100;

  // Color logic based on score
  const strokeColor = score >= 9 ? "text-emerald-500" : score >= 8 ? "text-blue-500" : "text-amber-500";

  useEffect(() => {
    // Slight delay to allow intersection observer or mount to finish for a smooth fill animation
    const timeout = setTimeout(() => setAnimated(percentage), 300);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 shadow-inner">
      <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
        {/* Background Track */}
        <path
          className="text-neutral-200"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* Animated Score Fill */}
        <path
          className={`${strokeColor} transition-all duration-1000 ease-out`}
          strokeWidth="3"
          strokeDasharray={`${animated}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <span className="absolute text-sm font-bold text-neutral-800 tracking-tighter">
        {score}
      </span>
    </div>
  );
};

// --- 1. Reusable Animated Circle Component ---
const BigCircularScore = ({
  score,
  delay,
  isVisible,
  label,
  size = "w-24 h-24 sm:w-32 sm:h-32",
  textClass = "text-3xl sm:text-4xl",
  strokeColor = "text-emerald-400",
  isGradient = false
}: {
  score: number;
  delay: number;
  isVisible: boolean;
  label?: string;
  size?: string;
  textClass?: string;
  strokeColor?: string;
  isGradient?: boolean;
}) => {
  const [offset, setOffset] = useState(100);
  const percentage = (score / 10) * 100;

  useEffect(() => {
    if (isVisible) {
      // Stagger the animation based on the provided delay
      const timeout = setTimeout(() => {
        setOffset(100 - percentage);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`relative flex items-center justify-center rounded-full bg-neutral-800 shadow-2xl ${size} ${isGradient ? "" : strokeColor
          }`}
      >        <svg className="absolute h-full w-full -rotate-90 transform drop-shadow-md" viewBox="0 0 36 36">
          {/* Background Track */}
          <path
            className="text-neutral-700/50"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Gradient Definition (Only used for final verdict) */}
          {isGradient && (
            <defs>
              <linearGradient id="verdictGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
                <stop offset="50%" stopColor="#ec4899" /> {/* Pink */}
                <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet */}
              </linearGradient>
            </defs>
          )}
          {/* Animated Fill (Clockwise) */}
          <path
            className="transition-all duration-1000 ease-out"
            strokeWidth="2.5"
            strokeDasharray="100, 100"
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke={isGradient ? "url(#verdictGradient)" : "currentColor"}
            style={{ color: isGradient ? 'transparent' : undefined }}
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className={`absolute font-bold text-white tracking-tighter ${textClass}`}>
          {score}
        </span>
      </div>

      {/* Category Label */}
      {label && (
        <span className="text-sm font-semibold uppercase tracking-widest text-neutral-400 text-center">
          {label}
        </span>
      )}
    </div>
  );
};

// --- 2. Main Component ---
export default function SmartphoneCameraSamples({
  samples,
  verdict
}: {
  samples: SmartphoneCameraSample[];
  verdict?: SmartphoneCameraVerdict;
}) {
  const [isDecisionSectionVisible, setIsDecisionSectionVisible] = useState(false);
  const decisionSectionRef = useRef<HTMLDivElement>(null);

  // Setup Intersection Observer to trigger animations when scrolling to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDecisionSectionVisible(true);
          // Optional: unobserve after triggering once so it stays filled
          if (decisionSectionRef.current) {
            observer.unobserve(decisionSectionRef.current);
          }
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (decisionSectionRef.current) {
      observer.observe(decisionSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (samples.length === 0) return null;

  const averageScore = Number(
    (samples.reduce((acc, curr) => acc + (curr.cameraScore || 0), 0) / samples.length).toFixed(1)
  );

  return (
    <section className="bg-[#fbfbfd] px-4 py-24 sm:px-6 sm:py-32 font-sans">
      <div className="mx-auto max-w-6xl">

        {/* Gallery Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-3">
            Real-World Testing
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {"Camera Samples: how the lenses perform in real-world scenarios"}

            {samples[0].credit && (
              <p className="mt-2 text-lg text-neutral-500">
                Photo by{" "}
                {samples[0].creditUrl ? (
                  <a
                    href={samples[0].creditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-700 underline underline-offset-2 hover:text-blue-600"
                  >
                    {samples[0].credit}
                  </a>
                ) : (
                  samples[0].credit
                )}
              </p>
            )}

          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {samples.map((sample) => (
            <article
              key={sample.title}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-neutral-200/60 shadow-sm transition-shadow hover:shadow-xl hover:shadow-neutral-200/50"
            >
              {/* Image Container with Hover Effects */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Glassmorphic Thoughts Overlay - Slides up on hover */}
                {sample.thoughts && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="m-4 rounded-2xl bg-black/60 p-5 backdrop-blur-xl border border-white/10">
                      <p className="text-sm font-medium leading-relaxed text-neutral-100">
                        "{sample.thoughts}"
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Data & Metadata Section */}
              <div className="flex flex-1 items-start justify-between p-8">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {sample.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                    {sample.title}
                  </h3>

                  {/* Sleek Metadata Pills */}
                  {sample.metadata && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Object.values(sample.metadata).map((value, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Score Ring Component */}
                {sample.cameraScore && (
                  <div className="ml-4 flex flex-col items-center gap-2">
                    <CircularScore score={sample.cameraScore} />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Score
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 2. The Decision Maker Section (Triggered on scroll) */}
        {verdict && (
          <div
            ref={decisionSectionRef}
            className="mt-32 rounded-[3rem] bg-neutral-950 p-8 sm:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Background glowing effects for premium feel */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-600/10 blur-[100px]" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Camera Performance Breakdown
                </h3>
                <p className="mt-4 text-neutral-400">
                  We&apos;ve analyzed every lens. Here is how they stack up.
                </p>
              </div>

              {/* Individual Scores Grid (Sequential Animation) */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-neutral-800 pb-20">
                {samples.map((sample, index) => (
                  <BigCircularScore
                    key={sample.title}
                    score={sample.cameraScore || 0}
                    label={sample.category}
                    isVisible={isDecisionSectionVisible}
                    delay={index * 300} // Each circle waits 300ms longer than the last
                    // Change stroke color dynamically based on score
                    strokeColor={(sample.cameraScore || 0) >= 9.5 ? "text-emerald-400" : "text-blue-400"}
                  />
                ))}
              </div>

              {/* Final Verdict Section */}
              <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-16">

                {/* Giant Final Score */}
                <div className="flex-shrink-0 text-center">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">
                    Overall System Score
                  </h4>
                  <BigCircularScore
                    score={averageScore}
                    isVisible={isDecisionSectionVisible}
                    delay={samples.length * 300 + 400} // Waits for all other circles to finish + 400ms buffer
                    size="w-48 h-48 sm:w-56 sm:h-56"
                    textClass="text-5xl sm:text-7xl"
                    isGradient={true} // Uses the special amber/pink/violet gradient
                  />
                </div>

                {/* Verdict Text & Pros/Cons */}
                <div className="max-w-xl">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    The Final Verdict For Camera
                  </h3>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                    {verdict.summary}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="flex items-center text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                        Strengths
                      </h4>
                      <ul className="space-y-2">
                        {verdict.pros.map((pro: string, i: number) => (
                          <li key={i} className="text-sm text-neutral-400">{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
                        Trade-offs
                      </h4>
                      <ul className="space-y-2">
                        {verdict.cons.map((con: string, i: number) => (
                          <li key={i} className="text-sm text-neutral-400">{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}