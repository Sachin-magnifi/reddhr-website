import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TechStackShowcase } from "@/components/home/TechStackShowcase";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <TechStackShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
