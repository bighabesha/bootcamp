"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, GraduationCap, Clock, Search, Palette, Film, Megaphone, Briefcase, Server, Check } from "lucide-react";

export default function Bonus() {
  const categories = [
    { name: "AI Tools", icon: <Cpu className="w-4 h-4" /> },
    { name: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Productivity", icon: <Clock className="w-4 h-4" /> },
    { name: "Research", icon: <Search className="w-4 h-4" /> },
    { name: "Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Video Editing", icon: <Film className="w-4 h-4" /> },
    { name: "Marketing", icon: <Megaphone className="w-4 h-4" /> },
    { name: "Business", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Technology", icon: <Server className="w-4 h-4" /> },
  ];

  // Mouse tilt animation logic for the 3D book cover
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="bonus" className="py-24 relative bg-zinc-950 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
            Exclusive Registration Gift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Get the Best-Selling Ebook for Free
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Register for the bootcamp today and instantly unlock lifetime access to our curated creator resource library.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: 3D Ebook Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-[280px] sm:w-[320px] aspect-[3/4.2] rounded-[24px] shadow-2xl transition-all duration-100"
              >
                {/* 3D Book Spine Overlay (creates depth on the left side) */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent z-20 rounded-l-[24px]" />
                
                {/* 3D Book Page Edge (creates depth on the right side) */}
                <div className="absolute right-0 top-1 bottom-1 w-2 bg-zinc-200/90 z-20 rounded-r-sm shadow-inner" style={{ transform: "translateZ(-2px) rotateY(90deg)", transformOrigin: "right" }} />

                <Image
                  src="/ebook.png"
                  alt="The Internet Directory Ebook Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-contain rounded-[24px] shadow-2xl bg-zinc-950 border border-white/5"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Title & Feature Category Badges */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-black tracking-widest uppercase">
                🎁 FREE WITH BOOTCAMP
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                The Internet Directory
              </h3>
              <p className="text-brand-yellow text-xl font-bold">
                800+ Useful Websites
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                A highly-curated directory containing over 800 premium bookmarks, tools, databases, and assets. Perfect for content creators, designers, developers, and digital entrepreneurs who want to optimize their workflow and save hours of research.
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Feature cards grid */}
            <div className="space-y-4">
              <h4 className="text-zinc-300 font-extrabold text-xs tracking-wider uppercase">
                What&apos;s Inside the Directory:
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-3 p-3 rounded-2xl glass-panel border border-white/5 hover:border-brand-yellow/30 hover:bg-zinc-900/30 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-brand-yellow flex-shrink-0">
                      {cat.icon}
                    </div>
                    <span className="text-zinc-200 text-xs sm:text-sm font-semibold tracking-wide">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Small confirmation badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
              <div className="w-4 h-4 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-brand-yellow" />
              </div>
              <span>Immediate access link provided upon payment approval</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
