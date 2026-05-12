import { AdoptionSystem } from "@/components/AdoptionSystem";
import { AssetCard } from "@/components/AssetCard";
import { FindingCard } from "@/components/FindingCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/data/team";

const wants = [
  {
    title: "Governance Clarity",
    text: "Employees need to know which AI tools are approved, what data is safe, and when to escalate."
  },
  {
    title: "Department-Level Adoption",
    text: "AI usage differs across 14 departments, so training must be tailored to daily workflows."
  },
  {
    title: "Agentforce Readiness",
    text: "Salesforce and Agentforce preparation require clean workflows, data readiness, and aligned AI practices."
  },
  {
    title: "Measurable ROI",
    text: "Leadership needs a practical model for savings, risk reduction, productivity, and future product value."
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="assets" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-16 sm:px-8">
          <p className="section-kicker">Demo gallery</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Project Assets
          </h2>
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <AssetCard
              title="AI Maturity Map"
              tag="Analysis"
              text="Shows department readiness by foundation level and adoption level, revealing where AI risk and ROI are concentrated."
              button="View Snapshot"
              kind="maturity"
            />
            <AssetCard
              title="ARIA Governance Assistant"
              tag="Demo"
              text="Slack-based governance assistant that helps employees check approved tools, classify content risk, and escalate sensitive AI use before data leaves the workflow."
              button="View ARIA Flow"
              kind="aria"
              githubHref="https://github.com/fahda2/artificial-routing-intelligence-agent"
            />
            <AssetCard
              title="ROI Model"
              tag="Live Model"
              text="3-year outlook showing value from governance, pilot savings, Agentforce preparation, curriculum rollout, and AI Match Score MVP."
              button="Open Live ROI Model"
              kind="roi"
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeBYMvKs7u75JMx93bc8q6_qONQCGr4wFrtStSCBE0NMLvXZHGlByze_SMzy8Pk-zjzWdSV5yZYVAi/pubhtml"
            />
            <AssetCard
              title="AI Upskilling Curriculum"
              tag="Sriram"
              text="Role-based learning system that moves employees from AI awareness to department-specific workflows and AI Champion support."
              button="Build Learning Path"
              kind="learning"
            />
          </div>
        </section>

        <AdoptionSystem />

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="section-kicker">Client need</p>
          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              What PracticeLink Wanted
            </h2>
            <p className="max-w-xl text-base leading-7 text-mutedInk">
              A practical adoption system that makes AI useful, governed, and measurable across real departments.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {wants.map((item) => (
              <article key={item.title} className="border border-line bg-card/70 p-5 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-mutedInk">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="paper-panel overflow-hidden">
            <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
              <FindingCard value="90%" label="of staff already use ChatGPT" />
              <FindingCard value="71%" label="are unaware of AI governance policy" />
              <FindingCard
                value="High"
                label="learning appetite in Physician / Provider Services, with no current AI usage"
              />
            </div>
            <div className="border-t border-line bg-ink px-6 py-5 text-center font-display text-2xl font-semibold text-card">
              PracticeLink does not have an AI adoption problem; it has an AI alignment problem.
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-16 sm:px-8">
          <p className="section-kicker">Team</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Team Contributions
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
