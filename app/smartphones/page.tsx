import Link from "next/link";
import type { Metadata } from "next";

import { getAllContent } from "@/lib/content/getContent";
import Image from "next/image";

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
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            TechBroom · Smartphones
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Smartphones, explained clearly.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Explore detailed smartphone specifications, features,
            comparisons, real-world analysis, and buying information
            without the unnecessary noise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#latest"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Explore smartphones
            </a>

            <a
              href="#coverage"
              className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              What we cover
            </a>
          </div>
        </div>
      </section>

      {/* Smartphones */}
      <section id="latest" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950">
              Latest smartphones
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600">
              Browse the smartphone guides currently available on
              TechBroom.
            </p>
          </div>

          {smartphones.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-14 text-center">
              <h3 className="text-xl font-semibold text-neutral-900">
                Smartphone guides are coming soon.
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-neutral-500">
                We&apos;re preparing detailed smartphone pages covering
                specifications, cameras, performance, software,
                comparisons, and buying decisions.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {smartphones.map((phone) => (
                <article
                  key={phone.slug}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {phone.images.hero ? (
                    <div className="flex h-56 items-center justify-center border-b border-neutral-200 bg-neutral-50 p-6">
                      <Image
                      width={800}
                      height={800}  
                        src={phone.images.hero}
                        alt={phone.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center border-b border-neutral-200 bg-neutral-50">
                      <span className="text-sm font-medium text-neutral-400">
                        Image coming soon
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      {phone.brand}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950">
                      {phone.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {phone.shortDescription}
                    </p>

                    <Link
                      href={`/${phone.slug}`}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-neutral-950 transition group-hover:gap-2"
                    >
                      Read full guide
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coverage */}
      <section
        id="coverage"
        className="border-y border-neutral-200 bg-neutral-50 px-6 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Coverage
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950">
              More than just specifications.
            </h2>

            <p className="mt-4 leading-7 text-neutral-600">
              TechBroom brings together the information people actually
              need when researching a smartphone, from hardware
              specifications to practical buying considerations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Specifications
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Displays, processors, cameras, batteries, connectivity,
                storage, and other important hardware details.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Real-world analysis
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Look beyond specification sheets with practical
                performance, camera, battery, and software analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Comparisons
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Understand how smartphones differ across important
                features and use cases.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Camera &amp; display
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Explore imaging hardware, displays, and the features
                that affect everyday use.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Software &amp; updates
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Learn about software experience and long-term support
                considerations.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                Buying information
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Understand reasons to consider a phone, reasons to skip
                it, and who it may suit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
            Smartphone guides on TechBroom
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-600">
            <p>
              Choosing a smartphone involves more than comparing
              processor names, camera megapixels, or display refresh
              rates. Different phones are designed around different
              priorities, including performance, photography, battery
              life, software support, gaming, and everyday usability.
            </p>

            <p>
              TechBroom&apos;s smartphone section brings these details
              together in one place. Individual phone guides can combine
              specifications with comparisons, practical analysis, and
              buying considerations.
            </p>

            <p>
              As the smartphone library grows, this section will make it
              easier to discover individual devices and compare them
              across important features and use cases.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
