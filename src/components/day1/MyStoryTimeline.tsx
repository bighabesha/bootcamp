"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Compass, Frown, Zap, Users, ShieldAlert, BadgeCheck } from "lucide-react";

const storyMilestones = [
  {
    id: "education",
    title: "Education",
    label: "Where It Started",
    icon: Compass,
    year: "2018 - 2020",
    desc: "Pursued a traditional engineering degree. Safe, expected, but deep down, I felt like a cog in a machine. I spent late nights browsing YouTube wondering if there was a path where I could express myself and control my own destiny.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "discovery",
    title: "Discovery",
    label: "The Revelation",
    icon: Zap,
    year: "2021",
    desc: "Discovered the power of short-form content. Realized that algorithms were leveling the playing field. You didn't need a Hollywood budget or an agent; you just needed a smartphone and a message worth sharing.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "failures",
    title: "Early Failures",
    label: "The Testing Ground",
    icon: Frown,
    year: "2021 - 2022",
    desc: "Uploaded 45 videos to absolute silence. Terrible editing, boring hooks, and zero understanding of audiences. Almost quit twice. But I treated every single failure as data. I took notes, analyzed creators, and rebuilt my strategy.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-red-500/10 text-red-400 border-red-500/20"
  },
  {
    id: "viral",
    title: "First Viral Video",
    label: "The Breakthrough",
    icon: Award,
    year: "Late 2022",
    desc: "Applied my new structure: a 3-second hook, dynamic editing, and clear value. The video hit 100,000 views overnight. Suddenly, my phone was buzzing. It proved the framework worked; content creation wasn't a lottery, it was a science.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "growth",
    title: "Growing Audience",
    label: "Building Community",
    icon: Users,
    year: "2023",
    desc: "Gained over 100,000 dedicated followers. Shifted focus from single viral hits to building a deep, trust-based relationship with my audience. Content became an ongoing conversation, not just a one-way broadcast.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    id: "partnerships",
    title: "Brand Partnerships",
    label: "Monetization",
    icon: ShieldAlert,
    year: "2024",
    desc: "Signed my first major corporate sponsor. Realized that brands will pay premium fees to reach engaged, targeted communities. I replaced my projected yearly corporate salary in just two collaborative campaigns.",
    image: "/api/placeholder/400/400",
    fallbackColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    id: "achievements",
    title: "Achievements",
    label: "Full Circle",
    icon: BadgeCheck,
    year: "2025 - Present",
    desc: "Now running the 'Big Habesha Content Creator Bootcamp' to empower thousands of students. Creating content full-time, traveling, and building independent businesses. Proving that the smartphone is indeed the ultimate vehicle.",
    image: "/instructor.jpg",
    fallbackColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
];

export default function MyStoryTimeline() {
  const [activeTab, setActiveTab] = useState(storyMilestones[0].id);
  const currentStep = storyMilestones.find((s) => s.id === activeTab) || storyMilestones[0];
  const StepIcon = currentStep.icon;

  return (
    <section id="story" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            How I built my creator career.
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            I wasn't born with thousands of followers. Here is the realistic roadmap of how I went from clueless student to full-time creator.
          </p>
        </div>

        {/* Tab Buttons (Horizontal scroll on mobile) */}
        <div className="flex sm:justify-center overflow-x-auto pb-4 sm:pb-0 gap-2 border-b border-white/5 scrollbar-thin scrollbar-thumb-zinc-800">
          <div className="flex gap-2 px-4 sm:px-0">
            {storyMilestones.map((milestone) => {
              const IconComp = milestone.icon;
              const isActive = milestone.id === activeTab;
              return (
                <button
                  key={milestone.id}
                  onClick={() => setActiveTab(milestone.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 rounded-t-2xl text-sm font-semibold border-b-2 transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "border-brand-yellow bg-white/5 text-brand-yellow"
                      : "border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/2"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{milestone.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Milestone Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212]/30 backdrop-blur-sm border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[450px]">
          {/* Decorative Backlights */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.08),transparent_50%)]" />

          {/* Left Column: Image/Placeholder */}
          <div className="lg:col-span-5 flex justify-center items-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full aspect-square max-w-[340px] rounded-3xl overflow-hidden border border-white/10 relative group bg-zinc-950 shadow-2xl flex items-center justify-center"
              >
                {currentStep.image === "/instructor.jpg" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={currentStep.image}
                      alt={currentStep.title}
                      fill
                      sizes="(max-w-768px) 100vw, 340px"
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-full flex flex-col justify-center items-center p-6 border-2 border-dashed ${currentStep.fallbackColor} text-center space-y-4`}>
                    <StepIcon className="w-16 h-16 animate-bounce" />
                    <div>
                      <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Screenshot / Photo Placeholder</p>
                      <h4 className="text-sm font-bold text-white mt-1">{currentStep.title} Photo</h4>
                    </div>
                  </div>
                )}
                
                {/* Photo overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-xs font-bold text-brand-yellow">{currentStep.year}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-full">
                    {currentStep.label}
                  </span>
                  <h3 className="text-3xl font-black tracking-tight text-white mt-2">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium font-mono">Milestone Stage • {currentStep.year}</p>
                </div>

                <p className="text-zinc-300 font-light text-base leading-relaxed sm:text-lg">
                  {currentStep.desc}
                </p>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
                  <span>💡 Hard Lessons Learnt</span>
                  <span>⚡ Consistency Over Luck</span>
                  <span>🎯 Science of Algorithm</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
