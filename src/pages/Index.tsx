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
    <>
      {/* Coming Soon - visible on mobile/tablet (< 1024px), hidden on desktop (>= 1024px) */}
      {/* Using Tailwind's lg: breakpoint (1024px) for reliable CSS-based hiding */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 block lg:hidden">
        <div className="text-center px-4 py-8 sm:py-12 md:py-16 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Coming Soon
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8">
            Our website is currently being optimized for mobile and tablet devices.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Please visit us on a desktop computer for the full experience.
          </p>
        </div>
      </div>

      {/* Full Website - hidden on mobile/tablet (< 1024px), visible on desktop (>= 1024px) */}
      {/* Using Tailwind's lg: breakpoint (1024px) for reliable CSS-based showing */}
      <div className="min-h-screen hidden lg:block">
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
    </>
  );
};

export default Index;
