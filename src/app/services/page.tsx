import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom CRM, HRMS, mobile apps, enterprise software, website development, and strategic HR support from ReddHR.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
