import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="border border-line bg-card/70 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="border border-line bg-paper px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-clay">
          {resource.type}
        </span>
        <span className="border border-peach/40 bg-peach/15 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-ink">
          {resource.difficulty}
        </span>
      </div>
      <h4 className="mt-3 text-base font-bold text-ink">{resource.name}</h4>
      <p className="mt-2 text-sm leading-6 text-mutedInk">{resource.suggestedUse}</p>
    </article>
  );
}
