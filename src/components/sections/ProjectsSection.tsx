"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/Card";
import { STUDENT_PROJECTS } from "@/constants/projects";

export const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section className="bg-slate-950">
      <SectionHeading
        subtitle="Student Showcase"
        title="Real Projects. Real Impact."
        description="See what HiT students build. From AI systems to robotics projects—solutions addressing real-world challenges."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {STUDENT_PROJECTS.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
