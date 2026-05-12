export function FindingCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-line px-6 py-4 first:border-l-0">
      <p className="font-display text-4xl font-semibold text-ink">{value}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-mutedInk">{label}</p>
    </div>
  );
}
