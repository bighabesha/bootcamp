"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, AlertTriangle, ChevronDown, Ban, Zap, Hourglass, Trash2, Frown } from "lucide-react";

const warningCards = [
  {
    id: "overnight",
    title: "Overnight Success Seekers",
    desc: "People looking for a 'get rich quick' scheme or a magic button.",
    details: "If you expect to upload one video and wake up with a million dollars or quit your job next Monday, please do not join. Building a content assets business is like planting a tree. It takes roots, watering, and time before it bears fruit.",
    icon: Zap
  },
  {
    id: "viral",
    title: "Viral-Obsessed Creators",
    desc: "People who prioritize empty viral spikes over building trust.",
    details: "Viral videos are great, but they are useless if you don't have a system to convert views into followers, trust, and business assets. If you only care about getting one lucky video rather than developing a sustainable skill, you won't succeed here.",
    icon: AlertTriangle
  },
  {
    id: "quitter",
    title: "Quick Quitters",
    desc: "People who give up if their first 10 videos get zero views.",
    details: "The algorithm is a filter. It tests your resolve and consistency. Every professional content creator has gone through weeks or months of zero engagement. If you cannot survive the initial 'ghost town' phase, this bootcamp will not save you.",
    icon: Hourglass
  },
  {
    id: "perfectionist",
    title: "Stuck Perfectionists",
    desc: "People who spend months preparing but never hit 'Publish'.",
    details: "Perfectionism is just fear disguised as high standards. You cannot optimize a video that doesn't exist. Your first 20 videos will be bad, and that is exactly how you learn. If you're unwilling to make public mistakes, you won't make progress.",
    icon: Ban
  },
  {
    id: "followers",
    title: "Follower Collectors",
    desc: "People who view audience members as mere numbers.",
    details: "An audience is made of real human beings with feelings, problems, and desires. If you treat them as 'views' to feed your ego, they will sense it and leave. We teach how to build authentic connection and serve your audience.",
    icon: Frown
  },
  {
    id: "loweffort",
    title: "Low-Effort Copycats",
    desc: "People who want to duplicate content without adding value.",
    details: "Ripping other creators' videos, adding a robotic voiceover, and hoping to get paid is not a business. The internet is flooded with low-effort noise. We teach you how to extract your unique knowledge, stories, and ideas to build unique value.",
    icon: Trash2
  }
];

export default function WhoIsNotFor() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="warning" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background neon red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-red-500/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-red-500 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>Warning Zone</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Who This Bootcamp Is NOT For
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Before we go further, let&apos;s be fully honest. If you align with any of these traits, this bootcamp is a wrong fit for you. Save your time and focus.
          </p>
        </div>

        {/* Warning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningCards.map((card) => {
            const IconComp = card.icon;
            const isExpanded = expandedId === card.id;

            return (
              <motion.div
                key={card.id}
                layout="position"
                onClick={() => toggleExpand(card.id)}
                className={`group border rounded-3xl p-6 bg-zinc-950/60 backdrop-blur-md cursor-pointer transition-all duration-300 relative overflow-hidden select-none flex flex-col justify-between ${
                  isExpanded ? "border-red-500/30 shadow-2xl bg-zinc-900/60" : "border-white/5 hover:border-white/10 hover:bg-zinc-900/20"
                }`}
              >
                {/* Red warning bar on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isExpanded ? "bg-red-500" : "bg-transparent group-hover:bg-red-500/20"
                }`} />

                <div className="space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-2xl ${
                      isExpanded ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-white/5 text-zinc-400 border border-white/5"
                    } transition-colors`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${
                      isExpanded ? "rotate-185 text-red-400" : "group-hover:translate-y-0.5"
                    }`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400/90 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-dashed border-white/10 pt-4"
                    >
                      <p className="text-xs text-zinc-500 leading-relaxed font-light font-mono">
                        {card.details}
                      </p>
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
