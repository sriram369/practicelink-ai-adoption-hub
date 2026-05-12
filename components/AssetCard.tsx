"use client";

import Link from "next/link";
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
            <p className="section-kicker">{tag} snapshot</p>
            <h3 className="mt-2 pr-12 font-display text-4xl font-semibold text-ink">{title}</h3>
            {kind === "maturity" ? <MaturityVisual /> : <AriaFlow />}
          </div>
        </div>
      ) : null}
    </>
  );
}

function MaturityVisual() {
  const departments = [
    ["Marketing", 74, 68],
    ["Sales / Client Relations", 67, 72],
    ["Data / Analytics", 82, 63],
    ["Physician / Provider Services", 46, 18],
    ["Finance", 59, 42],
    ["IT / Engineering", 84, 78]
  ];

  return (
    <div className="mt-7">
      <div className="relative h-[360px] border border-line bg-paper/80 p-5">
        <div className="absolute bottom-7 left-10 right-5 border-t border-line" />
        <div className="absolute bottom-7 left-10 top-5 border-l border-line" />
        <span className="absolute bottom-2 left-10 text-xs font-bold uppercase tracking-wider text-mutedInk">Foundation</span>
        <span className="absolute left-2 top-5 origin-left -rotate-90 text-xs font-bold uppercase tracking-wider text-mutedInk">Adoption</span>
        {departments.map(([name, x, y]) => (
          <div
            key={name as string}
            className="absolute -translate-x-1/2 -translate-y-1/2 border border-clay/30 bg-card px-3 py-2 text-xs font-bold text-ink shadow-soft"
            style={{ left: `${x}%`, bottom: `${Number(y) * 0.82 + 8}%` }}
          >
            {name}
          </div>
        ))}
      </div>
      <p className="mt-5 text-base leading-7 text-mutedInk">
        The map separates AI foundation readiness from actual adoption. Departments with high appetite
        and low usage become training priorities; departments with high adoption and weak governance
        become policy and risk priorities.
      </p>
    </div>
  );
}

function AriaFlow() {
  const steps = [
    ["Employee asks ARIA", "Tool, prompt, or content request starts in Slack."],
    ["Registry check", "ARIA compares the request against approved tools and sensitivity rules."],
    ["Classification", "Content is labeled by risk before it enters an AI workflow."],
    ["Decision", "Approved, experimental, blocked, or escalated to governance owner."]
  ];

  return (
    <div className="mt-7 grid gap-4">
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
    </div>
  );
}
