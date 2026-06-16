"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
          <Link href="/" className="flex items-center">
            <Image
              src="/HIT%20New%20Logo%20Transp-bg.png"
              alt="Hive Institute of Technology"
              width={180}
              height={90}
              priority
              unoptimized
              className="h-10 w-32 object-contain object-left sm:h-12 sm:w-40"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
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
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
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
        id="mobile-nav"
        className="lg:hidden overflow-hidden border-t border-white/10"
      >
        <div className="section-container py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block px-4 py-2.5 rounded-lg transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
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
