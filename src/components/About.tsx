"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, CheckCircle2 } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Real-World Experience",
      desc: "I don't teach theory from textbooks. Every technique I share is a strategy I've personally used to grow my channels to hundreds of thousands of followers.",
      icon: <Award className="w-5 h-5 text-brand-yellow" />,
    },
    {
      title: "Authentic Growth Only",
      desc: "No shortcut hacks, bot views, or misleading schemes. You will learn how to build a real, highly engaged, and loyal audience that opens career doors.",
      icon: <Heart className="w-5 h-5 text-brand-yellow" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-zinc-950 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Photo Layout */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-[28px] overflow-hidden border border-white/10 group shadow-2xl"
            >
              {/* Photo */}
              <Image
                src="/instructor.jpg"
                alt="Big Habesha Instructor"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent pointer-events-none" />

              {/* Overlay Stat Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 text-center">
                <p className="text-2xl font-black text-brand-yellow">900K+</p>
                <p className="text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-1">Total Network Reach</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
                Meet Your Instructor
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I&apos;m Big Habesha. <br /> I built my audience from scratch.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                When I started creating content, I had no expensive cameras, no professional editing team, and no connections. I had to learn how algorithms work, how to capture attention, and how to edit engaging videos using simple tools like my smartphone.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                Today, my channels are trusted by hundreds of thousands of learners. I started this bootcamp because I want to give beginners a clear, actionable roadmap. No exaggerated marketing claims or get-rich-quick promises—just practical, real-world experience compiled into a 5-day formula.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-panel border border-white/5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-white font-bold text-base">{pillar.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick credentials list */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                <span>CapCut Certified Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                <span>90-Day Action Blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
                <span>Dedicated Community Support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
