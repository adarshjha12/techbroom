import Image from "next/image";
import type { ContentImage } from "@/lib/content/types";

type SmartphoneGalleryProps = {
  images: ContentImage[];
  galleryOverview: {
    heading: string;
    subheading: string;
  } | undefined;
};

export default function SmartphoneGallery({
  images,
  galleryOverview,
}: SmartphoneGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-neutral-200 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Product Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {galleryOverview?.heading || "Take a closer look"}
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            {galleryOverview?.subheading || "Explore the design, display and camera hardware from different angles."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item) => (
            <article
              key={`${item.title}-${item.image}`}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>

                {item.source && (
                  <p className="mt-2 text-xs text-neutral-400">
                    Photo by {item.source.name}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}