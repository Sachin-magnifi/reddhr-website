"use client";

import { motion } from "framer-motion";
import { wordReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i + delay}
          initial="hidden"
          animate="visible"
          variants={wordReveal}
          className="mr-[0.25em] inline-block"
          style={{ perspective: "400px" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
