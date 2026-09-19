"use client";

import Link from "next/link";
import { useEffect } from "react";
import { 
  Smartphone, 
  Sparkles, 
  Code2, 
  Car, 
  ArrowRightLeft, 
  BookOpen, 
  X, 
  Mail 
} from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { name: "Smartphones", href: "/smartphones", icon: Smartphone },
  { name: "AI", href: "/ai", icon: Sparkles },
  { name: "Software", href: "/software", icon: Code2 },
  { name: "EV", href: "/ev", icon: Car },
  { name: "Comparisons", href: "/comparisons", icon: ArrowRightLeft },
  { name: "Guides", href: "/guides", icon: BookOpen },
];

function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Prevent background scrolling while menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl md:hidden transition-all duration-300 ease-in-out"
    >
      {/* Top Header & Close Button */}
      <div className="flex items-center justify-end px-6 pt-6 pb-2">
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 active:scale-90"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex h-[calc(100vh-80px)] flex-col px-6 pb-10">
        
        {/* Navigation */}
        <nav className="mt-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-xl font-semibold tracking-tight text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900 active:scale-[0.97]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 transition-all group-hover:bg-white group-hover:text-black group-hover:shadow-sm">
                  <Icon size={24} strokeWidth={2} />
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={onClose}
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-neutral-900 py-4 text-base font-semibold text-white shadow-xl shadow-neutral-900/20 transition-all hover:bg-black active:scale-[0.98]"
          >
            <Mail size={20} className="transition-transform group-hover:scale-110" />
            Subscribe
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default MobileMenu;