export default function CTA() {
  return (
    <section className="relative w-full py-[180px] px-6 overflow-hidden bg-[#05050A]">

      {/* BACKGROUND SOFT AURA GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[140px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[280px] bg-gradient-to-t from-purple-500/25 to-transparent blur-[120px]" />
      </div>

      {/* HOLOGRAPHIC RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.15]">
        <div className="w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        <div className="absolute w-[850px] h-[850px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[1100px] h-[1100px] border border-white/5 rounded-full"></div>
      </div>

      {/* MICRO PARTICLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <div className="absolute top-[35%] left-[30%] w-1 h-1 bg-blue-300/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[48%] left-[65%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-[63%] left-[48%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-white font-extrabold leading-[1.1] tracking-tight mb-6">
          <span className="block text-5xl md:text-6xl">
            Let's Create Something
          </span>

          <span className="block text-6xl md:text-7xl bg-clip-text text-transparent
            bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
            Truly Intelligent
          </span>
        </h2>

        {/* SUBLINE */}
        <p className="text-soft text-lg md:text-xl max-w-2xl mx-auto mb-16 opacity-90">
          Partner with us to design AI-powered digital systems that move your business forward.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-8">

          <button className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition 
            shadow-[0_0_25px_rgba(0,0,0,0.4)]">
            Start Your Project
          </button>

          <button className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-white/5 backdrop-blur-xl border border-white/15 
            hover:bg-white/10 hover:border-white/25 transition">
            Contact Team
          </button>

        </div>

      </div>
    </section>
  );
}
