"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#0E0E10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0E0E10]/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                <span className="font-extrabold text-white tracking-wide">SECURE REGISTRATION</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close registration"
                className="p-1.5 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <RegistrationForm />
            </div>

            {/* Sticky bottom note */}
            <div className="bg-[#0E0E10]/90 px-6 py-3 border-t border-white/5 text-center text-xs text-zinc-500 font-light flex items-center justify-center gap-2">
              <span>Secure Telebirr & CBE Payment. Instant activation on confirmation.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
