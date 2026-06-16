"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const FUTURE_COURSES = [
  "Robotics",
  "Blockchain",
  "Digital Art and Animation",
  "3D Modelling and Printing",
  "UX/UI for Mobile and Web Design",
  "Introduction to Embedded Systems",
];

export const TestimonialsSection = () => {
  return (
    <Section className="bg-black">
      <SectionHeading
        subtitle="Future Courses"
        title="What HiT Is Preparing Next"
        description="The HiT materials point toward additional pathways in robotics, blockchain, creative technology, design, and embedded systems."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {FUTURE_COURSES.map((course) => (
          <Card key={course} hover>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-400" />
              <div>
                <h3 className="text-lg font-bold text-white">{course}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Planned as HiT expands its short-course calendar.
                </p>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
};
