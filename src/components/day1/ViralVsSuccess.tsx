"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Skull, ShieldCheck, Heart, Sparkles, Star, Milestone } from "lucide-react";

export default function ViralVsSuccess() {
  return (
    <section id="viral-vs-success" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-85 h-85 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Strategy vs Luck
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Viral Does NOT Equal Success
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Most beginners think the goal is a viral video. It isn't. The goal is building a trust-based system that works.
          </p>
        </div>

        {/* Path Flow Diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          
          {/* Path A: Muted/Red */}
          <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[36px] flex flex-col justify-between min-h-[350px] relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Path A</span>
                  <h3 className="text-lg font-bold text-white">The Viral Flash</h3>
                </div>
              </div>
              
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Relying purely on trends, shock value, or lucky algorithm spikes without building a connection or value.
              </p>
            </div>

            {/* Path Steps */}
            <div className="flex flex-col gap-6 my-8 relative pl-6 border-l border-white/10">
              {[
                { label: "Viral once", desc: "A random video gets 500k views due to a trending audio.", icon: Zap, statusColor: "text-red-400 border-red-500/20 bg-red-500/5" },
                { label: "Forgotten", desc: "No strategy, no hook connection. The next videos get 10 views.", icon: Skull, statusColor: "text-zinc-500 border-white/5 bg-white/2" }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-950" />
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg border ${step.statusColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-300">{step.label}</h4>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-[11px] font-mono text-red-400/70 bg-red-500/5 border border-red-500/10 p-3.5 rounded-xl">
              ⚠️ Result: High adrenaline spike, but zero business value or long-term growth.
            </div>
          </div>

          {/* Path B: Golden highlighted */}
          <div className="bg-[#121212]/50 border border-brand-yellow/20 p-8 rounded-[36px] flex flex-col justify-between min-h-[450px] relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.04),transparent_60%)] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20">
                  <Star className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest">Path B (Recommended)</span>
                  <h3 className="text-lg font-bold text-white">The Compound System</h3>
                </div>
              </div>
              
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                Publishing consistent values, solving audience problems, and building an ecosystem that yields compounding returns.
              </p>
            </div>

            {/* Path Steps */}
            <div className="flex flex-col gap-6 my-8 relative pl-6 border-l border-brand-yellow/20">
              {/* Dynamic scroll progress glow */}
              <div className="absolute -left-[1.5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-yellow via-yellow-200 to-amber-600" />
              
              {[
                { label: "Consistent Value", desc: "Solve problems, teach skills, entertain, build a signature style.", icon: Sparkles },
                { label: "Engaged Audience", desc: "Followers who watch every video because they care about your message.", icon: Heart },
                { label: "Deep Digital Trust", desc: "People buy products or recommendations because they trust your authority.", icon: ShieldCheck },
                { label: "Sustainable Business", desc: "Launch courses, sponsorships, products. Monetize on your own terms.", icon: Milestone }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[32px] top-1.5 w-3 h-3 rounded-full bg-brand-yellow border-2 border-zinc-950 shadow-lg shadow-brand-yellow/40 animate-pulse" />
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl border border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow shadow-inner">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{step.label}</h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-[11px] font-mono text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 p-3.5 rounded-xl">
              🎯 Result: Absolute creative freedom, financial scaling, and building an evergreen personal brand.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
