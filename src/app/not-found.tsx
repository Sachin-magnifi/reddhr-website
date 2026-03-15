"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center"
        >
          <div className="font-display text-8xl font-bold text-primary sm:text-9xl">404</div>
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
