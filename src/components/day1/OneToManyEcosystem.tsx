"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Play, Video, Globe, GraduationCap, Mic, Mail, Briefcase, Share2 
} from "lucide-react";

// Platform SVG Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
  </svg>
);

const channels = [
  { name: "TikTok", icon: Video, color: "text-cyan-400 bg-cyan-950/10 border-cyan-500/20", type: "Short Video" },
  { name: "Instagram", icon: InstagramIcon, color: "text-pink-500 bg-pink-950/10 border-pink-500/20", type: "Reels / Stories" },
  { name: "Facebook", icon: FacebookIcon, color: "text-blue-500 bg-blue-950/10 border-blue-500/20", type: "Social / Watch" },
  { name: "Telegram", icon: TelegramIcon, color: "text-sky-400 bg-sky-950/10 border-sky-500/20", type: "Instant Channel" },
  { name: "Website", icon: Globe, color: "text-emerald-400 bg-emerald-950/10 border-emerald-500/20", type: "Blog / SEO" },
  { name: "Course", icon: GraduationCap, color: "text-brand-yellow bg-yellow-950/10 border-brand-yellow/20", type: "Premium Offer" },
  { name: "Podcast", icon: Mic, color: "text-purple-400 bg-purple-950/10 border-purple-500/20", type: "Audio Show" },
  { name: "Newsletter", icon: Mail, color: "text-orange-400 bg-orange-950/10 border-orange-500/20", type: "Direct CRM" },
  { name: "Business", icon: Briefcase, color: "text-red-400 bg-red-950/10 border-red-500/20", type: "Sponsors & Sales" }
];

export default function OneToManyEcosystem() {
  return (
    <section id="ecosystem" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            Content Leverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            One Piece of Content Can Become Many
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Never start from scratch every day. Learn the system of content recycling, distribution, and structural leverage.
          </p>
        </div>

        {/* Visual Map Layout */}
        <div className="bg-[#121212]/30 border border-white/5 p-8 sm:p-12 rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col items-center">
          
          {/* Decorative network nodes */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.015),transparent_60%)] pointer-events-none" />

          {/* Central Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="z-10 w-44 h-44 rounded-full bg-zinc-950 border border-brand-yellow/30 flex flex-col items-center justify-center text-center p-6 shadow-2xl relative group"
          >
            {/* Pulsing ring outer */}
            <span className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-pulse opacity-30" />
            <span className="absolute inset-2 rounded-full border border-dashed border-white/10" />

            <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center text-black mb-3 shadow-lg shadow-brand-yellow/15">
              <Play className="w-6 h-6 fill-current" />
            </div>
            
            <h3 className="text-xs font-black text-white uppercase tracking-wider">1 YouTube Video</h3>
            <span className="text-[9px] text-zinc-500 font-mono mt-1">Core Asset</span>
          </motion.div>

          {/* Connected branching channels grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 mt-16 relative z-10">
            {channels.map((chan, idx) => {
              const Icon = chan.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Decorative connecting arrow on mobile, or just standard flow */}
                  <div className="w-[1px] h-6 bg-zinc-800 mb-2 sm:hidden" />
                  
                  {/* Small card node */}
                  <div className="w-full border border-white/5 bg-zinc-950/60 p-4 rounded-2xl hover:border-brand-yellow/30 hover:bg-[#121212]/50 transition-all duration-300 group flex flex-col items-center justify-between min-h-[110px]">
                    <div className={`p-2.5 rounded-xl border ${chan.color} transition-transform group-hover:scale-105`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-brand-yellow transition-colors mt-2">{chan.name}</h4>
                      <p className="text-[9px] text-zinc-500 mt-0.5 font-mono">{chan.type}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 max-w-2xl text-center text-xs font-mono text-zinc-400/80 bg-white/2 border border-white/5 p-4 rounded-xl">
            💡 <strong>Ecosystem Strategy:</strong> Create one high-value 10-minute YouTube video, split it into 5 shorts (TikTok/Reels), export the transcript as a Newsletter/Website blog, upload the audio as a Podcast, and direct traffic to your Course/Business!
          </div>

        </div>
      </div>
    </section>
  );
}
