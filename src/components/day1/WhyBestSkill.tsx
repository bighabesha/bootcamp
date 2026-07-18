"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Globe, Landmark, Building, DollarSign, Target, Briefcase, Users, 
  Rocket, MessageCircle, Megaphone, BookOpen, Compass, Shield, Award 
} from "lucide-react";

const skillsData = [
  { id: 1, title: "The Internet Is Growing", icon: Globe, short: "Attention is the new global currency.", long: "Over 5 billion people are connected to the internet today, and millions join every month. The absolute limit of human attention is shifting completely to screens. By learning to capture and direct this attention, you gain the most valuable leverage in the modern economy." },
  { id: 2, title: "Creator Economy Scale", icon: Landmark, short: "A $250B industry growing daily.", long: "The creator economy is no longer a hobby sector. It is a multi-billion dollar economy where individual creators function as media networks. Traditional marketing is dying; brands are redirecting budgets directly to creators who hold authentic audience trust." },
  { id: 3, title: "Every Business Needs Content", icon: Building, short: "Companies spend billions for reach.", long: "Every modern company, from local cafes to tech giants, requires a content funnel to survive. If they don't produce content, they don't exist. Understanding how to script, film, and optimize content makes you indispensable to any business." },
  { id: 4, title: "Unlimited Income Potential", icon: DollarSign, short: "Break free from hourly salary caps.", long: "When you trade time for money, your income is capped by the clock. In content creation, one piece of work can compound, attracting sponsors, ads, and product sales while you sleep. You scale based on leverage, not labor." },
  { id: 5, title: "Personal Branding Leverage", icon: Target, short: "Your permanent digital resume.", long: "Resumes are dying. Your personal brand is your permanent digital reputation. A strong brand draws business partnerships, job offers, and high-value opportunities directly to you without you ever chasing them." },
  { id: 6, title: "Remote Work & Freedom", icon: Briefcase, short: "Work on your terms, from anywhere.", long: "Content creation is location-independent. All you need is a smartphone, a microphone, and an internet connection. You can build a global business from Addis Ababa, Nairobi, or a beach in Thailand." },
  { id: 7, title: "Community Building", icon: Users, short: "The ultimate economic shield.", long: "A loyal audience that trusts you is the ultimate insurance policy. Even if algorithms change or platforms shut down, your community will follow you. True connection is the most defensive business moat." },
  { id: 8, title: "Digital Entrepreneurship", icon: Rocket, short: "Content is the ultimate funnel.", iconColor: "text-red-400", long: "Attention is the hardest part of starting any business. Once you possess an audience, you can launch software, physical products, merchandise, consulting, or newsletters with zero marketing spend." },
  { id: 9, title: "Communication Skills", icon: MessageCircle, short: "Master the art of clear articulation.", long: "Speaking to a camera forces you to organize thoughts, eliminate fluff, and deliver messages concisely. This translates to high-level persuasion in interviews, boardrooms, and interpersonal relationships." },
  { id: 10, title: "Marketing & Psychology", icon: Megaphone, short: "Understand what makes people click.", long: "By analyzing hooks, CTR, and audience retention, you learn human psychology. You understand what captures interest, sparks desire, and drives action. This is the foundation of all sales." },
  { id: 11, title: "Storytelling", icon: BookOpen, short: "The ultimate tool of influence.", long: "Storytelling is the oldest form of human communication. It bypasses logical defenses and builds emotional connection. The person who tells the best stories controls the narrative and wins the market." },
  { id: 12, title: "Digital Leadership", icon: Compass, short: "Lead, inspire, and educate.", long: "Content creation forces you to take a stand, share your perspective, and lead a community towards shared goals. It develops high-level authority and thought leadership." },
  { id: 13, title: "Problem Solving", icon: Shield, short: "Create value by answering questions.", long: "The best content answers questions and solves problems for others. By constantly researching and packing solutions, you train your brain to notice opportunities and fix bottlenecks in any industry." },
  { id: 14, title: "Modern Business Skills", icon: Award, short: "Run a micro-media conglomerate.", long: "As a creator, you are the CEO, editor, copywriter, accountant, and negotiator. You learn deal structures, cash flow, scaling, and analytics. It is a real-world MBA in digital operations." }
];

export default function WhyBestSkill() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillsData[0] | null>(null);

  return (
    <section id="why-best-skill" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Ultimate Skill
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Why Content Creation Is One of the Best Skills of the Future
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            It is not just about making videos. It is a compound skill stack that turns you into a highly capable digital entrepreneur. Click any card to expand.
          </p>
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ y: -4, borderColor: "rgba(255, 193, 7, 0.3)" }}
                className="group border border-white/5 bg-zinc-950/40 p-6 rounded-3xl cursor-pointer hover:bg-[#121212]/40 transition-all duration-300 flex flex-col justify-between min-h-[160px] relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-light leading-normal">
                      {skill.short}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSkill(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-[#0E0E10] border border-white/10 p-8 rounded-3xl shadow-2xl z-10 space-y-6"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow flex items-center justify-center">
                    {React.createElement(selectedSkill.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Skill Stack Detail</span>
                    <h3 className="text-lg font-black text-white">{selectedSkill.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-brand-yellow">"{selectedSkill.short}"</p>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedSkill.long}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-right">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-brand-yellow hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Got It, Continue
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
