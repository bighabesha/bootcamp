"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, Compass, Target, Play, Video, Users, 
  Heart, DollarSign, Briefcase, Star 
} from "lucide-react";

const steps = [
  { step: "01", label: "Mindset", icon: Lightbulb, desc: "Develop resilience and understand thatDone is better than perfect." },
  { step: "02", label: "Niche Alignment", icon: Compass, desc: "Find the sweet spot between love, skills, and market needs." },
  { step: "03", label: "Platform Focus", icon: Play, desc: "Select one primary battlefield (e.g. YouTube or TikTok) to master." },
  { step: "04", label: "Content Production", icon: Video, desc: "Script, record, and edit high-value videos using CapCut." },
  { step: "05", label: "Audience Capture", icon: Users, desc: "Decode algorithms and use hook-retention psychology." },
  { step: "06", label: "Digital Trust", icon: Heart, desc: "Solve problems to turn casual viewers into loyal fans." },
  { step: "07", label: "Income Generation", icon: DollarSign, desc: "Set up sponsors, Adsense, and local Telebirr payment funnels." },
  { step: "08", label: "Business Operations", icon: Briefcase, desc: "Outsource, automate, and build micro-monolithic platforms." },
  { step: "09", label: "Creative Freedom", icon: Star, desc: "Achieve location-independence and lifestyle sovereignty." }
];

export default function CreatorRoadmap() {
  return (
    <section id="creator-roadmap" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-85 h-85 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Your Creator Roadmap
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            This is the step-by-step pipeline we will build together during this bootcamp.
          </p>
        </div>

        {/* Vertical connected node line */}
        <div className="relative max-w-3xl mx-auto pl-8 sm:pl-0">
          {/* Connector line */}
          <div className="absolute left-[31px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 pointer-events-none sm:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative sm:flex sm:justify-between items-center group">
                  
                  {/* Central Node Circle */}
                  <div className="absolute left-0 sm:left-1/2 top-1.5 sm:top-1/2 w-16 h-16 rounded-full bg-zinc-950 border-2 border-white/5 flex items-center justify-center text-zinc-500 z-10 sm:-translate-x-1/2 sm:-translate-y-1/2 group-hover:border-brand-yellow group-hover:text-brand-yellow transition-all duration-300 shadow-xl">
                    <Icon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                  </div>

                  {/* Left Side Content (Desktop) */}
                  <div className={`sm:w-[45%] flex flex-col ${isEven ? "sm:items-end sm:text-right" : "sm:hidden"} pl-20 sm:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#121212]/30 border border-white/5 hover:border-brand-yellow/10 p-5 rounded-3xl transition-all"
                    >
                      <span className="text-[10px] font-mono text-brand-yellow font-bold uppercase">Step {item.step}</span>
                      <h4 className="text-base font-bold text-white mt-1">{item.label}</h4>
                      <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Right Side Content (Desktop) */}
                  <div className={`sm:w-[45%] flex flex-col ${!isEven ? "sm:items-start sm:text-left" : "sm:hidden"} pl-20 sm:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: !isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#121212]/30 border border-white/5 hover:border-brand-yellow/10 p-5 rounded-3xl transition-all"
                    >
                      <span className="text-[10px] font-mono text-brand-yellow font-bold uppercase">Step {item.step}</span>
                      <h4 className="text-base font-bold text-white mt-1">{item.label}</h4>
                      <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Mobile Fallback: ensure both show on mobile */}
                  <div className="sm:hidden pl-20 mt-1">
                    <motion.div
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#121212]/30 border border-white/5 p-5 rounded-3xl"
                    >
                      <span className="text-[10px] font-mono text-brand-yellow font-bold uppercase">Step {item.step}</span>
                      <h4 className="text-base font-bold text-white mt-1">{item.label}</h4>
                      <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
