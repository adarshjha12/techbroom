"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Eye, Maximize2, Smartphone, Zap } from "lucide-react";
import type { SmartphoneSpecSection } from "@/lib/content/types";

type SmartphoneDisplayProps = {
  specs: Record<string, SmartphoneSpecSection>;
};

// Animation Variants for Scroll Reveals
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function SmartphoneDisplay({ specs }: SmartphoneDisplayProps) {
  const display = specs.display;

  if (!display) {
    return null;
  }

  // Safely extract the image if it exists on the type
  const imageUrl = (display).image as string | undefined;

  const getSpec = (label: string) =>
    display.items.find((item) => item.label === label)?.value;

  const size = getSpec("Size");
  const type = getSpec("Type");
  const refreshRate = getSpec("Refresh Rate");
  const resolution = getSpec("Resolution");

  return (
    <section
      id="display"
      className="relative overflow-hidden border-t border-neutral-200 bg-neutral-50 px-6 py-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-20 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Display Technology
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl">
            A screen designed to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400">
              stand out.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
            Explore the advanced display technology, edge-to-edge size, ultra-crisp resolution, and adaptive refresh rate that shape an unparalleled viewing experience.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Main Visual Panel (Dark Cinematic Apple-Style Showcase) */}
          <motion.div
            variants={itemVariants}
            className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-[3rem] bg-black p-8 shadow-2xl lg:col-span-8 lg:min-h-[750px]"
          >
            {/* Dynamic Screen Glow / Aura behind the phone */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500 blur-[100px]"
            />

            {/* Subtle Starfield/Grid Background inside the dark panel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* The Real Image */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-full w-full items-center justify-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Display visual"
                  width={900}
                  height={1100}
                  className="h-auto max-h-[550px] w-full object-contain lg:max-h-[650px]"
                  priority
                />
              ) : (
                <div className="flex h-[500px] w-[240px] items-center justify-center rounded-[3rem] border border-white/20 bg-neutral-900/50 backdrop-blur-md">
                  <span className="text-sm font-medium text-white/50">Missing display.image</span>
                </div>
              )}
            </motion.div>

            {/* Overlay Specs inside Image Panel */}
            <div className="absolute bottom-8 left-8 z-20 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
              <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                {size ?? "Edge-to-Edge"}
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">
                {type ?? "Super Retina XDR"}
              </p>
            </div>
          </motion.div>

          {/* Display Stats Column */}
          <div className="grid gap-4 lg:col-span-4">
            <motion.div variants={itemVariants}>
              <DisplayStat icon={Maximize2} label="Size" value={size} delay={0.1} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <DisplayStat icon={Eye} label="Technology" value={type} delay={0.2} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <DisplayStat icon={Zap} label="Refresh Rate" value={refreshRate} delay={0.3} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <DisplayStat icon={Smartphone} label="Resolution" value={resolution} delay={0.4} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Highly polished, glassmorphic interactive Stat Card
function DisplayStat({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: typeof Maximize2;
  label: string;
  value?: string;
  delay: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-neutral-300 hover:shadow-xl hover:shadow-black/[0.03]"
    >
      {/* Icon Container */}
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 transition-colors group-hover:bg-neutral-100">
        <Icon className="relative z-10 h-6 w-6 text-neutral-700 transition-transform group-hover:scale-110" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
          {label}
        </p>
        <p className="mt-1.5 truncate text-lg font-bold text-neutral-900 sm:text-xl">
          {value ?? "—"}
        </p>
      </div>

      {/* Decorative gradient swipe on hover */}
      <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-neutral-50/50 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
    </motion.div>
  );
}
