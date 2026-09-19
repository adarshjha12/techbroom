import { notFound } from "next/navigation";

import { getContent } from "@/lib/content/getContent";
import SmartphonePage from "../components/content/smartphone/SmartphonePage";

type ContentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
      // We'll build this later.
      notFound();

    case "ai":
      // We'll build this later.
      notFound();

    case "software":
      // We'll build this later.
      notFound();

    default:
      notFound();
  }
}