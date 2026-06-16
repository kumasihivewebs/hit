import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad } from "@/components/ui/Animate";
import { PROGRAMS } from "@/constants/programs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} — HiT`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 max-w-4xl mx-auto">
            <FadeInOnLoad>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
              >
                ← Back to Programs
              </Link>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{program.icon}</span>
                  <div>
                    <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                      {program.level}
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                      {program.title}
                    </h1>
                  </div>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  {program.tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/30 text-orange-300 text-sm font-semibold">
                    {program.duration}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30 text-green-300 text-sm font-semibold">
                    {program.fee}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                    {program.prerequisites}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
                  >
                    Apply Now
                  </Link>
                  <Link
                    href="/admissions#schedule"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Curriculum + Projects */}
        <section className="w-full py-20 bg-black">
          <div className="section-container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Curriculum
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                What You&apos;ll Learn
              </h2>
              <ol className="space-y-4">
                {program.curriculum.map((topic, i) => (
                  <li key={topic} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-200">{topic}</span>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-green-400 font-semibold uppercase tracking-wider text-sm mb-4">
                Projects
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                What You&apos;ll Build
              </h2>
              <ul className="space-y-4">
                {program.projects.map((project) => (
                  <li
                    key={project}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-green-400 font-bold mt-0.5">▸</span>
                    <span className="text-slate-200">{project}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Course Outcomes */}
        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container max-w-5xl mx-auto">
            <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Outcomes and Pathways
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">
              What This Course Opens Up
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div>
                <p className="text-slate-400 text-sm mb-4 uppercase tracking-wider font-semibold">
                  Roles
                </p>
                <div className="flex flex-wrap gap-3">
                  {program.outcomes.map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-300 text-sm font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-4 uppercase tracking-wider font-semibold">
                  Certificates and Access
                </p>
                <div className="flex flex-wrap gap-3">
                  {program.companies.map((company) => (
                    <span
                      key={company}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <FadeIn className="section-container text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm font-semibold">
                Applications Open — Early Discounts Available
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-slate-300 text-lg">
              Apply to the {program.title} course today. Early applicants can
              access the available discount slots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                View All Programs
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
