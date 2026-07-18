"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Stethoscope, Sprout, Cpu, Utensils, 
  BookOpen, Wrench, Terminal, Palette, Briefcase 
} from "lucide-react";

const professions = [
  { name: "Teacher", icon: GraduationCap, shareable: "Study hacks, class management tips, or explaining complex concepts simply." },
  { name: "Doctor", icon: Stethoscope, shareable: "Preventative wellness advice, medical myth-busting, or explaining anatomy." },
  { name: "Farmer", icon: Sprout, shareable: "Organic gardening, crop rotation hacks, or scale agricultural business insights." },
  { name: "Engineer", icon: Cpu, shareable: "System architectures, physical mechanics breakdowns, or mathematical theories." },
  { name: "Chef", icon: Utensils, shareable: "Kitchen efficiency hacks, flavor combinations, or step-by-step classic recipes." },
  { name: "Student", icon: BookOpen, shareable: "Note-taking strategies, university survival guides, or exam preparation tips." },
  { name: "Mechanic", icon: Wrench, shareable: "Car buying checklists, simple repair tutorials, or tool reviews." },
  { name: "Programmer", icon: Terminal, shareable: "Coding setup tutorials, debugging workflows, or web application building blocks." },
  { name: "Artist", icon: Palette, shareable: "Color theory tutorials, drawing step-by-steps, or digital painting reviews." },
  { name: "Business Owner", icon: Briefcase, shareable: "Customer hiring templates, scaling operations, or leadership insights." }
];

export default function EveryoneWorthSharing() {
  return (
    <section id="professions" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Unlimited Possibilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Everyone Has Something Worth Sharing.
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            You don&apos;t need a PhD or 20 years of experience. You just need to be one step ahead of the person you are helping.
          </p>
        </div>

        {/* Professions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {professions.map((prof, idx) => {
            const Icon = prof.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group border border-white/5 bg-zinc-950/40 p-5 rounded-3xl flex flex-col justify-between hover:border-brand-yellow/30 hover:bg-[#121212]/40 transition-all duration-300 min-h-[170px]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {prof.name}
                  </h3>
                </div>
                
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-normal font-light group-hover:text-zinc-400 mt-2">
                  {prof.shareable}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Core Lesson Statement */}
        <div className="text-center pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-6 rounded-3xl bg-[#121212]/50 border border-brand-yellow/15 shadow-2xl relative"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-brand-yellow/2 rounded-3xl blur-sm" />
            <h3 className="text-lg sm:text-2xl font-black text-white relative z-10">
              💡 &quot;Every person knows something another person wants to learn.&quot;
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light relative z-10">
              Your normal is someone else&apos;s breakthrough. Content creation is simply building the bridge.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
