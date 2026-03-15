"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { Zap, Users, GraduationCap, Heart, ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const PERKS = [
  { icon: Zap, title: "Impactful Work", description: "Build products that transform how businesses manage talent across India." },
  { icon: Users, title: "Small Team, Big Impact", description: "Work in a tight-knit team where every voice matters and every contribution counts." },
  { icon: GraduationCap, title: "Learning & Growth", description: "Continuous learning opportunities with access to courses, conferences, and mentorship." },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible hours, remote-friendly culture, and a team that respects your time." },
];

const OPENINGS = [
  { title: "Full Stack Developer", type: "Full-time", location: "Mumbai / Remote", description: "Build and maintain our ATS platform and client projects using Next.js, React, and Node.js." },
  { title: "UI/UX Designer", type: "Full-time", location: "Mumbai", description: "Design intuitive interfaces for our HR technology products and client applications." },
  { title: "HR Consultant", type: "Full-time", location: "Mumbai", description: "Provide strategic HR guidance to our clients and help shape our internal HR products." },
];

export function CareersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Careers
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Join Our Growing Team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We&apos;re building the future of HR technology. If you&apos;re passionate about making
              an impact, we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Join Us"
            title="Life at ReddHR"
            subtitle="More than just a job — a place where you can grow, learn, and make a difference."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border/50 bg-card p-6 dark:border-white/[0.08] dark:bg-white/[0.03]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{perk.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-y border-border/50 bg-secondary/30 py-24 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Open Positions"
            title="Current Openings"
            subtitle="Find your next role at ReddHR."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {OPENINGS.map((job) => (
              <motion.div
                key={job.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-primary/30"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{job.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <Link href={`mailto:${COMPANY.email}?subject=Application: ${job.title}`}>
                    <Button size="sm" variant="secondary">
                      Apply <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Don&apos;t See Your Role?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We&apos;re always looking for talented people. Send us your resume and we&apos;ll
              keep you in mind for future opportunities.
            </p>
            <div className="mt-8">
              <Link href={`mailto:${COMPANY.email}?subject=General Application`}>
                <Button size="lg">
                  Send Your Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
