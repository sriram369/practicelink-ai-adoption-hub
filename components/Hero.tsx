import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex border border-line bg-card/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-clay shadow-soft">
            IT Consulting · Johns Hopkins Carey Business School
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.96] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            PracticeLink AI Adoption Hub
          </h1>
          <p className="mt-7 max-w-2xl text-2xl font-medium leading-snug text-ink/85">
            From scattered AI usage to governed, department-level adoption.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-mutedInk">
            PracticeLink already has AI adoption. The challenge is alignment, governance,
            training, and measurable ROI.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#assets"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-bold text-card shadow-lift transition hover:-translate-y-0.5"
            >
              View Project Assets
              <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
