import type { SmartphoneContent } from "@/lib/content/types";
import { iphone18ProSpecs } from "./specs";
import { iphone18ProReviews } from "./reviews";
import { iphone18ProComparisons } from "./comparisons";
import { iphone18ProBuyDecision } from "./buyDecision";
import { iphone18ProAssessment } from "./assessment";

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
assessment: iphone18ProAssessment,
  shortDescription:
    "A detailed look at the iPhone 18 Pro's display, performance, cameras, battery, design and the trade-offs that matter when deciding whether it is right for you.",

  description:
    "An independent breakdown of the iPhone 18 Pro, covering its specifications, real-world strengths, limitations, comparisons and who it makes the most sense for.",

  status: "published",

  images: {
    hero: "https://images.moneycontrol.com/static-mcnews/2026/06/20260602050725_iPhone-18-Pro-Max.png",

    hero2:
      "https://www.macworld.com/wp-content/uploads/2026/08/3212438-0-81154700-1787310034-iPhone-18-Pro-colors-mockup-1.jpg?quality=50&strip=all",

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

  specsOverview: {
    heading: "Specifications: What the Numbers Tell You",

    subheading:
      "A breakdown of the iPhone 18 Pro's key hardware and specifications, with context to help you understand what they mean in everyday use.",
  },

  galleryOverview: {
    heading: "Design and Hardware: A Closer Look",

    subheading:
      "A visual look at the iPhone 18 Pro's design, materials, camera system and physical details.",
  },

  reviewsOverview: {
    heading: "What Owners Say",

    subheading:
      "Real-world feedback from users, including the things owners appreciate and the issues or compromises they have encountered.",
  },

  comparisonsOverview: {
    heading: "How It Compares",

    subheading:
      "A side-by-side look at how the iPhone 18 Pro compares with relevant alternatives across performance, cameras, display, features and overall value.",
  },

  buyDecisionOverview: {
    heading: "Is It Right for You?",

    subheading:
      "A decision-focused breakdown of who is likely to benefit from the iPhone 18 Pro, who may want to consider alternatives, and which priorities should guide the decision.",
  },

  cameraSamplesOverview: {
    heading: "Camera Samples: See the Results",

    subheading:
      "Sample images across different cameras and shooting conditions, giving you a closer look at image quality beyond the specifications.",
  },

  cameraVerdictOverview: {
    heading: "Camera Analysis: Strengths and Trade-offs",

    subheading:
      "An evidence-based look at the camera system's strengths, limitations and real-world behavior across different shooting situations.",
  },
  cameraSamples: [
    {
      title: "Main Camera",
      credit: "Austin Mann",
      creditUrl: "https://www.austinmann.com",
      cameraScore: 9.6,
      thoughts:
        "Exceptional dynamic range and color reproduction. The sensor-shift stabilization helps keep handheld shots sharp in challenging light.",
      image:
        "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_3543_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "main",
      metadata: {
        focalLength: "24mm",
        aperture: "f/1.48",
        shutterSpeed: "1/100s",
        iso: "ISO 80",
      },
    },
    {
      title: "Portrait",
      image:
        "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_4416_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "portrait",
      thoughts:
        "Portrait separation is strong, with natural-looking background blur and convincing subject edges.",
      cameraScore: 9.4,
      metadata: {
        focalLength: "48mm",
        aperture: "f/2.2",
      },
    },
    {
      title: "Telephoto 5x",
      image:
        "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_4782_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "telephoto",
      thoughts:
        "The 5x telephoto lens provides strong optical reach with good detail retention and controlled noise.",
      cameraScore: 9.2,
      metadata: {
        focalLength: "120mm",
        aperture: "f/2.8",
      },
    },
    {
      title: "Ultrawide",
      image:
        "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_2572_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "ultrawide",
      thoughts:
        "The ultrawide camera provides a wide field of view while maintaining good correction of edge distortion.",
      cameraScore: 8.9,
      metadata: {
        focalLength: "13mm",
        aperture: "f/2.2",
      },
    },
    {
      title: "Night Mode",
      image:
        "https://www.austinmann.com/content/trek/iphone-18-pro-camera-review-dunton/images/IMG_0273_2560.jpg?dpl=dpl_9Y1LNq4YPbpUz6kAgVFh5k57oan1",
      category: "night",
      thoughts:
        "Night processing preserves the atmosphere of darker scenes while lifting enough shadow detail to retain useful information.",
      cameraScore: 9.5,
      metadata: {
        focalLength: "24mm",
        aperture: "f/1.48",
        shutterSpeed: "2.0s",
      },
    },
  ],

  cameraVerdict: {
     heading: "Camera: where the hardware matters — and where it doesn't",
    subheading:
      "A breakdown of the camera system, focal lengths and hardware so you can understand what each camera adds to the experience.",

    pros: [
      "Strong video stabilization",
      "Consistent results across the camera system",
      "Natural-looking portrait rendering",
    ],

    cons: [
      "Ultrawide images can lose edge detail in very low light",
      "HDR processing can sometimes reduce perceived contrast",
    ],

    summary:
      "The camera system combines strong image quality, versatile focal lengths and capable video recording. Its advantages are most relevant to people who regularly use multiple cameras or place a high value on reliable point-and-shoot and video performance.",
  },

  price: {
    currency: "INR",
    amount: null,
  },
};