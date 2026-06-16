"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const InnovationLabsSection = () => {
  const labs = [
    {
      id: "seasoned-tutors",
      name: "Seasoned Tutors",
      description:
        "Learn from trainers with practical experience who guide students through applied work, experiments, and project delivery.",
      icon: "👩‍🏫",
    },
    {
      id: "practical-facilities",
      name: "Practical Facilities",
      description:
        "Access a learning environment designed to foster innovation, hands-on practice, and confidence with modern tools.",
      icon: "🧰",
    },
    {
      id: "recognized-certificates",
      name: "Recognized Certificates",
      description:
        "Courses are designed to provide value for money while preparing students for certificates recognized by partners such as KNUST.",
      icon: "🎓",
    },
    {
      id: "jobs-internships",
      name: "Jobs and Internships",
      description:
        "Students are introduced to virtual jobs and internship pathways after completing their short-course experience.",
      icon: "💼",
    },
  ];

  const partners = ["KNUST", "WLearn", "Azihub", "COTVET", "Kumasi Hive"];

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
    <Section id="innovation-lab" className="bg-black">
      <SectionHeading
        subtitle="Learning Environment"
        title="The Support Around Every Course"
        description="HiT combines experienced facilitators, practical facilities, recognized certification pathways, and partners who strengthen the student experience."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {labs.map((lab) => (
          <motion.div key={lab.id} variants={itemVariants}>
            <Card hover className="h-full">
              <div className="space-y-4">
                <div className="text-5xl">{lab.icon}</div>
                <h3 className="text-2xl font-bold text-white">{lab.name}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {lab.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-white/10 pt-10"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
          Partners
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
