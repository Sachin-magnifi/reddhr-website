"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Lightbulb, Brain, Trophy, Shield } from "lucide-react";

const ICONS = [Lightbulb, Brain, Trophy, Shield];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why ReddHR"
          title="Why Choose Us"
          subtitle="A unique combination of HR expertise and technology excellence."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-primary/30"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
