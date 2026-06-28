"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, MessageCircle, Play } from "lucide-react";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);


export default function SocialProof() {
  const stats = [
    {
      platform: "YouTube",
      count: "200K+",
      label: "Subscribers",
      color: "from-red-600/10 to-red-600/5",
      borderColor: "group-hover:border-red-500/30",
      iconColor: "text-red-500",
      icon: <YoutubeIcon className="w-6 h-6" />,
    },
    {
      platform: "TikTok",
      count: "500K+",
      label: "Followers",
      color: "from-zinc-800/20 to-zinc-800/10",
      borderColor: "group-hover:border-white/20",
      iconColor: "text-white",
      icon: <Play className="w-6 h-6 rotate-90" />,
    },
    {
      platform: "Facebook",
      count: "100K+",
      label: "Followers",
      color: "from-blue-600/10 to-blue-600/5",
      borderColor: "group-hover:border-blue-500/30",
      iconColor: "text-blue-500",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      platform: "Telegram",
      count: "115K+",
      label: "Community",
      color: "from-cyan-600/10 to-cyan-600/5",
      borderColor: "group-hover:border-cyan-500/30",
      iconColor: "text-cyan-400",
      icon: <Send className="w-5 h-5 -translate-y-0.5 translate-x-0.5" />,
    },
  ];

  const badges = [
    "Real Content Creator",
    "Tech Educator",
    "Social Media Expert",
  ];

  return (
    <section className="py-20 relative bg-zinc-950/80 border-y border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-yellow/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-brand-yellow text-xs font-black uppercase tracking-widest">
            Audience & Reach
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Thousands of Followers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Learn from a creator who actually practices what they preach, with a verified community across all major platforms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl p-6 sm:p-8 glass-panel border border-white/5 transition-all duration-300 overflow-hidden flex flex-col justify-between aspect-square lg:aspect-auto hover:bg-zinc-900/40"
            >
              {/* Backlight color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Border glow */}
              <div className={`absolute inset-0 border border-transparent rounded-3xl transition-colors duration-500 ${stat.borderColor}`} />

              <div className="relative z-10 flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-zinc-900 border border-white/5 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                  {stat.platform}
                </span>
              </div>

              <div className="relative z-10 mt-8 sm:mt-12">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  {stat.count}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-4">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex items-center gap-3 text-zinc-300 font-semibold text-sm sm:text-base"
            >
              <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0" />
              <span>{badge}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
