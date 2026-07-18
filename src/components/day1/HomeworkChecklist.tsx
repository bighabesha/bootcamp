"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, Award, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

const homeworkTasks = [
  {
    id: "niche",
    title: "Choose One Niche",
    desc: "Use the Venn Diagram (Section 17). Pick one core topic where your passions and skills solve a market need."
  },
  {
    id: "platform",
    title: "Choose One Platform",
    desc: "Review the platform profiles (Section 16). Select one primary battlefield (e.g., YouTube horizontal or TikTok vertical) to build your foundation."
  },
  {
    id: "accounts",
    title: "Create Your Accounts",
    desc: "Register a fresh profile on your chosen platform. Keep your handle clean, recognizable, and consistent."
  },
  {
    id: "intro",
    title: "Write Your Creator Intro",
    desc: "Draft a 1-sentence bio stating exactly who you are, what you make, and why someone should follow you."
  },
  {
    id: "research",
    title: "Research 5 Creators You Admire",
    desc: "Find five creators in your niche. Study their first 5 seconds, editing pacing, and note what makes their content hook you."
  }
];

export default function HomeworkChecklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({
    niche: false,
    platform: false,
    accounts: false,
    intro: false,
    research: false
  });

  const totalTasks = homeworkTasks.length;
  const completedTasks = Object.values(checkedState).filter(Boolean).length;
  const completionPct = Math.round((completedTasks / totalTasks) * 100);

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    setCheckedState({
      niche: false,
      platform: false,
      accounts: false,
      intro: false,
      research: false
    });
  };

  // Trigger Confetti when completed 100%
  useEffect(() => {
    if (completedTasks === totalTasks) {
      // Trigger confetti
      const duration = 2.5 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#FFC107", "#FFFFFF", "#FF9800"]
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#FFC107", "#FFFFFF", "#FF9800"]
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    }
  }, [completedTasks, totalTasks]);

  return (
    <section id="homework" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-white">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-85 h-85 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-brand-yellow" />
            <span>Homework Board</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Your Day 1 Homework
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base max-w-xl mx-auto">
            Knowledge without execution is completely useless. Complete these five items to unlock the foundation of your creator assets.
          </p>
        </div>

        {/* Checklist Interface card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#121212]/30 border border-white/5 p-6 sm:p-10 rounded-[36px] shadow-2xl relative overflow-hidden">
          
          {/* Left Column: Progress circle */}
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4">
            
            {/* SVG Circle indicator */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Glow backing */}
              <div className="absolute w-28 h-28 rounded-full bg-brand-yellow/5 blur-md" />
              
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  className="stroke-zinc-800 fill-none"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  className="stroke-brand-yellow fill-none"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 60}
                  animate={{ strokeDashoffset: 2 * Math.PI * 60 * (1 - completionPct / 100) }}
                  transition={{ duration: 0.5 }}
                />
              </svg>

              <div className="absolute flex flex-col items-center text-center">
                <span className="text-2xl font-black text-white">{completionPct}%</span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Progress</span>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-sm font-bold text-white">
                {completedTasks === totalTasks ? "Day 1 Complete! 🎉" : `${completedTasks} of ${totalTasks} Tasks Done`}
              </h4>
              <p className="text-[10px] text-zinc-500 font-mono mt-1">Unlock Day 2 after completing.</p>
            </div>

            {completedTasks > 0 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 hover:text-white transition-all cursor-pointer hover:bg-white/10"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Checklist</span>
              </button>
            )}
          </div>

          {/* Right Column: Checkbox list */}
          <div className="md:col-span-8 space-y-4">
            {homeworkTasks.map((task) => {
              const isChecked = checkedState[task.id];
              return (
                <div
                  key={task.id}
                  onClick={() => handleToggle(task.id)}
                  className={`flex gap-4 p-4 rounded-2xl border transition-all cursor-pointer select-none items-start ${
                    isChecked 
                      ? "bg-brand-yellow/5 border-brand-yellow/30" 
                      : "bg-zinc-950/60 border-white/5 hover:border-white/10 hover:bg-zinc-900/10"
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-brand-yellow" />
                    ) : (
                      <Square className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition-colors" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold transition-all ${
                      isChecked ? "text-brand-yellow line-through opacity-70" : "text-white"
                    }`}>
                      {task.title}
                    </h4>
                    <p className={`text-xs text-zinc-500 font-light mt-1 leading-relaxed ${
                      isChecked ? "opacity-60" : ""
                    }`}>
                      {task.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
