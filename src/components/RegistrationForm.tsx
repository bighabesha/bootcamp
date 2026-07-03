"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Upload, FileText, X, AlertCircle, Copy, Check, ShieldCheck, Mail, User, Phone, Send, Video, ChevronRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { supabase } from "@/lib/supabaseClient";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    telegram: "",
    email: "",
    niche: "technology",
    experience: "beginner",
    paymentMethod: "telebirr",
  });

  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const bankDetails = [
    { name: "Telebirr", account: "0942163075", holder: "Begziew Getnet", color: "border-cyan-500/20 bg-cyan-950/10 text-cyan-400" },
    { name: "Commercial Bank of Ethiopia (CBE)", account: "1000197079685", holder: "Begziew Getnet", color: "border-purple-500/20 bg-purple-950/10 text-purple-400" },
    { name: "Dahen Bank", account: "5770447082011", holder: "Begziew Getnet", color: "border-yellow-500/20 bg-yellow-950/10 text-yellow-400" },
    { name: "Bank of Abyssinia", account: "118414217", holder: "Begziew Getnet", color: "border-orange-500/20 bg-orange-950/10 text-orange-400" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        setErrorMsg("Please upload an image file (PNG, JPG, or JPEG) for the screenshot.");
        return;
      }
      setScreenshot(file);
      setErrorMsg("");

      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerConfetti = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, animate a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg("Full Name is required.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg("Phone Number is required.");
      return;
    }
    if (!formData.telegram.trim()) {
      setErrorMsg("Telegram Username is required.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Email is required.");
      return;
    }
    if (!screenshot) {
      setErrorMsg("Payment screenshot upload is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload screenshot to Supabase Storage (payment-screenshots bucket)
      const fileExt = screenshot.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `receipts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("payment-screenshots")
        .upload(filePath, screenshot);

      if (uploadError) {
        throw new Error(`Screenshot upload failed: ${uploadError.message}`);
      }

      // 2. Get public URL of the uploaded screenshot
      const { data: publicUrlData } = supabase.storage
        .from("payment-screenshots")
        .getPublicUrl(filePath);

      const screenshotUrl = publicUrlData.publicUrl;

      // 3. Save registration data into Supabase "registrations" table
      const { error: dbError } = await supabase.from("registrations").insert([
        {
          full_name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          telegram: formData.telegram.trim(),
          email: formData.email.trim(),
          niche: formData.niche,
          experience: formData.experience,
          payment_method: formData.paymentMethod,
          payment_screenshot_url: screenshotUrl,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        // Rollback uploaded screenshot if DB insert fails to keep storage clean
        await supabase.storage.from("payment-screenshots").remove([filePath]);
        throw new Error(`Registration database insert failed: ${dbError.message}`);
      }

      // 4. Show success screen and trigger confetti
      setIsSuccess(true);
      triggerConfetti();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 relative bg-zinc-950 border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="register-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Common Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
                <span className="text-brand-yellow text-xs font-black uppercase tracking-widest block">
                  Secured Enrollment
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Secure Your Spot Today
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  To maintain high-quality live interactions and support, slots for the bootcamp 2026 are strictly limited. Follow the bank details below to pay the registration fee, upload your transfer screenshot, and join the cohort.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Column: Bank Details & Value Prop */}
                <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                  {/* Bank details cards */}
                  <div className="space-y-4">
                  <h4 className="text-zinc-300 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                    <span>How to pay (400 ETB):</span>
                  </h4>

                  <div className="space-y-3">
                    {bankDetails.map((bank) => (
                      <div
                        key={bank.name}
                        className={`p-5 rounded-2xl border glass-panel transition-all duration-300 flex flex-col justify-between gap-3 relative group overflow-hidden`}
                      >
                        <div className="relative z-10 flex justify-between items-start">
                          <div>
                            <span className="text-xs font-black uppercase tracking-wider text-zinc-500 block mb-1">
                              {bank.name}
                            </span>
                            <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider select-all">
                              {bank.account}
                            </span>
                            <span className="text-zinc-400 text-xs block mt-1 font-semibold">
                              Holder: {bank.holder}
                            </span>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => handleCopy(bank.account, bank.name)}
                            className="p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-white/5 text-zinc-400 hover:text-brand-yellow transition-all duration-200 cursor-pointer"
                            title="Copy Account Number"
                          >
                            {copiedText === bank.name ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security badges */}
                <div className="flex gap-4 items-center bg-zinc-900/40 p-4 rounded-2xl border border-white/5 text-xs text-zinc-400">
                  <span className="text-xl">🔒</span>
                  <p className="leading-relaxed">
                    Your information is fully encrypted. Payment receipts are verified manually within 1-12 hours.
                  </p>
                </div>
              </div>

              {/* Right Column: Registration Form */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <form
                  onSubmit={handleSubmit}
                  className="glass-panel border border-white/10 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-2xl relative"
                >
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Registration Form
                  </h3>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0912345678"
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Telegram Username */}
                    <div className="space-y-2">
                      <label htmlFor="telegram" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Telegram Username *</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-zinc-500 text-sm font-semibold select-none">@</span>
                        <input
                          type="text"
                          name="telegram"
                          id="telegram"
                          value={formData.telegram}
                          onChange={handleInputChange}
                          placeholder="username"
                          className="w-full bg-zinc-950 border border-white/5 rounded-xl pl-8 pr-4 py-3 text-white text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Content Niche */}
                    <div className="space-y-2">
                      <label htmlFor="niche" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Content Niche</span>
                      </label>
                      <select
                        name="niche"
                        id="niche"
                        value={formData.niche}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="technology">Technology & Coding</option>
                        <option value="education">Education & Science</option>
                        <option value="comedy">Comedy & Entertainment</option>
                        <option value="lifestyle">Lifestyle & Vlogging</option>
                        <option value="business">Business & Finance</option>
                        <option value="other">Other / Not Sure Yet</option>
                      </select>
                    </div>

                    {/* Experience Level */}
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-zinc-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Experience Level</span>
                      </label>
                      <select
                        name="experience"
                        id="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="beginner">Absolute Beginner (Never Posted)</option>
                        <option value="amateur">Basic Editing (Posted a Few)</option>
                        <option value="regular">Active Creator (Post Regularly)</option>
                      </select>
                    </div>
                  </div>

                  {/* Payment Method Select */}
                  <div className="space-y-2">
                    <label htmlFor="paymentMethod" className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
                      Selected Payment Method *
                    </label>
                    <select
                      name="paymentMethod"
                      id="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="telebirr">Telebirr — 0942163075</option>
                      <option value="cbe">Commercial Bank of Ethiopia (CBE) — 1000197079685</option>
                      <option value="dahen">Dahen Bank — 5770447082011</option>
                      <option value="abyssinia">Bank of Abyssinia — 118414217</option>
                    </select>
                  </div>

                  {/* Drag and Drop Screenshot upload */}
                  <div className="space-y-2">
                    <label className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
                      Upload Payment Screenshot *
                    </label>
                    
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 ${
                        screenshot
                          ? "border-brand-yellow/40 bg-brand-yellow/5"
                          : "border-white/10 hover:border-white/20 bg-zinc-950/40"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />

                      {!screenshot || !screenshotPreview ? (
                        <div className="space-y-2 text-zinc-400">
                          <Upload className="w-8 h-8 mx-auto text-zinc-500 animate-pulse" />
                          <p className="text-sm font-semibold">Click to upload or drag & drop</p>
                          <p className="text-xs text-zinc-600">PNG, JPG, or JPEG (Max 5MB)</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 relative">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setScreenshot(null);
                              setScreenshotPreview(null);
                            }}
                            className="absolute top-0 right-0 p-1.5 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                            title="Remove image"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>

                          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={screenshotPreview}
                              alt="Screenshot Preview"
                              className="object-cover w-full h-full"
                            />
                          </div>

                          <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-semibold">
                            <FileText className="w-4 h-4 text-brand-yellow" />
                            <span>{screenshot?.name}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-base font-extrabold text-black bg-brand-yellow hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 transition-all duration-300 shadow-xl shadow-brand-yellow/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Verifying Registration details...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
          ) : (
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="max-w-2xl mx-auto text-center glass-panel border border-brand-yellow/20 rounded-[32px] p-8 sm:p-12 shadow-2xl relative"
            >
              {/* Backlight success */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-8">
                
                {/* Check circle animation */}
                <div className="w-16 h-16 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mx-auto text-brand-yellow shadow-lg shadow-brand-yellow/5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-white tracking-tight">
                    Registration Received!
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base font-light">
                    Thank you for enrolling in the **Big Habesha Content Creator Bootcamp 2026**.
                  </p>
                </div>

                {/* Steps box */}
                <div className="bg-zinc-950/60 rounded-2xl p-6 sm:p-8 text-left border border-white/5 space-y-4">
                  <h4 className="text-zinc-300 font-extrabold text-xs tracking-wider uppercase mb-2">
                    What happens next:
                  </h4>

                  <ul className="space-y-4">
                    {[
                      { title: "Payment Receipt Verification", desc: "Our team is manually verifying your payment screenshot (takes 1 to 12 hours)." },
                      { title: "Telegram Channel Link", desc: "You will receive an automated Telegram message containing the private community channel invite." },
                      { title: "Google Meet Link", desc: "The live links for all 5 training days will be pinned inside the Telegram channel." },
                      { title: "Ebook Direct Download", desc: "Lifetime download link to 'The Internet Directory' will be shared with your Telegram invite." },
                    ].map((step, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-sm">
                        <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-xs font-bold text-brand-yellow flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="font-extrabold text-white">{step.title}</h5>
                          <p className="text-zinc-400 text-xs font-light mt-0.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://t.me/bighabesha" // placeholder or official Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-black bg-brand-yellow hover:bg-white transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>Contact Support on Telegram</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        telegram: "",
                        email: "",
                        niche: "technology",
                        experience: "beginner",
                        paymentMethod: "telebirr",
                      });
                      setScreenshot(null);
                      setScreenshotPreview(null);
                    }}
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    Register Another Person
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
