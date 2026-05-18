"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`w-full py-20 sm:py-28 lg:py-32 ${className}`}
    >
      <div className="section-container">{children}</div>
    </motion.section>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  description,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-4 mb-16"
    >
      {subtitle && (
        <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
