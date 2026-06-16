"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

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
    <section className="relative flex min-h-[76svh] w-full items-center overflow-hidden bg-black sm:min-h-[82svh]">
      <Image
        src="/HIT-Banner.jpg"
        alt="Hive Institute of Technology brand banner"
        fill
        priority
        sizes="100vw"
        unoptimized
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-slate-950/90 to-slate-950/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />

      <div className="absolute left-0 top-0 h-full w-1.5 bg-orange-500" />
      <div className="absolute bottom-6 right-4 hidden max-w-xs rounded border border-white/15 bg-black/40 p-4 backdrop-blur-sm md:block">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
          Mantra
        </p>
        <p className="mt-2 text-sm text-slate-200">
          Innovation. Practicality. Emerging Technologies.
        </p>
      </div>

      <div className="section-container relative z-10 py-16 sm:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6 sm:space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/40 backdrop-blur"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold">
              Admissions Open for Short Courses
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white"
          >
            Get Ahead in the Next Technological Age
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-2xl"
          >
            Hive Institute of Technology focuses on innovation, emerging
            technologies, and hands-on practicality, giving students the
            exposure and confidence to solve real problems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/programs"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto",
              })}
            >
              Explore Courses
            </Link>
            <Link
              href="/admissions"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full sm:w-auto bg-black/20 backdrop-blur",
              })}
            >
              Apply Now
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-8 sm:gap-4 sm:pt-10"
          >
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                3
              </p>
              <p className="text-slate-300 text-sm">Months</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                6
              </p>
              <p className="text-slate-300 text-sm">Courses</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-orange-400">
                KNUST
              </p>
              <p className="text-slate-300 text-sm">Certificates</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
