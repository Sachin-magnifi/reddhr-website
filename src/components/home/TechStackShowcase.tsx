"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden py-3">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        <div className="flex gap-4">
          {[...items, ...items].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 rounded-lg border border-border/50 bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-primary/30"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechStackShowcase() {
  const firstHalf = TECH_STACK.slice(0, 10);
  const secondHalf = TECH_STACK.slice(10);

  return (
    <section className="relative border-y border-border/50 bg-secondary/30 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology"
          title="Technologies We Work With"
          subtitle="Cutting-edge tools and frameworks to build world-class solutions."
        />
      </div>

      <div className="space-y-2">
        <MarqueeRow items={firstHalf} />
        <MarqueeRow items={secondHalf} reverse />
      </div>
    </section>
  );
}
