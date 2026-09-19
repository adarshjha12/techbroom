import Link from "next/link";
import CameraLens from "../CameraLens";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
}

function Navbar({ menuOpen, onMenuToggle }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-100 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl text-neutral-900 font-bold tracking-tighter md:text-3xl"
          aria-label="TechBroom Home"
        >
          Techbr
          <CameraLens />
          <CameraLens />
          m
        </Link>

        {/* Desktop Navigation */}
<div className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
              <Link
            href="/smartphones"
            className="transition-colors hover:text-neutral-900"
          >
            Smartphones
          </Link>

          <Link
            href="/ai"
            className="transition-colors hover:text-neutral-900"
          >
            AI
          </Link>

          <Link
            href="/software"
            className="transition-colors hover:text-neutral-900"
          >
            Software
          </Link>

          <Link
            href="/ev"
            className="transition-colors hover:text-neutral-900"
          >
            EV
          </Link>

          <Link
            href="/comparisons"
            className="transition-colors hover:text-neutral-900"
          >
            Comparisons
          </Link>

          <Link
            href="/guides"
            className="transition-colors hover:text-neutral-900"
          >
            Guides
          </Link>
        </div>

        {/* Desktop Subscribe */}
        <button
          type="button"
          className="hidden rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 md:block"
        >
          Subscribe
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="relative flex h-10 w-10 items-center justify-center text-neutral-700 rounded-full transition-colors hover:bg-neutral-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;