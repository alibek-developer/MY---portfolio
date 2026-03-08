"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white hover:from-primary-dark hover:to-primary shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35",
    secondary:
      "backdrop-blur-sm bg-surface-dark-secondary/80 text-text-dark hover:bg-surface-dark-secondary/90 dark:bg-surface-dark-secondary/80 dark:text-text-dark light:bg-slate-100/80 light:text-text-light light:hover:bg-slate-200/90 border border-white/[0.08] light:border-slate-200",
    outline:
      "border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary/60",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={combinedClass}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.96 }}
      download={download || undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </MotionComponent>
  );
}
