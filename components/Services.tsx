export default function Services() {
  return (
    <section className="relative w-full py-[140px] px-6 overflow-hidden bg-[#05050A]">

      {/* ===================== */}
      {/*  UNIVERSAL FUTURISTIC BACKGROUND  */}
      {/* ===================== */}

      {/* GRID */}
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
      <div className="absolute -top-56 -left-40 w-[1300px] h-[300px] rotate-[-22deg] 
        bg-gradient-to-r from-blue-600/50 to-purple-500/30 blur-[120px]"></div>

      <div className="absolute bottom-[-200px] right-[-180px] w-[1300px] h-[270px] rotate-[18deg] 
        bg-gradient-to-r from-purple-600/40 to-blue-400/30 blur-[120px]"></div>

      {/* LIGHT STREAKS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[25%] left-[-10%] w-[40%] h-[6px] 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          rotate-[20deg] blur-md opacity-40 animate-sweep"></div>

        <div className="absolute top-[60%] right-[-10%] w-[45%] h-[6px] 
          bg-gradient-to-r from-transparent via-white/15 to-transparent 
          rotate-[-18deg] blur-md opacity-30 animate-sweep-slow"></div>
      </div>

      {/* MICRO PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[28%] left-[30%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[65%] w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[55%] left-[45%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-[67%] left-[52%] w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-[72%] left-[20%] w-[2px] h-[2px] bg-white/60 rounded-full animate-pulse"></div>
      </div>

      {/* ===================== */}
      {/*  ORIGINAL CONTENT (UNCHANGED) */}
      {/* ===================== */}

      <div className="relative z-10 max-w-[1250px] mx-auto">

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Transforming Businesses with{" "}
          <span className="bg-gradient-to-r from-[#7F5BFF] to-[#4AB3FF] bg-clip-text text-transparent">
            Intelligent Solutions
          </span>
        </h2>

        <p className="text-center text-[#ADB0C5] max-w-2xl mx-auto text-lg mb-20">
          We build scalable, modern and intelligent digital solutions powered by web, mobile, AI and data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ServiceCard
            icon="/icons/mobile.svg"
            title="Mobile App Development"
            desc="High-performance apps for iOS & Android designed with modern UI, smooth experiences and scalable backend."
          />

          <ServiceCard
            icon="/icons/web.svg"
            title="Website & Web App Development"
            desc="Fast, responsive and conversion-focused websites built using Next.js, React and modern frameworks."
          />

          <ServiceCard
            icon="/icons/ai.svg"
            title="AI Development"
            desc="Automation, AI chatbots, ML models and custom intelligent systems built for real business impact."
          />

          <ServiceCard
            icon="/icons/data.svg"
            title="Data Analytics"
            desc="Dashboards, insights and analytics pipelines that turn raw data into real business decisions."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="relative group p-10 rounded-2xl bg-gradient-to-br from-[#0D0F17] to-[#0A0B12] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-r from-[#7F5BFF] to-[#4AB3FF] blur-xl"></div>
      <img src={icon} alt="" className="w-12 h-12 mb-6 opacity-90" />
      <h3 className="text-white text-2xl font-semibold mb-4 tracking-tight">{title}</h3>
      <p className="text-[#ADB0C5] leading-relaxed text-[15px]">{desc}</p>
    </div>
  );
}
