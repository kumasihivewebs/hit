"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const StartupSection = () => {
  const benefits = [
    {
      id: "early-discount",
      title: "Early Applicant Discounts",
      description:
        "Discounts are available for the first 20 applicants in each intake.",
      icon: "🏷️",
    },
    {
      id: "certificate",
      title: "KNUST Certificates",
      description:
        "Certificates from these short courses are awarded through the KNUST pathway referenced in the HiT materials.",
      icon: "🎓",
    },
    {
      id: "career-access",
      title: "Virtual Jobs and Internships",
      description:
        "Completing students get access to virtual job and internship opportunities through HiT.",
      icon: "💼",
    },
    {
      id: "flexible-options",
      title: "Evening and Weekend Options",
      description:
        "School hours run from 10 am to 3 pm, with evening and weekend options available.",
      icon: "🕒",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="bg-black">
      <SectionHeading
        subtitle="Admissions Offer"
        title="A Short Course Built Around Access"
        description="HiT pairs practical training with certificates, flexible study options, and opportunities beyond the classroom."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {benefits.map((benefit) => (
          <motion.div key={benefit.id} variants={itemVariants}>
            <Card hover>
              <div className="space-y-4">
                <div className="text-5xl">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">GHC 1200</p>
            <p className="text-slate-300">Course fee</p>
          </div>
        </Card>
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">3 Months</p>
            <p className="text-slate-300">Training duration</p>
          </div>
        </Card>
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">20</p>
            <p className="text-slate-300">Early discount slots</p>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
