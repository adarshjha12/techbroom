import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Gamepad2,
  BatteryCharging,
  Wallet,
} from "lucide-react";

const guides = [
  {
    icon: Wallet,
    category: "Smartphones",
    title: "Best phones under ₹30,000",
    description:
      "Find the phones that actually make sense for your money.",
    href: "/guides/best-phones-under-30000",
  },
  {
    icon: Camera,
    category: "Cameras",
    title: "Best camera phones",
    description:
      "Compare cameras beyond megapixels and marketing numbers.",
    href: "/guides/best-camera-phones",
  },
  {
    icon: Gamepad2,
    category: "Performance",
    title: "Best phones for gaming",
    description:
      "Performance, thermals, battery life and sustained gaming.",
    href: "/guides/best-gaming-phones",
  },
  {
    icon: BatteryCharging,
    category: "Battery",
    title: "Phones with the best battery life",
    description:
      "For people who want to stop worrying about charging.",
    href: "/guides/best-battery-phones",
  },
];

function BuyingGuides() {
  return (
    <section className="bg-neutral-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Buying guides
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Know what you need.
            <br />
            We’ll help you choose.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl">
            Practical guides built around real buying decisions — not endless
            lists of specifications.
          </p>
        </div>

        {/* Guides */}
        <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-white p-8 transition-colors duration-300 hover:bg-neutral-100 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-8 flex h-12 w-12 items-center justify-center border border-neutral-200 bg-neutral-50">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="text-neutral-800"
                      />
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                      {guide.category}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                      {guide.title}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-7 text-neutral-500">
                      {guide.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={22}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/guides"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            Explore all buying guides
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BuyingGuides;