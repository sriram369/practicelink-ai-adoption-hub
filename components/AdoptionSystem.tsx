export function AdoptionSystem() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-2 sm:px-8">
      <div className="paper-panel relative overflow-hidden p-6">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-clay via-peach to-gold" />
        <div className="flex flex-col justify-between gap-5 border-b border-line pb-5 sm:flex-row sm:items-start">
          <div>
            <p className="section-kicker">Adoption System</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Govern · Train · Measure
            </h2>
          </div>
          <div className="w-fit border border-line bg-paper px-3 py-2 text-right">
            <p className="text-2xl font-black text-clay">14</p>
            <p className="text-xs font-bold uppercase tracking-wider text-mutedInk">Departments</p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {[
            ["90%", "ChatGPT usage already exists", "High demand"],
            ["71%", "Unaware of governance policy", "Policy gap"],
            ["3 yr", "ROI model links adoption to value", "Measurement"]
          ].map(([metric, label, tag]) => (
            <div key={label} className="border border-line bg-card/70 p-4">
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-4xl font-semibold text-ink">{metric}</span>
                <span className="border border-peach/40 bg-peach/15 px-3 py-1 text-xs font-bold text-clay">
                  {tag}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-mutedInk">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Diagnose", "Govern", "Train", "Measure"].map((step, index) => (
            <div key={step} className="border-t-2 border-clay/50 pt-3">
              <span className="text-xs font-black text-clay">0{index + 1}</span>
              <p className="mt-1 text-sm font-bold text-ink">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
