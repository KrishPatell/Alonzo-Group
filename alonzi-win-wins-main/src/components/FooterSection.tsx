import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Linkedin } from "lucide-react";
import skylineImage from "@/assets/nyc-skyline.jpg";

const FooterSection = () => {
  return (
    <footer id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={skylineImage} 
          alt="Minneapolis Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary-dark/95 to-primary-dark" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="text-primary-foreground space-y-8">
            <div>
              <p className="text-sm font-medium tracking-wide uppercase mb-4 text-muted-foreground">
                AT ALONZI LAW GROUP
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="block text-primary-foreground">WINNING ISN'T OPTIONAL</span>
                <span className="block text-gold-gradient">— IT'S WHO WE ARE</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2 text-accent">READY TO START YOUR U.S. JOURNEY?</p>
                <p className="text-2xl font-black text-gold-gradient">LET'S WIN TOGETHER.</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">PHONE</p>
                <p className="text-xl font-bold">+1(919) 328 -1881</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">ADDRESS</p>
                <p>Alonzi Law Group PLLC</p>
                <p>New York, NY</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  GET DIRECTIONS
                </Button>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">SOCIAL MEDIA</p>
                <div className="flex gap-3">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-primary-dark/40 backdrop-blur-sm p-8 rounded-lg border border-primary-light/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">
              SCHEDULE A FREE CONSULTATION
            </h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Full Name" 
                  className="bg-primary/50 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Input 
                  placeholder="Company" 
                  className="bg-primary/50 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-primary/50 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-primary/50 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
              
              <Textarea 
                placeholder="Message" 
                rows={5}
                className="bg-primary/50 border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="mt-24 text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none text-gold-gradient">
            ALONZI LAW
          </h2>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-light/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>COPYRIGHT © 2025 LT VISA LAWYER. ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">DISCLAIMER</a>
            <a href="#" className="hover:text-accent transition-colors">SITE MAP</a>
            <a href="#" className="hover:text-accent transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
