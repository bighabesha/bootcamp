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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans selection:bg-brand-yellow selection:text-black antialiased text-zinc-100">
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

      {/* Accordion FAQ questions */}
      <Faq />

      {/* Secured Payment and Registration details upload */}
      <RegistrationForm />

      {/* Footer credits and social connections */}
      <Footer />
    </div>
  );
}
