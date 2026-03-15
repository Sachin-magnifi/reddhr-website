"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-[350px] lg:w-[400px] rounded-2xl p-6 lg:p-8",
        "border border-border/50 bg-card",
        "dark:border-white/[0.08] dark:bg-white/[0.03] dark:backdrop-blur-xl",
        className
      )}
    >
      <Quote className="mb-4 h-8 w-8 text-primary/30" />

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
