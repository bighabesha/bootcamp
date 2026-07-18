"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Eye, Users, ShieldCheck, Heart, Sparkles, Globe } from "lucide-react";

const successCreators = [
  // Global
  {
    id: "mrbeast",
    category: "global",
    name: "MrBeast",
    subscribers: "300M+",
    style: "Viral Entertainment & philanthropy",
    desc: "Started as a kid uploading gameplay videos. Scaled by studying the algorithm like a scientist. Now runs a multi-million dollar chocolate (Feastables) and media empire.",
    lesson: "Optimize retention, scale business assets.",
    image: "/api/placeholder/300/300"
  },
  {
    id: "khaby",
    category: "global",
    name: "Khaby Lame",
    subscribers: "160M+ (TikTok)",
    style: "Silent Reaction Comedy",
    desc: "Laid off from his factory job during the pandemic. Started posting silent, expressive reactions to overly complicated life hacks. Built a global brand without speaking a word.",
    lesson: "Keep it simple. Expression is universal.",
    image: "/api/placeholder/300/300"
  },
  {
    id: "mkbhd",
    category: "global",
    name: "MKBHD (Marques Brownlee)",
    subscribers: "19M+",
    style: "Tech Reviews",
    desc: "Started in high school reviewing a cheap laptop. Spent years posting consistent, high-quality videos. Now the gold standard for tech reviews, interviewing major tech CEOs.",
    lesson: "Consistency and quality build authority.",
    image: "/api/placeholder/300/300"
  },
  {
    id: "aliabdaal",
    category: "global",
    name: "Ali Abdaal",
    subscribers: "5.5M+",
    style: "Productivity & Tech",
    desc: "Doctor-turned-creator who shared study tips during medical school. Scaled his content channel into an 8-figure company selling books, online academy courses, and sponsorships.",
    lesson: "Share what you learn. Educate your audience.",
    image: "/api/placeholder/300/300"
  },
  {
    id: "ishowspeed",
    category: "global",
    name: "IShowSpeed",
    subscribers: "25M+",
    style: "Live Streaming & Variety",
    desc: "Streamed gaming and comedy with raw, explosive energy. Built a massive global community, traveling the world and commanding stadium-sized crowd attention.",
    lesson: "Raw energy and authenticity capture youth culture.",
    image: "/api/placeholder/300/300"
  },
  // Ethiopian
  {
    id: "abel",
    category: "ethiopian",
    name: "Abel Birhanu",
    subscribers: "1M+",
    style: "News & Community Stories",
    desc: "Pioneered news narration and local story narration in Ethiopia. Built a highly engaged community by keeping them updated on trending headlines daily.",
    lesson: "Consistency is key in news narration.",
    image: "/api/placeholder/300/300"
  },
  {
    id: "eshetu",
    category: "ethiopian",
    name: "Eshetu Melese",
    subscribers: "3M+ (YouTube/FB)",
    style: "Comedy, Talk Shows & Charity",
    desc: "Began in traditional theater and television. Transitioned to YouTube with 'Dinklijoch'. Raised millions in crowdfunding, proving local content has massive global financial support.",
    lesson: "Build deep emotional connection and give back.",
    image: "/api/placeholder/300/300"
  },
  // Instructor
  {
    id: "bighabesha",
    category: "instructor",
    name: "Big Habesha",
    subscribers: "Bootcamp Host",
    style: "Content Strategy & Business",
    desc: "Broke through the noise of traditional jobs in Ethiopia. Built independent content channels and monetization funnels, paving the way for creators in East Africa.",
    lesson: "Anyone with a smartphone can build a real brand.",
    image: "/instructor.jpg"
  }
];

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState<"global" | "ethiopian" | "instructor">("global");

  const filteredCreators = successCreators.filter((c) => c.category === activeTab);

  return (
    <section id="success-stories" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Real Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Proof of the Creator Model
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            These creators started exactly where you are today: with zero views, zero subscribers, and a simple camera.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 border-b border-white/5 pb-2">
          {["global", "ethiopian", "instructor"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === tab
                  ? "bg-brand-yellow border-brand-yellow text-black shadow-lg shadow-brand-yellow/10"
                  : "bg-[#121212]/30 border-white/5 text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab === "global" ? "Global Pioneers" : tab === "ethiopian" ? "Ethiopian Pioneers" : "Your Instructor"}
            </button>
          ))}
        </div>

        {/* Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCreators.map((creator) => (
              <motion.div
                key={creator.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-zinc-950 border border-white/5 hover:border-brand-yellow/30 p-6 rounded-[32px] flex flex-col justify-between hover:bg-[#121212]/40 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                {/* Glow backdrop behind cards */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.01),transparent_50%)] pointer-events-none" />

                <div className="space-y-6">
                  {/* Photo / Avatar Placeholder */}
                  <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 relative bg-zinc-900 flex items-center justify-center">
                    {creator.image === "/instructor.jpg" ? (
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        sizes="(max-w-768px) 100vw, 300px"
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center p-4 border border-dashed border-white/5 rounded-xl bg-zinc-950 flex flex-col items-center justify-center w-full h-full gap-2">
                        <Users className="w-10 h-10 text-zinc-600" />
                        <div>
                          <p className="text-[10px] text-zinc-500 font-mono">Creator Avatar</p>
                          <h4 className="text-xs font-bold text-zinc-400">{creator.name}</h4>
                        </div>
                      </div>
                    )}
                    
                    {/* Subscriber Badge */}
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-brand-yellow flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{creator.subscribers}</span>
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{creator.style}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">{creator.name}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{creator.desc}</p>
                  </div>
                </div>

                {/* Key Takeaway / Lesson */}
                <div className="mt-6 pt-4 border-t border-dashed border-white/10">
                  <span className="text-[9px] font-mono text-brand-yellow uppercase tracking-widest">Key Lesson</span>
                  <p className="text-xs text-zinc-300 font-medium mt-1">💡 {creator.lesson}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
