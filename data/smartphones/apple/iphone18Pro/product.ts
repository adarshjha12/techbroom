import type { SmartphoneContent } from "@/lib/content/types";
import { iphone18ProSpecs } from "./specs";
import { iphone18ProReviews } from "./reviews";
import { iphone18ProComparisons } from "./comparisons";
import { iphone18ProBuyDecision } from "./buyDecision";

export const iphone18Pro: SmartphoneContent = {
  slug: "iphone-18-pro",
  name: "iPhone 18 Pro",
  brand: "Apple",
  specs: iphone18ProSpecs,
  type: "smartphone",
  category: "smartphone",
  reviews: iphone18ProReviews,
  comparisons: iphone18ProComparisons,
  buyDecision: iphone18ProBuyDecision,
  shortDescription:
    "A premium smartphone focused on performance, camera quality, display and long-term software support.",

  description:
    "Detailed information, comparisons and real-world analysis of the iPhone 18 Pro.",

  status: "published",

  images: {
    hero: "https://images.moneycontrol.com/static-mcnews/2026/06/20260602050725_iPhone-18-Pro-Max.png",
    hero2: "https://www.macworld.com/wp-content/uploads/2026/08/3212438-0-81154700-1787310034-iPhone-18-Pro-colors-mockup-1.jpg?quality=50&strip=all",


    gallery: [
      {
        title: "Front View",
        image:
          "https://www.cultofmac.com/wp-content/uploads/2026/04/Dark-Cherry-iPhone-18-Pro-4.jpg",
      },
      {
        title: "Back View",
        image:
          "https://images.hindustantimes.com/tech/htmobile4/iphone-18-pro-max/images/IPHONE-18-PRO-BURGUNDY-L1--1-.webp?impolicy=new-ht-20210112&width=500&height=500",
      },
      {
        title: "Camera Module",
        image:
          "https://www.techadvisor.com/wp-content/uploads/2026/06/iPhone-18-Pro-dark-cherry-3.jpg?quality=50&strip=all&w=1024",
      },
      {
        title: "Display",
        image:
          "https://st1.techlusive.in/wp-content/uploads/2026/05/untitled-2026-05-27T110627.369.jpg?impolicy=Medium_Widthonly&w=350",
      },
    ],
  },

  cameraSamples: [
    {
      title: "Main Camera",
      credit: "Austin Mann",
      creditUrl: "https://www.austinmann.com",
      cameraScore: 9.6,
      thoughts: "Exceptional dynamic range and color reproduction. The sensor shift stabilization makes low-light handheld shots incredibly sharp.",
      image: "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_3543_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "main",
      metadata: { focalLength: "24mm", aperture: "f/1.48", shutterSpeed: "1/100s", iso: "ISO 80" },
    },
    {
      title: "Portrait",
      image: "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_4416_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "portrait",
      thoughts: "Sublime depth mapping. The background blur rolls off naturally like a DSLR, with perfect edge detection around hair.",
      cameraScore: 9.4,
      metadata: { focalLength: "48mm", aperture: "f/2.2" },
    },
    {
      title: "Telephoto 5x",
      image: "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_4782_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "telephoto",
      thoughts: "The tetraprism lens delivers stunning optical compression. Minimal noise even at 5x zoom.",
      cameraScore: 9.2,
      metadata: { focalLength: "120mm", aperture: "f/2.8" },
    },
    {
      title: "Ultrawide",
      image: "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_2572_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "ultrawide",
      thoughts: "Vast field of view with almost zero edge distortion thanks to the new photonic engine processing.",
      cameraScore: 8.9,
      metadata: { focalLength: "13mm", aperture: "f/2.2" },
    },
    {
      title: "Night Mode",
      image: "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_0273_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "night",
      thoughts: "Preserves the mood perfectly. It lifts shadows without making the night look like artificial daylight.",
      cameraScore: 9.5,
      metadata: { focalLength: "24mm", aperture: "f/1.48", shutterSpeed: "2.0s" },
    },
  ],

  cameraVerdict: {
    pros: ["Industry-leading video stabilization", "Zero shutter lag across all lenses", "Natural portrait roll-off"],
    cons: ["Ultrawide gets slightly soft at the edges in extreme low light", "Aggressive HDR sometimes flattens contrast"],
    summary: "The most versatile camera system in a smartphone. If you prioritize reliable point-and-shoot quality and unmatched video performance, this is the definitive choice.",
  },

  price: {
    currency: "INR",
    amount: null,
  },
};