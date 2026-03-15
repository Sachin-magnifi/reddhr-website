"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceDetailContentProps {
  slug: string;
}

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Key Features
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {service.features.map((feature) => (
              <motion.div
                key={feature}
                variants={fadeInUp}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 dark:border-white/[0.08] dark:bg-white/[0.03]"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-border/50 bg-secondary/30 py-24 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Related Services
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon;
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-primary/30"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{related.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{related.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
