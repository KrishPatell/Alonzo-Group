import { Button } from "@/components/ui/button";
import attorneyImage from "@/assets/about-photo.png";

const AttorneySection = () => {
  return (
    <section className="py-24 bg-background">
      {/* Large background text */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 text-center">
          <div className="text-[8rem] lg:text-[12rem] font-black text-muted-foreground/5 leading-none">
            LET'S MAKE IT HAPPEN
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="space-y-6">
              <div>
                <p className="text-primary-light text-sm font-medium tracking-wide uppercase mb-2">
                  ALONZI LAW GROUP
                </p>
                <h2 className="text-5xl font-black text-foreground mb-8">
                  MEET<br/>
                  ATTORNEY<br/>
                  KATE ALONZI
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Alonzi Law Group PLLC is a U.S. immigration law firm founded by Kate Alonzi, an attorney 
                  who lived the immigration journey herself. Ten years ago, Kate came to the United States 
                  on an E–2 visa — a life-changing experience that shaped both her career and her mission.
                </p>
                <p>
                  Today, that same drive fuels her practice: helping others achieve their American dream.
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold mt-6"
              >
                MORE ABOUT KATE
              </Button>

              <div className="pt-8 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground">E-2 VISA LAWYERS</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative lg:justify-self-end">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/40 shadow-xl aspect-[4/5]">
                <img 
                  src={attorneyImage} 
                  alt="Attorney Kate Alonzi" 
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default AttorneySection;
