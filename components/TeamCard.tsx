import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="border border-line bg-card/72 p-5 shadow-soft">
      <h3 className="font-display text-2xl font-semibold text-ink">{member.name}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-mutedInk">{member.contribution}</p>
    </article>
  );
}
