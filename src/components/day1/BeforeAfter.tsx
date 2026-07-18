"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingDown, Target, HelpCircle, Briefcase, Compass, Users, DollarSign } from "lucide-react";

const beforeCards = [
  { text: "Struggling Student", desc: "Burdened by exams, stress, and fear of unemployment.", icon: HelpCircle },
  { text: "Limited Opportunities", desc: "Applying for jobs that offer low wages and high competition.", icon: TrendingDown },
  { text: "Small Audience / Invisible", desc: "No influence, thoughts kept inside, zero online leverage.", icon: XCircle },
  { text: "Traditional Career Path", desc: "Bound to 9-to-5 cubicle jobs with minimal growth caps.", icon: Briefcase },
];

const afterCards = [
  { text: "Absolute Freedom", desc: "Work from anywhere in the world on your own schedule.", icon: Compass },
  { text: "Strong Personal Brand", desc: "Become a trusted authority. Opportunities come to you.", icon: Target },
  { text: "Global Business Scale", desc: "Monetize multiple channels: Ads, Sponsors, Courses.", icon: DollarSign },
  { text: "Passionate Community & Purpose", desc: "Inspire thousands daily and build genuine connections.", icon: Users },
];

export default function BeforeAfter() {
  return (
    <section id="comparison" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Backlighting glows */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Before vs After
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            How Content Creation Changes Your Life.
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            This is not just about making videos. It is about restructuring your career from passive consumer to active builder.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Before Column */}
          <div className="space-y-8 bg-zinc-950/40 border border-white/5 p-8 rounded-[32px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-red-500 pointer-events-none select-none">
              <XCircle className="w-48 h-48" />
            </div>
            
            <div className="space-y-3">
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                Before Content Creation
              </span>
              <h3 className="text-2xl font-black text-white">The Traditional Grind</h3>
              <p className="text-sm text-zinc-500 font-light">Trading time directly for money with zero scale or compound growth.</p>
            </div>

            <div className="space-y-4">
              {beforeCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white/2 border border-white/5 hover:border-red-500/10 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-200">{card.text}</h4>
                      <p className="text-xs text-zinc-500 font-light mt-1">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* After Column */}
          <div className="space-y-8 bg-[#121212]/50 border border-brand-yellow/10 p-8 rounded-[32px] relative overflow-hidden shadow-2xl">
            {/* Soft gold glow backing */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,193,7,0.03),transparent_50%)] pointer-events-none" />
            
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-brand-yellow pointer-events-none select-none">
              <CheckCircle2 className="w-48 h-48" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-full">
                After Content Creation
              </span>
              <h3 className="text-2xl font-black text-white">The Creator Leverage</h3>
              <p className="text-sm text-zinc-400 font-light">Building assets that work for you 24/7/365 across the globe.</p>
            </div>

            <div className="space-y-4">
              {afterCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-5 rounded-2xl bg-brand-yellow/5 border border-brand-yellow/10 hover:border-brand-yellow/30 transition-all duration-300 shadow-md group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">{card.text}</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
