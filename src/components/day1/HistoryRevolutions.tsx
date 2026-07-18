"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Flame, Trees, Crown, Factory, Cpu, Globe, Share2, Sparkles, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const revolutions = [
  { name: "Fire", year: "1M Years Ago", icon: Flame, desc: "Power to cook, survive, and protect. The birth of human technology." },
  { name: "Agriculture", year: "10,000 BC", icon: Trees, desc: "Settled societies, crop cultivation. Allowed communities and culture to form." },
  { name: "Religion", year: "3,000 BC", icon: Crown, desc: "Shared belief systems. Enabled large-scale trust and coordination across empires." },
  { name: "Industrial Rev.", year: "1760", icon: Factory, desc: "Mechanical power. Multiplied physical human output by thousands of times." },
  { name: "Computers", year: "1940s", icon: Cpu, desc: "Digital processing. Automated math and information sorting." },
  { name: "Internet", year: "1990s", icon: Globe, desc: "Hyperlink data sharing. Eliminated geographical barriers for information." },
  { name: "Social Media", year: "2000s", icon: Share2, desc: "democratic attention. Anyone can broadcast their message to the world." },
  { name: "AI", year: "2020s", icon: Sparkles, desc: "Cognitive leverage. Automated raw intellect, content generation, and writing." },
  { name: "Creator Economy", year: "Today", icon: Rocket, desc: "The ultimate leverage. Distributing your ideas globally using AI & social media." }
];

export default function HistoryRevolutions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeIdx < revolutions.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    }
  };

  const progressPct = (activeIdx / (revolutions.length - 1)) * 100;

  return (
    <section id="history" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
              Macro Perspective
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              The Biggest Revolutions in Human History
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base">
              Humanity progresses by unlocking new forms of leverage. Today, we are at the precipice of the most democratic leverage in history.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className="p-3 rounded-full border border-white/10 bg-zinc-950 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIdx === revolutions.length - 1}
              className="p-3 rounded-full border border-white/10 bg-zinc-950 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Progress Line */}
        <div className="relative h-1 bg-zinc-800 rounded-full w-full">
          <motion.div
            animate={{ width: `${progressPct}%` }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-0 bottom-0 left-0 bg-brand-yellow shadow-[0_0_10px_rgba(255,193,7,0.5)]"
          />
          {/* Timeline Node Markers */}
          <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
            {revolutions.map((rev, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  idx <= activeIdx ? "bg-brand-yellow border-brand-yellow scale-125" : "bg-zinc-900 border-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active Node Viewport */}
        <div className="relative min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#121212]/30 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Soft backdrop logo glow */}
            <div className="absolute -right-10 -bottom-10 opacity-[0.02] text-white pointer-events-none select-none">
              <Rocket className="w-96 h-96" />
            </div>

            {/* Left: Icon node */}
            <div className="md:col-span-4 flex justify-center items-center">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl flex items-center justify-center border shadow-2xl relative ${
                  activeIdx === revolutions.length - 1
                    ? "bg-brand-yellow/10 border-brand-yellow text-brand-yellow shadow-brand-yellow/10"
                    : "bg-zinc-950 border-white/10 text-zinc-400"
                }`}
              >
                {/* Glow ring for the final item */}
                {activeIdx === revolutions.length - 1 && (
                  <span className="absolute inset-0 rounded-3xl border-2 border-brand-yellow animate-ping opacity-25" />
                )}
                {React.createElement(revolutions[activeIdx].icon, { className: "w-12 h-12 sm:w-16 sm:h-16" })}
              </motion.div>
            </div>

            {/* Right: Info */}
            <div className="md:col-span-8 space-y-4">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-brand-yellow uppercase">
                    Stage {activeIdx + 1} • {revolutions[activeIdx].year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {revolutions[activeIdx].name}
                  </h3>
                </div>

                <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
                  {revolutions[activeIdx].desc}
                </p>

                {activeIdx === revolutions.length - 1 ? (
                  <div className="inline-block px-4 py-1.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs tracking-wider uppercase animate-pulse">
                    The Modern Vehicle Unlocked
                  </div>
                ) : (
                  <div className="text-[10px] text-zinc-500 font-mono">Click next to trace the line to the modern era →</div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
