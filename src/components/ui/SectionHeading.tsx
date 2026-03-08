"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
        style={{
          color: "var(--text)",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-lg max-w-2xl"
          style={{
            color: "var(--text-secondary)",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent"
        style={{
          marginLeft: align === "center" ? "auto" : undefined,
          marginRight: align === "center" ? "auto" : undefined,
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: 64, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}
