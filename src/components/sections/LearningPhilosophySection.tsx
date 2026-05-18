"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { LEARNING_PHILOSOPHY } from "@/constants/learningPhilosophy";

export const LearningPhilosophySection = () => {
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
    <Section className="bg-slate-950">
      <SectionHeading
        subtitle="Learning Philosophy"
        title="How We Teach"
        description="A practical approach to technical education focused on real-world impact and continuous learning."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {LEARNING_PHILOSOPHY.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Card hover>
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-lg">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
