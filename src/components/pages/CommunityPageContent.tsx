"use client";

import { useState } from "react";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { TESTIMONIALS } from "@/constants/testimonials";
import { CommunityInterestForm } from "@/components/forms/CommunityInterestForm";
import type {
  FrontendAlumni,
  FrontendCommunityStat,
  FrontendEvent,
} from "@/lib/content-api";

const EVENT_TYPE_COLORS: Record<string, string> = {
  Hackathon: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "Demo Day": "bg-amber-600/20 text-amber-300 border-amber-600/30",
  Conference: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "Open House": "bg-green-600/20 text-green-300 border-green-600/30",
};

interface CommunityPageContentProps {
  events: FrontendEvent[];
  alumni: FrontendAlumni[];
  stats: FrontendCommunityStat[];
}

export function CommunityPageContent({
  events,
  alumni,
  stats,
}: CommunityPageContentProps) {
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <>
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
              HiT is more than a course list. It is a practical learning
              community of learners, mentors, facilitators, and alumni building
              momentum together from Kumasi outward.
            </p>
          </FadeInOnLoad>
        </div>
      </section>

      <section className="w-full py-16 bg-black border-y border-white/10">
        <StaggerContainer className="section-container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

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
              Join an open house, a project night, a build day, or a mentor
              session. The community page now feeds straight into the backend
              interest queue.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
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
                    {event.prize ? (
                      <span className="text-orange-300 font-semibold">
                        🏆 {event.prize}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEvent(event.title);
                      document
                        .getElementById("community-interest-form")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="mt-2 inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors text-sm"
                  >
                    Register Interest →
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="w-full py-20 bg-black border-t border-white/10">
        <div className="section-container">
          <FadeIn className="space-y-4 mb-16">
            <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              Alumni
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Learner Progress in Motion
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl">
              These examples stay close to the kinds of practical outcomes the
              current HiT short-course model is designed to support.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum) => (
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
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 h-full">
                  <div className="text-5xl">{testimonial.image}</div>
                  <p className="text-slate-100 italic leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="community-interest-form"
        className="w-full py-20 bg-black border-t border-white/10"
      >
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn className="text-center space-y-6 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Join the Community
            </h2>
            <p className="text-slate-300 text-lg">
              Tell HiT whether you want to attend an event, join the community,
              mentor, or explore a partnership.
            </p>
          </FadeIn>
          <CommunityInterestForm selectedEvent={selectedEvent} />
        </div>
      </section>
    </>
  );
}
