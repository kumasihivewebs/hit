import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — HiT",
  description: "How Hive Institute of Technology collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "May 18, 2025";

export default function PrivacyPage() {
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
              <h1 className="text-4xl sm:text-5xl font-black">Privacy Policy</h1>
              <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
            </div>

            <div className="prose prose-invert prose-slate max-w-none space-y-10 text-slate-300 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                <p>
                  Hive Institute of Technology (&quot;HiT&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
                  protecting your personal information. This Privacy Policy explains how we collect,
                  use, share, and safeguard the data you provide when you visit our website, apply
                  to our programs, or interact with our services.
                </p>
                <p>
                  By using our website or submitting an application, you agree to the practices
                  described in this policy. If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                <p>We collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Application data:</strong> Name, email address,
                    phone number, country of residence, program of interest, and the personal
                    statement you submit as part of your application.
                  </li>
                  <li>
                    <strong className="text-white">Communications:</strong> Messages you send us
                    via contact forms, email, or scheduled calls.
                  </li>
                  <li>
                    <strong className="text-white">Usage data:</strong> Pages visited, time spent,
                    browser type, and approximate location derived from IP address, collected
                    automatically via analytics tools.
                  </li>
                  <li>
                    <strong className="text-white">Payment information:</strong> If you enroll,
                    payment details are processed by a third-party provider and are never stored
                    on our servers.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Review and process your application for admission</li>
                  <li>Communicate with you about your application status, program details, and upcoming events</li>
                  <li>Improve our website, programs, and services</li>
                  <li>Send you updates, newsletters, and event invitations (you can opt out at any time)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. Data Sharing</h2>
                <p>
                  We do not sell your personal data. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Service providers</strong> who process data on
                    our behalf (e.g., email delivery, analytics, payment processing) under strict
                    data processing agreements.
                  </li>
                  <li>
                    <strong className="text-white">Hiring partners</strong> only with your explicit
                    consent, typically after you have enrolled and opted into career placement services.
                  </li>
                  <li>
                    <strong className="text-white">Legal authorities</strong> where required by law.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">5. Data Retention</h2>
                <p>
                  Application data is retained for 24 months from the date of submission. Enrolled
                  student records are retained for 7 years after graduation. You may request
                  deletion of your data at any time, subject to our legal obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
                <p>
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p>
                  To exercise these rights, email us at{" "}
                  <a href="mailto:privacy@hit.edu" className="text-orange-400 hover:text-orange-300">
                    privacy@hit.edu
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">7. Cookies</h2>
                <p>
                  We use essential cookies to operate the website and analytics cookies to
                  understand how visitors use our site. You can disable non-essential cookies
                  through your browser settings at any time. Disabling cookies may affect some
                  functionality.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">8. Security</h2>
                <p>
                  We implement industry-standard security measures including HTTPS encryption,
                  access controls, and regular security audits. No method of transmission over
                  the internet is completely secure; we cannot guarantee absolute security but
                  are committed to protecting your data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify enrolled
                  students of material changes by email. Continued use of our website after
                  changes are published constitutes your acceptance of the revised policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">10. Contact</h2>
                <p>
                  Questions about this policy? Contact our Data Protection Officer at{" "}
                  <a href="mailto:privacy@hit.edu" className="text-orange-400 hover:text-orange-300">
                    privacy@hit.edu
                  </a>{" "}
                  or write to us at: Hive Institute of Technology, Lagos, Nigeria.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm text-slate-400">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service →
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
