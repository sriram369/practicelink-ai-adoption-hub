import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LearningPathBuilder } from "@/components/LearningPathBuilder";

export default function LearningPathPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:pt-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex border border-line bg-card/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-clay shadow-soft">
              Governance first. Productivity second. Product innovation third.
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-normal text-ink sm:text-6xl">
              PracticeLink AI Learning Path Builder
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-mutedInk">
              Personalized AI training paths for safe, department-level adoption.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <LearningPathBuilder />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="border border-line bg-ink px-6 py-5 text-center font-display text-2xl font-semibold text-card shadow-lift">
            PracticeLink should train for governance first, productivity second, and product innovation third.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
