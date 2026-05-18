"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-300">
            Join a community of innovators, engineers, and entrepreneurs
            building the future of technology in Africa. Limited spots available
            each cohort.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-semibold">
              Next Cohort Starts in 2 Months
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="w-full sm:w-auto">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Schedule a Call
            </Button>
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
            <p className="font-semibold">
              No prior experience needed. Passion required.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Application Time</p>
            <p className="font-semibold">Typically 2-4 weeks</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="font-semibold">6-12 months depending on program</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
