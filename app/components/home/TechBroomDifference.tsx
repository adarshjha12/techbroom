import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Eye,
  MessageCircle,
  Scale,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    number: "01",
    title: "Numbers that mean something",
    description:
      "Specs are useful only when you know how they affect the experience. We turn technical numbers into useful context.",
  },
  {
    icon: Eye,
    number: "02",
    title: "See the difference",
    description:
      "Camera samples, displays, performance charts and product visuals make comparisons easier to understand.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Compare what matters",
    description:
      "Not every specification deserves equal weight. We focus on the things that actually affect your decision.",
  },
  {
    icon: MessageCircle,
    number: "04",
    title: "Real-world perspective",
    description:
      "Reviews, ownership experiences and practical observations help you understand what living with a product is like.",
  },
];

function TechBroomDifference() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              The TechBroom difference
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Technology is complicated.
              <br />
              Choosing shouldn&apos;t be.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-neutral-400 md:text-xl">
              We bring specifications, comparisons, real-world experiences and
              visual explanations together so you can make sense of technology
              before spending your money.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              How TechBroom works
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-20 grid border-t border-neutral-800 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className={`group border-b border-neutral-800 py-10 md:p-10 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex h-11 w-11 items-center justify-center border border-neutral-800">
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-neutral-300"
                    />
                  </div>

                  <span className="text-xs font-medium tracking-[0.2em] text-neutral-600">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-neutral-800 pt-10">
          <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-neutral-300 md:text-4xl">
            Less noise.
            <span className="text-neutral-600"> More understanding.</span>
            <br />
            Better technology decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechBroomDifference;