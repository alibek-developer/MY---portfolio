"use client";

import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const toggle = () => setTheme(isDark ? "light" : "dark");

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
    <motion.button className="ham-btn" onClick={onClick} whileTap={{ scale: 0.88 }} aria-label="Menu">
      <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="ham-line" />
      <motion.span animate={{ opacity: open ? 0 : 1 }} className="ham-line" />
      <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="ham-line" />
    </motion.button>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
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
      {/* Google Fonts consolidated in layout.tsx */}

      <style>{`
        /* ── CSS Tokens ── */
        :root {
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

        .dark {
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

            <ThemeToggle />

            <motion.a
              href="https://github.com/alibek-developer"
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

    </>
  );
}