import type { SmartphoneAssessment } from "@/lib/content/types";

export const iphone18ProAssessment: SmartphoneAssessment = {
  overall: 8.8,

  summary:
    "A high-end flagship with excellent performance, a strong camera system, a premium display and long-term software support. Its high price means the experience is most compelling for buyers who will actually use its strengths.",

  departments: [
    {
      name: "Display",
      score: 9.2,
      summary:
        "A high-quality OLED display with a smooth 120Hz refresh rate and the characteristics expected from a premium flagship.",
    },
    {
      name: "Performance",
      score: 9.5,
      summary:
        "Excellent performance for demanding apps, gaming, multitasking and long-term use.",
    },
    {
      name: "Cameras",
      score: 9.1,
      summary:
        "A versatile camera system with strong image quality, useful focal lengths and particularly capable video performance.",
    },
    {
      name: "Battery",
      score: 8.2,
      summary:
        "Good overall battery capability, although charging and endurance are not necessarily the strongest reasons to choose this phone.",
    },
    {
      name: "Design & Build",
      score: 8.8,
      summary:
        "Premium materials, solid construction and flagship-level durability, with weight and physical size worth considering.",
    },
    {
      name: "Software",
      score: 9.0,
      summary:
        "A polished software experience with long-term support and a tightly integrated hardware and software ecosystem.",
    },
    {
      name: "Value",
      score: 7.8,
      summary:
        "The overall experience is strong, but the premium price makes value highly dependent on which features matter to the individual buyer.",
    },
  ],

  pros: [
    "Excellent overall performance",
    "Strong and versatile camera system",
    "High-quality 120Hz OLED display",
    "Premium build and materials",
    "Long-term software support",
  ],

  cons: [
    "Premium pricing",
    "Some advantages may matter mainly to specific users",
    "Battery and charging are not the strongest reasons to choose it",
    "Competitors may offer better value depending on priorities",
  ],
};