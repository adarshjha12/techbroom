import type { SmartphoneContent } from "@/lib/content/types";
import Image from "next/image";

type SmartphoneHeroProps = {
  content: SmartphoneContent;
};

export default function SmartphoneHero({
  content,
}: SmartphoneHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        {/* Product information */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {content.brand}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            {content.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
            {content.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#camera"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Explore camera
            </a>

            <a
              href="#overview"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white"
            >
              See overview
            </a>
          </div>
        </div>

        {/* Product visual */}
        <div className="flex min-h-[420px] items-center justify-center">
          {content.images.hero ? (
            <Image
              src={content.images.hero}
              alt={content.name}
              className="max-h-[620px] w-auto object-contain"
            />
          ) : (
            <div className="flex h-[420px] w-[220px] items-center justify-center rounded-[3rem] border border-neutral-300 bg-white shadow-2xl">
              <span className="text-sm text-neutral-400">
                Product image
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}