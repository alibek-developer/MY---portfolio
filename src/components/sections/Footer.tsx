"use client";

import React from "react";
import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/", label: "Telegram" },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative py-12 border-t transition-all duration-500 ${
        theme === "dark"
          ? "border-white/[0.08] bg-gradient-to-b from-transparent to-white/[0.02]"
          : "border-slate-200/60 bg-gradient-to-b from-transparent to-slate-50/50"
      }`}
    >
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg font-bold tracking-tight inline-block transition-transform duration-300 hover:scale-105"
              style={{ color: "var(--text)" }}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">A</span>libek
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">.</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {new Date().getFullYear()} Alibek Allaberganov. Crafted with
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
          </motion.p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  theme === "dark"
                    ? "text-slate-500 hover:text-slate-200 hover:bg-white/[0.08]"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
                <social.icon size={18} className="relative z-10" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
