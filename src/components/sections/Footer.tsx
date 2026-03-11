"use client";

import { motion } from "framer-motion"
import { Github, Heart, Linkedin, MessageCircle } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const socials = [
  { icon: Github, href: "https://github.com/alibek-developer", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/alibek_developer", label: "Telegram" },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <footer
      className={`relative py-12 border-t transition-all duration-700 ${
        isDark
          ? "border-white/[0.08] bg-[#07070f]"
          : "border-slate-200/60 bg-slate-50/50"
      }`}
    >
      {/* Subtle gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
              className="text-xl font-black tracking-tighter inline-block transition-transform duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">A</span>
              <span style={{ color: "var(--text)" }}>libek</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">.</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {new Date().getFullYear()} Alibek Allaberganov. Made with
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Heart size={14} className="text-rose-500 fill-rose-500" />
            </motion.span>
          </motion.p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-[14px] transition-all duration-300 relative overflow-hidden border ${
                  isDark
                    ? "text-slate-500 border-white/[0.05] hover:text-white hover:bg-white/[0.05] hover:border-white/[0.1]"
                    : "text-slate-400 border-slate-200 hover:text-slate-900 hover:bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
