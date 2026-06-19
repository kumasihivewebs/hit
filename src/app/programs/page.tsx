import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { getProgramsContent } from "@/lib/content-api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — HiT",
  description:
    "Explore HiT's practical short courses in Flutter, digital marketing, IoT, computer science, digital fabrication, and business management.",
};

export default async function ProgramsPage() {
  const programs = await getProgramsContent();

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 via-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Our Programs
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Practical Short{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Courses
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Three-month courses built around innovation, emerging
                technologies, and hands-on practicality, with certificates
                awarded through the KNUST pathway.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-slate-400">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  3-month programs
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  GHC 1200 fee
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Early discounts available
                </span>
              </div>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="w-full py-20 sm:py-24 bg-black">
          <div className="section-container">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <StaggerItem key={program.id}>
                  <Link
                    href={`/programs/${program.slug}`}
                    className="group block rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="text-5xl shrink-0">{program.icon}</div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h2 className="text-xl font-bold group-hover:text-orange-300 transition-colors">
                            {program.title}
                          </h2>
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-600/10 text-orange-300 border border-orange-600/20 shrink-0">
                            {program.duration}
                          </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {program.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-3">
                          {program.outcomes.slice(0, 3).map((outcome) => (
                            <span
                              key={outcome}
                              className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded border border-white/10"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                        <p className="pt-4 text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors">
                          View program →
                        </p>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Not sure which program is right for you?
            </h2>
            <p className="text-slate-300 text-lg">
              Talk to the admissions team about your goals, schedule, and the
              short course that best fits where you want to go next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
