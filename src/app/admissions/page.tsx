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
      "Fill out the online application form with your background, goals, and which program interests you. Takes about 15 minutes.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "A short, self-paced online assessment tailored to your chosen program. Tests problem-solving and logical thinking — not prior knowledge.",
  },
  {
    step: "03",
    title: "Interview",
    description:
      "A 30-minute conversation with a HiT instructor to understand your motivation, goals, and how we can best support your journey.",
  },
  {
    step: "04",
    title: "Enrollment",
    description:
      "If accepted, you&apos;ll receive an offer letter, choose your cohort start date, and complete enrollment within 7 days.",
  },
];

const FAQS = [
  {
    q: "Do I need prior experience to apply?",
    a: "Most programs require only basic programming or technical familiarity. The Product Design program has no prerequisites at all. Our assessments are designed to evaluate potential, not existing expertise.",
  },
  {
    q: "How long does the application process take?",
    a: "From submission to offer letter, expect 2–4 weeks. We run rolling admissions, so applying early improves your chances of securing your preferred cohort start date.",
  },
  {
    q: "What is the cost of the programs?",
    a: "Tuition varies by program length and is shared after acceptance. We offer income-share agreements, scholarships, and deferred payment plans so that cost is never a barrier for qualified candidates.",
  },
  {
    q: "Can I study part-time or remotely?",
    a: "Lab-intensive programs (Robotics, Embedded Systems) require on-site attendance. Software-focused programs offer a hybrid model. Speak to an advisor for specifics.",
  },
  {
    q: "When does the next cohort start?",
    a: "We run three cohorts per year — January, May, and September. The next intake opens in September 2025. Apply now to secure your spot.",
  },
  {
    q: "What happens if I don't get accepted?",
    a: "We provide feedback on every application. Many successful students re-applied after addressing the specific gaps we highlighted. There's no penalty for reapplying.",
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
      <main className="flex-1">
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
                Applications Open — September 2025 Cohort
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
              commitment to learn and build. Limited spots are available each
              cohort.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                2–4 week process
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                Rolling admissions
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                Scholarships available
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
                Takes about 15 minutes. Our team reviews every application and
                responds within 5 business days.
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
                  get back to you within 5 business days with next steps.
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
                      placeholder="Okafor"
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
                    placeholder="+234 800 000 0000"
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
                    placeholder="Nigeria"
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
              We&apos;ll walk you through the programs, answer your questions,
              and help you decide if HiT is the right fit.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Book a Free Call
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
