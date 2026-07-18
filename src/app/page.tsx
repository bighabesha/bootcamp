"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import CourseOutline from "@/components/CourseOutline";
import Bonus from "@/components/Bonus";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { useTheme } from "@/lib/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen font-sans selection:bg-brand-yellow selection:text-black antialiased transition-colors duration-300 ${
        theme === "dark" ? "text-zinc-100 bg-[#0B0B0B]" : "text-zinc-900 bg-white"
      }`}
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Hero Header with Pricing & Instructor Info */}
      <Hero />

      {/* Animated Follower Stats & Badges */}
      <SocialProof />

      {/* Instructor Journey & Pillars */}
      <About />

      {/* Dynamic Vertical Scroll Timeline Course Outline */}
      <CourseOutline />

      {/* 3D Ebook resource library mockup */}
      <Bonus />

      {/* Alignment Cards & Others vs Bootcamp Grid */}
      <Comparison />

      {/* Secured Payment and Registration details upload */}
      <RegistrationForm />

      {/* Accordion FAQ questions */}
      <Faq />

      {/* Footer credits and social connections */}
      <Footer />
    </div>
  );
}
