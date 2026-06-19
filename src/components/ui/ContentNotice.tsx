"use client";

import { motion } from "framer-motion";

interface ContentNoticeProps {
  title: string;
  message: string;
  className?: string;
}

export function ContentNotice({
  title,
  message,
  className = "",
}: ContentNoticeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className={`rounded-2xl border border-white/10 bg-white/5 p-8 text-center ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
        Content Update Pending
      </p>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-slate-300 leading-relaxed">
        {message}
      </p>
    </motion.div>
  );
}
