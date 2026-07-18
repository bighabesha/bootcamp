"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle, Flame } from "lucide-react";

const roadmapSteps = [
  {
    day: "Day 1",
    title: "Mindset & Fundamentals",
    desc: "Unlocking the creator mindset, picking your platform, aligning your niche, and launching Day 1 homework.",
    icon: Flame,
    color: "from-amber-500 to-yellow-500",
  },
  {
    day: "Day 2",
    title: "Creator Skills & Tools",
    desc: "Mastering video editing (CapCut), scripts, audio, lighting, and camera basics with no budget.",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
  },
  {
    day: "Day 3",
    title: "Growth & Algorithm Secrets",
    desc: "Decoding algorithms on YouTube, TikTok, & Facebook. Hook strategies, CTR, and thumbnail design.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    day: "Day 4",
    title: "Income & Monetization Channels",
    desc: "Setting up local and global revenue streams. Brand sponsorships, digital products, and adsense secrets.",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-500",
  },
  {
    day: "Day 5",
    title: "Business & Scaling System",
    desc: "Turning content into a legitimate business. Outsourcing, setting up operations, and your 90-day creator plan.",
    icon: Flame,
    color: "from-red-500 to-orange-500",
  },
];

export default function WelcomeRoadmap() {
  return (
    <section id="welcome" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Welcome Text Left */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-sm font-black uppercase tracking-widest text-brand-yellow">
                Welcome to Day 1
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Your journey to becoming a professional creator starts here.
              </h2>
            </div>
            
            <p className="text-zinc-400 font-light text-lg leading-relaxed">
              First, thank you for taking this leap. Deciding to put yourself out there and build a brand is one of the most empowering choices you can make.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="font-bold text-white text-lg">What you will achieve by Day 5:</h4>
              <ul className="space-y-3">
                {[
                  "Define a highly profitable content niche",
                  "Produce high-quality viral videos using CapCut",
                  "Understand how to hook any audience in 3 seconds",
                  "Set up Telegram, CBE & foreign currency income strategies",
                  "Construct a bulletproof 90-day action calendar",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-zinc-300 text-sm"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Roadmap Right */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-yellow via-zinc-800 to-zinc-900 pointer-events-none" />

            <div className="space-y-12">
              {roadmapSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex items-start gap-6 group"
                  >
                    {/* Roadmap dot/icon */}
                    <div className="relative z-10 shrink-0">
                      <motion.div
                        whileInView={{
                          backgroundColor: "#FFC107",
                          boxShadow: "0 0 20px rgba(255, 193, 7, 0.4)",
                          borderColor: "#FFC107"
                        }}
                        viewport={{ once: false, amount: 0.8 }}
                        className="w-16 h-16 rounded-2xl bg-zinc-900 border-2 border-white/10 flex items-center justify-center text-zinc-400 group-hover:scale-105 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                      </motion.div>
                    </div>

                    {/* Step Card details */}
                    <div className="flex-1 bg-[#121212]/40 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/20 p-6 rounded-3xl transition-all duration-300 shadow-xl group-hover:translate-x-1 group-hover:bg-[#121212]/60">
                      <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                        {step.day}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-brand-yellow transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
                        {step.desc}
                      </p>
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
