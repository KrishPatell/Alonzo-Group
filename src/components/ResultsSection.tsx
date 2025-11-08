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
          {[1, 2, 3, 4].map((video) => (
            <div key={video} className="relative aspect-video rounded-lg overflow-hidden bg-primary-dark/50 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-6 transition-all">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white font-semibold text-sm uppercase tracking-wider bg-black/40 px-3 py-1 rounded">
                  PLAY VIDEO
                </span>
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
