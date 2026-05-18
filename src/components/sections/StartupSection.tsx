"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const StartupSection = () => {
  const benefits = [
    {
      id: "mentorship",
      title: "Expert Mentorship",
      description:
        "Access to successful entrepreneurs and industry veterans who guide your journey.",
      icon: "🎓",
    },
    {
      id: "funding",
      title: "Funding Opportunities",
      description:
        "Pre-seed and seed funding access through our investor network and partners.",
      icon: "💰",
    },
    {
      id: "network",
      title: "Investor Network",
      description:
        "Direct connections to VCs, angel investors, and corporate partners.",
      icon: "🌐",
    },
    {
      id: "resources",
      title: "Resources & Tools",
      description:
        "Office space, cloud credits, and all the tools you need to build.",
      icon: "🛠️",
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
        subtitle="Startup Ecosystem"
        title="Turn Ideas Into Companies"
        description="HiT's startup incubation program provides everything you need to launch and scale your company."
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

      {/* Success Stories */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">$50M+</p>
            <p className="text-slate-300">Total Funding Raised</p>
          </div>
        </Card>
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">100+</p>
            <p className="text-slate-300">Successful Exits</p>
          </div>
        </Card>
        <Card>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-orange-400">5000+</p>
            <p className="text-slate-300">Jobs Created</p>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
