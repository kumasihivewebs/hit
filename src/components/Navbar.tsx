"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { buttonVariants } from "./ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="section-container flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
            <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="hidden sm:inline">HiT</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-white bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/admissions"
            className={buttonVariants({ size: "md", className: "hidden sm:inline-flex" })}
          >
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        animate={isOpen ? { height: "auto" } : { height: 0 }}
        initial={{ height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-white/10"
      >
        <div className="section-container py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                isActive(link.href)
                  ? "text-white bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/admissions"
              className={buttonVariants({ size: "md", className: "w-full" })}
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
