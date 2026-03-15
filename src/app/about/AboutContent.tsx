"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY, TEAM_MEMBERS } from "@/lib/constants";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const VALUES = [
  { icon: Target, title: "Mission", description: "To empower businesses with innovative HR technology and custom software solutions that drive growth and operational excellence." },
  { icon: Eye, title: "Vision", description: "To be India's most trusted HR technology partner, known for delivering world-class solutions that transform how businesses manage talent." },
  { icon: Heart, title: "Values", description: "Innovation, integrity, and client success are at the core of everything we do. We build lasting partnerships, not just software." },
  { icon: Sparkles, title: "Culture", description: "We foster a culture of continuous learning, collaboration, and excellence where every team member can thrive and make an impact." },
];

const TIMELINE = [
  { year: "2017", title: "Founded in Mumbai", description: "ReddHR was born with a vision to bridge the gap between HR expertise and technology innovation." },
  { year: "2019", title: "Expanded Service Offerings", description: "Added custom CRM and enterprise software development to our portfolio alongside HR services." },
  { year: "2021", title: "50+ Clients Milestone", description: "Reached 50 satisfied clients across multiple industries including IT, finance, and healthcare." },
  { year: "2023", title: "Mobile & Offshore Development", description: "Launched mobile application development and offshore development services for global clients." },
  { year: "2025", title: "AI-Powered ATS Platform", description: "Developed our flagship AI-powered Applicant Tracking System, revolutionizing recruitment for Indian startups." },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              About Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Building the Future of HR Technology
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Since {COMPANY.founded}, we&apos;ve been on a mission to transform how businesses
              manage talent and build software. Based in {COMPANY.address.split(",")[0]}, we serve clients across India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border/50 bg-card p-6 dark:border-white/[0.08] dark:bg-white/[0.03]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border/50 bg-secondary/30 py-24 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="Milestones"
            subtitle="Key moments in our growth story."
          />

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

            <div className="space-y-12">
              {TIMELINE.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative flex flex-col pl-12 md:flex-row md:pl-0 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[11px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                  <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-sm font-bold text-primary">{event.year}</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="Meet the People Behind ReddHR"
            subtitle="A passionate team dedicated to your success."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center dark:border-white/[0.08] dark:bg-white/[0.03]"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-xl font-bold text-primary">
                  {member.avatar}
                </div>
                <h3 className="font-display text-sm font-bold text-foreground">{member.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
