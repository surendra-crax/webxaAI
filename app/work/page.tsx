"use client";
import { useState } from "react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web",
    img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1600",
    desc: "A scalable fintech dashboard with real-time analytics, fraud detection and AI-driven insights.",
  },
  {
    title: "AI Chat Automation",
    category: "AI",
    img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=1600",
    desc: "Intelligent automation engine powering support workflows using LLM pipelines.",
  },
  {
    title: "Delivery App UI",
    category: "App",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff2929fc?w=1600",
    desc: "A modern food-delivery app with live tracking, OTP delivery, and automated order routing.",
  },
  {
    title: "E-Commerce Store",
    category: "Web",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
    desc: "High-speed storefront with intelligent product ranking and conversion-optimized UX.",
  },
  {
    title: "Predictive Analytics Suite",
    category: "Data",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
    desc: "ML-driven forecasting engine for business intelligence and decision automation.",
  },
  {
    title: "Ride-Hailing App",
    category: "App",
    img: "https://images.unsplash.com/photo-1601160458384-d89f3b5c0c9c?w=1600",
    desc: "A complete ride-booking app with driver matching, live GPS tracking, and route optimization.",
  },
  {
    title: "AI Brand Generator",
    category: "AI",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
    desc: "Automatic brand identity generator powered by generative AI.",
  },
  {
    title: "Healthcare Analytics",
    category: "Data",
    img: "https://images.unsplash.com/photo-1581091012184-5c57e669f7d5?w=1600",
    desc: "Secure data suite for hospitals with AI-based patient outcome predictions.",
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState<any>(null);

  const categories = ["All", "Web", "App", "AI", "Data"];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* Background */}
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

      {/* Glow */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-gradient-to-r from-blue-600/40 to-purple-500/40 blur-[140px]" />
      <div className="absolute bottom-[-240px] right-[-160px] w-[1300px] h-[300px] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[140px]" />

      {/* Main Wrapper */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-[140px]">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] tracking-tight mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              Work
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            A curated selection of intelligent systems, apps, AI solutions and
            digital experiences built for fast-growing brands.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-6 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-2 rounded-xl text-lg transition border ${
                activeCategory === c
                  ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 border-white/20"
                  : "border-white/10 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {filtered.map((p, i) => (
            <div
              key={i}
              onClick={() => setModal(p)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl
                         transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-2xl font-bold mb-2">{p.title}</p>
                <p className="text-blue-300 text-sm mb-2">{p.category}</p>
                <p className="text-soft text-sm opacity-80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
            onClick={() => setModal(null)}
          >
            <div
              className="bg-[#0A0A14] p-8 rounded-3xl max-w-[700px] w-full border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modal.img}
                alt={modal.title}
                className="w-full h-[350px] object-cover rounded-2xl mb-6"
              />

              <h2 className="text-3xl font-bold mb-2">{modal.title}</h2>
              <p className="text-blue-300 mb-3">{modal.category}</p>
              <p className="text-soft opacity-90">{modal.desc}</p>

              <button
                className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl"
                onClick={() => setModal(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
