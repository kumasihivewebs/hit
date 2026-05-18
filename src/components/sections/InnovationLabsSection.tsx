"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const InnovationLabsSection = () => {
  const labs = [
    {
      id: "robotics",
      name: "Robotics Lab",
      description:
        "State-of-the-art robotics equipment. Build autonomous systems, drones, and intelligent machines.",
      icon: "🤖",
    },
    {
      id: "hardware",
      name: "Hardware Lab",
      description:
        "Electronics workstations, prototyping tools, and embedded systems equipment.",
      icon: "⚙️",
    },
    {
      id: "ai-ml",
      name: "AI/ML Lab",
      description:
        "GPU-powered workstations for machine learning research and experimentation.",
      icon: "🧠",
    },
    {
      id: "cloud",
      name: "Cloud Infrastructure",
      description:
        "Production-grade cloud environments. Deploy and scale real systems to millions.",
      icon: "☁️",
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
    <Section id="innovation-lab" className="bg-black">
      <SectionHeading
        subtitle="Innovation Labs"
        title="Where Ideas Become Reality"
        description="Fully equipped laboratories and research spaces where students experiment, iterate, and build breakthrough technologies."
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
                <motion.div whileHover={{ x: 5 }} className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
                  >
                    Learn more <span>→</span>
                  </a>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
