import type { SmartphoneBuyDecision } from "@/lib/content/types";

export const iphone18ProBuyDecision: SmartphoneBuyDecision = {
  summary:
    "Whether this phone is right for you depends on your priorities, budget, and how you use your phone.",

  reasonsToBuy: [
    "You prioritize a premium smartphone experience.",
    "You want strong performance for demanding everyday use.",
    "You value a high-end camera and display experience.",
  ],

  reasonsToSkip: [
    "You are looking for the lowest possible price.",
    "You prioritize maximum battery capacity above other features.",
    "You already own a phone that meets your needs comfortably.",
  ],

  bestFor: [
    "People who want a premium flagship experience",
    "Photography and video enthusiasts",
    "Users who keep their phones for several years",
  ],

  notFor: [
    "Budget-focused buyers",
    "Users who mainly need basic everyday features",
    "People upgrading without a meaningful improvement over their current phone",
  ],
};