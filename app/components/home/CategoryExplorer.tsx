import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Car,
  Smartphone,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Smartphones",
    description: "Phones, cameras, displays, performance & more.",
    href: "/smartphones",
    icon: Smartphone,
    number: "01",
  },
  {
    title: "AI & Tech",
    description: "AI tools, trends, products and what's actually useful.",
    href: "/ai",
    icon: Bot,
    number: "02",
  },
  {
    title: "Software",
    description: "Apps, tools and software worth knowing.",
    href: "/software",
    icon: Sparkles,
    number: "03",
  },
  {
    title: "Electric Vehicles",
    description: "EVs, range, charging, performance and ownership.",
    href: "/ev",
    icon: Car,
    number: "04",
  },
];

function CategoryExplorer() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Explore TechBroom
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-5xl">
            What are you
            <br />
            looking for?
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-neutral-500">
            Explore the technology that interests you. Dive deep, compare
            your options, and find what actually fits your needs.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid border-l border-t border-neutral-200 sm:grid-cols-2">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative border-b border-r border-neutral-200 p-7 transition-colors duration-300 hover:bg-neutral-50 sm:p-9"
              >
                {/* Number */}
                <span className="text-xs font-medium tracking-widest text-neutral-400">
                  {category.number}
                </span>

                {/* Icon */}
                <div className="mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
                      {category.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
                      {category.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    strokeWidth={1.6}
                    className="shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-950"
                  />
                </div>
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default CategoryExplorer;