"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  slug,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 lg:p-8",
        "border border-border/50 bg-card",
        "dark:border-white/[0.08] dark:bg-white/[0.03] dark:backdrop-blur-xl",
        "transition-all duration-500",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "dark:hover:border-primary/30 dark:hover:bg-white/[0.06]",
        "hover:-translate-y-2"
      )}
    >
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-500 group-hover:via-primary/70" />

      <div className="relative z-10">
        <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mb-3 font-display text-xl font-bold text-foreground">
          {title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Background glow on hover */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
