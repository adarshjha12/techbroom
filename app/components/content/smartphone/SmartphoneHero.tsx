"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { SmartphoneContent } from "@/lib/content/types";

type SmartphoneHeroProps = {
  content: SmartphoneContent;
};

export default function SmartphoneHero({ content }: SmartphoneHeroProps) {
  // Active view state: 'primary' for hero, 'secondary' for hero2
  const [activeImage, setActiveImage] = useState<"primary" | "secondary">("primary");

  // Mouse tilt animation setup
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid 3D motion
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  // Handle mouse movement for tilt & glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  

  const currentImageUrl =
    activeImage === "secondary" && content.images.hero2
      ? content.images.hero2
      : content.images.hero;


  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeImage === "primary" && content.images.hero2) {
        setActiveImage("secondary");
      } else {
        setActiveImage("primary");
      }
    }, 8000);

    return () => clearTimeout(timer);

  }, [currentImageUrl, activeImage]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-500/20 to-blue-400/20 blur-[130px]" />
        <div className="absolute top-1/4 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">

        {/* Left Column: Typography & CTAs */}
        <div className="z-10 flex flex-col justify-center lg:col-span-6">
          {/* Brand Tag / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-300">
              {content.brand}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 sm:text-7xl lg:text-7xl"
          >
            {content.name}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg text-neutral-400 sm:text-lg leading-relaxed"
          >
            {content.shortDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#camera"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
            {content.heroContent.primaryCta}
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="#assessment"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
                {content.heroContent.secondaryCta}

            </a>
          </motion.div>

          {/* Perspective View Switcher (If hero2 exists) */}
          {content.images.hero2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Switch Perspective
              </span>
              <div className="flex gap-2 rounded-full border border-white/10 bg-neutral-900/60 p-1 backdrop-blur-md">
                <button
                  onClick={() => setActiveImage("primary")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${activeImage === "primary"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  Front View
                </button>
                <button
                  onClick={() => setActiveImage("secondary")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${activeImage === "secondary"
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white"
                    }`}
                >
                  Angle Profile
                </button>
              </div>
            </motion.div>
          )}
        </div>

       {/* Right Column: 3D Interactive Smartphone Display */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          // INCREASED: min-height from 500px to 700px (850px on desktop)
          className="relative flex min-h-[600px] lg:min-h-[450px] items-center justify-center lg:col-span-6 cursor-grab active:cursor-grabbing"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            // INCREASED: max-width from 420px to 650px
            className="relative w-full max-w-[550px] lg:max-w-[650px] flex justify-center items-center"
          >
            {/* Soft Shadow Base - Scaled up */}
            <div className="absolute -bottom-16 h-16 w-[120%] rounded-[100%] bg-cyan-500/20 blur-3xl transform translate-z-[-50px]" />

            {/* Main Phone Image Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-full flex justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              >
                {currentImageUrl ? (
                  <Image
                    width={1000} // Increased internal resolution
                    height={1200}
                    priority
                    fetchPriority="high"
                    src={currentImageUrl}
                    alt={content.name}
                    // INCREASED: max-height from 620px to 850px
                    className="h-auto max-h-[750px] lg:max-h-[850px] w-full object-contain pointer-events-none select-none"
                  />
                ) : (
                  // INCREASED: Fallback placeholder size
                  <div className="flex h-[700px] w-[340px] items-center justify-center rounded-[4rem] border border-white/20 bg-neutral-900/80 backdrop-blur-2xl shadow-2xl">
                    <span className="text-sm font-medium text-neutral-500">
                      Product Preview
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </section>
  );
}