"use client";

import { motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem { num: string; suf: string; lbl: string; icon: string; }
interface TypingState {
  plainText: string;
  nameText: string;
  done: boolean;
  typing: boolean;
  erasing: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { num: "3",  suf: "+", lbl: "Years Exp.",  icon: "⚡" },
  { num: "20", suf: "+", lbl: "Projects",    icon: "🚀" },
  { num: "10", suf: "+", lbl: "Tech Stack",  icon: "🛠" },
  { num: "∞",  suf: "",  lbl: "Coffee",      icon: "☕" },
];

const ROLES = ["Frontend Developer", "UI/UX Enthusiast", "AI Integrator", "React Specialist"];

// ─── Two-Phase Typing Hook ────────────────────────────────────────────────────
function useTypingSequence(): TypingState {
  const TEXT1 = "Hi, I'm Alibek";
  const TEXT2 = "Hi, I'm Alibek Allaberganov";
  const PLAIN = "Hi, I'm ";

  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState(0);
  const lenRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const phases: Record<number, () => void> = {
      0: () => { timer = setTimeout(() => setPhase(1), 600); },
      1: () => {
        lenRef.current = 0;
        interval = setInterval(() => {
          lenRef.current++;
          setDisplayed(TEXT1.slice(0, lenRef.current));
          if (lenRef.current >= TEXT1.length) { clearInterval(interval); setPhase(2); }
        }, 58);
      },
      2: () => { timer = setTimeout(() => setPhase(3), 1100); },
      3: () => {
        lenRef.current = TEXT1.length;
        interval = setInterval(() => {
          lenRef.current--;
          setDisplayed(TEXT1.slice(0, lenRef.current));
          if (lenRef.current <= 0) { clearInterval(interval); setDisplayed(""); setPhase(4); }
        }, 30);
      },
      4: () => { timer = setTimeout(() => setPhase(5), 380); },
      5: () => {
        lenRef.current = 0;
        interval = setInterval(() => {
          lenRef.current++;
          setDisplayed(TEXT2.slice(0, lenRef.current));
          if (lenRef.current >= TEXT2.length) { clearInterval(interval); setPhase(6); }
        }, 52);
      },
    };

    phases[phase]?.();
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, [phase]);

  const plainLen = Math.min(displayed.length, PLAIN.length);
  return {
    plainText: displayed.slice(0, plainLen),
    nameText: displayed.length > PLAIN.length ? displayed.slice(PLAIN.length) : "",
    done: phase === 6,
    typing: phase === 1 || phase === 5,
    erasing: phase === 3,
  };
}

// ─── Rotating Role Badge ──────────────────────────────────────────────────────
function RotatingRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % ROLES.length);
        setVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  return (
    <motion.span
      key={idx}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -6 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{ display: "inline-block", minWidth: 200 }}
    >
      {ROLES[idx]}
    </motion.span>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ num, suf, lbl, icon, index }: StatItem & { index: number }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      className="stat-item"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.span
        className="stat-icon"
        animate={{ rotate: hov ? [0, -10, 10, 0] : 0, scale: hov ? 1.2 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.span>
      <span className="stat-num">
        {num}<span className="stat-suf">{suf}</span>
      </span>
      <span className="stat-lbl">{lbl}</span>
    </motion.div>
  );
}

