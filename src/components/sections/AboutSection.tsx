"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";

export const AboutSection = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <SectionHeading
            subtitle="About HiT"
            title="Engineering the Future of Africa"
            description="Hive Institute of Technology exists to develop world-class African technical talent through hands-on education, experimentation, and real-world engineering experience."
          />

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              We combine practical engineering with innovation culture. Students don&apos;t just learn theory&mdash;they build real systems, solve actual problems, and launch companies.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our philosophy is simple: learn by building. Every student gains
              hands-on experience with modern tools, industry practices, and
              cutting-edge technologies.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6 pt-8"
          >
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">2019</p>
              <p className="text-slate-400">Founded</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">8+</p>
              <p className="text-slate-400">Programs</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 lg:h-full min-h-96"
        >
          <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 to-green-600/20 rounded-3xl blur-2xl" />
          <div className="absolute inset-0 bg-linear-to-br from-orange-600/10 to-green-600/10 rounded-3xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🏗️</div>
              <h3 className="text-xl font-bold">Build. Learn. Lead.</h3>
              <p className="text-slate-300 max-w-sm">
                Join a community of engineers transforming Africa through
                technology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
