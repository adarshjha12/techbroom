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

  status: "draft",

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
    title: "Main Camera Sample",
    image:
      "/images/smartphones/apple/iphone-18-pro/camera/main.webp",
    category: "main",
    metadata: {
      focalLength: "24mm",
      aperture: "f/1.48",
      shutterSpeed: "1/100s",
      iso: "ISO 80",
    },
  },
  {
    title: "Ultra Wide Camera Sample",
    image:
      "/images/smartphones/apple/iphone-18-pro/camera/ultrawide.webp",
    category: "ultrawide",
    metadata: {
      focalLength: "13mm",
      aperture: "f/2.2",
    },
  },
  {
    title: "Telephoto Camera Sample",
    image:
      "/images/smartphones/apple/iphone-18-pro/camera/telephoto.webp",
    category: "telephoto",
    metadata: {
      focalLength: "100mm",
      aperture: "f/2.8",
    },
  },
  {
    title: "Front Camera Sample",
    image:
      "/images/smartphones/apple/iphone-18-pro/camera/selfie.webp",
    category: "selfie",
  },
],

  price: {
    currency: "INR",
    amount: null,
  },
};