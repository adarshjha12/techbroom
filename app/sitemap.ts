import type { MetadataRoute } from "next";

import { getAllContent } from "@/lib/content/getContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const content = getAllContent();

  const contentUrls = content
    .filter((item) => item.status === "published")
    .map((item) => ({
      url: `https://techbroom.com/${item.slug}`,
      lastModified: item.updatedAt || item.publishedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: "https://techbroom.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://techbroom.com/smartphones",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...contentUrls,
  ];
}