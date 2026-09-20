import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getContent } from "@/lib/content/getContent";
import SmartphonePage from "../components/content/smartphone/SmartphonePage";

type ContentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContentPageProps): Promise<Metadata> {
  const { slug } = await params;

  const content = getContent(slug);

  if (!content) {
    return {};
  }

  return {
    title: content.name,
    description: content.description,

    alternates: {
      canonical: `https://techbroom.com/${content.slug}`,
    },

    openGraph: {
      title: content.name,
      description: content.description,
      url: `https://techbroom.com/${content.slug}`,
      siteName: "TechBroom",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: content.name,
      description: content.description,
    },
  };
}

export default async function ContentPage({
  params,
}: ContentPageProps) {
  const { slug } = await params;

  const content = getContent(slug);

  if (!content) {
    notFound();
  }

  switch (content.type) {
    case "smartphone":
      return <SmartphonePage content={content} />;

    case "ev":
      notFound();

    case "ai":
      notFound();

    case "software":
      notFound();

    default:
      notFound();
  }
}