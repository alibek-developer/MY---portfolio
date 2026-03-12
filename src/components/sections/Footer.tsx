"use client";

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
  bg: '#06070E',
  brd: 'rgba(255,255,255,0.065)',
  accent: '#818CF8', accent2: '#A78BFA',
  accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
  text: '#F0F0FF', textSec: '#7880A0', textMuted: '#363D5A',
  pillBg: 'rgba(255,255,255,0.045)', pillBrd: 'rgba(255,255,255,0.08)',
  pillHov: 'rgba(255,255,255,0.075)',
}
const LIGHT = {
  bg: '#F1F3FA',
  brd: 'rgba(0,0,0,0.065)',
  accent: '#4F46E5', accent2: '#7C3AED',
  accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
  text: '#0C0F1E', textSec: '#4B5568', textMuted: '#9CA3AF',
  pillBg: 'rgba(255,255,255,0.85)', pillBrd: 'rgba(0,0,0,0.08)',
  pillHov: 'rgba(255,255,255,0.98)',
}
type C = typeof DARK

// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
  GitHub: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Telegram: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  Heart: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#F43F5E" stroke="#F43F5E" strokeWidth="1">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  ArrowUp: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  ),
}

const SOCIALS = [
  { name: 'GitHub',   Icon: Ico.GitHub,   href: 'https://github.com/alibek-developer', color: '#818CF8' },
  { name: 'LinkedIn', Icon: Ico.LinkedIn, href: 'https://www.linkedin.com/in/alibek-allaberganov-903a1b363',               color: '#0A66C2' },
  { name: 'Telegram', Icon: Ico.Telegram, href: 'https://t.me/Alibekdew',       color: '#26A5E4' },
]

// ─── SOCIAL ICON BTN ──────────────────────────────────────────
function SocialBtn({ social, c }: { social: typeof SOCIALS[0]; c: C }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: 42, height: 42, borderRadius: 12, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hov ? `${social.color}15` : c.pillBg,
        border: `1px solid ${hov ? social.color + '35' : c.pillBrd}`,
        color: hov ? social.color : c.textMuted,
        textDecoration: 'none',
        transition: 'background 0.22s, border-color 0.22s, color 0.22s',
        boxShadow: hov ? `0 4px 16px ${social.color}25` : 'none',
      }}
    >
      <social.Icon />
    </motion.a>
  )
}

// ─── BACK TO TOP ──────────────────────────────────────────────
function BackToTop({ c }: { c: C }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '9px 18px', borderRadius: 999,
        background: hov ? c.pillHov : c.pillBg,
        border: `1px solid ${hov ? c.accent + '35' : c.pillBrd}`,
        color: hov ? c.accent : c.textMuted,
        fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
        cursor: 'pointer', outline: 'none',
        transition: 'all 0.22s',
      }}
    >
      <Ico.ArrowUp />
      Back to top
    </motion.button>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const c = isDark ? DARK : LIGHT

  return (
    <footer style={{ background: c.bg, borderTop: `1px solid ${c.brd}`, position: 'relative', transition: 'background 0.5s' }}>

      {/* Gradient divider line */}
      <div style={{
        position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: 1,
        background: `linear-gradient(90deg, transparent, ${c.accent}50, transparent)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '32px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>

        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'baseline', fontFamily: "'Syne', sans-serif", fontSize: '1.55rem', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1 }}
        >
          <span style={{ background: c.accentGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A</span>
          <span style={{ color: c.text }}>libek</span>
          <span style={{ background: c.accentGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
        </motion.button>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: c.textMuted, margin: 0 }}
        >
          © {new Date().getFullYear()} Alibek Allaberganov · Made with
          <motion.span
            animate={{ scale: [1, 1.28, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.2 }}
            style={{ display: 'inline-flex' }}
          >
            <Ico.Heart />
          </motion.span>
        </motion.p>

        {/* Right side — socials + back to top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {SOCIALS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <SocialBtn social={s} c={c} />
            </motion.div>
          ))}

          <div style={{ width: 1, height: 20, background: c.brd, margin: '0 4px' }} />

          <BackToTop c={c} />
        </div>
      </div>
    </footer>
  )
}