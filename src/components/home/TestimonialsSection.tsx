"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by startups and enterprises across India."
        />
      </div>

      {/* Scrolling testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="flex cursor-grab gap-6 px-4 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          dragElastic={0.1}
        >
          <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]" />
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
          {/* Repeat for infinite feel */}
          {TESTIMONIALS.slice(0, 2).map((testimonial) => (
            <TestimonialCard
              key={`repeat-${testimonial.name}`}
              {...testimonial}
            />
          ))}
          <div className="flex-shrink-0 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
