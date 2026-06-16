"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import { PROGRAMS } from "@/constants/programs";

const STEPS = [
  {
    step: "01",
    title: "Submit Application",
    description:
      "Share your contact details, course interest, background, and schedule preference.",
  },
  {
    step: "02",
    title: "Admissions Call",
    description:
      "Our team follows up to answer questions, confirm fit, and explain available discount slots.",
  },
  {
    step: "03",
    title: "Enrollment",
    description:
      "Accepted applicants complete enrollment and receive course schedule details.",
  },
  {
    step: "04",
    title: "Start Building",
    description:
      "Join the three-month practical learning experience in Kumasi or through available flexible options.",
  },
];

const FAQS = [
  {
    q: "Do I need prior experience to apply?",
    a: "Several courses are beginner friendly. IoT and fabrication benefit from curiosity about hardware or design, but the application is built to understand your goals rather than screen out new learners.",
  },
  {
    q: "How long are the courses?",
    a: "The short courses run for 3 months.",
  },
  {
    q: "What is the cost of the programs?",
    a: "The published fee in the HiT materials is GHC 1200 per short course. Discounts are available for the first 20 applicants.",
  },
  {
    q: "Can I study part-time or remotely?",
    a: "School hours are listed as 10 am to 3 pm, with evening and weekend options also available. Speak to admissions to confirm the option for your course.",
  },
  {
    q: "Will I receive a certificate?",
    a: "The HiT materials state that certificates from these courses will be awarded by KNUST.",
  },
  {
    q: "Who can I call before applying?",
    a: "You can call 020 434 3066 or 050 136 0300 for admissions questions.",
  },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-sm font-semibold">
                Applications Open — Discounts for First 20 Applicants
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Start Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                Application
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              No prior experience required for most programs — just the
              commitment to learn and build through practical short courses in
              emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                GHC 1200 fee
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                3-month courses
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                KNUST certificates
              </span>
            </div>
          </motion.div>
        </section>

        {/* Process Steps */}
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
              {STEPS.map((step, i) => (
                <StaggerItem key={step.step} className="relative space-y-4">
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%-24px)] w-full h-px bg-white/10 z-0" />
                  )}
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

        {/* Application Form */}
        <section id="apply" className="w-full py-20 bg-slate-950 border-t border-white/10">
          <FadeIn className="section-container max-w-2xl mx-auto">
            <div className="space-y-4 mb-12">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Apply Now
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Start Your Application
              </h2>
              <p className="text-slate-300">
                This frontend form is ready for the backend integration phase.
                For now, it collects the fields admissions will need.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-green-600/30 bg-green-600/10 p-10 text-center space-y-4">
                <div className="text-5xl">✅</div>
                <h3 className="text-2xl font-bold text-green-300">
                  Application Received!
                </h3>
                <p className="text-slate-300">
                  Thank you for applying. We&apos;ll review your application and
                  follow up with course details, schedule options, and next
                  steps.
                </p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                >
                  Browse all programs →
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">
                      First Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Amara"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">
                      Last Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Mensah"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="amara@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 20 434 3066"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Country *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Ghana"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Program of Interest *
                  </label>
                  <select
                    required
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Preferred Schedule
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors">
                    <option value="">Select an option</option>
                    <option value="day">Daytime: 10 am to 3 pm</option>
                    <option value="evening">Evening option</option>
                    <option value="weekend">Weekend option</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Describe your background and why you want to join HiT *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about yourself, your current skills, and what you hope to achieve..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">
                    How did you hear about HiT?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors">
                    <option value="">Select an option</option>
                    <option value="social">Social media</option>
                    <option value="friend">Friend or colleague</option>
                    <option value="search">Search engine</option>
                    <option value="event">Event or conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
                >
                  Submit Application
                </button>
                <p className="text-xs text-slate-500 text-center">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="underline hover:text-slate-300">
                    Privacy Policy
                  </Link>
                  . We&apos;ll never share your data without consent.
                </p>
              </form>
            )}
          </FadeIn>
        </section>

        {/* Schedule Call */}
        <section id="schedule" className="w-full py-20 bg-black border-t border-white/10">
          <FadeIn className="section-container max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Prefer to talk first?
            </h2>
            <p className="text-slate-300 text-lg">
              Book a free 30-minute call with one of our admissions advisors.
              We&apos;ll walk you through the courses, certificate pathway, fee,
              and available schedule options.
            </p>
            <a
              href="tel:+233204343066"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Call 020 434 3066
            </a>
          </FadeIn>
        </section>

        {/* FAQs */}
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
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold">{faq.q}</span>
                    <span className="text-orange-400 shrink-0 text-xl leading-none">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
