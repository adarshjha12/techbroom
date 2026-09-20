import Link from "next/link";
import type { Metadata } from "next";

import { getAllContent } from "@/lib/content/getContent";

export const metadata: Metadata = {
  title: "Smartphones",
  description:
    "Explore smartphone specifications, features, comparisons, reviews, and buying information on TechBroom.",
  alternates: {
    canonical: "https://techbroom.com/smartphones",
  },
  openGraph: {
    title: "Smartphones | TechBroom",
    description:
      "Explore smartphone specifications, features, comparisons, reviews, and buying information on TechBroom.",
    url: "https://techbroom.com/smartphones",
    siteName: "TechBroom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartphones | TechBroom",
    description:
      "Explore smartphone specifications, features, comparisons, reviews, and buying information on TechBroom.",
  },
};


export default function SmartphonesPage() {
  const smartphones = getAllContent().filter(
    (content) =>
      content.type === "smartphone" &&
      content.status === "published",
  );

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
            Category
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Smartphones
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-600">
            Explore smartphone specifications, features, comparisons,
            reviews, and buying information on TechBroom.
          </p>
        </div>

        {smartphones.length === 0 ? (
          <p className="text-neutral-500">
            No smartphones published yet.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {smartphones.map((phone) => (
              <article
                key={phone.slug}
                className="rounded-2xl border border-neutral-200 p-6"
              >
                <p className="text-sm font-medium text-neutral-500">
                  {phone.brand}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-neutral-900">
                  {phone.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {phone.shortDescription}
                </p>

                <Link
                  href={`/${phone.slug}`}
                  className="mt-5 inline-block text-sm font-semibold text-neutral-900 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}