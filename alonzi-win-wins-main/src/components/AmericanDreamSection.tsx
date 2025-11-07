import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import skylineImage from "@/assets/nyc-skyline.jpg";

const AmericanDreamSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={skylineImage} 
          alt="New York City Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-light/70" />
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-[12rem] lg:text-[18rem] font-black text-primary-foreground whitespace-nowrap">
          ALONZI LAW GROUP
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary-foreground text-sm font-medium tracking-wide uppercase mb-6">
            WINNING ISN'T OPTIONAL — IT'S WHO WE ARE
          </p>
          
          <h2 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4">
            YOUR AMERICAN DREAM
          </h2>
          <h2 className="text-5xl md:text-7xl font-black mb-12">
            <span className="text-gold-gradient">STARTS NOW</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-primary-foreground font-medium">
              READY TO BEGIN YOUR U.S. JOURNEY?
            </p>
            <p className="text-3xl font-black">
              <span className="text-gold-gradient">WE'LL GUIDE YOU EVERY STEP.</span>
            </p>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-10 py-7 h-auto mt-8"
            >
              <Phone className="mr-3 h-5 w-5" />
              +1(919) 328 -1881
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmericanDreamSection;
