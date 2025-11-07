import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import flagImage from "@/assets/us-flag.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("visas");

  const services = {
    visas: [
      { title: "E-2 VISA / CHANGE OF STATUS", category: "VISAS" },
      { title: "TN VISA", category: "VISAS" },
      { title: "E-1 VISA / CHANGE OF STATUS", category: "VISAS" },
      { title: "O1 VISA", category: "VISAS" },
      { title: "L-1 VISA / CHANGE OF STATUS", category: "VISAS" },
      { title: "B1/B2 VISA / CHANGE OF STATUS", category: "VISAS" },
    ],
    greencards: [
      { title: "EB-2 NIW", category: "GREEN CARDS" },
      { title: "EB-1A", category: "GREEN CARDS" },
      { title: "EB-5", category: "GREEN CARDS" },
      { title: "PERM", category: "GREEN CARDS" },
    ],
    citizenship: [
      { title: "NATURALIZATION", category: "CITIZENSHIP" },
      { title: "CITIZENSHIP THROUGH PARENTS", category: "CITIZENSHIP" },
    ],
  };

  return (
    <section id="practice-areas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-light text-sm font-medium tracking-wide uppercase mb-4">
            HIRE EXPERIENCE. STRATEGY. AND HEART
          </p>
          <h2 className="text-5xl font-black text-foreground">
            OUR IMMIGRATION SERVICES
          </h2>
        </div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* Left Sidebar - Categories */}
          <div className="space-y-4">
            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setActiveTab("visas")}
            >
              <img src={flagImage} alt="Visas" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 flex items-center justify-center font-black text-2xl text-primary-foreground transition-colors ${
                activeTab === "visas" ? "bg-primary/80" : "bg-primary/60 group-hover:bg-primary/70"
              }`}>
                VISAS
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setActiveTab("greencards")}
            >
              <img src={flagImage} alt="Green Cards" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 flex items-center justify-center font-black text-2xl text-primary-foreground transition-colors ${
                activeTab === "greencards" ? "bg-primary/80" : "bg-primary/60 group-hover:bg-primary/70"
              }`}>
                GREEN CARDS
              </div>
            </div>

            <div 
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setActiveTab("citizenship")}
            >
              <img src={flagImage} alt="Citizenship" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 flex items-center justify-center font-black text-xl text-primary-foreground transition-colors ${
                activeTab === "citizenship" ? "bg-primary/80" : "bg-primary/60 group-hover:bg-primary/70"
              }`}>
                CITIZENSHIP/<br/>NATURALIZATION
              </div>
            </div>
          </div>

          {/* Right - Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services[activeTab as keyof typeof services].map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden cursor-pointer border border-border bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:border-accent hover:shadow-2xl"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/10 to-white/0" />
                  <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80" />
                </div>
                <CardContent className="relative flex h-full flex-col justify-between p-7">
                  <div>
                    <p className="mb-3 text-base font-semibold uppercase tracking-[0.35em] text-accent transition-colors duration-300 group-hover:text-primary-foreground">
                      {service.category}
                    </p>
                    <h3 className="mb-6 font-black text-2xl leading-tight text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
          >
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
