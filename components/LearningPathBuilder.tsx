"use client";

import { RotateCcw, ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { getExternalResources, practiceLinkResources } from "@/data/resources";
import {
  buildLearningPath,
  dataSensitivities,
  defaultLearningPathInput,
  departments,
  skillLevels,
  tasks,
  type DataSensitivity,
  type Department,
  type LearningPathInput,
  type SkillLevel,
  type Task
} from "@/lib/learningPathLogic";
import { ResourceCard } from "@/components/ResourceCard";
import { TierProgress } from "@/components/TierProgress";

export function LearningPathBuilder() {
  const [input, setInput] = useState<LearningPathInput>(defaultLearningPathInput);
  const output = useMemo(() => buildLearningPath(input), [input]);
  const externalResources = useMemo(() => getExternalResources(input.department), [input.department]);

  function update<K extends keyof LearningPathInput>(key: K, value: LearningPathInput[K]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <section className="paper-panel h-fit p-6 sm:p-7">
        <p className="section-kicker">Input panel</p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Build Your Learning Path</h2>
        <div className="mt-7 grid gap-5">
          <SelectField
            id="department"
            label="Department"
            value={input.department}
            options={departments}
            onChange={(value) => update("department", value as Department)}
          />
          <SelectField
            id="skill-level"
            label="AI Skill Level"
            value={input.skillLevel}
            options={skillLevels}
            onChange={(value) => update("skillLevel", value as SkillLevel)}
          />
          <SelectField
            id="primary-task"
            label="Primary Task"
            value={input.task}
            options={tasks}
            onChange={(value) => update("task", value as Task)}
          />
          <SelectField
            id="data-sensitivity"
            label="Data Sensitivity"
            value={input.dataSensitivity}
            options={dataSensitivities}
            onChange={(value) => update("dataSensitivity", value as DataSensitivity)}
          />
        </div>

        <button
          type="button"
          className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-line bg-card px-4 py-3 text-sm font-bold text-ink transition hover:border-clay/50 hover:text-clay"
          onClick={() => setInput(defaultLearningPathInput)}
        >
          <RotateCcw aria-hidden="true" size={17} />
          Reset to Provider Services Example
        </button>
      </section>

      <section className="paper-panel p-6 sm:p-7">
        <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-start">
          <div>
            <p className="section-kicker">Output panel</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Recommended Learning Path</h2>
          </div>
          {output.governanceReviewRequired ? (
            <span className="inline-flex items-center gap-2 border border-clay/40 bg-peach/20 px-3 py-2 text-xs font-black uppercase tracking-wider text-clay">
              <ShieldAlert aria-hidden="true" size={15} />
              Governance Review Required
            </span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SummaryBlock label="Recommended Tier" value={output.recommendedTier} />
          <SummaryBlock label="Risk Level" value={output.riskLevel} />
        </div>

        <div className="mt-7">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-clay">Curriculum Progress</p>
          <TierProgress recommendedTier={output.recommendedTier} />
        </div>

        <div className="mt-8 grid gap-7">
          <OutputSection title="Department Path">
            <ol className="grid gap-3">
              {output.departmentPath.map((item, index) => (
                <li key={item} className="flex gap-3 border border-line bg-card/65 p-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center border border-peach/50 bg-peach/15 text-xs font-black text-clay">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </OutputSection>

          <OutputSection title="Tool Guidance">
            <p className="text-base leading-7 text-mutedInk">{output.toolGuidance}</p>
          </OutputSection>

          <OutputSection title="30-Day Goal">
            <p className="text-base leading-7 text-mutedInk">{output.thirtyDayGoal}</p>
          </OutputSection>

          <OutputSection title="Sample Prompt">
            <p className="border-l-2 border-clay bg-paper/70 p-4 text-base font-medium leading-7 text-ink">
              {output.samplePrompt}
            </p>
          </OutputSection>

          <OutputSection title="Assigned Resources">
            <div className="grid gap-5">
              <div>
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-clay">
                  PracticeLink Required Resources
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {practiceLinkResources.map((resource) => (
                    <ResourceCard key={resource.name} resource={resource} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-clay">
                  Free External Learning Resources
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {externalResources.map((resource) => (
                    <ResourceCard key={resource.name} resource={resource} />
                  ))}
                </div>
                <p className="mt-4 border border-line bg-paper/70 p-3 text-sm font-semibold leading-6 text-mutedInk">
                  External resources are curated for learning. PracticeLink-specific governance rules always
                  override public examples.
                </p>
              </div>
            </div>
          </OutputSection>
        </div>
      </section>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-bold text-ink">{label}</span>
      <select
        id={id}
        className="focus-ring mt-2 w-full appearance-none rounded-sm border border-line bg-card px-4 py-3 text-base font-semibold text-ink shadow-soft"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function SummaryBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-card/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-clay">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-ink">{value}</p>
    </div>
  );
}

function OutputSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{title}</h3>
      {children}
    </section>
  );
}
