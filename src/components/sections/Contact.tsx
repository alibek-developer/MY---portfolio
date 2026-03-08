"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useTheme } from "@/components/ThemeProvider";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/",
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
    href: "https://t.me/",
    color: "#26A5E4",
  },
];

export default function Contact() {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit logic would go here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-4 rounded-2xl text-base outline-none transition-all duration-300 font-medium ${
      theme === "dark"
        ? "bg-white/[0.05] border text-white placeholder-slate-500 backdrop-blur-sm"
        : "bg-white/80 border text-slate-900 placeholder-slate-400 backdrop-blur-sm"
    } ${
      focused === field
        ? "border-primary ring-2 ring-primary/25 shadow-lg shadow-primary/10"
        : theme === "dark"
        ? "border-white/[0.1] hover:border-white/[0.15] hover:bg-white/[0.07]"
        : "border-slate-200 hover:border-slate-300 hover:bg-white"
    }`;

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <AnimatedSection>
          <motion.form
            onSubmit={handleSubmit}
            className={`rounded-3xl p-8 sm:p-12 transition-all duration-500 ${
              theme === "dark"
                ? "bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-2xl shadow-black/20"
                : "bg-white/90 border border-slate-200/60 backdrop-blur-xl shadow-2xl shadow-slate-200/50"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass("name")}
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass("email")}
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className={`${inputClass("message")} resize-none`}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base transition-all duration-300 hover:from-primary-dark hover:to-primary shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Send size={18} /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </AnimatedSection>

        {/* Social icons */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.08]"
                    : "bg-white/80 border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                }`}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                aria-label={social.name}
              >
                {/* Hover gradient background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                  }}
                />
                <social.icon size={22} className="relative z-10" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
