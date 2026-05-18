"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-950 via-slate-950 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10 py-20 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/30"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold">
              Africa&apos;s Leading Tech Institute
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
          >
            <span className="block">Practical Technology</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                Education for Africa&apos;s
              </span>
            </span>
            <span className="block">Future</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Learn engineering, AI, and robotics by building real projects. Get mentored by industry experts. Launch your startup. Join Africa&apos;s next generation of tech leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Apply Now
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-12 border-t border-white/10"
          >
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                500+
              </p>
              <p className="text-slate-400 text-sm">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                1.2K+
              </p>
              <p className="text-slate-400 text-sm">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                45+
              </p>
              <p className="text-slate-400 text-sm">Startups</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
