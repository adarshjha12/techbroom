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
    hero: "",
    gallery: [],
  },

  price: {
    currency: "INR",
    amount: null,
  },
};