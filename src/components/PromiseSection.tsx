const AILA_LOGO = "https://www.roammigrationlaw.com/wp-content/uploads/2023/04/AILA-Partner-Logo.png";
const NYSBA_LOGO = "https://nysba.org/wp-content/uploads/2019/10/footer-logo.png";
const BEST_ATTORNEYS_LOGO = "https://jaklitschlawgroup.com/wp-content/uploads/2023/04/best-attorneys.png";

const PromiseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#0E4F97] text-xs md:text-sm font-semibold tracking-[0.45em] uppercase mb-5">
            ALONZI LAW GROUP
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.65rem] font-black text-[#0B1F3B] tracking-tight">
            OUR PROMISE
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Left: Quote and Story */}
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="pt-1">
                <svg
                  width="64"
                  height="52"
                  viewBox="0 0 64 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <defs>
                    <linearGradient id="gold-quote" x1="0" x2="64" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFC56D" />
                      <stop offset="1" stopColor="#B37615" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M26 0H14C6.268 0 0 6.268 0 14v22h20V23h-8c0-4.418 3.582-8 8-8h6V0Z"
                    fill="url(#gold-quote)"
                  />
                  <path
                    d="M64 0H52c-7.732 0-14 6.268-14 14v22h20V23h-8c0-4.418 3.582-8 8-8h6V0Z"
                    fill="url(#gold-quote)"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl md:text-[2.35rem] font-black italic text-[#0B1F3B] leading-[1.05] tracking-tight uppercase">
                  WE WIN FOR YOU —
                </p>
                <p className="text-2xl md:text-[2.35rem] font-black italic text-[#0B1F3B] leading-[1.05] tracking-tight uppercase">
                  BECAUSE WE'VE BEEN YOU.
                </p>
              </div>
            </div>

            <div className="pl-8 border-l-2 border-accent text-base md:text-lg leading-[1.9] text-[#2F2F2F]">
              Founded by an E-2 visa holder turned U.S. attorney — Alonzi Law Group PLLC helps global
              entrepreneurs, executives, and investors to live, build, and thrive in the United States —
              the land of opportunity.
            </div>

            {/* Trust badges */}
            <div className="flex flex-nowrap items-center gap-16">
              <div className="flex h-18 w-52 items-center justify-center bg-transparent">
                <img src={AILA_LOGO} alt="American Immigration Lawyers Association logo" className="h-18 w-auto object-contain" />
              </div>
              <div className="flex h-18 w-52 items-center justify-center bg-transparent">
                <img src={NYSBA_LOGO} alt="New York State Bar Association logo" className="h-18 w-auto object-contain" />
              </div>
              <div className="flex h-24 w-36 items-center justify-center bg-transparent">
                <img src={BEST_ATTORNEYS_LOGO} alt="Best Attorneys award logo" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Right: Value Props */}
          <div className="space-y-8 text-base md:text-lg leading-[1.9] text-[#3A3A3A]">
            <p>
              Our clients aren’t just case numbers. They are visionaries, builders, and dreamers. From first-time
              entrepreneurs to established multinational corporations, we treat every case like it’s our own.
            </p>

            <p>
              When you hire Alonzi Law Group, you hire <span className="font-semibold text-[#0B1F3B]">experience, strategy, and heart</span>.
              When clients come to us, they get more than legal representation. They get a team that stands beside them —
              accessible, responsive, and relentlessly committed to success.
            </p>

            <p>
              At Alonzi Law Group, <span className="font-semibold text-[#0B1F3B]">you work directly with the main attorney</span> who develops every strategy,
              oversees every case, and ensures every detail aligns with winning. We’re approachable and transparent —
              <span className="font-semibold text-[#0B1F3B]"> our services are accessible, not overpriced</span>, because opportunity should not depend on privilege.
            </p>

            <p>
              Our clients come from every continent and background, and they all receive the same dedication, respect, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
