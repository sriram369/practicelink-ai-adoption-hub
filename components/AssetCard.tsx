"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, GitBranch, ShieldCheck, Sparkles, TrendingUp, X } from "lucide-react";
import { useState } from "react";

type AssetCardProps = {
  title: string;
  tag: string;
  text: string;
  button: string;
  kind: "maturity" | "aria" | "roi" | "learning";
  href?: string;
};

const icons = {
  maturity: GitBranch,
  aria: ShieldCheck,
  roi: TrendingUp,
  learning: Sparkles
};

export function AssetCard({ title, tag, text, button, kind, href }: AssetCardProps) {
  const [open, setOpen] = useState(false);
  const Icon = icons[kind];

  const action =
    kind === "roi" && href ? (
      <a
        className="focus-ring inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm font-bold text-card transition hover:-translate-y-0.5"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {button}
        <ExternalLink aria-hidden="true" size={16} />
      </a>
    ) : kind === "learning" ? (
      <Link
        className="focus-ring inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm font-bold text-card transition hover:-translate-y-0.5"
        href="/learning-path"
      >
        {button}
        <ExternalLink aria-hidden="true" size={16} />
      </Link>
    ) : (
      <button
        className="focus-ring inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm font-bold text-card transition hover:-translate-y-0.5"
        type="button"
        onClick={() => setOpen(true)}
      >
        {button}
      </button>
    );

  return (
    <>
      <article className="paper-panel flex min-h-[360px] flex-col justify-between p-6">
        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="border border-peach/40 bg-peach/15 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-clay">
              {tag}
            </span>
            <span className="grid h-11 w-11 place-items-center border border-line bg-paper text-clay">
              <Icon aria-hidden="true" size={21} />
            </span>
          </div>
          <h3 className="font-display text-3xl font-semibold leading-tight text-ink">{title}</h3>
          <p className="mt-4 text-base leading-7 text-mutedInk">{text}</p>
          {kind === "aria" ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {["evaluate [tool name]", "tools", "classify"].map((chip) => (
                <span key={chip} className="border border-line bg-paper px-3 py-1 text-xs font-bold text-ink">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-7">{action}</div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/35 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="paper-panel relative max-h-[86vh] w-full max-w-3xl overflow-auto p-6 sm:p-8">
            <button
              type="button"
              aria-label="Close asset preview"
              className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center border border-line bg-card text-ink"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" size={18} />
            </button>
            <p className="section-kicker">{kind === "aria" ? "Slack governance demo" : `${tag} snapshot`}</p>
            <h3 className="mt-2 pr-12 font-display text-4xl font-semibold text-ink">{title}</h3>
            {kind === "maturity" ? <MaturityVisual /> : <AriaFlow />}
          </div>
        </div>
      ) : null}
    </>
  );
}

function MaturityVisual() {
  return (
    <div className="mt-7">
      <div className="relative aspect-[1434/818] overflow-hidden border border-line bg-ink shadow-lift">
        <Image
          src="/assets/ai-maturity-map.png"
          alt="PracticeLink AI Maturity Map showing foundation level versus adoption level by department"
          fill
          sizes="(min-width: 768px) 768px, 92vw"
          className="object-contain"
        />
      </div>
      <p className="mt-5 text-base leading-7 text-mutedInk">
        The map separates foundation level from adoption level across departments. It makes clear where
        PracticeLink should prioritize training, governance support, and workflow readiness before scaling
        higher-risk AI usage.
      </p>
    </div>
  );
}

function AriaFlow() {
  const steps = [
    ["Employee asks ARIA in Slack", "The user starts with a tool question, content classification request, or approved-tool lookup."],
    ["ARIA checks governance rules", "The assistant compares the request against tool registries, data sensitivity rules, and escalation criteria."],
    ["ARIA returns a safe next step", "Employees receive an approved, experimental, blocked, or escalation recommendation inside the workflow."],
    ["AI Champion review", "Higher-risk requests can be routed to a governance owner or AI Champion before sensitive data is processed."]
  ];

  return (
    <div className="mt-7 grid gap-5">
      <p className="border-l-2 border-clay bg-paper/70 p-4 text-base leading-7 text-mutedInk">
        ARIA is a Slack-based governance assistant designed to make AI policy usable in the moment
        employees need it. Instead of asking staff to search through policy documents, ARIA answers
        practical questions like whether a tool is approved, whether content is safe to send to AI,
        and when an employee should escalate to an AI Champion or governance owner.
      </p>
      {steps.map(([title, text], index) => (
        <div key={title} className="grid gap-4 border border-line bg-card/70 p-4 sm:grid-cols-[56px_1fr]">
          <div className="grid h-12 w-12 place-items-center border border-clay/30 bg-peach/15 font-display text-2xl font-semibold text-clay">
            {index + 1}
          </div>
          <div>
            <h4 className="text-lg font-bold text-ink">{title}</h4>
            <p className="mt-1 text-sm leading-6 text-mutedInk">{text}</p>
          </div>
        </div>
      ))}
      <div className="border border-dashed border-clay/40 bg-peach/10 p-4 text-sm font-semibold leading-6 text-clay">
        GitHub repository and Streamlit demo links will be added here once the final URLs are confirmed.
      </div>
    </div>
  );
}
