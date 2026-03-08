"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`rounded-2xl p-6 transition-all duration-300 ${
        theme === "dark"
          ? "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07]"
          : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
      } ${className}`}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
