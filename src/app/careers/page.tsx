import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the ReddHR team. Explore career opportunities in HR technology and software development.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
