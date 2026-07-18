"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, CheckCircle, AlertTriangle, DollarSign, Users, Sparkles 
} from "lucide-react";

// Platform SVG Icons
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.42-.62-.65v7.17c.02 1.36-.26 2.78-.96 3.96-.71 1.21-1.85 2.18-3.19 2.68-1.39.54-2.93.63-4.38.33-1.43-.3-2.77-1.12-3.71-2.24-.97-1.13-1.48-2.63-1.48-4.11 0-1.48.51-2.98 1.48-4.11.95-1.12 2.3-1.94 3.73-2.23 1.09-.22 2.22-.16 3.29.17V9.08c-.76-.25-1.57-.31-2.37-.2-1 .14-1.97.64-2.63 1.4-.68.76-1.02 1.79-.99 2.81-.03 1.02.31 2.05.99 2.81.66.76 1.63 1.25 2.63 1.4.8.11 1.61.05 2.37-.2.72-.25 1.38-.69 1.87-1.27.5-.59.78-1.35.79-2.13l.02-13.48z" />
  </svg>
);

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

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const platforms = [
  {
    id: "youtube",
    name: "YouTube",
    icon: YoutubeIcon,
    color: "text-red-500 border-red-500/20 bg-red-500/5 hover:border-red-500/40",
    activeColor: "bg-red-600 text-white shadow-red-600/10 border-red-500",
    themeHex: "#EF4444",
    ideal: "Educational content, tech reviewers, video essayists, and filmmakers.",
    strengths: "Evergreen search traffic (SEO), highest adsense payouts, deepest subscriber trust.",
    weaknesses: "High production barrier, slow initial growth curve, complex editing/thumbnails.",
    monetization: "Google AdSense, high-ticket sponsorships, course sales, affiliate links.",
    audience: "Intent-driven viewers looking to solve a problem or be deeply entertained.",
    style: "8 - 15 minute horizontal wide videos, high structure, clear scripting."
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: TiktokIcon,
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40",
    activeColor: "bg-cyan-500 text-black shadow-cyan-500/10 border-cyan-400",
    themeHex: "#22D3EE",
    ideal: "Charismatic storytellers, quick entertainers, trend-jackers.",
    strengths: "Explosive organic algorithm reach, rapid growth from 0, low filming barrier.",
    weaknesses: "Short attention spans, low audience loyalty, poor native platform payments.",
    monetization: "Indirect sponsorships, affiliate sales, funneling traffic to Telegram/YouTube.",
    audience: "Entertainment scrollers seeking dopamine, humor, and quick tips.",
    style: "15 - 60 second vertical videos, high energy, fast visual cuts, trending music."
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: FacebookIcon,
    color: "text-blue-500 border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40",
    activeColor: "bg-blue-600 text-white shadow-blue-600/10 border-blue-500",
    themeHex: "#2563EB",
    ideal: "Local news narrators, long-form comedians, mass-market stories.",
    strengths: "Massive local audience base (especially in Ethiopia), powerful sharing engine.",
    weaknesses: "Lower local CPM/Ad rates, strict and confusing copyright rules.",
    monetization: "In-stream ads, local sponsorship deals, business lead generation.",
    audience: "General public, family demographics looking for headlines and viral stories.",
    style: "3 - 5 minute horizontal videos with burned-in subtitles, narrative voiceovers."
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: InstagramIcon,
    color: "text-pink-500 border-pink-500/20 bg-pink-500/5 hover:border-pink-500/40",
    activeColor: "bg-pink-600 text-white shadow-pink-600/10 border-pink-500",
    themeHex: "#EC4899",
    ideal: "Visual curators, lifestyle vloggers, product brands, coaches.",
    strengths: "Premium brand deals, strong aesthetic appeal, excellent direct message sales.",
    weaknesses: "Highly saturated organic reach, requires polished and beautiful visuals.",
    monetization: "High-value brand sponsorships, consulting, e-commerce, digital guides.",
    audience: "Aspirations-driven, trend-conscious, shopping-ready demographics.",
    style: "Aesthetic vertical reels, carousel image slides, interactive daily stories."
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: TelegramIcon,
    color: "text-sky-400 border-sky-500/20 bg-sky-500/5 hover:border-sky-500/40",
    activeColor: "bg-sky-500 text-white shadow-sky-500/10 border-sky-400",
    themeHex: "#38BDF8",
    ideal: "Deal aggregators, educators, publishers, community managers.",
    strengths: "100% direct delivery rate (no algorithm filter), direct local download access.",
    weaknesses: "No organic discovery feed. You must drive traffic here from TikTok/YouTube.",
    monetization: "Paid private channels, direct local advertisements, PDF sales, CBE transfers.",
    audience: "Local Ethiopian communities looking for files, links, resources, or updates.",
    style: "Text briefs, audio voice memos, resource downloads, screenshots."
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: LinkedinIcon,
    color: "text-blue-700 border-blue-700/20 bg-blue-700/5 hover:border-blue-700/40",
    activeColor: "bg-blue-700 text-white shadow-blue-700/10 border-blue-600",
    themeHex: "#1D4ED8",
    ideal: "Founders, tech workers, corporate executives, high-ticket consultants.",
    strengths: "Highest business value per follower, direct DM access to CEOs and recruiters.",
    weaknesses: "Small mass-market audience, restricted to professional/business topics.",
    monetization: "Corporate consulting contracts, speaking engagements, B2B sponsorships.",
    audience: "Recruiters, founders, career-builders, decision-makers.",
    style: "Text-based case studies, PDF document slider carousels, business stories."
  }
];

export default function ChoosingPlatform() {
  const [activePlatform, setActivePlatform] = useState(platforms[0].id);
  const currentPlatform = platforms.find((p) => p.id === activePlatform) || platforms[0];

  return (
    <section id="platforms" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-85 h-85 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
            The Battlefield
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Choosing Your Platform
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base">
            Do not try to publish on all platforms at once. Pick one primary channel that fits your style, master it, then scale.
          </p>
        </div>

        {/* Platform Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const isActive = plat.id === activePlatform;
            return (
              <button
                key={plat.id}
                onClick={() => setActivePlatform(plat.id)}
                className={`flex items-center justify-center gap-2 p-4 rounded-2xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  isActive ? plat.activeColor : plat.color
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{plat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Profile Card details */}
        <div className="bg-[#121212]/30 border border-white/5 p-6 sm:p-10 rounded-[36px] relative overflow-hidden shadow-2xl min-h-[400px]">
          {/* Custom subtle glow color overlay based on active platform */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[140px] opacity-10 pointer-events-none transition-all duration-500" 
            style={{ backgroundColor: currentPlatform.themeHex }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlatform.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* Left Column: Strengths / Weaknesses */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Platform Profiling</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-center gap-2">
                    <span style={{ color: currentPlatform.themeHex }}>{currentPlatform.name}</span> Profile
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Ideal Creator */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Ideal Creator Profile</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.ideal}</p>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Major Strengths</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.strengths}</p>
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Main Weaknesses</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.weaknesses}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Monetization / Audience / Style */}
              <div className="space-y-6 md:border-l md:border-dashed md:border-white/10 md:pl-8">
                <div className="space-y-4">
                  {/* Monetization */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Monetization Channels</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.monetization}</p>
                    </div>
                  </div>

                  {/* Audience */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Audience Psychology</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.audience}</p>
                    </div>
                  </div>

                  {/* Content Style */}
                  <div className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Required Content Style</h4>
                      <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">{currentPlatform.style}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
