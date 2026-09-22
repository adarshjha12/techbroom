"use client";

import { useRef } from "react";
import { motion, useInView , type Variants} from "framer-motion";
import {
  Check,
  CircleAlert,
  Sparkles,
  UserRound,
  UserRoundX,
  Star,
} from "lucide-react";

import type { SmartphoneBuyDecision as BuyDecision } from "@/lib/content/types";

type SmartphoneBuyDecisionProps = {
  decision: BuyDecision;
};

// --- Container Stagger Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function SmartphoneBuyDecision({
  decision,
}: SmartphoneBuyDecisionProps) {
  return (
    <section
      id="buy"
      className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950 px-6 py-24 text-white"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-20 blur-[120px]">
        <div className="h-[400px] w-[600px] rounded-full bg-gradient-to-b from-amber-500/30 to-purple-600/20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-amber-500/60" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Should you buy it?
            </p>
          </div>

          <h2 className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Is it the right phone for you?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            There is no single phone that makes sense for everyone. The right
            choice depends on your priorities, budget, and what you expect from
            your next device.
          </p>
        </motion.div>

        {/* Summary & Animated Gold Star Rating Card */}
        <motion.div
          variants={itemVariants}
          className="group relative mt-12 overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-xl transition-colors hover:border-amber-500/30 md:p-10"
        >
          {/* Background subtle hover highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Our Take */}
            <div className="flex flex-1 items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-inner ring-1 ring-white/10">
                <Sparkles className="h-6 w-6 text-amber-400" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  TechBroom Verdict
                </p>
                <p className="mt-2 text-base leading-relaxed text-neutral-200 md:text-lg">
                  {decision.summary}
                </p>
              </div>
            </div>

            {/* --- Superb Animated Gold Star Rating UI --- */}
            <div className="shrink-0 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 p-6 shadow-xl backdrop-blur-md ring-1 ring-white/5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Rating Score
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                    {decision.rating}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">
                    / {decision.bestRating}
                  </span>
                </div>
              </div>

              {/* Animated 5 Gold Stars */}
              <AnimatedGoldStars
                rating={Number(decision.rating)}
                bestRating={Number(decision.bestRating)}
              />
            </div>
          </div>
        </motion.div>

        {/* Reasons to Buy / Skip */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants} className="h-full">
            <DecisionCard
              title="Reasons to consider it"
              icon={Check}
              items={decision.reasonsToBuy}
              colorScheme="emerald"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <DecisionCard
              title="Reasons to think twice"
              icon={CircleAlert}
              items={decision.reasonsToSkip}
              colorScheme="rose"
            />
          </motion.div>
        </div>

        {/* Audience Best For / Not For */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants} className="h-full">
            <DecisionCard
              title="Best for"
              icon={UserRound}
              items={decision.bestFor}
              colorScheme="blue"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <DecisionCard
              title="Probably not for"
              icon={UserRoundX}
              items={decision.notFor}
              colorScheme="amber"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Animated Gold 5-Star Rating Component ---
function AnimatedGoldStars({
  rating,
  bestRating,
}: {
  rating: number;
  bestRating: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Convert rating score to a 5-star scale
  const normalizedRating = Math.min(
    5,
    Math.max(0, (rating / (bestRating || 5)) * 5)
  );

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 rounded-xl bg-neutral-900/90 px-4 py-3 ring-1 ring-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]"
    >
      {/* Defined SVG Gold Metallic Gradient */}
      <svg className="hidden">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" /> {/* yellow-200 */}
            <stop offset="35%" stopColor="#facc15" /> {/* yellow-400 */}
            <stop offset="70%" stopColor="#f59e0b" /> {/* amber-500 */}
            <stop offset="100%" stopColor="#d97706" /> {/* amber-600 */}
          </linearGradient>
        </defs>
      </svg>

      {[0, 1, 2, 3, 4].map((index) => {
        // Calculate fill percentage for each of the 5 stars (0 to 100%)
        const fillPercentage = Math.min(
          100,
          Math.max(0, (normalizedRating - index) * 100)
        );

        return (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1, rotate: 0 }
                : { scale: 0, opacity: 0, rotate: -30 }
            }
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: index * 0.12, // Stagger star pop-in
            }}
            className="relative flex items-center justify-center"
          >
            {/* Background Empty/Unfilled Star */}
            <Star className="h-7 w-7 text-neutral-800 fill-neutral-800/80 stroke-neutral-700" />

            {/* Foreground Gold Filled Star with Partial Clip & Glow Animation */}
            {fillPercentage > 0 && (
              <motion.div
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${fillPercentage}%` } : { width: "0%" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.2, // Animate gold fill after star pops in
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 overflow-hidden"
              >
                <motion.div
                  animate={
                    fillPercentage === 100
                      ? {
                          filter: [
                            "drop-shadow(0 0 4px rgba(245,158,11,0.4))",
                            "drop-shadow(0 0 10px rgba(250,204,21,0.8))",
                            "drop-shadow(0 0 5px rgba(245,158,11,0.5))",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Star
                    className="h-7 w-7 shrink-0 stroke-amber-300 stroke-[1.5]"
                    style={{ fill: "url(#gold-gradient)" }}
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// --- Reusable Themed Card Component ---
function DecisionCard({
  title,
  icon: Icon,
  items,
  colorScheme,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  colorScheme: "emerald" | "rose" | "blue" | "amber";
}) {
  const theme = {
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "hover:border-emerald-500/30",
      bullet: "bg-emerald-500",
    },
    rose: {
      bg: "bg-rose-500/10",
      text: "text-rose-400",
      border: "hover:border-rose-500/30",
      bullet: "bg-rose-500",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "hover:border-blue-500/30",
      bullet: "bg-blue-500",
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "hover:border-amber-500/30",
      bullet: "bg-amber-500",
    },
  }[colorScheme];

  return (
    <div
      className={`group h-full rounded-[2rem] border border-neutral-800 bg-neutral-900/40 p-8 transition-colors duration-300 ${theme.border}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.bg}`}
        >
          <Icon className={`h-6 w-6 ${theme.text}`} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-neutral-100">
          {title}
        </h3>
      </div>

      <ul className="mt-8 space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index }}
            className="flex items-start gap-4"
          >
            <span
              className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet} shadow-[0_0_8px_currentColor]`}
            />
            <span className="text-base leading-relaxed text-neutral-400 transition-colors group-hover:text-neutral-300">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}