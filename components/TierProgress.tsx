type TierProgressProps = {
  recommendedTier: string;
};

const tiers = [
  ["Tier 1", "AI Foundations"],
  ["Tier 2", "Department Workflows"],
  ["Tier 3", "AI Champions"]
];

export function TierProgress({ recommendedTier }: TierProgressProps) {
  const activeIndex = recommendedTier.includes("Tier 3") ? 2 : recommendedTier.includes("Tier 2 -") ? 1 : 0;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {tiers.map(([tier, label], index) => {
        const active = index <= activeIndex || (recommendedTier.includes("Tier 1 + Tier 2") && index <= 1);

        return (
          <div
            key={tier}
            className={`border p-4 transition ${
              active ? "border-clay/45 bg-peach/18 shadow-soft" : "border-line bg-card/60"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-[0.14em] text-clay">{tier}</p>
            <p className="mt-2 font-display text-xl font-semibold text-ink">{label}</p>
          </div>
        );
      })}
    </div>
  );
}
