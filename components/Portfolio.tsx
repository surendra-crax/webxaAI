"use client";
import { useEffect, useRef } from "react";

/* ------------ AUTOSCROLL FUNCTION ------------ */
function autoScroll(ref: any) {
  if (!ref.current) return;
  let pos = 0;
  const speed = 1;

  const id = setInterval(() => {
    if (!ref.current) return;
    pos += speed;
    if (pos >= ref.current.scrollWidth - ref.current.clientWidth) pos = 0;
    ref.current.scrollTo({ left: pos });
  }, 35);

  return () => clearInterval(id);
}

/* ------------ REAL DEMO PROJECTS (WITH STABLE IMAGES) ------------ */
const DEMO_IMAGES = [
  "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg",
  "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  "https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg",
  "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg",
  "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
  "https://images.pexels.com/photos/3862613/pexels-photo-3862613.jpeg",
];

const categories = {
  web: [
    "Booking Management System",
    "SaaS Dashboard Platform",
    "E-Commerce Storefront",
    "Portfolio CMS",
    "Real Estate Listing Portal",
    "Learning Management System",
    "Inventory Management UI",
    "Food Ordering Web App",
    "Marketing Landing System",
    "Corporate Website Redesign",
  ],
  app: [
    "Fitness Tracking App",
    "Medical Appointment App",
    "Food Delivery Mobile App",
    "Personal Finance Manager",
    "Cryptocurrency Portfolio App",
    "Real-Time Chat App",
    "Travel Planner App",
    "Learning App",
    "Marketplace Mobile App",
    "Wellness Coaching App",
  ],
  ai: [
    "AI Chatbot Assistant",
    "Document Summarizer AI",
    "AI Content Generator",
    "Customer Support Automation",
    "Fraud Detection Model",
    "Product Recommendation Engine",
    "Predictive Analytics AI",
    "Voice-to-Text System",
    "AI Resume Analyzer",
    "Smart Workflow Engine",
  ],
  data: [
    "Business Analytics Dashboard",
    "Sales Forecasting System",
    "KPI Visualization Suite",
    "Log Monitoring Dashboard",
    "Financial Reporting System",
    "Healthcare Analytics",
    "Marketing Insights Board",
    "Operational Metrics Panel",
    "Performance Data Studio",
    "Data Warehouse Explorer",
  ],
};

/* ------------ PORTFOLIO UI ------------ */
export default function Portfolio() {
  return (
    <section className="relative py-[160px] px-6 w-full overflow-hidden">

      {/* FUTURISTIC GRID / SAME AS OTHER SECTIONS */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* DIAGONAL PURPLE-BLUE GLOW (BLENDING THE SECTION) */}
      <div className="absolute -top-40 left-0 w-[900px] h-[300px] bg-gradient-to-r from-purple-600/20 to-blue-500/10 blur-[120px]"></div>
      <div className="absolute bottom-[-120px] right-0 w-[900px] h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-500/10 blur-[120px]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-white mb-5">
          Our Portfolio
        </h2>

        <p className="text-center text-soft text-lg max-w-2xl mx-auto mb-20">
          Explore our selected digital products across Web, App, AI and Data engineering.
        </p>

        <PortfolioGroup title="Web Development" items={categories.web} />
        <PortfolioGroup title="App Development" items={categories.app} />
        <PortfolioGroup title="AI Development" items={categories.ai} />
        <PortfolioGroup title="Data Analytics" items={categories.data} />
      </div>
    </section>
  );
}

/* ------------ GROUP ------------ */
function PortfolioGroup({ title, items }: any) {
  const ref = useRef<any>(null);
  useEffect(() => autoScroll(ref), []);

  return (
    <div className="mb-28 relative">

      {/* Side Fade Masks (fixes boxed edges) */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#05050A] to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#05050A] to-transparent pointer-events-none z-20"></div>

      <h3 className="text-center text-white text-3xl font-semibold mb-10">
        {title}
      </h3>

      <div
        ref={ref}
        className="flex space-x-6 overflow-x-hidden py-6"
      >
        {items.map((name: string, i: number) => (
          <PortfolioCard
            key={i}
            title={name}
            category={title}
            desc="A high-quality digital solution crafted for modern businesses."
            img={DEMO_IMAGES[i % DEMO_IMAGES.length]}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------ CARD ------------ */
function PortfolioCard({ title, desc, img, category }: any) {
  return (
    <div className="min-w-[320px] rounded-2xl bg-[#0A0A0C]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all overflow-hidden">
      <img src={img} className="w-full h-[200px] object-cover opacity-95" />
      <div className="p-5">
        <p className="text-[#9BA0B0] text-xs uppercase mb-1">{category}</p>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-soft text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
