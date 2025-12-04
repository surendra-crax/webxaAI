"use client";
import { useEffect, useRef } from "react";

function autoScroll(ref: any, speed = 1) {
  if (!ref.current) return;
  let pos = 0;

  const id = setInterval(() => {
    if (!ref.current) return;

    pos += speed;
    if (pos >= ref.current.scrollWidth - ref.current.clientWidth) pos = 0;

    ref.current.scrollTo({ left: pos });
  }, 35);

  return () => clearInterval(id);
}

const testimonials = [
  {
    name: "Rohit Verma",
    company: "Fintech Labs",
    text: "WebX AI delivered our entire platform with exceptional clarity and engineering discipline. This is the best development partner we’ve ever worked with.",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Sarah Johnson",
    company: "Nova Systems",
    text: "Their AI automation reduced our manual workload by 63%. Precise, reliable and incredibly fast team.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    name: "Aman Gupta",
    company: "HealthSync",
    text: "App development quality is world-class. Smooth UI, stable backend, and great communication throughout the project.",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Elena Petrova",
    company: "DataCore",
    text: "Their data engineering gave us real insights for the first time. The dashboards are visually perfect and technically robust.",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<any>(null);
  useEffect(() => autoScroll(scrollRef, 0.8), []);

  return (
    <section className="relative py-[160px] px-6 w-full overflow-hidden">

      {/* --- Same background theme as other sections --- */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      <div className="absolute -top-40 left-0 w-[900px] h-[300px] bg-gradient-to-r from-purple-600/20 to-blue-500/10 blur-[120px]"></div>
      <div className="absolute bottom-[-120px] right-0 w-[900px] h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-500/10 blur-[120px]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <h2 className="text-center text-white text-5xl font-extrabold mb-5">
          What Clients Say
        </h2>

        <p className="text-center text-soft text-lg max-w-2xl mx-auto mb-20">
          Real experiences from brands we've worked with — delivered with precision, clarity and trust.
        </p>

        {/* Side fade for clean edges */}
        <div className="relative mb-10">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#05050A] to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#05050A] to-transparent pointer-events-none z-20"></div>

          {/* Auto-scroll row */}
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-hidden py-6"
          >
            {testimonials.map((t, i) => (
              <Card key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Testimonial Card --- */
function Card({ name, company, text, img }: any) {
  return (
    <div
      className="min-w-[360px] max-w-[360px] rounded-2xl p-6 
      bg-[#0A0A0C]/60 backdrop-blur-xl border border-white/10
      hover:border-white/20 transition-all
      shadow-[0_0_30px_rgba(0,0,0,0.35)]"
    >
      {/* Client image */}
      <div className="flex items-center mb-5">
        <img
          src={img}
          className="w-14 h-14 rounded-full object-cover border border-white/20"
        />
        <div className="ml-4">
          <p className="text-white font-semibold text-lg">{name}</p>
          <p className="text-[#9BA0B0] text-sm">{company}</p>
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-soft text-[15px] leading-relaxed">
        “{text}”
      </p>
    </div>
  );
}
