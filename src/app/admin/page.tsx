"use client";

import React, { useState, useEffect } from "react";
import { 
  Lock, RefreshCw, ExternalLink, 
  ShieldAlert, LogOut, Phone, Send, Mail, 
  Calendar, Check, X, Search, Download
} from "lucide-react";

interface Registration {
  id: string | number;
  full_name: string;
  phone: string;
  telegram: string;
  email: string | null;
  niche: string;
  experience: string;
  payment_method: string;
  payment_screenshot_url: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittingAction, setSubmittingAction] = useState<{ [key: string]: "approve" | "reject" | null }>({});
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegistrations = registrations.filter(r => {
    const term = searchTerm.toLowerCase();
    return (
      r.full_name.toLowerCase().includes(term) ||
      r.phone.includes(term)
    );
  });

  const exportToCsv = () => {
    const headers = [
      "Full Name", 
      "Phone", 
      "Telegram", 
      "Email", 
      "Niche", 
      "Experience", 
      "Payment Method", 
      "Status", 
      "Receipt URL", 
      "Created Date"
    ];
    
    const rows = filteredRegistrations.map(r => [
      r.full_name,
      r.phone,
      r.telegram,
      r.email || "",
      formatNiche(r.niche),
      formatExperience(r.experience),
      r.payment_method,
      r.status,
      r.payment_screenshot_url,
      new Date(r.created_at).toLocaleString()
    ]);

    // UTF-8 BOM (\uFEFF) for Excel compatibility with special/Amharic chars
    const csvContent = "\uFEFF" + [
      headers.join(","),
      ...rows.map(row => row.map(val => `"${val.replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `bootcamp_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Check session storage on mount to see if already logged in
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedPassword) {
      verifyPassword(savedPassword);
    }
  }, []);

  const verifyPassword = async (passToVerify: string) => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/admin/registrations", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${passToVerify}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrations(data.registrations || []);
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_password", passToVerify);
        setPassword(passToVerify); // save correct password in state
      } else {
        setErrorMsg(data.error || "Incorrect password. Please try again.");
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_password");
      }
    } catch {
      setErrorMsg("Failed to authenticate. Check server connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setErrorMsg("Password is required.");
      return;
    }
    verifyPassword(password.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password");
    setIsAuthenticated(false);
    setRegistrations([]);
    setPassword("");
    setErrorMsg("");
  };

  const handleAction = async (id: string | number, action: "approve" | "reject") => {
    setSubmittingAction(prev => ({ ...prev, [id]: action }));
    
    try {
      const response = await fetch("/api/admin/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${password}`
        },
        body: JSON.stringify({ id, action })
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrations(prev =>
          prev.map(r => r.id === id ? { ...r, status: action === "approve" ? "approved" : "rejected" } : r)
        );
      } else {
        alert(data.error || `Failed to ${action} registration.`);
      }
    } catch {
      alert("Failed to submit status update.");
    } finally {
      setSubmittingAction(prev => ({ ...prev, [id]: null }));
    }
  };

  const handleRefresh = () => {
    if (password) {
      verifyPassword(password);
    }
  };

  const formatNiche = (niche: string) => {
    const niches: { [key: string]: string } = {
      technology: "Technology & Coding",
      education: "Education & Science",
      comedy: "Comedy & Entertainment",
      lifestyle: "Lifestyle & Vlogging",
      business: "Business & Finance",
      other: "Other"
    };
    return niches[niche] || niche;
  };

  const formatExperience = (exp: string) => {
    const exps: { [key: string]: string } = {
      beginner: "Absolute Beginner",
      amateur: "Basic Editor",
      regular: "Active Creator"
    };
    return exps[exp] || exp;
  };

  // Render Login Card
  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen bg-zinc-950 flex items-center justify-center p-4 selection:bg-brand-yellow selection:text-black">
        {/* Glow backgrounds */}
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-brand-yellow/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <form
            onSubmit={handleLoginSubmit}
            className="glass-panel border border-white/10 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-2xl relative"
          >
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mx-auto text-brand-yellow">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">Admin Gate</h1>
              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                Authorized Personnel Only
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-sm flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="password" className="text-zinc-300 text-xs font-bold uppercase tracking-wider block">
                Enter Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-extrabold text-black bg-brand-yellow hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 transition-all duration-300 cursor-pointer shadow-lg shadow-brand-yellow/5"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Unlocking...</span>
                </>
              ) : (
                <span>Access Dashboard</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans selection:bg-brand-yellow selection:text-black antialiased text-zinc-100 p-4 sm:p-6 lg:p-8">
      {/* Background neon glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-yellow/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Header section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center text-black font-black text-base">
                BH
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Creator Bootcamp Admin
              </h1>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              Manage registrants, verify transactions, and approve entries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Refresh Registrations"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 hover:border-red-500/40 text-red-400 hover:text-red-300 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Applications", value: registrations.length, color: "text-white" },
            { label: "Pending Verification", value: registrations.filter(r => r.status === "pending").length, color: "text-brand-yellow" },
            { label: "Approved Users", value: registrations.filter(r => r.status === "approved").length, color: "text-green-400" },
            { label: "Rejected Users", value: registrations.filter(r => r.status === "rejected").length, color: "text-red-400" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel border border-white/5 p-5 rounded-2xl">
              <span className="text-xs text-zinc-400 font-semibold block">{stat.label}</span>
              <span className={`text-2xl sm:text-3xl font-black block mt-2 ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Search & Export Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-zinc-900/30 p-4 rounded-2xl border border-white/5">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-950 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/30 outline-none transition-all"
            />
          </div>

          {/* Export to Excel Button */}
          <button
            onClick={exportToCsv}
            disabled={filteredRegistrations.length === 0}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-brand-yellow hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 transition-all cursor-pointer shadow-md shadow-brand-yellow/5"
          >
            <Download className="w-4 h-4" />
            <span>Export to Excel</span>
          </button>
        </div>

        {/* Desktop Table / Mobile Grid Container */}
        <div className="glass-panel border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {registrations.length === 0 ? (
            <div className="p-20 text-center space-y-4">
              <p className="text-zinc-500 text-lg">No registration entries found.</p>
              <p className="text-zinc-600 text-xs">Waiting for new enrollments.</p>
            </div>
          ) : filteredRegistrations.length === 0 ? (
            <div className="p-20 text-center space-y-4">
              <p className="text-zinc-500 text-lg">No registrations match your search.</p>
              <p className="text-zinc-600 text-xs">Try searching for a different name or phone number.</p>
            </div>
          ) : (
            <>
              {/* Desktop View Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-zinc-900/40 text-xs font-extrabold text-zinc-400 uppercase tracking-wider">
                      <th className="py-4 px-6">Registrant</th>
                      <th className="py-4 px-6">Contact info</th>
                      <th className="py-4 px-6">Niche / Experience</th>
                      <th className="py-4 px-6">Payment Info</th>
                      <th className="py-4 px-6">Screenshot</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    {filteredRegistrations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-zinc-900/20 transition-colors">
                        {/* Name & Date */}
                        <td className="py-5 px-6">
                          <p className="font-extrabold text-white">{reg.full_name}</p>
                          <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(reg.created_at).toLocaleDateString()} at{" "}
                            {new Date(reg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </td>

                        {/* Contacts */}
                        <td className="py-5 px-6 space-y-1">
                          <p className="text-zinc-200 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-zinc-500" />
                            <a href={`tel:${reg.phone}`} className="hover:text-brand-yellow hover:underline">{reg.phone}</a>
                          </p>
                          <p className="text-zinc-200 flex items-center gap-1.5">
                            <Send className="w-3.5 h-3.5 text-zinc-500" />
                            <a 
                              href={`https://t.me/${reg.telegram.replace("@", "")}`} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-cyan-400 hover:underline hover:text-cyan-300"
                            >
                              @{reg.telegram.replace("@", "")}
                            </a>
                          </p>
                          {reg.email && (
                            <p className="text-xs text-zinc-500 flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5" />
                              <span className="truncate max-w-[150px]">{reg.email}</span>
                            </p>
                          )}
                        </td>

                        {/* Niche & Exp */}
                        <td className="py-5 px-6">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-300 text-xs font-semibold">
                            {formatNiche(reg.niche)}
                          </span>
                          <span className="block text-xs text-zinc-500 mt-1 font-medium">
                            {formatExperience(reg.experience)}
                          </span>
                        </td>

                        {/* Payment Details */}
                        <td className="py-5 px-6">
                          <span className="text-zinc-300 font-extrabold capitalize block">{reg.payment_method}</span>
                          <span className="text-[10px] text-zinc-500 block mt-0.5 uppercase tracking-wide">500 ETB Fee</span>
                        </td>

                        {/* Screenshot */}
                        <td className="py-5 px-6">
                          {reg.payment_screenshot_url ? (
                            <a
                              href={reg.payment_screenshot_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all text-xs font-bold"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>View Receipt</span>
                            </a>
                          ) : (
                            <span className="text-xs text-zinc-600">No receipt file</span>
                          )}
                        </td>

                        {/* Status */}
                        <td className="py-5 px-6">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold uppercase border ${
                              reg.status === "approved"
                                ? "bg-green-950/20 border-green-500/30 text-green-400"
                                : reg.status === "rejected"
                                ? "bg-red-950/20 border-red-500/30 text-red-400"
                                : "bg-brand-yellow/10 border-brand-yellow/20 text-brand-yellow animate-pulse"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              reg.status === "approved" ? "bg-green-500" : reg.status === "rejected" ? "bg-red-500" : "bg-brand-yellow"
                            }`} />
                            {reg.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-5 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleAction(reg.id, "approve")}
                              disabled={submittingAction[reg.id] !== undefined && submittingAction[reg.id] !== null}
                              className={`p-2 rounded-xl border border-green-500/20 hover:border-green-500 text-green-500 hover:bg-green-500/10 active:scale-95 transition-all cursor-pointer disabled:opacity-40`}
                              title="Approve registration"
                            >
                              {submittingAction[reg.id] === "approve" ? (
                                <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Check className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              onClick={() => handleAction(reg.id, "reject")}
                              disabled={submittingAction[reg.id] !== undefined && submittingAction[reg.id] !== null}
                              className={`p-2 rounded-xl border border-red-500/20 hover:border-red-500 text-red-500 hover:bg-red-500/10 active:scale-95 transition-all cursor-pointer disabled:opacity-40`}
                              title="Reject registration"
                            >
                              {submittingAction[reg.id] === "reject" ? (
                                <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <X className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View List Cards */}
              <div className="lg:hidden divide-y divide-white/5">
                {filteredRegistrations.map((reg) => (
                  <div key={reg.id} className="p-6 space-y-4 hover:bg-zinc-900/10 transition-colors">
                    
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-extrabold text-white text-base">{reg.full_name}</h4>
                        <span className="text-[10px] text-zinc-500 block mt-0.5">
                          {new Date(reg.created_at).toLocaleDateString()} — {new Date(reg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${
                          reg.status === "approved"
                            ? "bg-green-950/20 border-green-500/30 text-green-400"
                            : reg.status === "rejected"
                            ? "bg-red-950/20 border-red-500/30 text-red-400"
                            : "bg-brand-yellow/10 border-brand-yellow/20 text-brand-yellow animate-pulse"
                        }`}
                      >
                        {reg.status}
                      </span>
                    </div>

                    <hr className="border-white/5" />

                    {/* Content Details */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <span className="text-zinc-500 font-medium uppercase tracking-wider block">Contacts</span>
                        <a href={`tel:${reg.phone}`} className="text-zinc-300 font-semibold block">{reg.phone}</a>
                        <a 
                          href={`https://t.me/${reg.telegram.replace("@", "")}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cyan-400 font-semibold block truncate"
                        >
                          @{reg.telegram.replace("@", "")}
                        </a>
                      </div>

                      <div className="space-y-1">
                        <span className="text-zinc-500 font-medium uppercase tracking-wider block">Curriculum details</span>
                        <span className="text-zinc-300 font-semibold block truncate">{formatNiche(reg.niche)}</span>
                        <span className="text-zinc-400 block">{formatExperience(reg.experience)}</span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-zinc-500 font-medium uppercase tracking-wider block">Payment method</span>
                        <span className="text-zinc-300 font-semibold block capitalize">{reg.payment_method}</span>
                        <span className="text-[10px] text-zinc-500">500 ETB</span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-zinc-500 font-medium uppercase tracking-wider block">Screenshot</span>
                        {reg.payment_screenshot_url ? (
                          <a
                            href={reg.payment_screenshot_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-yellow hover:underline font-semibold block"
                          >
                            View Receipt Image
                          </a>
                        ) : (
                          <span className="text-zinc-600 block">No receipt</span>
                        )}
                      </div>
                    </div>

                    <hr className="border-white/5" />

                    {/* Actions bar */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleAction(reg.id, "approve")}
                        disabled={submittingAction[reg.id] !== undefined && submittingAction[reg.id] !== null}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-green-500/20 text-green-400 hover:bg-green-500/10 active:scale-95 transition-all text-xs font-bold cursor-pointer disabled:opacity-40"
                      >
                        {submittingAction[reg.id] === "approve" ? (
                          <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Approve</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleAction(reg.id, "reject")}
                        disabled={submittingAction[reg.id] !== undefined && submittingAction[reg.id] !== null}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 active:scale-95 transition-all text-xs font-bold cursor-pointer disabled:opacity-40"
                      >
                        {submittingAction[reg.id] === "reject" ? (
                          <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <X className="w-4 h-4" />
                            <span>Reject</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
