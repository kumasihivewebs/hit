import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { OPEN_ROLES, PARTNER_COMPANIES, HIRING_STATS } from "@/constants/jobs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — HiT",
  description:
    "Join the team building Africa's leading technology institute. Open roles in education, engineering, design, and community.",
};

const JOB_TYPE_COLORS: Record<string, string> = {
  "Full-time": "bg-green-600/20 text-green-300 border-green-600/30",
  "Part-time / Advisory": "bg-blue-600/20 text-blue-300 border-blue-600/30",
};

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Careers at HiT
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Help Build Africa&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Tech Future
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                We&apos;re a small team doing high-leverage work. Every person at
                HiT directly shapes the engineers, researchers, and founders who
                will define Africa&apos;s technology industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Mission-driven
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Competitive pay + equity
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  Remote-friendly
                </span>
              </div>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Graduate Outcomes */}
        <section className="w-full py-16 bg-black border-y border-white/10">
          <div className="section-container">
            <FadeIn>
              <p className="text-center text-slate-400 text-sm uppercase tracking-wider font-semibold mb-8">
                Graduate outcomes — what you&apos;re helping students achieve
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {HIRING_STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Open Roles */}
        <section className="w-full py-20 sm:py-28 bg-slate-950">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Open Roles
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Join Our Team
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                We hire people who are exceptional at their craft and deeply
                care about education and the African tech ecosystem.
              </p>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {OPEN_ROLES.map((role) => (
                <StaggerItem key={role.id}>
                  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold">{role.title}</h3>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                              JOB_TYPE_COLORS[role.type] ??
                              "bg-white/5 text-slate-400 border-white/10"
                            }`}
                          >
                            {role.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <span>📍 {role.location}</span>
                          <span>🏢 {role.department}</span>
                          <span>💰 {role.salary}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {role.description}
                        </p>
                        <ul className="space-y-1.5 pt-2">
                          {role.requirements.map((req) => (
                            <li
                              key={req}
                              className="flex items-start gap-2 text-sm text-slate-400"
                            >
                              <span className="text-orange-400 mt-0.5">▸</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="shrink-0">
                        <a
                          href="#apply"
                          className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                        >
                          Apply
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partner Companies */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-12">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Hiring Partners
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Where Our Graduates Get Hired
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                These companies actively recruit from HiT. Graduating students
                get direct introductions to their recruiting teams.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PARTNER_COMPANIES.map((company) => (
                <StaggerItem key={company.name}>
                  <div className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 h-full">
                    <span className="text-3xl">{company.logo}</span>
                    <div>
                      <p className="font-bold">{company.name}</p>
                      <p className="text-sm text-slate-400">{company.roles}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Apply CTA */}
        <section id="apply" className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Don&apos;t see the right role?
            </h2>
            <p className="text-slate-300 text-lg">
              We&apos;re always interested in exceptional people. Send a brief note
              about who you are and what you&apos;d contribute — we read everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:careers@hit.edu"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Send an Introduction
              </a>
              <Link
                href="/community"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Meet Our Team
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
