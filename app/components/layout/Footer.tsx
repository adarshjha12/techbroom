import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-neutral-900"
            >
              TechBroom
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
              Technology explained clearly. Products compared honestly.
              Decisions made easier.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2">
              <a
                href="#"
                aria-label="TechBroom on X"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              >
                <FaXTwitter size={16} strokeWidth={1.7} />
              </a>

              <a
                href="#"
                aria-label="TechBroom on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              >
                <FaInstagram size={17} strokeWidth={1.7} />
              </a>

              <a
                href="#"
                aria-label="TechBroom on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              >
                <FaGithub size={17} strokeWidth={1.7} />
              </a>

              <a
                href="mailto:hello@techbroom.com"
                aria-label="Email TechBroom"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              >
                <Mail size={17} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-neutral-900">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-neutral-500">
              <li>
                <Link href="/smartphones" className="hover:text-neutral-900">
                  Smartphones
                </Link>
              </li>

              <li>
                <Link href="/ai" className="hover:text-neutral-900">
                  AI
                </Link>
              </li>

              <li>
                <Link href="/software" className="hover:text-neutral-900">
                  Software
                </Link>
              </li>

              <li>
                <Link href="/ev" className="hover:text-neutral-900">
                  EV
                </Link>
              </li>

              <li>
                <Link href="/comparisons" className="hover:text-neutral-900">
                  Comparisons
                </Link>
              </li>

              <li>
                <Link href="/guides" className="hover:text-neutral-900">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-neutral-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-neutral-500">
              <li>
                <Link href="/about" className="hover:text-neutral-900">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-neutral-900">
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/editorial-policy"
                  className="hover:text-neutral-900"
                >
                  Editorial Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-neutral-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-neutral-500">
              <li>
                <Link href="/privacy" className="hover:text-neutral-900">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-neutral-900">
                  Terms
                </Link>
              </li>

              <li>
                <Link href="/disclaimer" className="hover:text-neutral-900">
                  Disclaimer
                </Link>
              </li>

              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="hover:text-neutral-900"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} TechBroom. All rights reserved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-neutral-900"
          >
            Back to top
            <ArrowUpRight size={13} strokeWidth={1.7} />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;