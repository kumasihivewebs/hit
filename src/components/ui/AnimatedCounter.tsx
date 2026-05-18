"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  label: string;
  description: string;
  duration?: number;
}

export const AnimatedCounter = ({
  value,
  label,
  description,
  duration = 2,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        const increment = Math.ceil(value / (duration * 60));
        return Math.min(prev + increment, value);
      });
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isVisible, value, duration]);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      className="text-center space-y-2"
    >
      <div className="text-5xl sm:text-6xl font-bold text-orange-400">
        {displayValue.toLocaleString()}
        <span className="text-3xl ml-2">+</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{label}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </motion.div>
  );
};
