"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-linear-to-b from-slate-950 to-black py-16 sm:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Image
              src="/HIT%20New%20Logo%20Transp-bg.png"
              alt="Hive Institute of Technology"
              width={220}
              height={110}
              unoptimized
              className="h-14 w-44 object-contain object-left"
            />
            <p className="text-slate-400 text-sm">
              Practical training in innovation, emerging technologies, and
              hands-on problem solving.
            </p>
            <div className="space-y-1 text-sm text-slate-400">
              <p>Kentinkrono, Kumasi</p>
              <a href="tel:+233204343066" className="block hover:text-white transition-colors">
                020 434 3066
              </a>
              <a href="mailto:info@hiveinstitute.co" className="block hover:text-white transition-colors">
                info@hiveinstitute.co
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Platform
            </h3>
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* More Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Resources
            </h3>
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              Connect
            </h3>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Hive Institute of Technology. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
