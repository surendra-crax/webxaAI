"use client";

export default function WhyWebXAI() {
  return (
    <section className="relative w-full py-[200px] px-6 overflow-hidden bg-[#05050A]">

      {/* UNIVERSAL BG TEMPLATE */}
      {/* FUTURISTIC GRID */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* VERTICAL NEON LINES */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/60 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/60 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/50 to-transparent blur-sm"></div>
      </div>

      {/* DIAGONAL GLOW BARS */}
      <div className="absolute -top-56 -left-40 w-[1300px] h-[300px] rotate-[-22deg] bg-gradient-to-r from-blue-600/60 to-purple-500/40 blur-[100px]"></div>
      <div className="absolute bottom-[-200px] right-[-180px] w-[1300px] h-[270px] rotate-[18deg] bg-gradient-to-r from-purple-600/50 to-blue-400/40 blur-[100px]"></div>

      {/* LIGHT STREAKS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-[-10%] w-[40%] h-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[20deg] blur-md opacity-40 animate-sweep"></div>
        <div className="absolute top-[60%] right-[-10%] w-[45%] h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow"></div>
      </div>

      {/* MICRO PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[28%] left-[30%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[65%] w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[55%] left-[45%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-[67%] left-[52%] w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-[72%] left-[20%] w-[2px] h-[2px] bg-white/60 rounded-full animate-pulse"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1250px] mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h2>

          <p className="text-soft text-xl max-w-2xl mx-auto">
            Engineering excellence combined with AI-native product thinking.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-[900px] mx-auto">

          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]
            bg-gradient-to-b from-blue-400 via-purple-400 to-transparent 
            shadow-[0_0_25px_#7F5BFF] opacity-90"></div>

          <div className="flex flex-col gap-20">

            <WhyItem
              side="left"
              title="Engineering-Driven Development"
              desc="Every project is structured with scalable architecture and clean code."
            />

            <WhyItem
              side="right"
              title="AI-Native Thinking"
              desc="Automation & intelligence are built into every workflow from day one."
            />

            <WhyItem
              side="left"
              title="Clear, Predictable Delivery"
              desc="Transparent weekly updates, milestones and realistic planning."
            />

            <WhyItem
              side="right"
              title="Future-Proof Stack"
              desc="We use stable technologies that can scale for years, not months."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItem({ side, title, desc }: any) {
  const isLeft = side === "left";

  return (
    <div className={`relative flex ${isLeft ? "justify-start" : "justify-end"} w-full`}>
      <div
        className="w-[90%] md:w-[45%] p-8 rounded-xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_0_30px_rgba(0,0,0,0.45)]
        hover:shadow-[0_0_55px_rgba(127,91,255,0.35)]
        transition-all duration-300"
      >
        <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-soft leading-relaxed text-[15px]">{desc}</p>
      </div>
    </div>
  );
}
