"use client";

import React, { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
} from "framer-motion";
import {
    BatteryCharging,
    Camera,
    Check,
    ChevronRight,
    Cpu,
    Info,
    Layers,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Volume2,
    Zap,
} from "lucide-react";

import type { SmartphoneAssessment as Assessment } from "@/lib/content/types";

type SmartphoneAssessmentProps = {
    assessment: Assessment;
};

// --- Apple System Color & Label Helper ---

type RatingTier = {
    label: string;
    badgeBg: string;
    badgeText: string;
    barColor: string;
    ringColor: string;
};

function getAppleRatingTier(score: number): RatingTier {
    if (score >= 9.2) {
        return {
            label: "Exceptional",
            badgeBg: "bg-[#e8f8ed]",
            badgeText: "text-[#1d7c39]",
            barColor: "bg-[#34c759]",
            ringColor: "#34c759", // Apple Green
        };
    }
    if (score >= 8.5) {
        return {
            label: "Excellent",
            badgeBg: "bg-[#e8f2ff]",
            badgeText: "text-[#0066cc]",
            barColor: "bg-[#0071e3]",
            ringColor: "#3b97f3", // Apple Blue
        };
    }
    if (score >= 7.8) {
        return {
            label: "Very Good",
            badgeBg: "bg-[#f2f2f7]",
            badgeText: "text-[#3a3a3c]",
            barColor: "bg-[#5856d6]",
            ringColor: "#5856d6", // Apple Indigo
        };
    }
    if (score >= 7.0) {
        return {
            label: "Good",
            badgeBg: "bg-[#fff6e5]",
            badgeText: "text-[#b26200]",
            barColor: "bg-[#ff9500]",
            ringColor: "#ff9500", // Apple Orange
        };
    }
    return {
        label: "Average",
        badgeBg: "bg-[#ffebeb]",
        badgeText: "text-[#d70015]",
        barColor: "bg-[#ff3b30]",
        ringColor: "#ff3b30", // Apple Red
    };
}

// --- Department Icon Resolver ---

function getDepartmentIcon(name: string) {
    const lower = name.toLowerCase();
    if (lower.includes("camera") || lower.includes("photo") || lower.includes("lens") || lower.includes("video")) {
        return <Camera className="h-4 w-4 text-[#0071e3]" />;
    }
    if (lower.includes("battery") || lower.includes("charge") || lower.includes("power") || lower.includes("endurance")) {
        return <BatteryCharging className="h-4 w-4 text-[#34c759]" />;
    }
    if (lower.includes("display") || lower.includes("screen") || lower.includes("oled") || lower.includes("panel")) {
        return <Smartphone className="h-4 w-4 text-[#5856d6]" />;
    }
    if (lower.includes("performance") || lower.includes("speed") || lower.includes("chip") || lower.includes("processor") || lower.includes("gaming")) {
        return <Cpu className="h-4 w-4 text-[#ff9500]" />;
    }
    if (lower.includes("build") || lower.includes("design") || lower.includes("durability") || lower.includes("body") || lower.includes("hardware")) {
        return <ShieldCheck className="h-4 w-4 text-[#af52de]" />;
    }
    if (lower.includes("audio") || lower.includes("sound") || lower.includes("speaker")) {
        return <Volume2 className="h-4 w-4 text-[#ff2d55]" />;
    }
    return <Layers className="h-4 w-4 text-[#0071e3]" />;
}

// --- Smooth Animated Counter ---

function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 28,
        stiffness: 90,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(1);
            }
        });
    }, [springValue]);

    return <span ref={ref}>0.0</span>;
}

// --- Apple Watch Style Circular Score Gauge ---

// function AppleScoreRing({ score }: { score: number }) {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, margin: "-40px" });
//     const tier = getAppleRatingTier(score);

//     const radius = 62;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (score / 10) * circumference;

//     return (
//         <div ref={ref} className="relative flex items-center justify-center">
//             <svg className="h-40 w-40 -rotate-90 transform" viewBox="0 0 150 150">
//                 {/* Track */}
//                 <circle
//                     cx="75"
//                     cy="75"
//                     r={radius}
//                     stroke="#e5e5e7"
//                     strokeWidth="9"
//                     fill="transparent"
//                 />
//                 {/* Progress Arc */}
//                 <motion.circle
//                     cx="75"
//                     cy="75"
//                     r={radius}
//                     stroke={tier.ringColor}
//                     strokeWidth="9"
//                     strokeDasharray={circumference}
//                     initial={{ strokeDashoffset: circumference }}
//                     animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
//                     transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
//                     strokeLinecap="round"
//                     fill="transparent"
//                 />
//             </svg>

