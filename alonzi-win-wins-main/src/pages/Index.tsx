import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import PromiseSection from "@/components/PromiseSection";
import AmericanDreamSection from "@/components/AmericanDreamSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AttorneySection from "@/components/AttorneySection";
import PhilosophySection from "@/components/PhilosophySection";
import ResourceSection from "@/components/ResourceSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ResultsSection />
      <PromiseSection />
      <AmericanDreamSection />
      <ServicesSection />
      <TestimonialsSection />
      <AttorneySection />
      <PhilosophySection />
      <ResourceSection />
      <FooterSection />
    </div>
  );
};

export default Index;
