"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, MessageCircle, Play } from "lucide-react";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);


export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Neon Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[110px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-yellow/20 text-brand-yellow text-sm font-semibold tracking-wide shadow-lg shadow-brand-yellow/5"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>BOOTCAMP 2026</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]"
            >
              Become a <span className="text-brand-yellow">Content Creator</span> <br className="hidden sm:inline" />
              in Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-amber-500 font-extrabold relative">
                5 Days
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-brand-yellow/30 rounded-full blur-[1px]"></span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Learn how to create professional content, grow your audience, and build opportunities on YouTube, TikTok, and Facebook.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={() => handleScrollTo("register")}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-black bg-brand-yellow hover:bg-white transition-all duration-300 shadow-xl shadow-brand-yellow/15 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("course")}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-zinc-900/60 border border-white/10 hover:border-brand-yellow/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                View Course Outline
              </button>
            </motion.div>

            {/* Floating Platform Icons for visual weight (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-6 pt-10 text-zinc-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Master Platforms:</span>
              <div className="flex gap-4">
                {[
                  { name: "YouTube", icon: <YoutubeIcon className="w-5 h-5" />, color: "hover:text-red-500" },
                  { name: "TikTok", icon: <Play className="w-5 h-5 rotate-90" />, color: "hover:text-cyan-400" },
                  { name: "Telegram", icon: <Send className="w-4 h-4" />, color: "hover:text-blue-400" },
                  { name: "Facebook", icon: <MessageCircle className="w-5 h-5" />, color: "hover:text-blue-600" }
                ].map((plat, idx) => (
                  <motion.div
                    key={plat.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                    className={`p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 cursor-pointer ${plat.color} transition-colors duration-300`}
                    title={plat.name}
                  >
                    {plat.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Instructor Photo & Pricing Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Backlight Glow */}
            <div className="absolute inset-0 z-0 bg-gradient-radial w-[120%] h-[120%] -left-[10%] -top-[10%] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl"
            >
              {/* Photo */}
              <Image
                src="/instructor.jpg"
                alt="Big Habesha"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
              />

              {/* Glass overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

              {/* Floating Name Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">Instructor</p>
                  <h4 className="text-lg font-black text-white">Big Habesha</h4>
                </div>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500 animate-ping" />
              </div>
            </motion.div>

            {/* Floating Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="absolute -bottom-8 -right-4 lg:-right-8 z-20 w-[260px] sm:w-[280px] p-6 rounded-3xl glass-panel border-2 border-brand-yellow/30 shadow-2xl animate-float"
            >
              {/* Promo Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow text-xs font-black tracking-widest uppercase mb-3">
                LIMITED OFFER
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">500 ETB</span>
                <span className="text-zinc-400 text-xs font-semibold block mt-0.5">One-Time Registration Fee</span>
              </div>

              <hr className="border-white/5 my-4" />

              {/* Ebook Bonus Badge */}
              <div className="flex gap-3 items-start bg-zinc-950/40 p-2.5 rounded-xl border border-white/5">
                <span className="text-xl mt-0.5">🎁</span>
                <div>
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider">FREE BONUS</h5>
                  <p className="text-[11px] text-zinc-300 leading-normal font-medium">The Internet Directory (800+ Useful Websites)</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
