"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, GraduationCap, Laptop, Sparkles, TrendingUp, ShieldAlert, Award, Compass, HelpCircle } from "lucide-react";

export default function Comparison() {
  const targetAudience = [
    { name: "Students", desc: "Build a side income or career while in school.", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Beginners", desc: "No prior experience required; learn from step one.", icon: <Compass className="w-5 h-5" /> },
    { name: "Future Content Creators", desc: "Learn systemized growth strategies for the creator economy.", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Business Owners", desc: "Drive traffic and customer loyalty to your services.", icon: <Award className="w-5 h-5" /> },
    { name: "Freelancers", desc: "Diversify your offers by adding video content creation.", icon: <Laptop className="w-5 h-5" /> },
    { name: "Personal Brands", desc: "Stand out as an expert in your specific niche field.", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Small Businesses", desc: "Reach local/global buyers organically without massive ad budgets.", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  const comparisonData = [
    {
      others: "Generic YouTube Tutorials",
      ours: "Live Interactive Learning",
      desc: "Instead of watching pre-recorded, outdated videos, learn live and ask questions directly during each session.",
    },
    {
      others: "Theory Only",
      ours: "Real Creator Experience",
      desc: "Learn from strategies that actually gained 900K+ followers, rather than generic textbook advice.",
    },
    {
      others: "No Feedback",
      ours: "Live Questions & Answers",
      desc: "Get your videos reviewed and get instant corrections on script hook structures or edit choices.",
    },
    {
      others: "Random Tips",
      ours: "Complete Beginner Roadmap",
      desc: "Follow a structured, progressive 5-day syllabus followed by a complete 90-day action plan.",
    },
  ];

  return (
    <section className="py-24 relative bg-zinc-950/80 border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: WHO SHOULD JOIN --- */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
              Audience Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Is This Bootcamp Right For You?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              This curriculum is designed specifically for individuals who want a highly efficient, action-oriented entry into content creation.
            </p>
          </div>

          {/* Audience Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, idx) => (
              <motion.div
                key={audience.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-6 rounded-3xl glass-panel border border-white/5 hover:border-brand-yellow/30 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/5 text-brand-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {audience.icon}
                  </div>
                  <h3 className="text-white font-extrabold text-lg group-hover:text-brand-yellow transition-colors">
                    {audience.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {audience.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PART 2: WHY WE ARE DIFFERENT --- */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-purple text-xs font-black uppercase tracking-widest block">
              Strategic Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why This Bootcamp Is Different
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light">
              We focus on building sustainable content habits, hands-on production skills, and direct creator access.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl glass-panel border border-white/5 overflow-hidden shadow-xl"
              >
                {/* Visual Header Grid */}
                <div className="grid grid-cols-2 border-b border-white/5 text-xs font-black tracking-wider uppercase text-center bg-zinc-950/50">
                  <div className="py-4 border-r border-white/5 text-zinc-500 flex items-center justify-center gap-1.5 px-3">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Others</span>
                  </div>
                  <div className="py-4 text-brand-yellow flex items-center justify-center gap-1.5 px-3 bg-brand-yellow/5">
                    <Check className="w-3.5 h-3.5 text-brand-yellow" />
                    <span>This Bootcamp</span>
                  </div>
                </div>

                {/* Card Main Grid */}
                <div className="grid grid-cols-2 items-stretch text-sm min-h-[100px]">
                  <div className="p-5 border-r border-white/5 text-zinc-400 bg-zinc-900/10 font-semibold flex items-center justify-center text-center">
                    {item.others}
                  </div>
                  <div className="p-5 text-white font-extrabold flex items-center justify-center text-center bg-brand-yellow/5">
                    {item.ours}
                  </div>
                </div>

                {/* Explanatory footer */}
                <div className="p-5 bg-zinc-950/20 border-t border-white/5 text-xs text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
