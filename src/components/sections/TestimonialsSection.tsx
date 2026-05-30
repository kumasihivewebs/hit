"use client";

// import { motion } from "framer-motion";
// import { Section, SectionHeading } from "@/components/ui/Section";
// import { TestimonialCard } from "@/components/ui/Card";
// import { TESTIMONIALS } from "@/constants/testimonials";

export const TestimonialsSection = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6 },
  //   },
  // };

  return null;

  /* Success Stories section — commented out
  return (
    <Section className="bg-black">
      <SectionHeading
        subtitle="Success Stories"
        title="Hear From Our Graduates"
        description="See how HiT has transformed careers and launched companies across Africa."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {TESTIMONIALS.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <TestimonialCard
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
  */
};