//             {/* Numerical Center */}
//             <div className="absolute flex flex-col items-center justify-center text-center">
//                 <div className="flex items-baseline text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
//                     <AnimatedNumber value={score} />
//                     <span className="text-xl text-[#86868b] font-normal">/10</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// --- Dynamic Score Bar ---

function ScoreBar({ score }: { score: number }) {
    const tier = getAppleRatingTier(score);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-[#e5e5e7]">
            <motion.div
                className={`h-full rounded-full ${tier.barColor}`}
                initial={{ width: "0%" }}
                animate={{ width: isInView ? `${score * 10}%` : "0%" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    );
}

function AppleScoreRing({ score }: { score: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const tier = getAppleRatingTier(score);

    const radius = 62;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 10) * circumference;

    return (
        <div ref={ref} className="relative flex items-center justify-center">
            <svg className="h-40 w-40 -rotate-90 transform drop-shadow-md" viewBox="0 0 150 150">
                {/* Dark Mode Translucent Track */}
                <circle
                    cx="75"
                    cy="75"
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="9"
                    fill="transparent"
                />
                {/* Glowing Progress Arc */}
                <motion.circle
                    cx="75"
                    cy="75"
                    r={radius}
                    stroke={tier.ringColor}
                    strokeWidth="9"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    strokeLinecap="round"
                    fill="transparent"
                />
            </svg>

            {/* Numerical Center in Crisp White */}
            <div className="absolute flex flex-col items-center justify-center text-center">
                <div className="flex items-baseline text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-sm">
                    <AnimatedNumber value={score} />
                    <span className="text-xl text-white/60 font-medium">/10</span>
                </div>
            </div>
        </div>
    );
}

function getDeepGradientTheme(score: number) {
    if (score >= 9.2) {
        return {
            gradient: "from-[#022c22] via-[#064e3b] to-[#022c22]", // Deep Midnight Emerald
            glow: "bg-emerald-500/25",
            border: "border-emerald-500/30",
            accentIcon: "text-emerald-400",
            badgeBg: "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30",
        };
    }
    if (score >= 8.5) {
        return {
            gradient: "from-[#0f172a] via-[#1e1b4b] to-[#0f172a]", // Deep Electric Indigo / Violet
            glow: "bg-indigo-500/30",
            border: "border-indigo-500/30",
            accentIcon: "text-indigo-400",
            badgeBg: "bg-indigo-500/20 text-indigo-300 border border-indigo-400/30",
        };
    }
    if (score >= 7.8) {
        return {
            gradient: "from-[#0f172a] via-[#172554] to-[#0f172a]", // Deep Sapphire Blue
            glow: "bg-blue-500/30",
            border: "border-blue-500/30",
            accentIcon: "text-blue-400",
            badgeBg: "bg-blue-500/20 text-blue-300 border border-blue-400/30",
        };
    }
    if (score >= 7.0) {
        return {
            gradient: "from-[#1c1917] via-[#451a03] to-[#1c1917]", // Deep Dark Amber
            glow: "bg-amber-500/25",
            border: "border-amber-500/30",
            accentIcon: "text-amber-400",
            badgeBg: "bg-amber-500/20 text-amber-300 border border-amber-400/30",
        };
    }
    return {
        gradient: "from-[#18181b] via-[#4c0519] to-[#18181b]", // Deep Dark Crimson
        glow: "bg-rose-500/25",
        border: "border-rose-500/30",
        accentIcon: "text-rose-400",
        badgeBg: "bg-rose-500/20 text-rose-300 border border-rose-400/30",
    };
}

// --- Main Assessment Component ---

export default function SmartphoneAssessment({
    assessment,
}: SmartphoneAssessmentProps) {
    const overallTier = getAppleRatingTier(assessment.overall);

    return (
        <section className="mx-auto w-full max-w-7xl bg-white px-4 py-12 sm:px-6 lg:px-8 font-sans antialiased text-[#1d1d1f]">
            {/* Apple Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">
                    <Sparkles className="h-3.5 w-3.5 text-[#0071e3]" />
                    <span>TechBroom Verdict</span>
                </div>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl lg:text-5xl">
                    Our assessment at a glance
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#6e6e73]">
                    A rigorous, hardware-tested evaluation giving you absolute clarity before your purchase decision.
                </p>
            </motion.div>

            {/* Overall Score + Executive Summary */}
            <div className="mb-8 grid gap-6 lg:grid-cols-[300px_1fr]">
                {/* Score Ring Tile (Deep Apple Pro Dark Gradient) */}
                {(() => {
                    const deepTheme = getDeepGradientTheme(assessment.overall);
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`relative flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${deepTheme.gradient} ${deepTheme.border} p-8 text-center shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-indigo-950/40 border`}
                        >
                            {/* Radial Ambient Glow */}
                            <div
                                className={`pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full ${deepTheme.glow} blur-3xl`}
                            />
                            <div
                                className={`pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full ${deepTheme.glow} blur-3xl`}
                            />

                            {/* Header Badge */}
                            <div className="relative z-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70">
                                <Zap className={`h-3.5 w-3.5 ${deepTheme.accentIcon}`} />
                                <span>Overall Assessment</span>
                            </div>

                            {/* Score Gauge Ring with Hover Scale */}
                            <div className="relative z-10 my-4 transition-transform duration-500 hover:scale-105">
                                <AppleScoreRing score={assessment.overall} />
                            </div>

                            {/* Glowing Rating Pill Badge */}
                            <span
                                className={`relative z-10 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-wide backdrop-blur-md shadow-inner text-white ${deepTheme.badgeBg}`}
                            >
                                {overallTier.label}
                            </span>
                        </motion.div>
                    );
                })()}

                {/* Executive Verdict Quote Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#e8f2ff] via-white to-[#f3e8ff] p-8 transition-all duration-300 hover:shadow-md border border-black/[0.04] sm:p-10"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                            Editorial Summary
                        </span>

                        <p className="mt-4 text-xl font-medium leading-relaxed text-[#1d1d1f] sm:text-2xl sm:leading-relaxed">
                            "{assessment.summary}"
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-[#e5e5e7] pt-4 text-xs text-[#6e6e73]">
                        <span>100% Independent & Unbiased</span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#0071e3] hover:underline cursor-pointer">
                            Read methodology <ChevronRight className="h-3 w-3" />
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Department Scores */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 rounded-3xl bg-gradient-to-br from-[#e8f2ff] via-white to-[#f3e8ff] p-6 border border-black/[0.04] sm:p-8"
            >
                <div className="mb-8">
                    <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                        How it performs by department
                    </h3>

                    <p className="mt-1 text-sm text-[#6e6e73]">
                        Each score reflects our deep-dive lab assessment of that specific hardware module.
                    </p>
                </div>

                <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
                    {assessment.departments.map((department, idx) => {
                        const deptTier = getAppleRatingTier(department.score);
                        return (
                            <motion.div
                                key={department.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group rounded-2xl bg-white p-4 shadow-2xs transition-all hover:shadow-md border border-black/[0.04]"
                            >
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f7]">
                                            {getDepartmentIcon(department.name)}
                                        </div>
                                        <span className="font-semibold text-lg text-[#1d1d1f]">
                                            {department.name}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${deptTier.badgeBg} ${deptTier.badgeText}`}>
                                            {deptTier.label}
                                        </span>
                                        <span className="font-bold text-[#1d1d1f]">
                                            {department.score.toFixed(1)}
                                        </span>
                                    </div>
                                </div>

                                <ScoreBar score={department.score} />

                                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">
                                    {department.summary}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Pros & Cons Split Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Pros (What Stands Out) */}
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-[#f5f5f7] p-6 border border-black/[0.04] sm:p-8"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34c759]/15 text-[#34c759]">
                            <Check className="h-5 w-5 stroke-[2.5]" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#1d1d1f]">
                                What stands out
                            </h3>
                            <span className="text-xs font-medium text-[#34c759]">
                                Key highlights & strengths
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {assessment.pros.map((pro, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.06 }}
                                className="flex items-start gap-3 rounded-2xl bg-white p-3.5 text-sm font-medium text-[#1d1d1f] shadow-2xs border border-black/[0.04]"
                            >
                                <div className="mt-0.5 shrink-0 rounded-full bg-[#e8f8ed] p-1 text-[#34c759]">
                                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                                </div>
                                <span>{pro}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Cons (Things to Consider) */}
                <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-[#f5f5f7] p-6 border border-black/[0.04] sm:p-8"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff9500]/15 text-[#ff9500]">
                            <Info className="h-5 w-5 stroke-[2.5]" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#1d1d1f]">
                                Things to consider
                            </h3>
                            <span className="text-xs font-[#ff9500] font-medium text-[#b26200]">
                                Potential trade-offs
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {assessment.cons.map((con, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.06 }}
                                className="flex items-start gap-3 rounded-2xl bg-white p-3.5 text-sm font-medium text-[#1d1d1f] shadow-2xs border border-black/[0.04]"
                            >
                                <div className="mt-0.5 shrink-0 rounded-full bg-[#fff6e5] p-1 text-[#ff9500]">
                                    <Info className="h-3.5 w-3.5 stroke-[2.5]" />
                                </div>
                                <span>{con}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}