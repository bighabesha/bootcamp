"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ChevronDown, Wrench, RefreshCw, XOctagon, Target, Compass, BarChart2, UserCheck } from "lucide-react";

const mistakes = [
  {
    id: "equipment",
    title: "Waiting for expensive equipment",
    icon: Wrench,
    desc: "Refusing to start because you don't own a DSLR camera or studio lighting.",
    example: "Spending 40,000 ETB on a mirrorless camera before filming your first script.",
    solution: "Use the smartphone in your pocket. Modern phone cameras are incredible. Spend 500 ETB on a simple lapel microphone instead—good audio is 10x more important than 4K resolution."
  },
  {
    id: "copying",
    title: "Copying everyone else",
    icon: RefreshCw,
    desc: "Replicating trending videos frame-by-frame with zero original perspective.",
    example: "Copying MrBeast style subtitles and hooks for local news content, losing your voice.",
    solution: "Study structure, but keep your personality. Speak in your natural tone, share your real stories, and inject local cultural context. Authenticity is the only thing that can't be copied."
  },
  {
    id: "quitting",
    title: "Giving up too early",
    icon: XOctagon,
    desc: "Stopping publication because your first 15 videos didn't go viral.",
    example: "Deleting your TikTok account after 2 weeks because views didn't cross 1,000.",
    solution: "Commit to a 90-day publishing strategy. Focus on creating 30 pieces of content before checking analytics. Creators who win are simply those who survived the initial silence."
  },
  {
    id: "strategy",
    title: "Posting without a strategy",
    icon: Target,
    desc: "Uploading tech reviews today, cooking recipes tomorrow, and politics next week.",
    example: "Confusing your audience so they don't know why they should click follow.",
    solution: "Pick one niche (Section 17) and serve one specific audience. A clear value proposition makes it easy for someone to hit follow and return daily."
  },
  {
    id: "comparison",
    title: "Comparing yourself to veterans",
    icon: Compass,
    desc: "Comparing your Day 1 quality to Marques Brownlee's Year 15 production studio.",
    example: "Feeling depressed because your edits aren't as smooth as a creator with a 5-man team.",
    solution: "Compare yourself only to your yesterday's upload. Focus on making each script or edit 1% better. Your favorite creator's first videos were terrible too."
  },
  {
    id: "analytics",
    title: "Ignoring analytics & feedback",
    icon: BarChart2,
    desc: "Publishing blindly without checking why people swipe away in 2 seconds.",
    example: "Uploading 50 videos with the same boring 10-second intro logo that kills retention.",
    solution: "Check retention graphs in TikTok/YouTube Studio. Pinpoint exactly where the drop-off happens, rewrite your hooks, and crop out dead silence in editing."
  },
  {
    id: "pleasing",
    title: "Trying to please everyone",
    icon: UserCheck,
    desc: "Diluting your content and opinions to avoid any criticism or dislikes.",
    example: "Being so politically correct and neutral that your content becomes completely boring.",
    solution: "Take a clear stand. A strong personal brand naturally attracts like-minded supporters and repels trolls. If you try to speak to everyone, you speak to no one."
  }
];

export default function BeginnerMistakes() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="mistakes" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-85 h-85 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-brand-yellow" />
            <span>Common Pitfalls</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Biggest Beginner Mistakes
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Ninety-five percent of creators fail due to these seven mistakes. Learn how to identify and bypass them entirely. Click to expand.
          </p>
        </div>

        {/* Mistakes List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mistakes.map((mistake) => {
            const Icon = mistake.icon;
            const isExpanded = expandedId === mistake.id;

            return (
              <motion.div
                key={mistake.id}
                layout="position"
                onClick={() => toggleExpand(mistake.id)}
                className={`group border rounded-3xl p-6 bg-zinc-950/60 backdrop-blur-md cursor-pointer transition-all duration-300 relative overflow-hidden select-none flex flex-col justify-between ${
                  isExpanded ? "border-brand-yellow/30 shadow-2xl bg-zinc-900/60" : "border-white/5 hover:border-white/10 hover:bg-zinc-900/20"
                }`}
              >
                {/* Highlight top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isExpanded ? "bg-brand-yellow" : "bg-transparent group-hover:bg-brand-yellow/20"
                }`} />

                <div className="space-y-4">
                  {/* Icon + Title Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-2xl ${
                      isExpanded ? "bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20" : "bg-white/5 text-zinc-400 border border-white/5"
                    } transition-colors`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-brand-yellow" : "group-hover:translate-y-0.5"
                    }`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {mistake.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {mistake.desc}
                    </p>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-dashed border-white/10 pt-4 space-y-3 font-mono"
                    >
                      <div>
                        <span className="text-[10px] text-red-400 uppercase tracking-widest font-bold">❌ The Mistake:</span>
                        <p className="text-xs text-zinc-500 font-light mt-0.5">{mistake.example}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-green-400 uppercase tracking-widest font-bold">✅ The Bootcamp Fix:</span>
                        <p className="text-xs text-zinc-300 font-light mt-0.5">{mistake.solution}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
