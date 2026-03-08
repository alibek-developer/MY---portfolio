"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Theme = "dark" | "light";

// ─── Theme System ─────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = stored ?? preferred;
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function applyTheme(t: Theme) {
    document.documentElement.setAttribute("data-theme", t);
  }

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  };

  return { theme, toggle };
}

// ─── Nav Links ────────────────────────────────────────────────────────────────
const NAV = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume"   },
  { label: "Contact",  href: "#contact"  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

// ─── Scroll helper ────────────────────────────────────────────────────────────
function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ label, href, active, onClick }: { label: string; href: string; active: boolean; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`navlink${active ? " navlink-active" : ""}`}
    >
      <span className="navlink-label">{label}</span>
      <motion.span
        className="navlink-bar"
        animate={{ scaleX: hov || active ? 1 : 0, opacity: hov || active ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      />
      {active && (
        <motion.span
          className="navlink-glow"
          layoutId="navglow"
          transition={{ type: "spring", stiffness: 360, damping: 30 }}
        />
      )}
    </button>
  );
}

// ─── ThemeToggle ──────────────────────────────────────────────────────────────
function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const dark = theme === "dark";
  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      className="toggle-btn"
      whileTap={{ scale: 0.88 }}
    >
      <span className="toggle-track">
        <motion.span
          className="toggle-thumb"
          animate={{ x: dark ? 2 : 22 }}
          transition={{ type: "spring", stiffness: 500, damping: 36 }}
        />
        <span className="t-icon t-icon-l"><MoonIcon /></span>
        <span className="t-icon t-icon-r"><SunIcon /></span>
      </span>
    </motion.button>
  );
}

// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <motion.button className="ham-btn" onClick={onClick} whileTap={{ scale: 0.88 }} aria-label="Menu">
      <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="ham-line" />
      <motion.span animate={{ opacity: open ? 0 : 1 }} className="ham-line" />
      <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="ham-line" />
    </motion.button>
  );
}

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
      // Initial delay then start typing TEXT1
      t = setTimeout(() => setPhase(1), START_DELAY);

    } else if (phase === 1) {
      // Type TEXT1 character by character
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
      // Pause after TEXT1
      t = setTimeout(() => setPhase(3), PAUSE_AFTER_1);

    } else if (phase === 3) {
      // Erase TEXT1 backwards
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
      // Pause before TEXT2
      t = setTimeout(() => setPhase(5), PAUSE_BEFORE_2);

    } else if (phase === 5) {
      // Type TEXT2 character by character
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
    // phase 6 = done, no effect

    return () => { clearTimeout(t); clearInterval(iv); };
  }, [phase]);

  // Split into plain + gradient-name portions
  const plainLen  = Math.min(displayed.length, PLAIN.length);
  const plainText = displayed.slice(0, plainLen);
  const nameText  = displayed.length > PLAIN.length ? displayed.slice(PLAIN.length) : "";
  const done      = phase === 6;
  const typing    = phase === 1 || phase === 5;
  const erasing   = phase === 3;

  return { plainText, nameText, done, typing, erasing };
}

