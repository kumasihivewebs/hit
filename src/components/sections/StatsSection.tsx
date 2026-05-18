"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { COMMUNITY_STATS } from "@/constants/stats";

export const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Section className="bg-slate-950">
      <SectionHeading
        subtitle="Community Impact"
        title="By The Numbers"
        description="Real impact from a growing community of engineers, entrepreneurs, and innovators."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {COMMUNITY_STATS.map((stat) => (
          <motion.div key={stat.id} variants={itemVariants}>
            <AnimatedCounter
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
