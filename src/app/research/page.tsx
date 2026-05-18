import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { RESEARCH_AREAS, RECENT_PAPERS, RESEARCH_STATS } from "@/constants/research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — HiT",
  description:
    "Applied research at HiT tackles Africa's real challenges in healthcare, agriculture, fintech, and smart cities using AI, robotics, and systems engineering.",
};

export default function ResearchPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Research
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Technology That{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Solves Real Problems
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                HiT&apos;s applied research lab focuses on challenges specific to
                Africa — healthcare, food security, financial inclusion, and
                urban infrastructure. Our students and fellows publish in top
                venues and build systems that reach millions.
              </p>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-16 bg-black border-y border-white/10">
          <StaggerContainer className="section-container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {RESEARCH_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Research Areas */}
        <section className="w-full py-20 sm:py-28 bg-slate-950">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Focus Areas
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Where We Research
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESEARCH_AREAS.map((area) => (
                <StaggerItem key={area.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 space-y-4 h-full">
                    <div className="flex items-start justify-between">
                      <span className="text-5xl">{area.icon}</span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 text-green-300">
                        {area.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 text-slate-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 flex items-center justify-between text-sm text-slate-400 border-t border-white/10">
                      <span>Lead: {area.lead}</span>
                      <span>{area.papers} papers</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Recent Papers */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Publications
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Recent Papers</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Selected publications from our researchers and student fellows,
                published at top venues worldwide.
              </p>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {RECENT_PAPERS.map((paper) => (
                <StaggerItem key={paper.id}>
                  <a
                    href={paper.link}
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold group-hover:text-orange-300 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {paper.authors.join(", ")}
                      </p>
                    </div>
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 shrink-0">
                      <span className="px-3 py-1 text-xs font-semibold bg-orange-600/10 border border-orange-600/20 text-orange-300 rounded-full">
                        {paper.conference}
                      </span>
                      <span className="text-slate-500 text-sm">{paper.area}</span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Collaborate CTA */}
        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Collaborate with Us
            </h2>
            <p className="text-slate-300 text-lg">
              We partner with universities, governments, NGOs, and companies on
              applied research projects. If your organisation has a problem
              worth solving, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Join as a Fellow
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Partner with HiT
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
