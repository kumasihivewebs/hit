import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn, FadeInOnLoad, StaggerContainer, StaggerItem } from "@/components/ui/Animate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Environment — HiT",
  description:
    "HiT's practical learning environment in Kumasi combines seasoned tutors, hands-on facilities, partners, and flexible study options.",
};

const SUPPORT = [
  {
    title: "Seasoned Tutors",
    description:
      "Learn with experienced facilitators who bring practical context into every course.",
  },
  {
    title: "Hands-On Facilities",
    description:
      "Use a learning environment built for experimentation, practical investigations, and real-world application.",
  },
  {
    title: "Recognized Certificates",
    description:
      "The HiT materials reference certificates awarded through KNUST for the short courses.",
  },
  {
    title: "Flexible Options",
    description:
      "School hours run from 10 am to 3 pm, with evening and weekend options also available.",
  },
];

const PARTNERS = ["KNUST", "WLearn", "Azihub", "COTVET", "Kumasi Hive"];

const FUTURE_COURSES = [
  "Robotics",
  "Blockchain",
  "Digital Art and Animation",
  "3D Modelling and Printing",
  "UX/UI for Mobile and Web Design",
  "Introduction to Embedded Systems",
];

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

        <section className="w-full py-20 sm:py-28 bg-black border-t border-white/10">
          <div className="section-container grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <FadeIn>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image
                  src="/assessed-screen.webp"
                  alt="HiT students in a practical assessment session"
                  width={930}
                  height={805}
                  unoptimized
                  className="aspect-930/805 w-full object-cover object-center"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn className="space-y-4 mb-16">
                <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                  Support
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Built Around Student Success
                </h2>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SUPPORT.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="h-full rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-slate-950 border-t border-white/10">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn className="space-y-6">
              <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
                Partners
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                A Network Behind the Institute
              </h2>
              <div className="flex flex-wrap gap-3">
                {PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="space-y-6">
              <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
                Future Courses
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Expanding Possibilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FUTURE_COURSES.map((course) => (
                  <div
                    key={course}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-300"
                  >
                    {course}
                  </div>
                ))}
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
