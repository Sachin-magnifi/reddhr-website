"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function StatsSection() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-20 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2 + index * 0.3}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
