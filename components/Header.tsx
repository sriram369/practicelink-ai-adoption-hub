"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/86 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-5 py-3 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="focus-ring group flex min-w-0 items-center gap-4 rounded-sm">
          <span className="relative h-10 w-36 shrink-0 sm:h-11 sm:w-40">
            <Image
              src="/assets/practicelink-logo.svg"
              alt="PracticeLink"
              fill
              priority
              sizes="160px"
              className="object-contain object-left"
            />
          </span>
          <span className="hidden h-9 w-px bg-line sm:block" aria-hidden="true" />
          <span className="hidden min-w-0 text-sm font-bold leading-5 text-ink sm:block">
            AI Adoption Hub
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 col-span-2 flex items-center gap-5 overflow-x-auto border-t border-line/70 pt-3 text-sm font-semibold text-mutedInk lg:order-none lg:col-span-1 lg:justify-center lg:gap-8 lg:overflow-visible lg:border-t-0 lg:pt-0"
        >
          <Link
            className={`focus-ring rounded-sm transition hover:text-clay ${pathname === "/" ? "text-ink" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link className="focus-ring rounded-sm transition hover:text-clay" href="/#assets">
            Project Assets
          </Link>
          <Link
            className={`focus-ring rounded-sm transition hover:text-clay ${pathname === "/learning-path" ? "text-clay" : ""}`}
            href="/learning-path"
          >
            Learning Path Builder
          </Link>
          <Link className="focus-ring rounded-sm transition hover:text-clay" href="/#team">
            Team
          </Link>
        </nav>

        <Link
          href="/learning-path"
          className="focus-ring justify-self-end inline-flex items-center gap-2 rounded-sm border border-clay/30 bg-ink px-4 py-2 text-sm font-semibold text-card shadow-lift transition hover:-translate-y-0.5"
        >
          Learning Path
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </header>
  );
}
