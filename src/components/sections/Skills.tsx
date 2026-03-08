"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Shield, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useTheme } from "@/components/ThemeProvider";

const skills = [
  { name: "HTML", color: "#E44D26", icon: Code2 },
  { name: "CSS", color: "#264DE4", icon: Palette },
  { name: "Tailwind", color: "#38BDF8", icon: Zap },
  { name: "JavaScript", color: "#F7DF1E", icon: Code2 },
  { name: "React", color: "#61DAFB", icon: Layers },
  { name: "TypeScript", color: "#3178C6", icon: Shield },
  { name: "Next.js", color: "#808080", icon: Layers },
  { name: "AI Tools", color: "#A78BFA", icon: Zap },
  { name: "Supabase", color: "#3ECF8E", icon: Code2 },
  { name: "Firebase", color: "#FFCA28", icon: Shield },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={`group relative flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15]"
                      : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  {/* Icon with gradient background */}
                  <div
                    className="relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                    }}
                  >
                    <Icon size={24} style={{ color: skill.color }} />
                  </div>
                  
                  <span
                    className="font-semibold text-sm text-center"
                    style={{ color: "var(--text)" }}
                  >
                    {skill.name}
                  </span>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
