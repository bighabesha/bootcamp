"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Equal, Heart, Lightbulb, MessageSquare, GraduationCap, Compass, HelpCircle, ArrowRight } from "lucide-react";

const contentIngredients = [
  { text: "Knowledge", icon: Lightbulb, desc: "What you know, your expertise, and unique skills." },
  { text: "Stories", icon: MessageSquare, desc: "Your personal lessons, triumphs, and failures." },
  { text: "Entertainment", icon: Heart, desc: "Humor, jokes, charisma, and narrative hooks." },
  { text: "Education", icon: GraduationCap, desc: "Tutorials, step-by-step guides, and how-tos." },
  { text: "Experience", icon: Compass, desc: "Your perspective, background, and cultural path." },
  { text: "Ideas", icon: HelpCircle, desc: "Your theories, opinions, predictions, and plans." }
];

export default function WhatIsContentCreation() {
  const [activeIngredient, setActiveIngredient] = useState(0);

  // Auto rotate ingredients every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIngredient((prev) => (prev + 1) % contentIngredients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = contentIngredients[activeIngredient].icon;

  return (
    <section id="what-is-content-creation" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Definition
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            What is Content Creation?
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            It is not just about holding a camera. It is a systematic process of packaging your mind to help others.
          </p>
        </div>

        {/* Dynamic Interactive Equation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 bg-[#121212]/30 border border-white/5 p-8 sm:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
          {/* Neon background line */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/10 to-transparent hidden lg:block" />

          {/* Block 1: Content (The Ingredient) */}
          <div className="w-full lg:w-80 h-64 bg-zinc-950 border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative z-10 shadow-2xl overflow-hidden group hover:border-brand-yellow/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.02] to-transparent pointer-events-none" />
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Part A: The Substance</span>
              <span className="text-xs font-bold text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded-full border border-brand-yellow/20">CONTENT</span>
            </div>

            <div className="min-h-[80px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIngredient}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="w-5 h-5 text-brand-yellow" />
                    <h3 className="text-xl font-bold text-white">{contentIngredients[activeIngredient].text}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {contentIngredients[activeIngredient].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-1">
              {contentIngredients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIngredient(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIngredient === i ? "bg-brand-yellow w-4" : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Plus Sign */}
          <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 relative z-10 hover:text-white transition-colors">
            <Plus className="w-6 h-6" />
          </div>

          {/* Block 2: Creation (The Package) */}
          <div className="w-full lg:w-80 h-64 bg-zinc-950 border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative z-10 shadow-2xl overflow-hidden hover:border-brand-yellow/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.02] to-transparent pointer-events-none" />
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Part B: The Action</span>
              <span className="text-xs font-bold text-white bg-white/5 px-2 py-0.5 rounded-full border border-white/10">CREATION</span>
            </div>

            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <span className="bg-white/2 border border-white/5 px-2.5 py-1.5 rounded-xl hover:text-white transition-colors">🎥 Video Recording</span>
                <span className="bg-white/2 border border-white/5 px-2.5 py-1.5 rounded-xl hover:text-white transition-colors">✏️ Script Writing</span>
                <span className="bg-white/2 border border-white/5 px-2.5 py-1.5 rounded-xl hover:text-white transition-colors">✂️ CapCut Editing</span>
                <span className="bg-white/2 border border-white/5 px-2.5 py-1.5 rounded-xl hover:text-white transition-colors">📱 Distribution</span>
              </div>
            </div>

            <span className="text-[10px] text-zinc-500 font-light font-mono">Turning raw ideas into structured visual mediums.</span>
          </div>

          {/* Equal Sign */}
          <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 relative z-10 hover:text-white transition-colors">
            <Equal className="w-6 h-6" />
          </div>

          {/* Block 3: Value Out */}
          <div className="w-full lg:w-96 h-64 bg-brand-yellow/5 border border-brand-yellow/20 rounded-3xl p-6 flex flex-col justify-between relative z-10 shadow-2xl overflow-hidden hover:border-brand-yellow/40 transition-all duration-300">
            {/* Glowing screen backing */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.06),transparent_70%)] pointer-events-none" />
            
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-yellow">The Result</span>
              <span className="text-xs font-bold text-black bg-brand-yellow px-2 py-0.5 rounded-full shadow-lg shadow-brand-yellow/20">ASSET CLASS</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white leading-tight">Content Creation</h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-brand-yellow to-transparent" />
              <p className="text-sm font-semibold text-brand-yellow flex items-center gap-1.5 pt-1">
                <span>Creating Value for People</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </p>
            </div>

            <span className="text-[11px] text-zinc-400 leading-relaxed font-light">
              By packaging your knowledge (Content) into accessible formats (Creation), you create an asset that educates, entertains, or inspires others 24/7.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
