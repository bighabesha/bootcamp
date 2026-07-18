"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onContinueClick: () => void;
}

export default function FinalCTA({ onContinueClick }: FinalCTAProps) {
  return (
    <section id="final-cta" className="relative min-h-[90vh] flex flex-col justify-center items-center py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white overflow-hidden">
      
      {/* Background massive glowing aura */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-brand-yellow/10 blur-[130px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 space-y-12 flex flex-col items-center">
        
        {/* Sparkles icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shadow-lg shadow-brand-yellow/5"
        >
          <Sparkles className="w-6 h-6 animate-spin-slow" />
        </motion.div>

        {/* Big Cinematic Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-3xl"
        >
          &ldquo;Five years from now, you&apos;ll either wish you had started today&mdash;or you&apos;ll be grateful that you did.&rdquo;
        </motion.h2>

        {/* Secondary Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-400 text-lg sm:text-xl font-light max-w-xl leading-relaxed"
        >
          The best time to start was yesterday. The second-best time is today.
        </motion.p>

        {/* Large Action CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6"
        >
          <button
            onClick={onContinueClick}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base sm:text-lg font-bold text-black bg-brand-yellow hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-yellow/20 cursor-pointer"
          >
            <span>Continue to Day 2</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Small trust/security badge */}
        <div className="flex items-center gap-2 text-zinc-600 text-xs font-mono pt-4 select-none">
          <ShieldCheck className="w-4 h-4 text-zinc-600" />
          <span>Unlock Days 2-5 (400 ETB One-time payment)</span>
        </div>

      </div>
    </section>
  );
}
