"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Do I need experience?",
      answer: "No, this bootcamp is built from the ground up specifically for beginners. We cover the core fundamentals on Day 1 (such as personal branding and choosing your niche) before moving on to production and distribution strategies. All you need is the willingness to learn and execute.",
    },
    {
      question: "Can I join using only my phone?",
      answer: "Absolutely. In fact, Day 3 includes a dedicated smartphone filming and CapCut editing section. Modern smartphones are incredibly powerful creative tools, and you will learn how to write, shoot, edit, and post high-quality videos using nothing but your phone.",
    },
    {
      question: "Are the sessions live?",
      answer: "Yes, the sessions are live. This allows us to hold interactive discussions, answer student questions in real-time, and run live video reviews. We want this to be an active, hands-on learning environment rather than a passive viewing course.",
    },
    {
      question: "Will recordings be available?",
      answer: "Yes. If you miss a live session or want to re-watch a specific lesson, high-definition recordings of every day will be uploaded to our private student dashboard. You will have lifetime access to these recordings.",
    },
    {
      question: "How do I register?",
      answer: "To register, scroll down to the Registration Section below. Fill out the application form with your details (Name, Phone, Telegram Username, Niche, and Experience) and upload a screenshot of your 500 ETB payment transfer receipt. Once submitted, our team will review and approve your registration.",
    },
    {
      question: "How do I pay?",
      answer: "We accept payments via major Ethiopian bank transfers (CBE, Telebirr, or Awash). Bank details and transfer instructions are displayed directly inside the Registration Form section. Simply make the transfer of 500 ETB, take a screenshot of the success page, and upload it with your registration.",
    },
    {
      question: "When does the bootcamp start?",
      answer: "The next cohort of the Content Creator Bootcamp is scheduled to start soon. Exact session dates, timings, and Google Meet links will be shared inside our private Telegram group once your registration is successfully verified.",
    },
    {
      question: "How do I receive the ebook?",
      answer: "Once your payment screenshot is verified and registration is approved (usually within 1 to 12 hours), you will receive a confirmation message on Telegram containing the download link to 'The Internet Directory' ebook and private Telegram group invite links.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-zinc-950 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Everything you need to know about the registration process, course content, and curriculum.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-zinc-900/60 border-brand-yellow/30 shadow-lg shadow-brand-yellow/5"
                    : "bg-zinc-900/20 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-brand-yellow" : "text-zinc-500"}`} />
                    <span className="text-white font-extrabold text-base sm:text-lg tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-yellow" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
