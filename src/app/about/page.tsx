import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ReddHR — your trusted partner in human capital and custom software solutions since 2017.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
