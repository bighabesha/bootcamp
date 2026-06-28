"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, PenTool, TrendingUp, HelpCircle, CheckCircle } from "lucide-react";

interface CourseDay {
  day: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  topics: string[];
}

export default function CourseOutline() {
  const curriculum: CourseDay[] = [
    {
      day: 1,
      title: "The Power of Content Creation",
      subtitle: "Set your foundation and build a modern brand strategy.",
      icon: <BookOpen className="w-5 h-5 text-brand-yellow" />,
      topics: [
        "Personal Branding Fundamentals",
        "Future Opportunities & Creator Economy",
        "Choosing Your Profitable Niche",
        "Multiple Income Possibilities",
      ],
    },
    {
      day: 2,
      title: "Finding Unlimited Content Ideas",
      subtitle: "Never run out of ideas using strategic search methodologies.",
      icon: <Lightbulb className="w-5 h-5 text-brand-yellow" />,
      topics: [
        "Viral Idea Generation Frameworks",
        "Leveraging AI Tools for Brainstorming",
        "Creating a Systematic Content Calendar",
        "Platform-Specific Content Strategy",
      ],
    },
    {
      day: 3,
      title: "Creating Professional Content",
      subtitle: "Produce premium audio and video using only your smartphone.",
      icon: <PenTool className="w-5 h-5 text-brand-yellow" />,
      topics: [
        "High-Conversion Script Writing",
        "Professional Recording Principles",
        "Smartphone Filming & Lighting Setups",
        "CapCut Editing Masterclass (Speed, Cuts, Audio)",
        "Clickable Thumbnail Design Strategies",
      ],
    },
    {
      day: 4,
      title: "Growing Your Audience",
      subtitle: "Decode the algorithms and capture viewer attention.",
      icon: <TrendingUp className="w-5 h-5 text-brand-yellow" />,
      topics: [
        "How YouTube, TikTok, and FB Algorithms Work",
        "High-CTR Titles & Hook Engineering",
        "Getting More Views organically",
        "Analyzing Metrics & Analytics to Double Down",
        "Optimal Posting Schedule & Strategy",
      ],
    },
    {
      day: 5,
      title: "Final Review & Live Q&A",
      subtitle: "Execute your custom roadmap with direct instructor support.",
      icon: <HelpCircle className="w-5 h-5 text-brand-yellow" />,
      topics: [
        "Student Video Reviews & Audits",
        "Interactive Live Q&A Session",
        "The 90-Day Action Action Plan Blueprint",
        "Bootcamp Wrap-up & Networking",
      ],
    },
  ];

  return (
    <section id="course" className="py-24 relative bg-zinc-950/80 border-t border-white/5 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-gradient-purple-blue pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
            Curriculum Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            5 Days to Creator Mastery
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            A comprehensive, step-by-step program designed to transform absolute beginners into confident, structured content creators.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical Track Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-yellow via-brand-purple to-zinc-800 -translate-x-[1px]" />

          {/* Timeline Days */}
          <div className="space-y-16">
            {curriculum.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.day}
                  className="flex flex-col md:flex-row items-stretch relative"
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-900 border-2 border-brand-yellow flex items-center justify-center -translate-x-1/2 z-20 shadow-lg shadow-brand-yellow/10">
                    <span className="text-xs font-black text-white">{item.day}</span>
                  </div>

                  {/* Left Side spacer (for desktop alignment) */}
                  <div className="hidden md:block md:w-1/2 pr-12 text-right">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-2 pt-1"
                      >
                        <span className="text-brand-yellow text-xs font-extrabold tracking-widest uppercase">
                          DAY {item.day}
                        </span>
                        <h3 className="text-2xl font-black text-white">{item.title}</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.subtitle}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side spacer / Mobile Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-brand-yellow/30 transition-all duration-300 relative group"
                    >
                      {/* Mobile layout helper: shows details in the card itself */}
                      <div className="md:hidden space-y-1 mb-4">
                        <span className="text-brand-yellow text-xs font-extrabold tracking-widest uppercase">
                          DAY {item.day}
                        </span>
                        <h3 className="text-xl font-black text-white">{item.title}</h3>
                        <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.subtitle}</p>
                      </div>

                      {/* Desktop layout title helper for alternate cards */}
                      {!isEven && (
                        <div className="hidden md:block space-y-1 mb-4">
                          <span className="text-brand-yellow text-xs font-extrabold tracking-widest uppercase">
                            DAY {item.day}
                          </span>
                          <h3 className="text-xl font-black text-white">{item.title}</h3>
                          <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.subtitle}</p>
                        </div>
                      )}

                      {/* Bullet Topic List */}
                      <ul className="space-y-3 pt-2">
                        {item.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300 text-sm sm:text-base leading-normal font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Floating Category Icon */}
                      <div className="absolute right-6 top-6 p-2 rounded-xl bg-zinc-950 border border-white/5 text-zinc-400 group-hover:scale-110 group-hover:text-brand-yellow transition-all duration-300">
                        {item.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