// ─── Simple CTA Button ───────────────────────────────────────────────────────
function MagneticBtn({ children, onClick, primary }: { children: React.ReactNode; onClick: () => void; primary?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={primary ? "cta-btn cta-btn--primary" : "cta-btn cta-btn--secondary"}
    >
      {children}
    </button>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const { plainText, nameText, done, typing, erasing } = useTypingSequence();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Parallax orbs follow mouse
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = useCallback((selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 16, filter: "blur(4px)" },
    animate: done ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 16, filter: "blur(4px)" },
    transition: { duration: 0.65, delay: done ? delay : 99, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="hero" className="hero-section">
      <style>{`
        /* ── Tokens (extend from Navbar tokens) ── */
        :root {
          --orb1: rgba(79,110,247,0.10);
          --orb2: rgba(139,92,246,0.08);
          --orb3: rgba(79,110,247,0.05);
          --grid-dot: rgba(0,0,0,0.032);
          --stat-border: rgba(0,0,0,0.065);
          --stat-bg: rgba(255,255,255,0.52);
          --stat-hover: rgba(79,110,247,0.06);
          --badge-bg: rgba(255,255,255,0.62);
          --badge-border: rgba(0,0,0,0.07);
          --cta-sec-bg: rgba(255,255,255,0.6);
          --cta-sec-border: rgba(0,0,0,0.10);
          --cta-sec-hover: rgba(255,255,255,0.9);
          --scroll-border: rgba(0,0,0,0.15);
          --scroll-dot: var(--accent);
        }
        .dark {
          --orb1: rgba(123,148,255,0.14);
          --orb2: rgba(176,125,255,0.11);
          --orb3: rgba(123,148,255,0.06);
          --grid-dot: rgba(255,255,255,0.022);
          --stat-border: rgba(255,255,255,0.08);
          --stat-bg: rgba(255,255,255,0.04);
          --stat-hover: rgba(123,148,255,0.09);
          --badge-bg: rgba(255,255,255,0.055);
          --badge-border: rgba(255,255,255,0.10);
          --cta-sec-bg: rgba(255,255,255,0.055);
          --cta-sec-border: rgba(255,255,255,0.10);
          --cta-sec-hover: rgba(255,255,255,0.10);
          --scroll-border: rgba(255,255,255,0.18);
          --scroll-dot: var(--accent);
        }

        /* ── Section ── */
        .hero-section {
          min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 100px 24px 80px;
          background: var(--bg);
          transition: background 0.45s;
        }

        /* ── Orbs ── */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; will-change: transform;
          transition: transform 0.8s cubic-bezier(.4,0,.2,1);
        }
        .hero-orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, var(--orb1) 0%, transparent 70%);
          animation: orbFloat1 18s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 580px; height: 580px;
          background: radial-gradient(circle, var(--orb2) 0%, transparent 70%);
          animation: orbFloat2 22s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 700px; height: 420px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          background: radial-gradient(ellipse, var(--orb3) 0%, transparent 65%);
          animation: orbPulse 14s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(40px,30px) scale(1.05); }
          70%      { transform: translate(-18px,44px) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          35%      { transform: translate(-44px,-28px) scale(1.04); }
          65%      { transform: translate(20px,-44px) scale(0.96); }
        }
        @keyframes orbPulse {
          0%,100% { opacity: .5; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: .9; transform: translate(-50%,-50%) scale(1.18); }
        }

        /* ── Grid & vignette ── */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, var(--grid-dot) 1px, transparent 0);
          background-size: 44px 44px;
        }
        .hero-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--bg) 100%);
        }

        /* ── Content ── */
        .hero-content {
          position: relative; z-index: 10;
          max-width: 860px; margin: 0 auto;
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
        }

        /* ── Availability badge ── */
        .avail-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 99px;
          background: var(--badge-bg); border: 1px solid var(--badge-border);
          backdrop-filter: blur(14px);
          font-family: 'Outfit', sans-serif; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.04em; color: var(--text-nav);
          text-transform: uppercase;
        }
        .avail-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.5);
          animation: ping 2s cubic-bezier(0,0,.2,1) infinite;
        }
        @keyframes ping {
          0%  { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100%{ box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* ── Typing headline ── */
        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 4.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1.08;
          color: var(--text);
          min-height: 1.2em;
        }
        .typing-name {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 55%, var(--accent) 100%);
          background-size: 220% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 7s linear infinite;
        }
        @keyframes gradShift {
          0%   { background-position: 0% center; }
          100% { background-position: 220% center; }
        }
        .hero-cursor {
          display: inline-block; width: 3px; height: 0.82em;
          background: var(--accent); margin-left: 5px; vertical-align: middle;
          border-radius: 2px;
          animation: cursorBlink 1.1s step-end infinite;
        }
        .hero-cursor--active { animation: none; opacity: 1; }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Role subtitle ── */
        .hero-role {
          font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 500;
          color: var(--text-nav); display: flex; align-items: center; gap: 10px;
        }
        .role-sep {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); opacity: 0.5;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--text-dim); max-width: 580px;
          line-height: 1.85; margin: 0;
        }

        /* ── CTA buttons ── */
        .cta-wrap { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-top: 8px; }

        .cta-btn {
          font-family: 'Outfit', sans-serif; font-size: 0.95rem; font-weight: 700;
          padding: 14px 32px; border-radius: 14px; cursor: pointer; border: none;
          letter-spacing: 0.02em; transition: box-shadow 0.25s, filter 0.25s;
          position: relative; overflow: hidden;
        }
        .cta-btn--primary {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          box-shadow: 0 6px 28px rgba(var(--accent-rgb), 0.35);
        }
        .cta-btn--primary:hover {
          filter: brightness(1.1);
          box-shadow: 0 8px 36px rgba(var(--accent-rgb), 0.52);
        }
        .cta-btn--secondary {
          background: var(--cta-sec-bg); color: var(--text);
          border: 1px solid var(--cta-sec-border);
          backdrop-filter: blur(12px);
        }
        .cta-btn--secondary:hover { background: var(--cta-sec-hover); }

        /* ── Stat strip ── */
        .stat-strip {
          display: flex; flex-wrap: wrap;
          border: 1px solid var(--stat-border);
          background: var(--stat-bg);
          backdrop-filter: blur(20px) saturate(1.6);
          border-radius: 24px; overflow: hidden;
          margin-top: 24px;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center;
          gap: 4px; padding: 20px 32px;
          border-right: 1px solid var(--stat-border);
          cursor: default; transition: background 0.22s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--stat-hover); }
        .stat-icon { font-size: 1.1rem; line-height: 1; margin-bottom: 2px; }
        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 1.55rem; font-weight: 800;
          color: var(--text); line-height: 1;
        }
        .stat-suf { color: var(--accent); }
        .stat-lbl {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text-dim); margin-top: 2px;
        }
        @media (max-width: 640px) {
          .stat-item { padding: 16px 20px; flex: 1 1 40%; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-top: 1px solid var(--stat-border); }
          .stat-item:nth-child(4) { border-top: 1px solid var(--stat-border); border-right: none; }
        }

        /* ── Scroll indicator ── */
        .scroll-ind {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .scroll-text {
          font-family: 'Outfit', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.55;
        }
        .scroll-track {
          width: 22px; height: 34px; border-radius: 99px;
          border: 1.5px solid var(--scroll-border);
          display: flex; justify-content: center; padding: 4px 0;
        }
        .scroll-ball {
          width: 4px; height: 8px; border-radius: 99px;
          background: var(--scroll-dot);
        }
      `}</style>

      {/* Parallax orbs */}
      <div
        className="hero-orb hero-orb-1"
        style={{ transform: `translate(${mousePos.x * 30 - 15}px, ${mousePos.y * 20 - 10}px)` }}
      />
      <div
        className="hero-orb hero-orb-2"
        style={{
          bottom: -100, right: -100,
          transform: `translate(${mousePos.x * -24 + 12}px, ${mousePos.y * -18 + 9}px)`,
        }}
      />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />
      <div className="hero-vignette" />

      {/* Content */}
      <div className="hero-content">

        {/* Badge */}
        <motion.div
          className="avail-badge"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="avail-dot" />
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-headline">
            <span>{plainText}</span>
            {nameText && <span className="typing-name">{nameText}</span>}
            <span className={`hero-cursor${typing || erasing ? " hero-cursor--active" : ""}`} />
          </h1>
        </motion.div>

        {/* Rotating role */}
        <motion.p
          className="hero-role"
          {...reveal(0.1)}
        >
          <RotatingRole />
          <span className="role-sep" />
          Toshkent, 🇺🇿
        </motion.p>

        {/* Description */}
        <motion.p className="hero-desc" {...reveal(0.22)}>
          I build high-performance web applications, fluid mobile experiences,
          and AI-integrated tools — with obsessive attention to detail and UX.
        </motion.p>

        {/* CTAs */}
        <motion.div className="cta-wrap" {...reveal(0.36)}>
          <MagneticBtn primary onClick={() => scrollTo("#projects")}>
            Explore My Work →
          </MagneticBtn>
          <MagneticBtn onClick={() => scrollTo("#contact")}>
            Let's Talk
          </MagneticBtn>
        </motion.div>

        {/* Stats */}
        <motion.div className="stat-strip" {...reveal(0.52)}>
          {STATS.map((s, i) => (
            <StatCard key={s.lbl} {...s} index={i} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-ind"
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: done ? 1.1 : 99 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-track">
          <motion.div
            className="scroll-ball"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}