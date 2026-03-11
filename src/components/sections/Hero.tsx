"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// ─── Two-Phase Typing Sequence Hook ──────────────────────────────────────────
// Sequence: type TEXT1 → pause → erase → pause → type TEXT2 → stop
function useTypingSequence() {
  const TEXT1  = "Hi, I'm Alibek";
  const TEXT2  = "Hi, I'm Alibek Allaberganov";
  const PLAIN  = "Hi, I'm ";          // prefix rendered without gradient
  const TYPE_SPEED  = 58;             // ms per character typed
  const ERASE_SPEED = 30;             // ms per character erased
  const PAUSE_AFTER_1  = 1100;        // pause after TEXT1 completes
  const PAUSE_BEFORE_2 = 380;         // pause before typing TEXT2
  const START_DELAY    = 500;

  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase]         = useState(0);
  // 0=waiting  1=type1  2=pause1  3=erase  4=pause2  5=type2  6=done
  const lenRef = useRef(0);           // tracks current length for erase

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    let iv: ReturnType<typeof setInterval>;

    if (phase === 0) {
      t = setTimeout(() => setPhase(1), START_DELAY);
    } else if (phase === 1) {
      lenRef.current = 0;
      iv = setInterval(() => {
        lenRef.current++;
        setDisplayed(TEXT1.slice(0, lenRef.current));
        if (lenRef.current >= TEXT1.length) {
          clearInterval(iv);
          setPhase(2);
        }
      }, TYPE_SPEED);
    } else if (phase === 2) {
      t = setTimeout(() => setPhase(3), PAUSE_AFTER_1);
    } else if (phase === 3) {
      lenRef.current = TEXT1.length;
      iv = setInterval(() => {
        lenRef.current--;
        setDisplayed(TEXT1.slice(0, lenRef.current));
        if (lenRef.current <= 0) {
          clearInterval(iv);
          setDisplayed("");
          setPhase(4);
        }
      }, ERASE_SPEED);
    } else if (phase === 4) {
      t = setTimeout(() => setPhase(5), PAUSE_BEFORE_2);
    } else if (phase === 5) {
      lenRef.current = 0;
      iv = setInterval(() => {
        lenRef.current++;
        setDisplayed(TEXT2.slice(0, lenRef.current));
        if (lenRef.current >= TEXT2.length) {
          clearInterval(iv);
          setPhase(6);
        }
      }, TYPE_SPEED);
    }
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [phase]);

  const plainLen  = Math.min(displayed.length, PLAIN.length);
  const plainText = displayed.slice(0, plainLen);
  const nameText  = displayed.length > PLAIN.length ? displayed.slice(PLAIN.length) : "";
  const done      = phase === 6;
  const typing    = phase === 1 || phase === 5;
  const erasing   = phase === 3;

  return { plainText, nameText, done, typing, erasing };
}

// ─── Hero Section Component ───────────────────────────────────────────────────
export default function Hero() {
  const { plainText, nameText, done, typing, erasing } = useTypingSequence();

  const afterDone = (delay: number) => ({
    initial:    { opacity: 0, y: 10 },
    animate:    done ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.5, delay: done ? delay : 99, ease: [0.16,1,0.3,1] as const },
  });

  return (
    <section id="hero" className="hero min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      
      <style>{`
        /* ── Hero Specific Styles ── */
        .hero { background: var(--bg); transition: background 0.45s; }
        
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(96px); pointer-events: none; will-change: transform;
        }
        .hero-orb-1 {
          width: 480px; height: 480px; top: -60px; left: -80px;
          background: radial-gradient(circle, var(--orb1) 0%, transparent 70%);
          animation: orbFloat1 16s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 540px; height: 540px; bottom: -100px; right: -100px;
          background: radial-gradient(circle, var(--orb2) 0%, transparent 70%);
          animation: orbFloat2 20s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 600px; height: 400px; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse, var(--orb3) 0%, transparent 65%);
          animation: orbPulse 12s ease-in-out infinite;
        }

        .dark {
          --orb1: rgba(110,132,254,0.13); --orb2: rgba(167,139,250,0.10);
          --orb3: rgba(110,132,254,0.055);
          --grid-dot: rgba(255,255,255,0.022);
        }
        :root:not(.dark) {
          --orb1: rgba(78,107,245,0.09);  --orb2: rgba(124,58,237,0.08);
          --orb3: rgba(78,107,245,0.05);
          --grid-dot: rgba(0,0,0,0.038);
        }

        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 40%{transform:translate(35px,25px)} 70%{transform:translate(-15px,40px)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-40px,-25px)} 65%{transform:translate(18px,-40px)} }
        @keyframes orbPulse  { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.85;transform:translate(-50%,-50%) scale(1.15)} }

        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, var(--grid-dot) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, var(--bg) 100%);
        }

        .hero-typing {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 7vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .typing-name {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 60%, var(--accent) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 7s linear infinite;
        }

        @keyframes gradShift { 0%{background-position:0% center} 100%{background-position:200% center} }

        .hero-cursor {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: var(--accent);
          margin-left: 6px;
          vertical-align: middle;
          animation: cursorBlink 1.1s step-end infinite;
        }
        .hero-cursor--active { animation: none; opacity: 1; }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        .stat-item {
          border-right: 1px solid var(--divider);
          transition: background 0.2s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--mob-hover); }

        @media (max-width: 768px) {
          .stat-item { border-right: none; border-bottom: 1px solid var(--divider); width: 50%; }
          .stat-item:nth-child(odd) { border-right: 1px solid var(--divider); }
          .stat-item:last-child { border-bottom: none; width: 100%; }
        }
      `}</style>

      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />
      <div className="hero-vignette" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Availability badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.05] backdrop-blur-md text-xs font-medium"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <div className="min-h-[160px] flex items-center justify-center">
          <h1 className="hero-typing text-slate-900 dark:text-white">
            <span>{plainText}</span>
            {nameText && <span className="typing-name">{nameText}</span>}
            <span className={`hero-cursor${typing || erasing ? " hero-cursor--active" : ""}`} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 flex items-center gap-3"
          {...afterDone(0.1)}
        >
          Frontend Developer
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          AI Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-base md:text-lg text-slate-500 dark:text-slate-400/80 max-w-2xl leading-relaxed"
          {...afterDone(0.25)}
        >
          I build high-performance web applications, fluid mobile experiences, 
          and AI-integrated tools with a focus on clean code and exceptional UI/UX.
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap items-center justify-center gap-4 mt-4" {...afterDone(0.4)}>
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm font-bold hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
          >
            Let's Talk
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex flex-wrap items-stretch mt-12 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl overflow-hidden"
          {...afterDone(0.6)}
        >
          {[
            { num: "3",  suf: "+", lbl: "Years Exp." },
            { num: "20", suf: "+", lbl: "Projects" },
            { num: "10", suf: "+", lbl: "Stack" },
            { num: "∞",  suf: "",  lbl: "Coffee" },
          ].map(({ num, suf, lbl }) => (
            <div className="stat-item flex flex-col items-center px-8 py-5" key={lbl}>
              <span className="text-2xl font-bold dark:text-white">
                {num}<span className="text-primary">{suf}</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold mt-1">
                {lbl}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: done ? 1 : 99 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500/50">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-300 dark:border-white/20 flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}