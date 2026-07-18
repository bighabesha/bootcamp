"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

const quotes = [
  {
    quote: "Consistency beats talent.",
    sub: "The internet is littered with talented ghosts who posted twice and vanished. The creator who shows up every week always wins in the long run."
  },
  {
    quote: "Done is better than perfect.",
    sub: "You cannot optimize a video that doesn't exist. Publish your raw ideas, get feedback, and make the next one 1% better. Action builds competence."
  },
  {
    quote: "Solve problems.",
    sub: "Content is not about looking cool; it is about helping people. If you answer questions and solve pain points, your audience will build your business."
  },
  {
    quote: "Play the long game.",
    sub: "Stop checking views every ten minutes. Creator careers are built over years, not days. Treat content as long-term compound interest."
  },
  {
    quote: "Every upload is practice.",
    sub: "Stop worrying about your first video's performance. Treat your first thirty uploads as raw practice to find your voice and master editing."
  },
  {
    quote: "Progress over perfection.",
    sub: "You learn content creation by creating, editing, and publishing—not by reading books or buying courses. Action is the only true teacher."
  }
];

export default function CreatorMindset() {
  return (
    <section id="mindset" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft glowing highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Psychology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            The Creator Mindset
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Ninety percent of success in content creation is mental. Master these six core tenets to survive the initial filter.
          </p>
        </div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {quotes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: "rgba(255, 193, 7, 0.25)" }}
              className="group border border-white/5 bg-zinc-950/40 p-8 rounded-[36px] flex flex-col justify-between hover:bg-[#121212]/40 transition-all duration-300 relative overflow-hidden min-h-[220px]"
            >
              {/* Giant quote mark backdrop */}
              <div className="absolute -right-2 -bottom-2 text-white opacity-[0.015] pointer-events-none select-none">
                <Quote className="w-36 h-36" />
              </div>

              <div className="space-y-4">
                <div className="w-8 h-8 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-brand-yellow transition-colors">
                  "{item.quote}"
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mt-6">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
