"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { AdmissionApplicationForm } from "@/components/forms/AdmissionApplicationForm";
import type { FrontendProgram } from "@/lib/content-api";

type AdmissionStep = {
  step: string;
  title: string;
  description: string;
};

type AdmissionFaq = {
  q: string;
  a: string;
};

interface AdmissionsPageContentProps {
  steps: AdmissionStep[];
  faqs: AdmissionFaq[];
  programs: FrontendProgram[];
}

export function AdmissionsPageContent({
  steps,
  faqs,
  programs,
}: AdmissionsPageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-600/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-semibold">
              Applications Open for the Next 3-Month Intake
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight">
            Start Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Application
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            No prior experience required for most programs. Apply once and let
            the admissions team guide you toward the best course, schedule, and
            next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              GHC 1200 fee
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              3-month courses
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              Backend-connected admissions flow
            </span>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-20 bg-black border-t border-white/10">
        <div className="section-container">
          <FadeIn className="space-y-4 mb-16">
            <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              The Admissions Process
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StaggerItem key={step.step} className="relative space-y-4">
                {index < steps.length - 1 ? (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-24px)] w-full h-px bg-white/10 z-0" />
                ) : null}
                <div className="relative z-10 w-14 h-14 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section
        id="apply"
        className="w-full py-20 bg-slate-950 border-t border-white/10"
      >
        <FadeIn className="section-container max-w-2xl mx-auto">
          <div className="space-y-4 mb-12">
            <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              Apply Now
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Start Your Application
            </h2>
            <p className="text-slate-300">
              This form now writes directly to the HiT backend, so the
              admissions team has a real submission record to review.
            </p>
          </div>

          <AdmissionApplicationForm
            programs={programs.map((program) => ({
              id: program.id,
              title: program.title,
            }))}
          />
        </FadeIn>
      </section>

      <section
        id="schedule"
        className="w-full py-20 bg-black border-t border-white/10"
      >
        <FadeIn className="section-container max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Prefer to talk first?
          </h2>
          <p className="text-slate-300 text-lg">
            Call the admissions team directly if you want help choosing a
            course, understanding schedules, or confirming the next intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+233204343066"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Call 020 434 3066
            </a>
            <a
              href="tel:+233501360300"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Call 050 136 0300
            </a>
          </div>
        </FadeIn>
      </section>

      <section className="w-full py-20 bg-slate-950 border-t border-white/10">
        <div className="section-container max-w-3xl mx-auto">
          <FadeIn className="space-y-4 mb-12">
            <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Common Questions
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className="text-orange-400 shrink-0 text-xl leading-none">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index ? (
                  <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
