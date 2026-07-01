"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
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

  const navBg = scrolled
    ? theme === "dark"
      ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4"
      : "bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-sm"
    : "bg-transparent py-6";

  const linkClass =
    theme === "dark"
      ? "text-sm font-medium text-zinc-400 hover:text-white capitalize transition-colors duration-200 cursor-pointer"
      : "text-sm font-medium text-zinc-500 hover:text-zinc-900 capitalize transition-colors duration-200 cursor-pointer";

  const logoTextClass =
    theme === "dark"
      ? "font-extrabold text-lg tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300"
      : "font-extrabold text-lg tracking-wider text-zinc-900 group-hover:text-brand-yellow transition-colors duration-300";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
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
              <span className={logoTextClass}>BIG HABESHA</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {["about", "course", "bonus", "faq"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className={linkClass}
                >
                  {item === "faq" ? "FAQ" : item}
                </button>
              ))}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "bg-zinc-900 border-white/5 text-zinc-400 hover:text-brand-yellow hover:border-brand-yellow/30"
                    : "bg-zinc-100 border-black/5 text-zinc-500 hover:text-amber-600 hover:border-amber-200"
                }`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => handleScrollTo("register")}
                className="relative px-6 py-2.5 rounded-full text-sm font-bold text-black bg-brand-yellow hover:bg-white transition-all duration-300 cursor-pointer shadow-lg shadow-brand-yellow/10 hover:shadow-white/10 hover:scale-105 active:scale-95"
              >
                Register Now
              </button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "bg-zinc-900 border-white/5 text-zinc-400 hover:text-brand-yellow"
                    : "bg-zinc-100 border-black/5 text-zinc-500 hover:text-amber-600"
                }`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors cursor-pointer ${
                  theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div
            className={`md:hidden border-b px-4 pt-2 pb-6 space-y-4 ${
              theme === "dark"
                ? "bg-zinc-950 border-white/5"
                : "bg-white border-black/5"
            }`}
          >
            {["about", "course", "bonus", "faq"].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item)}
                className={`block w-full text-left py-2 text-base font-semibold capitalize transition-colors cursor-pointer hover:text-brand-yellow ${
                  theme === "dark" ? "text-zinc-300" : "text-zinc-600"
                }`}
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

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
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
