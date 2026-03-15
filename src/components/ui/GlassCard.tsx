"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  glow?: boolean;
  hover?: boolean;
}

export function GlassCard({
  className,
  glow = false,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        "dark:border-white/[0.08] dark:bg-white/[0.03]",
        "light:border-border light:bg-card",
        hover &&
          "transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.06]",
        glow && "shadow-[0_0_30px_rgba(229,9,20,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
