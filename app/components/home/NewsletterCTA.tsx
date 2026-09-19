import { ArrowRight, Mail } from "lucide-react";

function NewsletterCTA() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="border border-neutral-200 px-6 py-14 md:px-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-neutral-200 bg-neutral-50">
              <Mail
                size={21}
                strokeWidth={1.7}
                className="text-neutral-800"
              />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Stay informed
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
              Make your next tech decision with confidence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
              Get useful comparisons, buying guides and technology insights
              without the unnecessary noise.
            </p>

            <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="h-12 flex-1 border border-neutral-300 bg-white px-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
              />

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-neutral-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Subscribe
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-4 text-xs text-neutral-400">
              No spam. Just useful technology content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterCTA;