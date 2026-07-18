"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Compass, DollarSign } from "lucide-react";

const nicheExamples = [
  {
    title: "Healthy Ethiopian Lifestyle",
    formula: "Love of Food + Fitness Skills + Local Dietary Needs",
    desc: "Creating recipe vlogs substituting high-carb local foods with healthy, protein-rich alternatives, serving local gym-goers."
  },
  {
    title: "Habesha Tech-Education",
    formula: "Coding Skills + Love of Teaching + Student Coding Needs",
    desc: "Creating step-by-step programming tutorials in Amharic on YouTube, solving the language barrier for Ethiopian IT students."
  },
  {
    title: "Freelance Hustle Guide",
    formula: "Upwork Success + Love of Writing + Unemployed Graduate Needs",
    desc: "Sharing daily case studies on how to land foreign freelance clients while living in Addis Ababa, monetizing through a VIP Telegram channel."
  }
];

export default function ChoosingNiche() {
  const [activeCircle, setActiveCircle] = useState<"love" | "good" | "need" | "niche" | null>("niche");

  return (
    <section id="niche" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft glowing backlights */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-85 h-85 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Choosing Your Niche
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Your niche is the intersection of what you love, what you are good at, and what the market actually wants.
          </p>
        </div>

        {/* Interactive Venn Diagram container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#121212]/30 border border-white/5 p-8 sm:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
          
          {/* Left Column: Venn Diagram */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center py-6">
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center select-none">
              
              {/* Circle 1: Things You Love */}
              <motion.div
                onMouseEnter={() => setActiveCircle("love")}
                onClick={() => setActiveCircle("love")}
                className={`absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer top-4 left-4 ${
                  activeCircle === "love" 
                    ? "bg-red-500/20 border-red-500 text-white z-20 shadow-xl shadow-red-500/10 scale-105" 
                    : "bg-red-500/5 border-red-500/20 text-zinc-400 z-10 hover:border-red-500/40"
                }`}
              >
                <Heart className="w-5 h-5 text-red-500 mb-2" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wide">Love</span>
                <span className="text-[9px] text-zinc-500 font-mono mt-1">Passions & Interests</span>
              </motion.div>

              {/* Circle 2: Things You're Good At */}
              <motion.div
                onMouseEnter={() => setActiveCircle("good")}
                onClick={() => setActiveCircle("good")}
                className={`absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer top-4 right-4 ${
                  activeCircle === "good" 
                    ? "bg-blue-500/20 border-blue-500 text-white z-20 shadow-xl shadow-blue-500/10 scale-105" 
                    : "bg-blue-500/5 border-blue-500/20 text-zinc-400 z-10 hover:border-blue-500/40"
                }`}
              >
                <Star className="w-5 h-5 text-blue-400 mb-2" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wide">Skills</span>
                <span className="text-[9px] text-zinc-500 font-mono mt-1">Talents & Education</span>
              </motion.div>

              {/* Circle 3: What People Need */}
              <motion.div
                onMouseEnter={() => setActiveCircle("need")}
                onClick={() => setActiveCircle("need")}
                className={`absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer bottom-4 left-1/2 -translate-x-1/2 ${
                  activeCircle === "need" 
                    ? "bg-emerald-500/20 border-emerald-500 text-white z-20 shadow-xl shadow-emerald-500/10 scale-105" 
                    : "bg-emerald-500/5 border-emerald-500/20 text-zinc-400 z-10 hover:border-emerald-500/40"
                }`}
              >
                <DollarSign className="w-5 h-5 text-emerald-400 mb-2" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wide">Need</span>
                <span className="text-[9px] text-zinc-500 font-mono mt-1">Market Problems</span>
              </motion.div>

              {/* Center Intersection: Niche */}
              <motion.div
                onMouseEnter={() => setActiveCircle("niche")}
                onClick={() => setActiveCircle("niche")}
                className={`absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center p-2 text-center cursor-pointer z-30 ${
                  activeCircle === "niche"
                    ? "bg-brand-yellow text-black border-brand-yellow scale-110 shadow-2xl shadow-brand-yellow/30"
                    : "bg-zinc-950/90 text-brand-yellow border-brand-yellow/30 hover:border-brand-yellow"
                }`}
                style={{ top: "35%", left: "50%", transform: "translate(-50%, -30%)" }}
              >
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span className="text-[9px] font-black uppercase tracking-widest mt-1">Niche</span>
              </motion.div>
            </div>
            
            <p className="text-[10px] text-zinc-500 font-mono mt-4">💡 Hover over circles to reveal formula details.</p>
          </div>

          {/* Right Column: Explanatory Details */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              {activeCircle === "love" && (
                <motion.div
                  key="love"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Circle 1</span>
                  <h3 className="text-2xl font-black text-white">Things You Love (Passions)</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Topics you read about, think about, and discuss for free. Passions are essential because they prevent burnout during the initial phase when you get zero views. If you don&apos;t love it, you won&apos;t survive the grind.
                  </p>
                </motion.div>
              )}

              {activeCircle === "good" && (
                <motion.div
                  key="good"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Circle 2</span>
                  <h3 className="text-2xl font-black text-white">Things You&apos;re Good At (Skills)</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Your professional education, career skills, hobbies, or unique lived experiences. Even if you&apos;re not an expert, you just need to know more than the person you are teaching.
                  </p>
                </motion.div>
              )}

              {activeCircle === "need" && (
                <motion.div
                  key="need"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Circle 3</span>
                  <h3 className="text-2xl font-black text-white">What People Need (Market)</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Questions people type into Google, pain points in local markets, or products people are actively buying. If no one needs it, your content will stay a hobby and cannot become a business.
                  </p>
                </motion.div>
              )}

              {activeCircle === "niche" && (
                <motion.div
                  key="niche"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">The Sweet Spot</span>
                    <h3 className="text-2xl font-black text-white">Your Creator Niche</h3>
                  </div>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    This is where the magic happens. By aligning your Passion (Circle 1) with your Skill (Circle 2) to solve a Market Problem (Circle 3), you create a high-leverage content niche.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase">Bootcamp Niche Examples:</h4>
                    <div className="space-y-4">
                      {nicheExamples.map((ex, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-yellow/10 transition-colors">
                          <span className="text-[10px] font-bold text-brand-yellow font-mono">{ex.formula}</span>
                          <h5 className="text-xs font-bold text-white mt-1">{ex.title}</h5>
                          <p className="text-[10px] text-zinc-400 font-light mt-1">{ex.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
