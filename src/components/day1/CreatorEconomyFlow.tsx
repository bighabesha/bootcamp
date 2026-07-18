"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileText, Users, Heart, Star, DollarSign, Briefcase, Compass, ArrowRight } from "lucide-react";

const flowNodes = [
  { label: "Knowledge", sub: "Your Mind", icon: Lightbulb, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { label: "Content", sub: "Packaging", icon: FileText, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  { label: "Audience", sub: "Attention", icon: Users, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
  { label: "Trust", sub: "Relationship", icon: Heart, color: "text-red-400 bg-red-500/10 border-red-500/20" },
  { label: "Influence", sub: "Authority", icon: Star, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { label: "Income", sub: "Value Exchange", icon: DollarSign, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Business", sub: "Operations", icon: Briefcase, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Freedom", sub: "Lifestyle", icon: Compass, color: "text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20" }
];

export default function CreatorEconomyFlow() {
  return (
    <section id="creator-flow" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Glow backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Engine
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            The Creator Economy Engine
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            This is the chronological pipeline of how raw ideas turn into absolute life freedom.
          </p>
        </div>

        {/* Horizontal Flow layout on desktop, grid on mobile */}
        <div className="relative p-8 sm:p-12 bg-[#121212]/30 border border-white/5 rounded-[40px] shadow-2xl overflow-hidden">
          
          {/* Connector line behind nodes (desktop only) */}
          <div className="absolute left-[8%] right-[8%] top-[45%] h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-brand-yellow opacity-10 hidden xl:block pointer-events-none" />

          {/* Node Grid/Flex container */}
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6 sm:gap-8 relative z-10">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center space-y-4 group relative"
                >
                  {/* Node Circle */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border shadow-xl relative transition-all duration-300 group-hover:scale-105 ${node.color}`}>
                    {/* Glowing ring */}
                    <span className="absolute inset-0 rounded-full border border-inherit opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  {/* Node Label Details */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {node.label}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-500 font-mono font-medium">
                      {node.sub}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator (desktop xl only, except for last item) */}
                  {idx < flowNodes.length - 1 && (
                    <div className="absolute -right-4 top-[35%] text-zinc-700 hidden xl:block">
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Flow Summary note */}
          <div className="mt-12 text-center text-xs font-mono text-zinc-500">
            💡 Tap/hover over each node to trace how knowledge scales to freedom.
          </div>
        </div>

      </div>
    </section>
  );
}
