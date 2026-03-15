"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
