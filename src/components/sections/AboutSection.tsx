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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <SectionHeading
            subtitle="About HiT"
            title="Practical Technology Training from Kumasi"
            description="Hive Institute of Technology is an academic institution focused on equipping students with skills in emerging technologies through a practical approach."
          />

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Since 2015, Kumasi Hive has been a leader in technology and
              innovation in Kumasi and Ghana, running training in IoT,
              robotics, graphic design, web development, and other practical
              fields.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              HiT extends that work with a learning environment where students
              gain practical and experimental experience, build problem-solving
              ability, and earn certificates recognized by partners such as
              KNUST.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10"
          >
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">2015</p>
              <p className="text-slate-400">Kumasi Hive roots</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-400">Kumasi</p>
              <p className="text-slate-400">Kentinkrono campus</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
            <video
              src="/hit-docs/hit-media-team-video.mp4"
              className="aspect-video w-full object-cover"
              controls
              preload="metadata"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 text-sm">
              <div className="p-4">
                <p className="font-semibold text-white">School hours</p>
                <p className="text-slate-400">10 am to 3 pm</p>
              </div>
              <div className="p-4 border-t border-white/10 sm:border-l sm:border-t-0">
                <p className="font-semibold text-white">Options</p>
                <p className="text-slate-400">Evening and weekend</p>
              </div>
              <div className="p-4 border-t border-white/10 sm:border-l sm:border-t-0">
                <p className="font-semibold text-white">Contact</p>
                <p className="text-slate-400">020 434 3066</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
