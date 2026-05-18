import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — HiT",
  description: "The terms and conditions governing use of HiT's website and enrollment in its programs.",
};

const LAST_UPDATED = "May 18, 2025";

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-20 sm:py-28">
          <div className="section-container max-w-3xl mx-auto">
            <div className="space-y-4 mb-12">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Legal
              </p>
              <h1 className="text-4xl sm:text-5xl font-black">Terms of Service</h1>
              <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="space-y-10 text-slate-300 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the HiT website (hit.edu) or enrolling in any HiT program,
                  you agree to be bound by these Terms of Service and our{" "}
                  <Link href="/privacy" className="text-orange-400 hover:text-orange-300">
                    Privacy Policy
                  </Link>
                  . If you do not agree to these terms, you must not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Eligibility</h2>
                <p>
                  You must be at least 16 years old to apply to HiT programs. Applicants under 18
                  require parental or guardian consent. By submitting an application, you confirm
                  that the information provided is accurate and complete.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. Enrollment and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Enrollment is confirmed only upon receipt of a signed offer letter and payment
                    of any required deposit or first installment.
                  </li>
                  <li>
                    Tuition fees and payment schedules are outlined in your individual offer letter.
                  </li>
                  <li>
                    Income-share agreements, scholarships, and deferred payment plans are subject
                    to separate written agreements.
                  </li>
                  <li>
                    HiT reserves the right to withhold certificates or references in the event of
                    outstanding balances.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. Refund Policy</h2>
                <p>
                  Refund eligibility depends on when you withdraw:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Before cohort start date:</strong> Full refund of
                    any deposit, less a processing fee of ₦15,000 or equivalent.
                  </li>
                  <li>
                    <strong className="text-white">Within the first two weeks of a cohort:</strong>{" "}
                    50% refund of tuition paid to date.
                  </li>
                  <li>
                    <strong className="text-white">After two weeks:</strong> No refund. Exceptional
                    circumstances (medical, family emergency) may be considered at HiT&apos;s
                    discretion.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">5. Code of Conduct</h2>
                <p>
                  All students, alumni, and community members are expected to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Treat all individuals with respect, regardless of background or identity</li>
                  <li>Not engage in academic dishonesty, plagiarism, or misrepresentation of work</li>
                  <li>Not disrupt learning environments or community spaces</li>
                  <li>Use lab equipment and shared resources responsibly</li>
                  <li>
                    Not use skills learned at HiT for malicious, illegal, or unethical purposes
                  </li>
                </ul>
                <p>
                  Violations may result in suspension or permanent removal from the program without
                  a refund.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">6. Intellectual Property</h2>
                <p>
                  Projects and work you create during your program remain yours. HiT may request
                  permission to showcase your work in marketing materials; we will always ask first
                  and credit you by name.
                </p>
                <p>
                  All curriculum materials, videos, and learning resources provided by HiT are
                  proprietary. You may not reproduce, distribute, or sell them without written
                  consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">7. Disclaimers</h2>
                <p>
                  HiT does not guarantee employment outcomes. Graduate employment statistics
                  represent past cohort performance and are not a promise of future results.
                  Individual outcomes depend on effort, market conditions, and other factors
                  outside our control.
                </p>
                <p>
                  The website is provided &quot;as is&quot; without warranties of any kind. HiT is not
                  liable for any interruption, loss of data, or damages arising from use of the
                  website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">8. Modifications</h2>
                <p>
                  HiT reserves the right to modify program curricula, schedules, instructors, and
                  fees with reasonable advance notice. Material changes to enrolled students&apos;
                  programs will be communicated at least 30 days in advance.
                </p>
                <p>
                  These Terms of Service may be updated at any time. The most current version will
                  always be available at this URL. Continued use constitutes acceptance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">9. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the Federal Republic of Nigeria. Any
                  disputes shall be resolved through binding arbitration in Lagos, Nigeria,
                  before escalating to the courts.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">10. Contact</h2>
                <p>
                  Questions about these terms? Email us at{" "}
                  <a href="mailto:legal@hit.edu" className="text-orange-400 hover:text-orange-300">
                    legal@hit.edu
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy →
              </Link>
              <Link href="/admissions" className="hover:text-white transition-colors">
                Apply Now →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
