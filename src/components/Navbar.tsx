"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center text-black font-black text-xl shadow-lg shadow-brand-yellow/20 group-hover:scale-105 transition-transform duration-300">
                BH
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                BIG HABESHA
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["about", "course", "bonus", "faq"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="text-sm font-medium text-zinc-400 hover:text-white capitalize transition-colors duration-200 cursor-pointer"
                >
                  {item === "faq" ? "FAQ" : item}
                </button>
              ))}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => handleScrollTo("register")}
                className="relative px-6 py-2.5 rounded-full text-sm font-bold text-black bg-brand-yellow hover:bg-white transition-all duration-300 cursor-pointer shadow-lg shadow-brand-yellow/10 hover:shadow-white/10 hover:scale-105 active:scale-95"
              >
                Register Now
              </button>
            </div>

            {/* Mobile menu toggle button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-white/5 px-4 pt-2 pb-6 space-y-4">
            {["about", "course", "bonus", "faq"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item)}
                className="block w-full text-left py-2 text-base font-semibold text-zinc-300 hover:text-brand-yellow capitalize transition-colors cursor-pointer"
              >
                {item === "faq" ? "FAQ" : item}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo("register")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center text-base font-bold text-black bg-brand-yellow cursor-pointer"
            >
              <Rocket className="w-5 h-5" />
              Register Now
            </button>
          </div>
        )}
      </nav>

      {/* Sticky Action CTA for Mobile ONLY - floats at bottom of viewport */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none animate-bounce-slow">
        <button
          onClick={() => handleScrollTo("register")}
          className="pointer-events-auto w-full max-w-sm flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-base font-bold text-black bg-brand-yellow shadow-xl shadow-brand-yellow/20 border border-brand-yellow/30 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Rocket className="w-5 h-5 animate-pulse" />
          Register for Bootcamp - 400 ETB
        </button>
      </div>
    </>
  );
}
