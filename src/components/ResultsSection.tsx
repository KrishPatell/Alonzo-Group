const RESULTS = [
  {
    code: "E2",
    location: "CANADA (TORONTO)",
    outcome: "VISA APPROVED",
  },
  {
    code: "E2",
    location: "MEXICO",
    outcome: "VISA APPROVED",
  },
  {
    code: "EB2",
    location: "NO RFE",
    outcome: "NIW APPROVED",
  },
  {
    code: "L1A",
    location: "CANADA BORDER",
    outcome: "VISA APPROVED",
  },
  {
    code: "L1A",
    location: "USCIS PROCESS",
    outcome: "VISA APPROVED",
  },
];

const ResultsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(115deg, #102D58 0%, #0B1F3D 55%, #06152B 100%)",
        }}
      />

      <div className="container relative mx-auto px-6 text-white">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-gold-gradient">
            THIS IS WHAT RESULTS SOUND LIKE
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop"
          ].map((imageUrl, index) => (
            <div key={index} className="relative aspect-[16/10.8] rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
              <img 
                src={imageUrl} 
                alt={`Testimonial video ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
              
              {/* Centered PLAY VIDEO text and progress bar */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 
                  className="text-white text-lg md:text-xl font-black uppercase tracking-wide mb-3"
                  style={{
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  PLAY VIDEO
                </h3>
                
                {/* Progress Bar */}
                <div className="w-3/4 max-w-xs h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{
                      width: '45%',
                      background: 'linear-gradient(90deg, #D4A574 0%, #B8865B 100%)'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left column */}
          <div className="flex flex-col items-start text-white gap-6">
            <div>
              <div className="text-[5.5rem] leading-none font-black tracking-tight text-gold-gradient">99</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.45em] text-white/80">
                SUCCESS RATE
              </div>
            </div>

            <div className="w-14 border-t border-white/40" />

            <div>
              <div className="text-[4rem] leading-none font-black tracking-tight text-gold-gradient">2,000</div>
              <div className="mt-3 text-base font-semibold uppercase tracking-[0.35em] text-white/90">
                APPROVALS
              </div>
            </div>
          </div>

          {/* Right columns */}
          <div className="flex-1 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {RESULTS.map((item) => (
              <div key={`${item.code}-${item.location}`} className="space-y-3 text-left">
                <div className="text-5xl font-black tracking-[0.02em] text-gold-gradient">{item.code}</div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  {item.location}
                </div>
                <div className="text-base font-semibold uppercase tracking-[0.28em] text-white">
                  {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
