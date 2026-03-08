"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTheme } from "@/components/ThemeProvider";

const projects = [
  {
    title: "AI-Powered Study Platform",
    description:
      "A modern educational web app that leverages AI tools for personalized learning. Features include interactive quizzes, progress tracking, and an AI assistant for students.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "AI"],
    demo: "#",
    github: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "A sleek admin dashboard for managing products, orders, and analytics. Built with clean architecture and responsive design for all screen sizes.",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    demo: "#",
    github: "#",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Delivery Mobile App",
    description:
      "A cross-platform mobile application for food delivery with real-time order tracking, rider management, and integrated payments.",
    tech: ["React Native", "TypeScript", "Supabase"],
    demo: "#",
    github: "#",
    gradient: "from-orange-500/20 to-rose-500/20",
  },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built recently"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                theme === "dark"
                  ? "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-primary/10"
                  : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-primary/10"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient header with enhanced animation */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                
                {/* Animated letter */}
                <motion.div
                  className="text-5xl font-bold text-white/25 select-none relative z-10"
                  animate={{ 
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {project.title.charAt(0)}
                </motion.div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3 group-hover:text-primary/80 transition-colors duration-300"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tech tags with improved styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-primary/15 to-accent/15 text-primary-light border border-primary/20 hover:border-primary/40"
                          : "bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons with enhanced styling */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary-light border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-primary/20"
                        : "bg-gradient-to-r from-primary/15 to-primary/10 text-primary border border-primary/30 hover:border-primary/60 hover:from-primary/20 hover:to-primary/15"
                    }`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink size={14} /> Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/[0.08] text-slate-300 hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2]"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 hover:border-slate-300"
                    }`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github size={14} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
