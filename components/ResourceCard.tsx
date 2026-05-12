import type { Resource } from "@/data/resources";
import { ExternalLink } from "lucide-react";

export function ResourceCard({ resource }: { resource: Resource }) {
  const content = (
    <article className="border border-line bg-card/70 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="border border-line bg-paper px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-clay">
          {resource.type}
        </span>
        <span className="border border-peach/40 bg-peach/15 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-ink">
          {resource.difficulty}
        </span>
      </div>
      <h4 className="mt-3 flex items-start justify-between gap-3 text-base font-bold text-ink">
        <span>{resource.name}</span>
        {resource.href ? <ExternalLink aria-hidden="true" className="mt-0.5 shrink-0 text-clay" size={16} /> : null}
      </h4>
      <p className="mt-2 text-sm leading-6 text-mutedInk">{resource.suggestedUse}</p>
    </article>
  );

  if (!resource.href) {
    return content;
  }

  return (
    <a
      className="focus-ring block transition hover:-translate-y-0.5 hover:shadow-soft"
      href={resource.href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
