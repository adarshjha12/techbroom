import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbsProps = {
    items: {
        label: string;
        href?: string;
    }[];
};

export default function Breadcrumbs({
    items,
}: BreadcrumbsProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="mx-auto flex max-w-5xl items-center gap-2 px-6 pt-4  pb-4 text-sm"    >
            <Link
                href="/"
                aria-label="Home"
                className="text-neutral-500 transition hover:text-neutral-900"
            >
                <Home size={16} />
            </Link>

            {items.map((item) => (
                <div
                    key={`${item.label}-${item.href ?? "current"}`}
                    className="flex items-center gap-2"
                >
                    <ChevronRight
                        size={14}
                        className="text-neutral-400"
                    />

                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-neutral-500 transition hover:text-neutral-900"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span
                            aria-current="page"
                            className="font-medium text-neutral-900"
                        >
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}