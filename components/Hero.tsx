export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05050A] flex items-center justify-center pt-[220px] pb-[200px]">

      {/* --- BACKGROUND (unchanged) --- */}
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
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/50 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/50 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
      </div>

      <div className="absolute -top-72 -left-40 w-[1500px] h-[340px] rotate-[-22deg] bg-gradient-to-r from-blue-600/50 to-purple-500/40 blur-[110px]" />
      <div className="absolute bottom-[-240px] right-[-200px] w-[1500px] h-[340px] rotate-[18deg] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[110px]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] left-[-12%] w-[42%] h-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[20deg] blur-md opacity-40 animate-sweep"></div>
        <div className="absolute top-[60%] right-[-12%] w-[48%] h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-[32%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[42%] left-[68%] w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[57%] left-[46%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-[70%] left-[50%] w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-[78%] left-[22%] w-[2px] h-[2px] bg-white/60 rounded-full animate-pulse"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-6 max-w-[1050px]">

        {/* Modern cleaner heading */}
        <h1 className="text-white font-extrabold leading-[1.05] tracking-tight mb-12">
          <span className="block text-[82px] md:text-[92px]">
            We Build Intelligent
          </span>
          <span className="block text-[88px] md:text-[102px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
            Digital Experiences
          </span>
        </h1>

        {/* Softer clean subline */}
        <p className="text-soft text-[22px] md:text-[26px] leading-relaxed max-w-3xl mx-auto mb-20 opacity-90">
          AI, Apps, Web & Data engineering crafted for ambitious modern brands.
        </p>

        {/* Premium neon glass buttons */}
        <div className="flex justify-center gap-8 mb-24">

          <button className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/30 to-purple-600/30 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/40 hover:to-purple-600/40 transition 
            shadow-[0_0_25px_rgba(0,0,0,0.4)]">
            Start Project
          </button>

          <button className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-white/5 backdrop-blur-xl border border-white/15 
            hover:bg-white/10 hover:border-white/25 transition">
            View Work
          </button>

        </div>

        {/* Bigger metrics */}
        <div className="flex justify-center gap-20 text-white/90">

          <div className="text-center">
            <p className="text-6xl font-bold text-white">40+</p>
            <p className="text-soft text-lg mt-2">Projects</p>
          </div>

          <div className="text-center">
            <p className="text-6xl font-bold text-white">15+</p>
            <p className="text-soft text-lg mt-2">AI Systems</p>
          </div>

          <div className="text-center">
            <p className="text-6xl font-bold text-white">99%</p>
            <p className="text-soft text-lg mt-2">Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}
