"use client";

import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import RegistrationModal from "@/components/RegistrationModal";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/ThemeContext";

// Modular Day 1 Sections
import HeroSection from "@/components/day1/HeroSection";
import WelcomeRoadmap from "@/components/day1/WelcomeRoadmap";
import MyStoryTimeline from "@/components/day1/MyStoryTimeline";
import BeforeAfter from "@/components/day1/BeforeAfter";
import EmployeeVsCreator from "@/components/day1/EmployeeVsCreator";
import WhoIsNotFor from "@/components/day1/WhoIsNotFor";
import WhatIsContentCreation from "@/components/day1/WhatIsContentCreation";
import EveryoneWorthSharing from "@/components/day1/EveryoneWorthSharing";
import ViralVsSuccess from "@/components/day1/ViralVsSuccess";
import HistoryRevolutions from "@/components/day1/HistoryRevolutions";
import WhyBestSkill from "@/components/day1/WhyBestSkill";
import CreatorEconomyFlow from "@/components/day1/CreatorEconomyFlow";
import OneToManyEcosystem from "@/components/day1/OneToManyEcosystem";
import SuccessStories from "@/components/day1/SuccessStories";
import CreatorMindset from "@/components/day1/CreatorMindset";
import BeginnerMistakes from "@/components/day1/BeginnerMistakes";
import ChoosingPlatform from "@/components/day1/ChoosingPlatform";
import ChoosingNiche from "@/components/day1/ChoosingNiche";
import CreatorRoadmap from "@/components/day1/CreatorRoadmap";
import HomeworkChecklist from "@/components/day1/HomeworkChecklist";
import FinalCTA from "@/components/day1/FinalCTA";

export default function Home() {
  const { theme } = useTheme();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Scroll Progress indicator setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScrollToFirstSection = () => {
    const target = document.getElementById("welcome");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const offsetPosition = targetRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`relative min-h-screen font-sans selection:bg-brand-yellow selection:text-black antialiased transition-colors duration-300 ${
        theme === "dark" ? "text-zinc-100 bg-[#0B0B0B]" : "text-zinc-900 bg-white"
      }`}
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-yellow z-[60] origin-left" 
        style={{ scaleX }} 
      />

      {/* Navigation */}
      <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Main Sections */}
      <HeroSection onStartClick={handleScrollToFirstSection} />
      <WelcomeRoadmap />
      <MyStoryTimeline />
      <BeforeAfter />
      <EmployeeVsCreator />
      <WhoIsNotFor />
      <WhatIsContentCreation />
      <EveryoneWorthSharing />
      <ViralVsSuccess />
      <HistoryRevolutions />
      <WhyBestSkill />
      <CreatorEconomyFlow />
      <OneToManyEcosystem />
      <SuccessStories />
      <CreatorMindset />
      <BeginnerMistakes />
      <ChoosingPlatform />
      <ChoosingNiche />
      <CreatorRoadmap />
      <HomeworkChecklist />
      <FinalCTA onContinueClick={() => setIsRegisterOpen(true)} />

      {/* Registration Modal Overlay */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      {/* Footer credits and social connections */}
      <Footer />
    </div>
  );
}
