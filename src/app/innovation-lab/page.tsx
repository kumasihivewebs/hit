import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { LABS, LAB_STATS } from "@/constants/labs";
import { STUDENT_PROJECTS } from "@/constants/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Lab — HiT",
  description:
    "State-of-the-art labs for AI, robotics, embedded systems, cybersecurity, and product design. Build real projects with professional-grade equipment.",
};

export default function InnovationLabPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Innovation Labs
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Where Ideas Become{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Real Systems
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Six specialised labs with professional-grade equipment, open to
                all enrolled students. From GPU clusters to robotic arms — the
                tools to build anything.
              </p>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-16 bg-black border-y border-white/10">
          <StaggerContainer className="section-container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {LAB_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Labs Grid */}
        <section className="w-full py-20 sm:py-28 bg-slate-950">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Our Facilities
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Six Specialised Labs
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl">
                Every lab is maintained to an industry standard. Students work
                with the same tools used in the best companies in the world.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LABS.map((lab) => (
                <StaggerItem key={lab.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 space-y-5 h-full">
                    <div className="text-5xl">{lab.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{lab.name}</h3>
                      <p className="text-slate-300 mt-2 leading-relaxed text-sm">
                        {lab.description}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {lab.equipment.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="text-orange-400">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 flex flex-col gap-1 text-xs text-slate-500">
                      <span>Capacity: {lab.capacity}</span>
                      <span>{lab.access}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Student Projects */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Student Showcase
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Built in Our Labs
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                A sample of what students have shipped using HiT&apos;s facilities.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STUDENT_PROJECTS.map((project) => (
                <StaggerItem key={project.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 h-full">
                    <div className="text-6xl">{project.image}</div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-slate-300 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold bg-orange-600/20 text-orange-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to build something real?
            </h2>
            <p className="text-slate-300 text-lg">
              Lab access is included with every HiT program. Enroll, pick your
              track, and start building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Explore Programs
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Apply Now
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
