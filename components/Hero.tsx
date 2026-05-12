import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-24">
        <div>
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

        <div className="paper-panel relative min-h-[430px] overflow-hidden p-6">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-clay via-peach to-gold" />
          <div className="flex items-start justify-between border-b border-line pb-5">
            <div>
              <p className="section-kicker">Adoption System</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Govern · Train · Measure</h2>
            </div>
            <div className="border border-line bg-paper px-3 py-2 text-right">
              <p className="text-2xl font-black text-clay">14</p>
              <p className="text-xs font-bold uppercase tracking-wider text-mutedInk">Departments</p>
            </div>
          </div>

          <div className="mt-7 grid gap-4">
            {[
              ["90%", "ChatGPT usage already exists", "High demand"],
              ["71%", "Unaware of governance policy", "Policy gap"],
              ["3 yr", "ROI model links adoption to value", "Measurement"]
            ].map(([metric, label, tag]) => (
              <div key={label} className="grid grid-cols-[90px_1fr_auto] items-center gap-4 border border-line bg-card/70 p-4">
                <span className="font-display text-4xl font-semibold text-ink">{metric}</span>
                <span className="text-sm font-semibold leading-6 text-mutedInk">{label}</span>
                <span className="hidden border border-peach/40 bg-peach/15 px-3 py-1 text-xs font-bold text-clay sm:inline">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-4 gap-3">
            {["Diagnose", "Govern", "Train", "Measure"].map((step, index) => (
              <div key={step} className="border-t-2 border-clay/50 pt-3">
                <span className="text-xs font-black text-clay">0{index + 1}</span>
                <p className="mt-1 text-sm font-bold text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
