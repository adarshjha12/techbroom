import type { SmartphonePerformance } from "@/lib/content/types";

export const iphone18ProPerformance: SmartphonePerformance = {
  heading: "Performance: how much power do you actually get?",

  subheading:
    "A look beyond the processor name, including benchmark results, sustained gaming performance, thermal behavior, app loading and battery impact.",

  architecture: {
    cpu: "Apple A20 Pro",
    gpu: "Apple GPU",
    process: "3nm-class process",
    summary:
      "The processor combines high-performance CPU cores with an integrated GPU designed to handle demanding applications, gaming and sustained workloads.",
  },

  benchmarks: {
    geekbench: {
      singleCore: null,
      multiCore: null,
    },

    antutu: {
      total: null,
      cpu: null,
      gpu: null,
      memory: null,
      ux: null,
    },
  },

  gaming: {
    games: [
      // Add tested games here.
      // Example:
      // {
      //   name: "Genshin Impact",
      //   settings: "Highest",
      //   averageFps: 0,
      //   fpsRange: "—",
      //   duration: "30 minutes",
      //   notes: "Add real-world observation after testing.",
      // },
    ],

    sustainedPerformance: {
      summary:
        "Sustained performance should be judged over an extended gaming session rather than from short benchmark runs. Longer workloads can reveal changes in frame rate, temperature and power consumption.",

      performanceDrop: null,
    },
  },

  thermal: {
    summary:
      "Thermal behavior depends heavily on workload, ambient temperature and how long the device is under sustained load.",

    peakTemperature: null,

    sustainedTemperature: null,
  },

  appLoading: {
    summary:
      "App loading performance is influenced by processor speed, storage performance, memory management and software optimization. Real-world testing is more useful here than benchmark scores alone.",

    observations: [
      // Add observations from real-world testing.
      // Example:
      // "Large apps open quickly from a cold launch.",
      // "Switching between frequently used apps remains responsive.",
      // "Large games take longer to load than lightweight applications.",
    ],
  },

  batteryImpact: {
    gaming: null,

    heavyUse: null,

    summary:
      "Higher performance can come with increased power consumption during demanding workloads. Gaming, camera processing and other sustained tasks should therefore be considered alongside peak performance figures.",
  },

  analysis: {
    summary:
      "The iPhone 18 Pro's performance should be evaluated across both peak and sustained workloads. Benchmark results show what the hardware can achieve, while gaming stability, thermals, app loading and battery impact provide a better picture of how that performance translates into everyday use.",

    strengths: [
      "High peak processing performance",
      "Strong GPU capability for demanding applications and games",
      "Fast app loading and responsive multitasking",
      "Performance designed for long-term software workloads",
    ],

    limitations: [
      "Peak benchmark scores do not represent sustained performance",
      "Extended gaming can increase temperature and battery consumption",
      "Real-world performance varies by workload and software optimization",
    ],
  },
};