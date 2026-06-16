"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";

export const AdmissionsSection = () => {
  return (
    <Section id="admissions" className="bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Apply for a HiT Short Course?
          </h2>
          <p className="text-xl text-slate-300">
            Admissions are open for practical short courses in Kumasi
            Kentinkrono. Choose a course, apply early, and secure one of the
            available discount slots.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-semibold">
              Discounts Available for the First 20 Applicants
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/admissions"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              Apply Now
            </Link>
            <Link
              href="/admissions#schedule"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full sm:w-auto",
              })}
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10"
        >
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Eligibility</p>
            <p className="font-semibold">Beginner-friendly courses available</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Fee</p>
            <p className="font-semibold">GHC 1200 per course</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="font-semibold">3 months</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
