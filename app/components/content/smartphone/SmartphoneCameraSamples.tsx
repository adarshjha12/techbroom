import Image from "next/image";
import type { SmartphoneCameraSample } from "@/lib/content/types";

type SmartphoneCameraSamplesProps = {
  samples: SmartphoneCameraSample[];
};

const categoryLabels: Record<
  SmartphoneCameraSample["category"],
  string
> = {
  main: "Main Camera",
  ultrawide: "Ultra Wide",
  telephoto: "Telephoto",
  portrait: "Portrait",
  night: "Night",
  selfie: "Front Camera",
};

export default function SmartphoneCameraSamples({
  samples,
}: SmartphoneCameraSamplesProps) {
  if (samples.length === 0) {
    return null;
  }

  return (
    <section
      id="camera-samples"
      className="border-t border-neutral-200 bg-neutral-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Camera Samples
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            See how the cameras perform
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Real-world photography samples captured with the different
            cameras on the iPhone 18 Pro.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {samples.map((sample) => {
            const metadata = sample.metadata;

            return (
              <article
                key={`${sample.category}-${sample.title}`}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-neutral-100">
                  <Image
                    src={sample.image}
                    alt={`${sample.title} - iPhone 18 Pro`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {categoryLabels[sample.category]}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-neutral-900">
                    {sample.title}
                  </h3>

                  {metadata && (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500">
                      {metadata.focalLength && (
                        <span>{metadata.focalLength}</span>
                      )}

                      {metadata.aperture && (
                        <span>{metadata.aperture}</span>
                      )}

                      {metadata.shutterSpeed && (
                        <span>{metadata.shutterSpeed}</span>
                      )}

                      {metadata.iso && <span>{metadata.iso}</span>}
                    </div>
                  )}

                  {sample.source && (
                    <p className="mt-5 text-xs text-neutral-400">
                      Photo by {sample.source.name}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}