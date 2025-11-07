import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Philosophy */}
          <div className="border-l-4 border-accent pl-8 space-y-6">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gold-gradient">OUR PHILOSOPHY</span>
            </h2>
            
            <div className="text-primary-foreground leading-relaxed space-y-4">
              <p>
                As a lawyer, I am as passionate about <span className="font-bold">winning</span> as I am about 
                changing people's lives. Because I know what it feels like to stand at the starting line of a 
                dream — uncertain but determined. My clients trust me to get them across that finish line. And I do.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold mt-6"
            >
              SCHEDULE A FREE CONSULTATION
            </Button>
          </div>

          {/* Right: We Believe */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black">
              <span className="text-gold-gradient">WE BELIEVE</span>
            </h2>

            <ul className="space-y-3 text-primary-foreground text-base leading-relaxed list-disc list-inside">
              <li>Every client deserves the chance to pursue their dream.</li>
              <li>Every background has a path forward.</li>
              <li>Every case has a winning strategy — we just have to find it.</li>
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-primary-light/20">
              <div>
                <div className="text-5xl font-black mb-2 text-gold-gradient">99</div>
                <div className="text-sm font-medium">SUCCESS RATE</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2 text-gold-gradient">2,000</div>
                <div className="text-sm font-medium">APPROVALS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
