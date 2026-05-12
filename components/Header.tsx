"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="focus-ring group flex items-center gap-3 rounded-sm">
          <span className="grid h-10 w-10 place-items-center border border-clay/30 bg-card text-sm font-black text-clay shadow-soft">
            PL
          </span>
          <span className="hidden font-display text-xl font-semibold tracking-normal text-ink sm:block">
            PracticeLink AI Adoption Hub
          </span>
          <span className="font-display text-lg font-semibold tracking-normal text-ink sm:hidden">
            PracticeLink AI
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-mutedInk md:flex">
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
          className="focus-ring inline-flex items-center gap-2 rounded-sm border border-clay/30 bg-ink px-4 py-2 text-sm font-semibold text-card shadow-lift transition hover:-translate-y-0.5"
        >
          Builder
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </header>
  );
}
