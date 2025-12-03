export default function Hero() {
  return (
    <section className="
      relative min-h-screen w-full overflow-hidden bg-[#05050A]
      flex items-center justify-center
      pt-[180px] pb-[160px]
      md:pt-[220px] md:pb-[200px]
    ">

      {/* --- BACKGROUND (unchanged) --- */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* VERTICAL NEON LINES */}
      <div className="absolute inset-0 opacity-[0.04] md:opacity-[0.05] pointer-events-none">
        <div className="hidden md:block absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/50 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[1px] md:w-[2px] h-full bg-gradient-to-b from-blue-400/50 to-transparent blur-sm"></div>
        <div className="hidden md:block absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
      </div>

      {/* DIAGONAL GLOWS (hidden on mobile for readability) */}
      <div className="hidden md:block absolute -top-72 -left-40 w-[1500px] h-[340px] rotate-[-22deg] bg-gradient-to-r from-blue-600/50 to-purple-500/40 blur-[110px]" />
      <div className="hidden md:block absolute bottom-[-240px] right-[-200px] w-[1500px] h-[340px] rotate-[18deg] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[110px]" />

      {/* LIGHT STREAKS (hide on mobile) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] left-[-12%] w-[42%] h-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[20deg] blur-md opacity-40 animate-sweep"></div>
        <div className="absolute top-[60%] right-[-12%] w-[48%] h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow"></div>
      </div>

      {/* PARTICLES (scaled for mobile) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[27%] left-[30%] w-[2px] h-[2px] bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[46%] left-[68%] w-[2px] h-[2px] bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[59%] left-[51%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-[1050px]">

        {/* Responsive heading */}
        <h1 className="text-white font-extrabold tracking-tight mb-10 md:mb-12 leading-[1.1] md:leading-[1.05]">
          <span className="block text-[40px] sm:text-[58px] md:text-[82px]">
            We Build Intelligent
          </span>
          <span className="
            block 
            text-[46px] sm:text-[64px] md:text-[102px]
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500
          ">
            Digital Experiences
          </span>
        </h1>

        {/* Subline - reduced for mobile */}
        <p className="
          text-soft 
          text-[16px] sm:text-[18px] md:text-[26px]
          leading-relaxed mx-auto max-w-[90%] md:max-w-3xl
          mb-12 md:mb-20 opacity-90
        ">
          AI, Apps, Web & Data engineering crafted for ambitious modern brands.
        </p>

        {/* Premium buttons - shrink on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 mb-20">

          <button className="
            px-10 py-3 sm:px-14 sm:py-4
            rounded-xl text-white text-[15px] sm:text-lg font-medium
            bg-gradient-to-r from-blue-600/30 to-purple-600/30
            border border-white/20 backdrop-blur-xl
            hover:from-blue-600/40 hover:to-purple-600/40 
            transition shadow-[0_0_20px_rgba(0,0,0,0.35)]
          ">
            Start Project
          </button>

          <button className="
            px-10 py-3 sm:px-14 sm:py-4
            rounded-xl text-white text-[15px] sm:text-lg font-medium
            bg-white/5 backdrop-blur-xl border border-white/15
            hover:bg-white/10 hover:border-white/25 transition
          ">
            View Work
          </button>

        </div>

        {/* Metrics - stack on mobile */}
        <div className="
          flex flex-col sm:flex-row justify-center 
          gap-10 sm:gap-20 text-white/90
        ">
          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">40+</p>
            <p className="text-soft text-base sm:text-lg mt-2">Projects</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">15+</p>
            <p className="text-soft text-base sm:text-lg mt-2">AI Systems</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">99%</p>
            <p className="text-soft text-base sm:text-lg mt-2">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
