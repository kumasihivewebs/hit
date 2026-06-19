import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad } from "@/components/ui/Animate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Environment — HiT",
  description:
    "HiT's practical learning environment in Kumasi combines seasoned tutors, hands-on facilities, partners, and flexible study options.",
};

export default function InnovationLabPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="relative w-full py-24 sm:py-32 bg-linear-to-b from-slate-950 to-black overflow-hidden">
          <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnLoad className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Learning Environment
              </p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Practical Spaces for{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Practical Learning
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                HiT gives students access to tutors, facilities, and learning
                structures that foster innovation, growth, and confidence with
                emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-lg"
                >
                  Apply Now
                </Link>
              </div>
            </FadeInOnLoad>

            <FadeIn delay={0.12}>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
                <Image
                  src="/HIT-Banner.jpg"
                  alt="Hive Institute of Technology brand banner"
                  width={1341}
                  height={600}
                  priority
                  unoptimized
                  className="aspect-1341/600 w-full object-cover object-center"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="w-full py-20 bg-black border-t border-white/10">
          <FadeIn className="section-container text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to learn by doing?
            </h2>
            <p className="text-slate-300 text-lg">
              Apply for a three-month HiT short course or call admissions at
              020 434 3066.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Start Application
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  );
}
