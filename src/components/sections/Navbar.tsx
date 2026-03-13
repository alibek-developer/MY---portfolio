"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem { label: string; href: string; }
interface NavLinkProps { label: string; href: string; active: boolean; onClick: () => void; index: number; }

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV: NavItem[] = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Resume",   href: "#resume"   },
  { label: "Contact",  href: "#contact"  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

// ─── Scroll helper ────────────────────────────────────────────────────────────
function smoothScrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Magnetic Button Hook ─────────────────────────────────────────────────────
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set((e.clientX - r.left - r.width / 2) * strength);
      y.set((e.clientY - r.top - r.height / 2) * strength);
    };
    const onLeave = () => { x.set(0); y.set(0); };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [strength, x, y]);

  return { ref, style: { x: sx, y: sy } };
}

// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({ label, href, active, onClick, index }: NavLinkProps) {
  const [hov, setHov] = useState(false);
  const magnetic = useMagnetic(0.25);

  return (
    <motion.button
      ref={magnetic.ref as React.RefObject<HTMLButtonElement>}
      style={magnetic.style}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`navlink${active ? " navlink-active" : ""}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-current={active ? "page" : undefined}
    >
      <span className="navlink-label">{label}</span>
      <motion.span
        className="navlink-bar"
        animate={{ scaleX: hov || active ? 1 : 0, opacity: hov || active ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      />
      <AnimatePresence>
        {active && (
          <motion.span
            className="navlink-glow"
            layoutId="navglow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 58, height: 30 }} />;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="toggle-btn"
      whileTap={{ scale: 0.9 }}
    >
      <span className="toggle-track">
        <motion.span
          className="toggle-thumb"
          animate={{ x: isDark ? 2 : 22 }}
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
    <motion.button
      className="ham-btn"
      onClick={onClick}
      whileTap={{ scale: 0.88 }}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="ham-line" />
      <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} className="ham-line" />
      <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="ham-line" />
    </motion.button>
  );
}

// ─── Noise Texture SVG (inline, no external deps) ────────────────────────────
const NoiseSVG = () => (
  <svg
    aria-hidden="true"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025, pointerEvents: "none", borderRadius: "inherit" }}
  >
    <filter id="nb-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#nb-noise)" />
  </svg>
);

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);

      // Reading progress
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalH > 0 ? y / totalH : 0);

      // Active section detection
      const offset = y + 140;
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.querySelector(NAV[i].href) as HTMLElement | null;
        if (el && el.offsetTop <= offset) { setActive(NAV[i].href); return; }
      }
      setActive("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = useCallback((href: string) => {
    setOpen(false);
    smoothScrollTo(href);
    setActive(href);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;500;600&display=swap');

        /* ── Tokens ── */
        :root {
          --bg:             #f0f0f8;
          --glass:          rgba(255,255,255,0.78);
          --glass-border:   rgba(0,0,0,0.07);
          --glass-shadow:   0 4px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.95) inset;
          --text:           #0c0c1e;
          --text-dim:       rgba(30,30,70,0.38);
          --text-nav:       rgba(30,30,68,0.62);
          --accent:         #4f6ef7;
          --accent2:        #8b5cf6;
          --accent-rgb:     79,110,247;
          --glow:           rgba(79,110,247,0.14);
          --glow-strong:    rgba(79,110,247,0.28);
          --pill-bg:        rgba(0,0,0,0.038);
          --pill-border:    rgba(0,0,0,0.065);
          --pill-hover:     rgba(0,0,0,0.072);
          --resume-from:    #4f6ef7;
          --resume-to:      #8b5cf6;
          --resume-shadow:  0 4px 20px rgba(79,110,247,0.32);
          --tog-track:      rgba(0,0,0,0.055);
          --tog-border:     rgba(0,0,0,0.08);
          --tog-thumb:      #4f6ef7;
          --divider:        rgba(0,0,0,0.065);
          --mob-bg:         rgba(242,242,250,0.98);
          --mob-hover:      rgba(79,110,247,0.07);
          --progress-h:     2px;
        }

        .dark {
          --bg:             #060610;
          --glass:          rgba(8,8,20,0.75);
          --glass-border:   rgba(255,255,255,0.072);
          --glass-shadow:   0 8px 56px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.045) inset;
          --text:           #e8e8f5;
          --text-dim:       rgba(180,180,220,0.42);
          --text-nav:       rgba(190,190,228,0.65);
          --accent:         #7b94ff;
          --accent2:        #b07dff;
          --accent-rgb:     123,148,255;
          --glow:           rgba(123,148,255,0.18);
          --glow-strong:    rgba(123,148,255,0.35);
          --pill-bg:        rgba(255,255,255,0.048);
          --pill-border:    rgba(255,255,255,0.085);
          --pill-hover:     rgba(255,255,255,0.085);
          --resume-from:    #7b94ff;
          --resume-to:      #b07dff;
          --resume-shadow:  0 4px 24px rgba(123,148,255,0.38);
          --tog-track:      rgba(255,255,255,0.07);
          --tog-border:     rgba(255,255,255,0.10);
          --tog-thumb:      #7b94ff;
          --divider:        rgba(255,255,255,0.07);
          --mob-bg:         rgba(6,6,16,0.97);
          --mob-hover:      rgba(123,148,255,0.08);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'Outfit', sans-serif; transition: background 0.5s ease, color 0.45s ease; }

        /* ── Wrapper ── */
        .nb-wrap {
          position: fixed; inset: 0 0 auto 0; z-index: 300;
          pointer-events: none;
          padding: 16px 24px;
          transition: padding 0.4s cubic-bezier(.4,0,.2,1);
        }
        .nb-wrap.nb-scrolled { padding: 8px 24px; }

        /* ── Glass pill ── */
        .nb-pill {
          pointer-events: all;
          position: relative;
          max-width: 1160px; margin: 0 auto;
          height: 68px; padding: 0 22px;
          display: flex; align-items: center; gap: 10px;
          border-radius: 22px;
          background: transparent;
          transition: background 0.45s, border 0.45s, box-shadow 0.45s, height 0.38s cubic-bezier(.4,0,.2,1), border-radius 0.38s;
          overflow: hidden;
        }
        .nb-wrap.nb-scrolled .nb-pill {
          background: var(--glass);
          backdrop-filter: blur(28px) saturate(1.9);
          -webkit-backdrop-filter: blur(28px) saturate(1.9);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 60px; border-radius: 18px;
        }

        /* ── Scroll progress bar ── */
        .nb-progress {
          position: absolute; bottom: 0; left: 0;
          height: var(--progress-h);
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          border-radius: 0 2px 2px 0;
          pointer-events: none;
          transform-origin: left;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nb-wrap.nb-scrolled .nb-progress { opacity: 1; }

        /* ── Logo ── */
        .logo {
          font-family: 'Syne', sans-serif; font-size: 1.85rem; font-weight: 800;
          letter-spacing: -0.055em; color: var(--text);
          background: none; border: none; cursor: pointer; flex-shrink: 0;
          display: flex; align-items: baseline;
          padding: 0; line-height: 1;
          transition: opacity 0.2s;
        }
        .logo:hover { opacity: 0.8; }
        .logo-hi {
          background: linear-gradient(130deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        /* Animated underline on logo */
        .logo::after {
          content: ''; display: block; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
        }
        .logo:hover::after { transform: scaleX(1); }

        /* ── Center nav ── */
        .nb-center {
          flex: 1; display: flex; justify-content: center; align-items: center; gap: 0;
        }
        @media (max-width: 900px) { .nb-center { display: none; } }

        /* ── NavLink ── */
        .navlink {
          position: relative; background: none; border: none; cursor: pointer;
          padding: 8px 16px; border-radius: 12px;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          transition: background 0.22s;
        }
        .navlink:hover { background: var(--pill-bg); }
        .navlink-label {
          font-family: 'Outfit', sans-serif; font-size: 0.975rem; font-weight: 500;
          letter-spacing: 0.01em; color: var(--text-nav);
          transition: color 0.22s; white-space: nowrap;
        }
        .navlink:hover .navlink-label { color: var(--text); }
        .navlink-active .navlink-label { color: var(--accent) !important; }
        .navlink-bar {
          display: block; height: 2px; width: 100%; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform-origin: center;
        }
        .navlink-glow {
          position: absolute; inset: 0; border-radius: 12px;
          background: radial-gradient(ellipse at center, var(--glow) 0%, transparent 70%);
          z-index: -1;
        }

        /* ── Divider ── */
        .nb-divider { width: 1px; height: 18px; background: var(--divider); flex-shrink: 0; margin: 0 2px; }
        @media (max-width: 900px) { .nb-divider { display: none; } }

        /* ── Right side ── */
        .nb-right { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }

        /* ── Icon button ── */
        .icon-btn {
          background: var(--pill-bg); border: 1px solid var(--pill-border);
          border-radius: 11px; width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--text-nav); text-decoration: none;
          transition: background 0.22s, color 0.22s, box-shadow 0.22s, border-color 0.22s;
          position: relative; overflow: hidden;
        }
        .icon-btn::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at center, var(--glow-strong), transparent 70%);
          opacity: 0; transition: opacity 0.3s;
        }
        .icon-btn:hover { background: var(--pill-hover); color: var(--text); border-color: rgba(var(--accent-rgb),0.25); }
        .icon-btn:hover::before { opacity: 1; }

        /* ── Resume button ── */
        .resume-btn {
          display: flex; align-items: center; gap: 6px;
          height: 40px; padding: 0 18px; border-radius: 12px;
          background: linear-gradient(135deg, var(--resume-from), var(--resume-to));
          color: #fff; text-decoration: none;
          font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 600;
          letter-spacing: 0.02em; white-space: nowrap;
          box-shadow: var(--resume-shadow);
          cursor: pointer; border: none;
          position: relative; overflow: hidden;
          transition: box-shadow 0.25s, filter 0.25s;
        }
        .resume-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .resume-btn:hover { filter: brightness(1.12); box-shadow: 0 6px 30px rgba(var(--accent-rgb), 0.48); }
        .resume-btn:hover::before { opacity: 1; }

        /* ── Toggle ── */
        .toggle-btn { background: none; border: none; cursor: pointer; padding: 0; }
        .toggle-track {
          position: relative; display: flex; align-items: center;
          width: 56px; height: 28px; border-radius: 99px;
          background: var(--tog-track); border: 1px solid var(--tog-border);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s; overflow: hidden;
        }
        .toggle-track:hover { box-shadow: 0 0 0 3px var(--glow); }
        .toggle-thumb {
          position: absolute; width: 22px; height: 22px; border-radius: 50%;
          background: var(--tog-thumb); top: 2px;
          box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.5); z-index: 2;
        }
        .t-icon {
          position: absolute; z-index: 3;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.85); pointer-events: none;
        }
        .t-icon-l { left: 6px; } .t-icon-r { right: 6px; }

        /* ── Hamburger ── */
        .ham-btn {
          display: none; flex-direction: column; align-items: center; justify-content: center; gap: 5px;
          background: var(--pill-bg); border: 1px solid var(--pill-border);
          border-radius: 11px; width: 40px; height: 40px; cursor: pointer; padding: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .ham-btn:hover { background: var(--pill-hover); box-shadow: 0 0 0 3px var(--glow); }
        @media (max-width: 900px) { .ham-btn { display: flex; } }
        .ham-line {
          display: block; width: 17px; height: 1.6px; border-radius: 2px;
          background: var(--text); transform-origin: center;
        }

        /* ── Mobile overlay ── */
        .mob-overlay {
          position: fixed; inset: 0; z-index: 280;
          background: var(--mob-bg);
          backdrop-filter: blur(36px) saturate(1.6);
          -webkit-backdrop-filter: blur(36px) saturate(1.6);
          display: flex; flex-direction: column;
          padding: 88px 28px 44px;
        }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid var(--divider);
          padding: 17px 12px; cursor: pointer;
          font-family: 'Syne', sans-serif; font-size: 1.9rem; font-weight: 700;
          letter-spacing: -0.04em; color: var(--text-dim);
          transition: color 0.2s, background 0.2s, padding-left 0.25s;
          border-radius: 10px; text-align: left; width: 100%;
        }
        .mob-link:hover { color: var(--text); background: var(--mob-hover); padding-left: 20px; }
        .mob-link.mob-active { color: var(--accent); }
        .mob-link-arrow { font-size: 0.9rem; opacity: 0.28; font-weight: 400; font-family: 'Outfit', sans-serif; transition: opacity 0.2s, transform 0.2s; }
        .mob-link:hover .mob-link-arrow { opacity: 0.7; transform: translate(3px, -3px); }
        .mob-foot { margin-top: auto; display: flex; gap: 10px; padding-top: 28px; }
        .mob-foot .resume-btn { flex: 1; justify-content: center; }
      `}</style>

      {/* ── Navbar ── */}
      <motion.div
        className={`nb-wrap${scrolled ? " nb-scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nb-pill">
          <NoiseSVG />

          {/* Scroll progress bar */}
          <motion.div
            className="nb-progress"
            style={{ width: `${scrollProgress * 100}%` }}
          />

          {/* Logo */}
          <motion.button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="logo-hi">A</span>libek<span className="logo-hi">.</span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="nb-center" aria-label="Main navigation">
            {NAV.map(({ label, href }, i) => (
              <NavLink
                key={href} label={label} href={href} index={i}
                active={active === href}
                onClick={() => handleNav(href)}
              />
            ))}
          </nav>

          {/* Right controls */}
          <div className="nb-right">
            <span className="nb-divider" role="separator" />

            <ThemeToggle />

            <motion.a
              href="https://github.com/alibek-developer"
              target="_blank" rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="icon-btn"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <GitHubIcon />
            </motion.a>

            <motion.a
              href="/resume.pdf" download
              className="resume-btn"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.52, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <DownloadIcon />
              Resume
            </motion.a>

            <Hamburger open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </motion.div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-overlay"
            role="dialog" aria-modal="true" aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {NAV.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  className={`mob-link${active === href ? " mob-active" : ""}`}
                  onClick={() => handleNav(href)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: i * 0.05, duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  aria-current={active === href ? "page" : undefined}
                >
                  {label}
                  <span className="mob-link-arrow" aria-hidden="true">↗</span>
                </motion.button>
              ))}
            </nav>

            <div className="mob-foot">
              <motion.a
                href="https://github.com/alibek-developer"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub" className="icon-btn"
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="./public/resume/resume.pdf" download className="resume-btn"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <DownloadIcon /> Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}