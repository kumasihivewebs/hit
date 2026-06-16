import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { COMMUNITY_EVENTS, ALUMNI_SPOTLIGHT, COMMUNITY_STATS } from "@/constants/events";
import { TESTIMONIALS } from "@/constants/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — HiT",
  description:
    "Join 1,200+ HiT alumni building Africa's tech future. Hackathons, demo days, mentorship, and a network that opens doors across the continent and beyond.",
};

const EVENT_TYPE_COLORS: Record<string, string> = {
  Hackathon: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "Demo Day": "bg-purple-600/20 text-purple-300 border-purple-600/30",
  Conference: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "Open House": "bg-green-600/20 text-green-300 border-green-600/30",
};

export default function CommunityPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
          </div>
          <div className="section-container relative z-10 max-w-3xl mx-auto text-center">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Community
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Build Together,{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Grow Together
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                HiT is more than a school — it&apos;s a lifelong network of
                engineers, researchers, founders, and designers building
                Africa&apos;s technology future together.
              </p>
            </FadeInOnLoad>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-16 bg-black border-y border-white/10">
          <StaggerContainer className="section-container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {COMMUNITY_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Upcoming Events */}
        <section className="w-full py-20 sm:py-28 bg-slate-950">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Upcoming Events
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                What&apos;s Happening
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                From hackathons to demo days — there&apos;s always something worth
                showing up for.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMUNITY_EVENTS.map((event) => (
                <StaggerItem key={event.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 space-y-4 h-full">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                          EVENT_TYPE_COLORS[event.type] ??
                          "bg-white/5 text-slate-400 border-white/10"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span className="text-slate-400 text-sm shrink-0">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-400">
                      <span>📍 {event.location}</span>
                      <span>👥 {event.attendees}</span>
                      {event.prize && (
                        <span className="text-orange-300 font-semibold">
                          🏆 {event.prize}
                        </span>
                      )}
                    </div>
                    <button className="mt-2 inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors text-sm">
                      Register for this event →
                    </button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Alumni Spotlight */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Alumni
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Where HiT Graduates Are Now
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Our alumni are engineers, researchers, and founders at the
                world&apos;s most ambitious companies and startups.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALUMNI_SPOTLIGHT.map((alum) => (
                <StaggerItem key={alum.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 h-full">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{alum.image}</span>
                      <div>
                        <p className="font-bold">{alum.name}</p>
                        <p className="text-sm text-slate-400">
                          {alum.cohort} · {alum.program}
                        </p>
                      </div>
                    </div>
                    <p className="text-orange-300 font-semibold text-sm">
                      {alum.currentRole}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {alum.achievement}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <div className="section-container">
            <FadeIn className="space-y-4 mb-16">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Testimonials
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                In Their Own Words
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <StaggerItem key={t.id}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 h-full">
                    <div className="text-5xl">{t.image}</div>
                    <p className="text-slate-100 italic leading-relaxed">
                      &quot;{t.content}&quot;
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Join CTA */}
        <section className="w-full py-20 bg-black border-t border-white/10">
          <FadeIn className="section-container max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join the Community
            </h2>
            <p className="text-slate-300 text-lg">
              Whether you&apos;re a student, alumni, or industry professional —
              there&apos;s a place for you in the HiT network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Apply Now
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Join Slack Community
              </a>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
