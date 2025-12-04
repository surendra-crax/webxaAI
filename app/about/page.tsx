export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BG (GRID + LINES + GLOW) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-gradient-to-r from-blue-600/40 to-purple-500/40 blur-[120px]" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[1300px] h-[300px] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[120px]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 py-[160px]">

        {/* HERO */}
        <div className="text-center mb-[140px]">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] tracking-tight mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h1>
          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We engineer AI-driven digital systems with precision, clarity and a strong product mindset.
          </p>
        </div>

        {/* --------------------------------------------- */}
        {/* MISSION – WITH REAL IMAGE */}
        {/* --------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[160px]">

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-soft text-lg leading-relaxed opacity-90">
              To build intelligent digital ecosystems powered by strong engineering, clean architecture
              and future-ready automation.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-white/10">

            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=85"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Mission"
            />

            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "120px 120px"
              }}
            />
          </div>
        </div>

        {/* --------------------------------------------- */}
        {/* VISION – WITH REAL IMAGE */}
        {/* --------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[160px]">

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Vision
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Building Intelligent Digital Futures
              </span>
            </h2>

            <p className="text-soft text-lg md:text-xl leading-relaxed opacity-90 mb-4">
              We envision a world where AI, strategy and engineering merge into powerful,
              self-optimising digital systems.
            </p>

            <p className="text-soft text-lg leading-relaxed opacity-90">
              Our goal is to make every business future-proof with automation-centric engineering.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-white/10">

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Vision"
            />

            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "120px 120px"
              }}
            />
          </div>
        </div>

        {/* --------------------------------------------- */}
        {/* PHILOSOPHY – WITH REAL IMAGE */}
        {/* --------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[200px]">

          {/* Text */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Our Philosophy</h3>
            <p className="text-soft text-lg max-w-3xl opacity-90 leading-relaxed">
              Technology should simplify—not complicate.  
              We focus on clarity, thoughtful design and engineering logic,
              ensuring every system is built with intent, longevity and strategic value.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-white/10">

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Philosophy"
            />

            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "120px 120px"
              }}
            />
          </div>
        </div>

        {/* --------------------------------------------- */}
        {/* FINAL CTA */}
        {/* --------------------------------------------- */}
        <div className="text-center py-[120px]">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Build Your Future with WebX AI
          </h3>
          <button className="px-14 py-5 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition">
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
}
