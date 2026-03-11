"use client";

import { useTheme } from "next-themes";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/alibek-developer",
    color: "#6e7681",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/",
    color: "#0A66C2",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/alibek_developer",
    color: "#26A5E4",
  },
];

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-6 py-4 rounded-2xl text-base outline-none transition-all duration-300 font-medium ${
      isDark
        ? "bg-white/[0.03] border-white/[0.08] text-white placeholder-slate-500"
        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
    } ${
      focused === field
        ? "border-primary ring-4 ring-primary/10 bg-white dark:bg-white/[0.06]"
        : "hover:border-primary/30"
    }`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden transition-colors duration-700" style={{ background: "var(--bg)" }}>
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <SectionHeading
          title="Let's Work Together"
          subtitle="I'm currently available for freelance projects and full-time opportunities. Let's build something amazing!"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start mt-12">
          {/* Contact Info & Socials */}
          <div className="md:col-span-2 space-y-8">
            <AnimatedSection>
              <div className={`p-7 rounded-[2rem] border transition-all duration-500 ${
                isDark ? "bg-white/[0.04] border-white/[0.1] backdrop-blur-xl" : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
              }`}>
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>Connect with me</h3>
                <div className="space-y-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        isDark ? "hover:bg-white/[0.05] text-slate-400 hover:text-white" : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                      }`}
                      whileHover={{ x: 8 }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                        <social.icon size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-50">{social.name}</div>
                        <div className="text-sm font-semibold">@alibek_developer</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <AnimatedSection delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className={`relative rounded-[2rem] p-7 md:p-9 border transition-all duration-500 ${
                  isDark
                    ? "bg-white/[0.04] border-white/[0.1] backdrop-blur-xl shadow-2xl shadow-black/20"
                    : "bg-white border-slate-200 shadow-2xl shadow-slate-200/60"
                }`}
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest px-1 opacity-50">Your Name</label>
                      <input
                        type="text"
                        required
                        className={inputClass("name")}
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest px-1 opacity-50">Your Email</label>
                      <input
                        type="email"
                        required
                        className={inputClass("email")}
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest px-1 opacity-50">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      className={`${inputClass("message")} resize-none`}
                      placeholder="Tell me about your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="w-full h-[64px] rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    <AnimatePresence mode="wait">
                      {status === "loading" ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="animate-spin" size={20} />
                          Sending...
                        </motion.div>
                      ) : status === "success" ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 size={20} />
                          Message Sent!
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={18} />
                          Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Success Overlay */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 rounded-[2rem] bg-white/10 dark:bg-black/10 backdrop-blur-[2px] pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
