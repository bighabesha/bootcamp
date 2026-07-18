"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Briefcase, Sparkles, Compass, ShieldAlert, Award, Globe, Heart } from "lucide-react";

const comparisonData = [
  {
    category: "Income",
    icon: Award,
    employee: "Fixed salary. Dependent on annual reviews, corporate budgets, and manager approval.",
    creator: "Uncapped potential. Direct relationship with value created. Multiple monetizations.",
    empVal: "Fixed / Linear",
    creVal: "Uncapped / Exponential"
  },
  {
    category: "Growth",
    icon: Sparkles,
    employee: "Slow promotion cycles. Climbing a predefined corporate ladder limited by politics.",
    creator: "Exponential scale. Grow from 0 to 100K+ reach based solely on content quality and appeal.",
    empVal: "Pre-defined",
    creVal: "Self-driven"
  },
  {
    category: "Freedom",
    icon: Compass,
    employee: "Strict 9-to-5 desk presence. PTO must be requested, approved, and carefully rationed.",
    creator: "Work anytime, anywhere. Ultimate control over your schedule, lifestyle, and projects.",
    empVal: "Controlled",
    creVal: "Autonomous"
  },
  {
    category: "Scalability",
    icon: Globe,
    employee: "One-to-one output. You trade 1 hour of labor for 1 hour of pay. Zero compounding assets.",
    creator: "One-to-many output. One video can play millions of times, generating leads and cash while you sleep.",
    empVal: "1x Leverage",
    creVal: "10,000x Leverage"
  },
  {
    category: "Creativity",
    icon: Heart,
    employee: "Execute others' ideas and follow strict guidelines. Safe but often uninspiring.",
    creator: "Complete editorial control. Talk about your passions, tell your stories, experiment daily.",
    empVal: "Restricted",
    creVal: "Unlimited"
  },
  {
    category: "Impact",
    icon: Briefcase,
    employee: "Usually locked behind the scenes. Direct impact on customers is diluted or invisible.",
    creator: "Direct community feedback. Empower, educate, or entertain thousands of lives daily.",
    empVal: "Indirect",
    creVal: "Direct & Global"
  },
  {
    category: "Location Independence",
    icon: Globe,
    employee: "Tethered to a physical office or specific country for tax and compliance reasons.",
    creator: "A laptop, a camera, and Wi-Fi. Create from Addis Ababa, Dubai, or Bali seamlessly.",
    empVal: "Local",
    creVal: "Border-free"
  }
];

export default function EmployeeVsCreator() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="comparison-grid" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Two Paths
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Employee vs Content Creator
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Both paths require hard work. But the payoff structure and long-term leverage are fundamentally different.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="border border-white/5 rounded-3xl overflow-hidden bg-[#121212]/20 backdrop-blur-md shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 bg-white/2 text-xs font-mono tracking-wider text-zinc-500 uppercase font-semibold">
            <div className="md:col-span-3">Comparison Metric</div>
            <div className="md:col-span-4">Traditional Employee</div>
            <div className="md:col-span-5">Digital Content Creator</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => {
              const IconComp = row.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 transition-all duration-300 ${
                    hoveredIdx === idx ? "bg-white/5" : ""
                  }`}
                >
                  {/* Category Title */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <div className={`p-2 rounded-xl border ${
                      hoveredIdx === idx ? "bg-brand-yellow border-brand-yellow text-black" : "bg-white/5 border-white/5 text-zinc-400"
                    } transition-colors`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{row.category}</h4>
                      <span className="text-[10px] font-mono text-zinc-500 hidden md:inline">Metric Category</span>
                    </div>
                  </div>

                  {/* Employee Column */}
                  <div className="md:col-span-4 flex flex-col justify-center space-y-2 border-l border-dashed border-white/5 pl-0 md:pl-4">
                    <p className="text-xs sm:text-sm text-zinc-400 font-light">{row.employee}</p>
                    <span className="text-[10px] font-mono text-zinc-600 bg-white/2 border border-white/5 px-2 py-0.5 rounded w-max">
                      {row.empVal}
                    </span>
                  </div>

                  {/* Creator Column */}
                  <div className="md:col-span-5 flex flex-col justify-center space-y-2 border-l border-dashed border-white/5 pl-0 md:pl-4">
                    <p className="text-xs sm:text-sm text-zinc-200 font-light">{row.creator}</p>
                    <span className="text-[10px] font-mono text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-2 py-0.5 rounded w-max font-semibold">
                      {row.creVal}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Note Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-brand-yellow/5 border border-brand-yellow/20 flex gap-4 items-start max-w-4xl mx-auto shadow-lg"
        >
          <div className="p-2 rounded-xl bg-brand-yellow/15 text-brand-yellow shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Crucial Realization:</h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 leading-relaxed">
              Content creation is <strong className="text-brand-yellow">not easier</strong> than a 9-to-5. In fact, in the beginning, you will work harder for less. The difference is: a job rewards your time with a capped linear payment, whereas content creation rewards your consistency with <strong className="text-white">compounding, lifetime digital assets</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
