"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

// Social SVG Icons
const YoutubeIcon = () => (
  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TiktokIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.42-.62-.65v7.17c.02 1.36-.26 2.78-.96 3.96-.71 1.21-1.85 2.18-3.19 2.68-1.39.54-2.93.63-4.38.33-1.43-.3-2.77-1.12-3.71-2.24-.97-1.13-1.48-2.63-1.48-4.11 0-1.48.51-2.98 1.48-4.11.95-1.12 2.3-1.94 3.73-2.23 1.09-.22 2.22-.16 3.29.17V9.08c-.76-.25-1.57-.31-2.37-.2-1 .14-1.97.64-2.63 1.4-.68.76-1.02 1.79-.99 2.81-.03 1.02.31 2.05.99 2.81.66.76 1.63 1.25 2.63 1.4.8.11 1.61.05 2.37-.2.72-.25 1.38-.69 1.87-1.27.5-.59.78-1.35.79-2.13l.02-13.48z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
  </svg>
);

interface HeroSectionProps {
  onStartClick: () => void;
}

export default function HeroSection({ onStartClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0B0B] text-white">
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-brand-yellow/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-purple-500/5 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Empty spacer for alignment */}
      <div />

      {/* Content Center */}
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-12 mt-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
          </span>
          <span>Day 1: The Creator Blueprint</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl"
        >
          What if the <span className="text-brand-yellow drop-shadow-[0_0_20px_rgba(255,193,7,0.2)]">smartphone</span> in your pocket could completely change your future?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 text-lg sm:text-xl md:text-2xl font-light max-w-3xl leading-relaxed"
        >
          Learn how ordinary people are building extraordinary careers through content creation.
        </motion.p>

        {/* Floating Interactive Canvas for Smartphone & Orbiting Icons */}
        <div className="relative w-80 h-80 flex items-center justify-center my-6">
          {/* Circular Orbit Trails */}
          <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full" />
          <div className="absolute w-[360px] h-[360px] border border-white/5 rounded-full" />

          {/* Smartphone container */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [-5, 5, -5],
              rotateX: [5, -5, 5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-44 h-76 bg-zinc-900 border-[6px] border-zinc-800 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col justify-between p-4 z-10 select-none group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Screen reflection/glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/10 via-transparent to-white/10 pointer-events-none" />
            
            {/* Camera notch */}
            <div className="w-16 h-4 bg-zinc-800 absolute top-2 left-1/2 -translate-x-1/2 rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
            </div>

            {/* Simulated app screen interface */}
            <div className="flex-1 flex flex-col justify-center items-center gap-4 mt-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-brand-yellow/20">
                BH
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Live Bootcamp</p>
                <h3 className="text-xs font-bold text-white leading-tight">BIG HABESHA</h3>
                <p className="text-[9px] text-brand-yellow font-semibold px-2 py-0.5 rounded-full bg-brand-yellow/10 inline-block border border-brand-yellow/20">
                  DAY 1 UNLOCKED
                </p>
              </div>
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-2 mt-2">
                <div className="flex items-center gap-1.5 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[8px] text-zinc-400 font-mono">1,482 STUDS ONLINE</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar indicator */}
            <div className="w-16 h-1 bg-zinc-700 mx-auto rounded-full mt-2" />
          </motion.div>

          {/* Orbiting Icons */}
          {/* YouTube */}
          <motion.div
            animate={{
              x: [130, -130, 130],
              y: [-60, 60, -60],
              z: [0, 1, 0],
              scale: [1, 0.85, 1]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute p-2.5 rounded-full bg-zinc-900 border border-white/15 backdrop-blur-md shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform"
          >
            <YoutubeIcon />
          </motion.div>

          {/* TikTok */}
          <motion.div
            animate={{
              x: [-130, 130, -130],
              y: [60, -60, 60],
              z: [1, 0, 1],
              scale: [0.85, 1, 0.85]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute p-2.5 rounded-full bg-zinc-900 border border-white/15 backdrop-blur-md shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform"
          >
            <TiktokIcon />
          </motion.div>

          {/* Facebook */}
          <motion.div
            animate={{
              x: [60, -60, 60],
              y: [130, -130, 60],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute p-2.5 rounded-full bg-zinc-900 border border-white/15 backdrop-blur-md shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform"
          >
            <FacebookIcon />
          </motion.div>

          {/* Instagram */}
          <motion.div
            animate={{
              x: [-60, 60, -60],
              y: [-130, 130, -130],
              scale: [1.1, 0.9, 1.1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute p-2.5 rounded-full bg-zinc-900 border border-white/15 backdrop-blur-md shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform"
          >
            <InstagramIcon />
          </motion.div>

          {/* Telegram */}
          <motion.div
            animate={{
              x: [0, 150, 0, -150, 0],
              y: [120, 0, -120, 0, 120]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute p-2.5 rounded-full bg-zinc-900 border border-white/15 backdrop-blur-md shadow-lg z-20 cursor-pointer hover:scale-110 transition-transform"
          >
            <TelegramIcon />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <button
            onClick={onStartClick}
            className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base sm:text-lg font-bold text-black bg-brand-yellow hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-brand-yellow/20 cursor-pointer"
          >
            <span>Start Day 1</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={onStartClick}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors mt-8 cursor-pointer group"
      >
        <span className="text-xs tracking-widest font-medium uppercase text-zinc-400 group-hover:text-brand-yellow transition-colors">
          Scroll to Begin
        </span>
        <ChevronDown className="w-5 h-5 text-brand-yellow" />
      </motion.button>
    </section>
  );
}
