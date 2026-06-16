"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProgramCard } from "@/components/ui/Card";
import { PROGRAMS } from "@/constants/programs";

export const ProgramsSection = () => {
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
    <Section id="programs" className="bg-black">
      <SectionHeading
        subtitle="Our Programs"
        title="Short Courses Built for Practical Skill"
        description="Three-month courses in software, IoT, fabrication, marketing, and business, designed around hands-on learning and recognizable certification."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROGRAMS.map((program) => (
          <motion.div key={program.id} variants={itemVariants}>
            <ProgramCard
              title={program.title}
              description={program.description}
              icon={program.icon}
              slug={program.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
