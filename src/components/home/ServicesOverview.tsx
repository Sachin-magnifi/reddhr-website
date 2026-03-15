"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

export function ServicesOverview() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="What We Do"
          subtitle="From custom software to strategic HR — comprehensive solutions tailored to your business needs."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              slug={service.slug}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