// ─── Hero Section Component ───────────────────────────────────────────────────
function HeroSection() {
  const { plainText, nameText, done, typing, erasing } = useTypingSequence();

  // Elements below the headline fade in only after TEXT2 finishes
  const afterDone = (delay: number) => ({
    initial:    { opacity: 0, y: 10 },
    animate:    done ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.5, delay: done ? delay : 99, ease: [0.16,1,0.3,1] as const },
  });

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />
      <div className="hero-vignette" />

      {/* Content */}
      <div className="hero-content">

        {/* Availability badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16,1,0.3,1] }}
        >
          <span className="badge-dot" />
          Available for work
        </motion.div>

        {/* ── Typing headline ── */}
        <div className="hero-typing-wrap">
          <h1 className="hero-typing">
            <span className="typing-plain">{plainText}</span>
            {nameText && <span className="typing-name">{nameText}</span>}
            <span className={`hero-cursor${typing || erasing ? " hero-cursor--active" : ""}`} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p className="hero-subtitle" {...afterDone(0.1)}>
          Frontend Developer
          <span className="subtitle-dot" />
          AI Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p className="hero-desc" {...afterDone(0.25)}>
          I build modern websites, mobile applications, and AI-powered products
          using modern web technologies.
        </motion.p>

        {/* CTA button */}
        <motion.div className="hero-btns" {...afterDone(0.4)}>
          <motion.button
            className="hbtn hbtn-primary"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
            <span className="hbtn-arrow">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div className="hero-stats" {...afterDone(0.55)}>
          {[
            { num: "3",  suf: "+", lbl: "Years Exp."      },
            { num: "20", suf: "+", lbl: "Projects Built"  },
            { num: "10", suf: "+", lbl: "Technologies"    },
            { num: "∞",  suf: "",  lbl: "Coffee Cups"     },
          ].map(({ num, suf, lbl }) => (
            <div className="stat-item" key={lbl}>
              <span className="stat-num">{num}<span className="stat-num-accent">{suf}</span></span>
              <span className="stat-lbl">{lbl}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: done ? 0.9 : 99 }}
      >
        <span className="scroll-lbl">Scroll</span>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
      </motion.div>
    </section>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 140;
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.querySelector(NAV[i].href) as HTMLElement | null;
        if (el && el.offsetTop <= y) { setActive(NAV[i].href); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const handleNav = (href: string) => { setOpen(false); scrollTo(href); };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        /* ── CSS Tokens ── */
        :root[data-theme="dark"] {
          --bg:            #07070f;
          --glass:         rgba(11,11,22,0.72);
          --glass-border:  rgba(255,255,255,0.065);
          --glass-shadow:  0 8px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04);
          --text:          #eaeaf5;
          --text-dim:      rgba(190,190,225,0.45);
          --text-nav:      rgba(195,195,228,0.68);
          --accent:        #6e84fe;
          --accent2:       #a78bfa;
          --glow:          rgba(110,132,254,0.22);
          --glow2:         rgba(110,132,254,0.10);
          --pill-bg:       rgba(255,255,255,0.052);
          --pill-border:   rgba(255,255,255,0.085);
          --pill-hover:    rgba(255,255,255,0.095);
          --resume-bg:     linear-gradient(135deg,#6e84fe 0%,#a78bfa 100%);
          --resume-shadow: 0 4px 22px rgba(110,132,254,0.38);
          --tog-track:     rgba(255,255,255,0.07);
          --tog-border:    rgba(255,255,255,0.10);
          --tog-thumb:     #6e84fe;
          --divider:       rgba(255,255,255,0.07);
          --mob-bg:        rgba(7,7,15,0.97);
          --mob-hover:     rgba(110,132,254,0.07);
        }
        :root[data-theme="light"] {
          --bg:            #f2f2f8;
          --glass:         rgba(255,255,255,0.82);
          --glass-border:  rgba(0,0,0,0.065);
          --glass-shadow:  0 8px 40px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9);
          --text:          #0e0e1c;
          --text-dim:      rgba(35,35,75,0.40);
          --text-nav:      rgba(30,30,68,0.68);
          --accent:        #4e6bf5;
          --accent2:       #7c3aed;
          --glow:          rgba(78,107,245,0.16);
          --glow2:         rgba(78,107,245,0.08);
          --pill-bg:       rgba(0,0,0,0.042);
          --pill-border:   rgba(0,0,0,0.068);
          --pill-hover:    rgba(0,0,0,0.08);
          --resume-bg:     linear-gradient(135deg,#4e6bf5 0%,#7c3aed 100%);
          --resume-shadow: 0 4px 22px rgba(78,107,245,0.30);
          --tog-track:     rgba(0,0,0,0.058);
          --tog-border:    rgba(0,0,0,0.08);
          --tog-thumb:     #4e6bf5;
          --divider:       rgba(0,0,0,0.068);
          --mob-bg:        rgba(245,245,252,0.98);
          --mob-hover:     rgba(78,107,245,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          transition: background 0.45s ease, color 0.45s ease;
        }

        /* ── Outer wrapper ── */
        .nb-wrap {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 300;
          pointer-events: none;
          padding: 14px 20px;
          transition: padding 0.38s cubic-bezier(.4,0,.2,1);
        }
        .nb-wrap.nb-scrolled { padding: 7px 20px; }

        /* ── Glass pill ── */
        .nb-pill {
          pointer-events: all;
          max-width: 1200px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 20px;
          background: transparent;
          transition: background 0.42s, border 0.42s, box-shadow 0.42s, height 0.38s cubic-bezier(.4,0,.2,1), border-radius 0.38s;
        }
        .nb-wrap.nb-scrolled .nb-pill {
          background: var(--glass);
          backdrop-filter: blur(22px) saturate(1.8);
          -webkit-backdrop-filter: blur(22px) saturate(1.8);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 62px;
          border-radius: 16px;
        }

        /* ── Logo ── */
        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.055em;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          display: flex;
          align-items: baseline;
          transition: opacity 0.2s;
          padding: 0;
          line-height: 1;
        }
        .logo:hover { opacity: 0.82; }
        .logo-hi {
          background: linear-gradient(130deg, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Center nav ── */
        .nb-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
        }
        @media (max-width: 900px) { .nb-center { display: none; } }

        /* ── Nav link ── */
        .navlink {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 9px 18px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: background 0.2s;
        }
        .navlink:hover { background: var(--pill-bg); }
        .navlink-label {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.015em;
          color: var(--text-nav);
          transition: color 0.22s;
        }
        .navlink:hover .navlink-label,
        .navlink-active .navlink-label { color: var(--text); }
        .navlink-active .navlink-label { color: var(--accent) !important; }

        .navlink-bar {
          display: block;
          height: 2px;
          width: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform-origin: center;
        }
        .navlink-glow {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: var(--glow2);
          z-index: -1;
        }

        /* ── Divider ── */
        .nb-divider {
          width: 1px;
          height: 20px;
          background: var(--divider);
          flex-shrink: 0;
          margin: 0 4px;
        }
        @media (max-width: 900px) { .nb-divider { display: none; } }

        /* ── Right side ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* ── Icon button ── */
        .icon-btn {
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-nav);
          text-decoration: none;
          transition: background 0.22s, color 0.22s, box-shadow 0.22s;
        }
        .icon-btn:hover {
          background: var(--pill-hover);
          color: var(--text);
          box-shadow: 0 0 0 3px var(--glow);
        }

        /* ── Resume btn ── */
        .resume-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 42px;
          padding: 0 20px;
          border-radius: 12px;
          background: var(--resume-bg);
          color: #fff;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          box-shadow: var(--resume-shadow);
          cursor: pointer;
          border: none;
          transition: filter 0.22s, box-shadow 0.22s, transform 0.18s;
        }
        .resume-btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 6px 28px rgba(110,132,254,0.45);
        }

        /* ── Toggle ── */
        .toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .toggle-track {
          position: relative;
          display: flex;
          align-items: center;
          width: 58px;
          height: 30px;
          border-radius: 99px;
          background: var(--tog-track);
          border: 1px solid var(--tog-border);
          transition: background 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .toggle-track:hover { box-shadow: 0 0 0 3px var(--glow); }
        .toggle-thumb {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--tog-thumb);
          top: 2px;
          box-shadow: 0 2px 8px rgba(110,132,254,0.45);
          z-index: 2;
        }
        .t-icon {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          pointer-events: none;
        }
        .t-icon-l { left: 7px; }
        .t-icon-r { right: 6px; }

        /* ── Hamburger ── */
        .ham-btn {
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 11px;
          width: 42px;
          height: 42px;
          cursor: pointer;
          padding: 0;
        }
        @media (max-width: 900px) { .ham-btn { display: flex; } }
        .ham-line {
          display: block;
          width: 18px;
          height: 1.8px;
          border-radius: 2px;
          background: var(--text);
          transform-origin: center;
        }

        /* ── Mobile overlay ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          z-index: 280;
          background: var(--mob-bg);
          backdrop-filter: blur(30px) saturate(1.5);
          -webkit-backdrop-filter: blur(30px) saturate(1.5);
          display: flex;
          flex-direction: column;
          padding: 96px 28px 40px;
        }
        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          border-bottom: 1px solid var(--divider);
          padding: 18px 10px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text-dim);
          transition: color 0.2s, background 0.2s;
          border-radius: 10px;
          text-align: left;
          width: 100%;
        }
        .mob-link:hover { color: var(--text); background: var(--mob-hover); }
        .mob-link.mob-active { color: var(--accent); }
        .mob-link-arrow { font-size: 1rem; opacity: 0.3; font-weight: 400; font-family: 'Outfit', sans-serif; }
        .mob-foot {
          margin-top: auto;
          display: flex;
          gap: 10px;
          padding-top: 28px;
        }
        .mob-foot .resume-btn { flex: 1; justify-content: center; }

        /* ══════════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════════ */

        /* Space Grotesk from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg);
          padding: 0 24px;
          transition: background 0.45s;
        }

        /* ── Orbs ── */
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
        /* Center glow — subtle halo behind text */
        .hero-orb-3 {
          width: 600px; height: 400px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse, var(--orb3) 0%, transparent 65%);
          animation: orbPulse 12s ease-in-out infinite;
        }
        :root[data-theme="dark"]  {
          --orb1: rgba(110,132,254,0.13); --orb2: rgba(167,139,250,0.10);
          --orb3: rgba(110,132,254,0.055);
        }
        :root[data-theme="light"] {
          --orb1: rgba(78,107,245,0.09);  --orb2: rgba(124,58,237,0.08);
          --orb3: rgba(78,107,245,0.05);
        }
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0)} 40%{transform:translate(35px,25px)} 70%{transform:translate(-15px,40px)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-40px,-25px)} 65%{transform:translate(18px,-40px)} }
        @keyframes orbPulse  { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:.85;transform:translate(-50%,-50%) scale(1.15)} }

        /* Dot grid */
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle at 1px 1px, var(--grid-dot) 1px, transparent 0);
          background-size: 40px 40px;
        }
        :root[data-theme="dark"]  { --grid-dot: rgba(255,255,255,0.022); }
        :root[data-theme="light"] { --grid-dot: rgba(0,0,0,0.038); }

        /* Vignette */
        .hero-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, var(--bg) 100%);
          transition: background 0.45s;
        }

        /* ── Content ── */
        .hero-content {
          position: relative; z-index: 10;
          max-width: 780px; width: 100%;
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
          padding-top: 88px;
          gap: 0;
        }

        /* ── Availability badge ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px 7px 14px;
          border-radius: 99px;
          border: 1px solid var(--pill-border);
          background: var(--pill-bg);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
          color: var(--text-nav); margin-bottom: 44px;
          backdrop-filter: blur(10px); user-select: none;
          transition: border-color 0.22s, background 0.22s;
        }
        .hero-badge:hover { border-color: rgba(34,197,94,0.4); }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.18);
          animation: dotPing 2.6s ease-in-out infinite;
        }
        @keyframes dotPing {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0.05); }
        }

        /* ── Typing headline ── */
        .hero-typing-wrap {
          margin-bottom: 28px;
          min-height: 3.2em;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-typing {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: var(--text);
          display: inline;
        }
        /* Plain prefix — solid text color */
        .typing-plain { color: var(--text); }
        /* Name part — animated gradient */
        .typing-name {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 60%, var(--accent) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 7s linear infinite;
        }
        @keyframes gradShift { 0%{background-position:0% center} 100%{background-position:200% center} }

        /* Cursor — solid block, blinks when idle, solid when typing/erasing */
        .hero-cursor {
          display: inline-block;
          width: 2px;
          height: 0.88em;
          background: var(--accent);
          margin-left: 4px;
          vertical-align: text-bottom;
          border-radius: 1px;
          animation: cursorBlink 1.1s step-end infinite;
        }
        /* When actively typing/erasing: cursor stays solid (no blink) */
        .hero-cursor--active {
          animation: none;
          opacity: 1;
        }
        @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Subtitle ── */
        .hero-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.95rem, 2.2vw, 1.15rem);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--text-nav);
          margin-bottom: 20px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .subtitle-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: var(--accent); opacity: 0.5; flex-shrink: 0;
        }

        /* ── Description ── */
        .hero-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.95rem, 1.9vw, 1.08rem);
          font-weight: 400;
          line-height: 1.8;
          color: var(--text-nav);
          max-width: 500px;
          margin: 0 auto;
          letter-spacing: 0.005em;
          opacity: 0.85;
        }

        /* ── Single primary button ── */
        .hero-btns {
          margin-top: 44px;
        }
        .hbtn {
          display: inline-flex; align-items: center; gap: 9px;
          border: none; cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem; font-weight: 600; letter-spacing: 0.01em;
          border-radius: 14px; padding: 0 32px; height: 52px;
          text-decoration: none; white-space: nowrap;
          transition: transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s, filter 0.22s;
        }
        .hbtn:active { transform: translateY(0) scale(0.97) !important; }
        .hbtn-primary {
          background: var(--resume-bg); color: #fff; box-shadow: var(--resume-shadow);
        }
        .hbtn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 12px 36px rgba(110,132,254,0.40);
        }
        .hbtn-arrow { display: flex; align-items: center; transition: transform 0.2s; }
        .hbtn-primary:hover .hbtn-arrow { transform: translateX(4px); }

        /* ── Stats strip ── */
        .hero-stats {
          display: flex; align-items: stretch;
          margin-top: 52px;
          border: 1px solid var(--pill-border);
          border-radius: 18px;
          background: var(--pill-bg);
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .stat-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 20px 38px; gap: 4px;
          border-right: 1px solid var(--divider);
          transition: background 0.2s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--mob-hover); }
        .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.55rem; font-weight: 700;
          letter-spacing: -0.04em; color: var(--text); line-height: 1;
        }
        .stat-num-accent { color: var(--accent); }
        .stat-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--text-dim); white-space: nowrap;
        }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute; bottom: 34px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          z-index: 10;
        }
        .scroll-lbl {
          font-family: 'Space Grotesk', sans-serif; font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-dim); opacity: 0.35;
        }
        .scroll-mouse {
          width: 20px; height: 33px; border-radius: 10px;
          border: 1.5px solid var(--divider);
          display: flex; align-items: flex-start; justify-content: center; padding-top: 5px;
        }
        .scroll-wheel {
          width: 2.5px; height: 6px; border-radius: 2px;
          background: var(--accent); opacity: 0.5;
          animation: scrollAnim 2.2s ease-in-out infinite;
        }
        @keyframes scrollAnim { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(8px);opacity:.1} }

        @media (max-width: 600px) {
          .hero-content { padding-top: 100px; }
          .hero-typing-wrap { min-height: 2.8em; }
          .hbtn { height: 48px; padding: 0 26px; font-size: 0.95rem; }
          .hero-stats { flex-wrap: wrap; border-radius: 14px; }
          .stat-item { width: 50%; padding: 16px 20px; border-right: none; border-bottom: 1px solid var(--divider); }
          .stat-item:nth-child(odd) { border-right: 1px solid var(--divider); }
          .stat-item:last-child { border-bottom: none; width: 100%; }
        }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <motion.div
        className={`nb-wrap${scrolled ? " nb-scrolled" : ""}`}
        initial={{ y: -96, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nb-pill">

          {/* Logo */}
          <motion.button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="logo-hi">A</span>libek<span className="logo-hi">.</span>
          </motion.button>

          {/* Center links */}
          <nav className="nb-center">
            {NAV.map(({ label, href }) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                active={active === href}
                onClick={() => handleNav(href)}
              />
            ))}
          </nav>

          {/* Right controls */}
          <div className="nb-right">
            <span className="nb-divider" />

            <ThemeToggle theme={theme} toggle={toggle} />

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.92 }}
            >
              <GitHubIcon />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="resume-btn"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <DownloadIcon />
              Resume
            </motion.a>

            <Hamburger open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </motion.div>

      {/* ── Mobile menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-overlay"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.4,0,0.2,1] }}
          >
            <nav>
              {NAV.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  className={`mob-link${active === href ? " mob-active" : ""}`}
                  onClick={() => handleNav(href)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.3, ease: [0.16,1,0.3,1] }}
                >
                  {label}
                  <span className="mob-link-arrow">↗</span>
                </motion.button>
              ))}
            </nav>
            <div className="mob-foot">
              <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <GitHubIcon />
              </motion.a>
              <motion.a href="/resume.pdf" download className="resume-btn" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                <DownloadIcon /> Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <HeroSection />

    </>
  );
}