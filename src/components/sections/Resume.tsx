"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { useTheme } from "next-themes";

export default function Resume() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="resume"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume to learn more about my experience"
        />

        <AnimatedSection>
          <motion.div
            className={`relative rounded-2xl p-7 sm:p-10 text-center overflow-hidden ${
              isDark
                ? "bg-white/[0.03] border border-white/[0.08]"
                : "bg-white border border-slate-200 shadow-sm"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />

            <motion.div
              className={`inline-flex p-4 rounded-2xl mb-6 ${
                isDark
                  ? "bg-primary/10"
                  : "bg-primary/5"
              }`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <FileText size={32} className="text-primary" />
            </motion.div>

            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "var(--text)" }}
            >
              My Resume
            </h3>
            <p
              className="mb-8 max-w-md mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Frontend developer with experience in building modern web
              applications, mobile apps, and AI-powered products. Skilled in
              React, Next.js, TypeScript, and more.
            </p>

            <Button variant="primary" size="lg" href="/resume.pdf" download>
              <Download size={18} /> Download Resume
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
