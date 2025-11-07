import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import libertyImage from "@/assets/liberty-flag.jpg";

const testimonials = [
  {
    name: "SHELLY P.",
    text: "Kate really knows her stuff. She walked me through the E-2 visa process with patience and confidence, which made me feel a lot calmer. The turnaround was fast, and I truly appreciated how professional and responsive the whole team was.",
    rating: 5,
  },
  {
    name: "LUIS T.",
    text: "I have worked with multiple attorneys before, but working with Kate has truly been a pleasure. Their 24/7 support, vast knowledge of immigration law, and ability to explain complex legal terms simply made all the difference. We got our E-2 Visas in June 2023 and couldn't be happier!",
    rating: 5,
  },
  {
    name: "PETER G.",
    text: "I've been working with Kate and her team for over a year and a half, and the experience has been exceptional. They supported me every step of the way through the E-2 visa process, offering knowledgeable guidance and consistent communication.",
    rating: 5,
  },
  {
    name: "MARIA V.",
    text: "From the discovery call to the consular interview, the entire team was prepared and encouraging. They knew exactly what evidence we needed and kept us accountable so we never missed a deadline.",
    rating: 5,
  },
  {
    name: "HASSAN B.",
    text: "Professional, transparent pricing, and truly invested in our success. Their business plan review and immigration strategy were on point, and our L-1 petition was approved without an RFE.",
    rating: 5,
  },
  {
    name: "EMILY R.",
    text: "Kate’s firm felt like an extension of our company. They answered every question, even late at night, and gave us confidence to expand in the U.S. market.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={libertyImage} alt="Statue of Liberty" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#061537]/95" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-14 text-right">
          <div className="inline-flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" />
            <p className="text-xs font-semibold tracking-[0.5em] uppercase">Testimonials</p>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-tight text-white">
            WINNING ISN'T OPTIONAL —<br /> IT'S WHO WE ARE
          </h2>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="keen-slider__slide">
                <Card className="relative h-full border border-white/10 bg-transparent">
                  <CardContent className="relative flex h-full flex-col justify-between p-8">
                    <div>
                      <div className="flex items-center gap-3 text-accent">
                        <svg
                          width="44"
                          height="36"
                          viewBox="0 0 64 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-accent"
                        >
                          <path
                            d="M26 0H14C6.268 0 0 6.268 0 14v22h20V23h-8c0-4.418 3.582-8 8-8h6V0Z"
                            fill="currentColor"
                          />
                          <path
                            d="M64 0H52c-7.732 0-14 6.268-14 14v22h20V23h-8c0-4.418 3.582-8 8-8h6V0Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div className="h-px flex-1 bg-accent/40" />
                      </div>
                      <p className="mt-6 text-lg italic leading-relaxed text-white/90">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="mt-8 border-t border-white/15 pt-6">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-black tracking-[0.3em] text-accent uppercase">
                          {testimonial.name}
                        </p>
                        <div className="flex gap-1 text-white">
                          {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-white text-white" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-dashed border-white/20 pt-8">
            <div className="flex gap-3">
              <Button
                size="icon"
                onClick={handlePrev}
                className="h-12 w-12 rounded-none border-2 border-accent bg-transparent text-accent transition hover:bg-accent hover:text-primary-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                onClick={handleNext}
                className="h-12 w-12 rounded-none border-2 border-accent bg-transparent text-accent transition hover:bg-accent hover:text-primary-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              <span className="text-accent">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="h-px w-10 bg-white/30" />
              <span>{String(testimonials.length).padStart(2, "0")}</span>
            </div>

            <Button className="rounded-none bg-accent px-10 py-6 text-base font-black uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-accent-hover">
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
