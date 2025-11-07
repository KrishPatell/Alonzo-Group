import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBackgroundImage from "@/assets/Group 33392.png";

const HeroSection = () => {
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const mainHeadlineRef = useRef<HTMLHeadingElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for sequential animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate background image
      tl.from(backgroundRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
      });

      // Animate top text with slide up effect
      tl.from(
        topTextRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 0.8,
        },
        "-=0.8"
      );

      // Animate main headline with scale and fade
      tl.from(
        mainHeadlineRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 1,
        },
        "-=0.4"
      );

      // Animate bottom text
      tl.from(
        bottomTextRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Coming Soon Banner for Mobile/Tablet */}
      <section className="lg:hidden relative min-h-screen flex items-center justify-center bg-primary-dark">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gold-gradient">COMING SOON</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-medium">
            Our website is currently under construction. Please check back soon.
          </p>
        </div>
      </section>

      {/* Full Hero Section for Desktop */}
      <section
        id="home"
        className="hidden lg:block relative min-h-[900px] md:min-h-screen flex items-end justify-center overflow-hidden"
      >
        {/* Background Image - Using your Figma design */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 pt-24 pb-20">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Text - Small White Text */}
            <div className="text-center">
              <p 
                ref={topTextRef}
                className="text-white text-3xl font-bold tracking-[0.06em] uppercase"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.06em'
                }}
              >
                YOU GET TO MOVE TO THE U.S. ONLY IF WE WIN — AND WE WIN
              </p>
            </div>
            
            {/* Main Headline - Large Golden Text */}
            <div className="text-center w-full">
              <h1 
                ref={mainHeadlineRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[9rem] font-black leading-[0.85] tracking-tight whitespace-nowrap mx-auto"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 900,
                  backgroundImage: 'linear-gradient(90deg, #FFC56D 0%, #B37615 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '100% 100%',
                  textShadow: '0 10px 28px rgba(179, 118, 21, 0.35)',
                  letterSpacing: '-0.02em',
                  textAlign: 'center',
                  width: 'fit-content',
                  margin: '0 auto'
                }}
              >
                LET'S WIN TOGETHER
              </h1>
            </div>

            {/* Bottom Text - Medium White Text */}
            <div className="text-center">
              <p 
                ref={bottomTextRef}
                className="text-white text-base md:text-lg font-medium tracking-[0.2em] uppercase"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.2em'
                }}
              >
                START YOUR U.S.IMMIGRATION JOURNEY TODAY
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
