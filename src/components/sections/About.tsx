"use client";

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState, type JSX } from 'react'

const spring = { type: 'spring', stiffness: 52, damping: 15 }
const fadeUp    = (d = 0) => ({ initial: { opacity: 0, y: 36 },  animate: { opacity: 1, y: 0 },  transition: { ...spring, delay: d } })
const fadeLeft  = (d = 0) => ({ initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 },  transition: { ...spring, delay: d } })
const fadeRight = (d = 0) => ({ initial: { opacity: 0, x: 40 },  animate: { opacity: 1, x: 0 },  transition: { ...spring, delay: d } })

// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
  bg: '#06070E',
  card: 'rgba(255,255,255,0.032)',
  cardBrd: 'rgba(255,255,255,0.07)',
  divider: 'rgba(255,255,255,0.065)',
  accent: '#818CF8', accent2: '#A78BFA',
  accentGrad: 'linear-gradient(135deg,#818CF8 0%,#A78BFA 100%)',
  accentGlow: 'rgba(129,140,248,0.18)',
  accentRing: 'rgba(129,140,248,0.30)',
  text: '#F0F0FF', textSec: '#7880A0', textMuted: '#363D5A',
  pillBg: 'rgba(255,255,255,0.045)', pillBrd: 'rgba(255,255,255,0.085)',
  stepLine: 'rgba(255,255,255,0.07)',
  iconBg: 'rgba(129,140,248,0.12)', iconBrd: 'rgba(129,140,248,0.20)',
  blob1: 'rgba(99,102,241,0.12)', blob2: 'rgba(139,92,246,0.10)',
  secBtnBg: 'rgba(255,255,255,0.06)', secBtnBrd: 'rgba(255,255,255,0.10)',
  shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)',
}
const LIGHT = {
  bg: '#F1F3FA',
  card: 'rgba(255,255,255,0.80)',
  cardBrd: 'rgba(255,255,255,0.95)',
  divider: 'rgba(0,0,0,0.065)',
  accent: '#4F46E5', accent2: '#7C3AED',
  accentGrad: 'linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)',
  accentGlow: 'rgba(79,70,229,0.15)',
  accentRing: 'rgba(79,70,229,0.26)',
  text: '#0C0F1E', textSec: '#4B5568', textMuted: '#9CA3AF',
  pillBg: 'rgba(255,255,255,0.88)', pillBrd: 'rgba(0,0,0,0.07)',
  stepLine: 'rgba(0,0,0,0.065)',
  iconBg: 'rgba(79,70,229,0.08)', iconBrd: 'rgba(79,70,229,0.15)',
  blob1: 'rgba(99,102,241,0.08)', blob2: 'rgba(139,92,246,0.07)',
  secBtnBg: 'rgba(255,255,255,0.85)', secBtnBrd: 'rgba(0,0,0,0.09)',
  shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
}
type C = typeof DARK

// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
  Gaming:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4"/><circle cx="16" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="18" cy="13" r="1" fill="currentColor" stroke="none"/></svg>,
  Reading:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  Music:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  Travel:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  Coffee:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M17 8h1a4 4 0 010 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  AI:         () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 14h.01M12 14h.01M16 14h.01"/></svg>,
  Design:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  Puzzles:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Briefcase:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  Code:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Book:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  ArrowRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Download:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Pin:        () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  User:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>,
  Heart:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  Work:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
}

// ─── DATA ─────────────────────────────────────────────────────
const INTERESTS = [
  { Icon: Ico.Gaming,  label: 'Gaming',  color: '#6366F1' },
  { Icon: Ico.Reading, label: 'Reading', color: '#8B5CF6' },
  { Icon: Ico.Music,   label: 'Music',   color: '#EC4899' },
  { Icon: Ico.Travel,  label: 'Travel',  color: '#14B8A6' },
  { Icon: Ico.Coffee,  label: 'Coffee',  color: '#F59E0B' },
  { Icon: Ico.AI,      label: 'AI / ML', color: '#3B82F6' },
  { Icon: Ico.Design,  label: 'Design',  color: '#F43F5E' },
  { Icon: Ico.Puzzles, label: 'Puzzles', color: '#10B981' },
]

// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }: { c: C }) {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`, filter: 'blur(60px)', top: '-20%', left: '-15%', animation: 'b1 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`, filter: 'blur(60px)', bottom: '-20%', right: '-10%', animation: 'b2 28s ease-in-out infinite' }} />
      <style>{`@keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}} @keyframes avail-ping{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,0.5)}70%{box-shadow:0 0 0 7px rgba(74,222,128,0)}}`}</style>
    </div>
  )
}

// ─── HELPERS ──────────────────────────────────────────────────
function SectionLabel({ icon, text, c }: { icon: () => JSX.Element; text: string; c: C }) {
  const Icon = icon
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 999, padding: '6px 14px', background: `${c.accent}12`, border: `1px solid ${c.accent}28`, color: c.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase' as const }}>
      <Icon />{text}
    </div>
  )
}

function Card({ children, c, delay = 0, style = {} }: { children: React.ReactNode; c: C; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div {...fadeUp(delay)} style={{ background: c.card, border: `1px solid ${c.cardBrd}`, borderRadius: 22, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: c.shadow, ...style }}>
      {children}
    </motion.div>
  )
}

// ─── STAT ─────────────────────────────────────────────────────
function Stat({ value, label, c, delay }: { value: string; label: string; c: C; delay?: number }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...fadeUp(delay)} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
      style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '18px 10px', borderRadius: 14, cursor: 'default', background: hov ? c.iconBg : 'transparent', border: `1px solid ${hov ? c.accentRing : c.divider}`, transition: 'all 0.25s' }}>
      <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, background: c.accentGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{value}</span>
      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: c.textMuted }}>{label}</span>
    </motion.div>
  )
}

// ─── EXPERIENCE STEPPER ───────────────────────────────────────
interface ExpItem { period: string; role: string; place: string; current: boolean }
const EXP_ICONS = [Ico.Briefcase, Ico.Code, Ico.Book]

function ExpStepper({ items, c }: { items: ExpItem[]; c: C }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((x, i) => {
        const last = i === items.length - 1
        const ExpIcon = EXP_ICONS[i] ?? Ico.Briefcase
        return (
          <motion.div key={i} {...fadeRight(0.5 + i * 0.08)} style={{ display: 'flex', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 26, flexShrink: 0 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, background: x.current ? c.accentGrad : c.iconBg, border: `1px solid ${x.current ? 'transparent' : c.iconBrd}`, color: x.current ? '#fff' : c.textMuted, boxShadow: x.current ? `0 0 0 5px ${c.accentGlow}` : 'none', transition: 'all 0.3s' }}>
                <ExpIcon />
              </div>
              {!last && <div style={{ flex: 1, width: 1, marginTop: 6, minHeight: 28, background: c.stepLine }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>{x.role}</span>
                {x.current && <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, borderRadius: 999, padding: '2px 8px', background: `${c.accent}18`, color: c.accent, border: `1px solid ${c.accent}35` }}>Now</span>}
              </div>
              <div style={{ fontSize: 11, marginTop: 3, color: c.textMuted }}>{x.place} · {x.period}</div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── INTEREST PILL ────────────────────────────────────────────
function Pill({ Icon, label, color, c, delay }: { Icon: () => JSX.Element; label: string; color: string; c: C; delay?: number }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...fadeUp(delay)} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 999, cursor: 'default', userSelect: 'none' as const, whiteSpace: 'nowrap' as const, background: hov ? `${color}15` : c.pillBg, border: `1px solid ${hov ? `${color}40` : c.pillBrd}`, boxShadow: hov ? `0 4px 20px ${color}20` : 'none', transform: hov ? 'translateY(-2px)' : 'translateY(0)', transition: 'all 0.25s', color: hov ? color : c.textMuted }}>
      <Icon />
      <span style={{ fontSize: 13, fontWeight: 600, color: hov ? color : c.textSec, transition: 'color 0.2s' }}>{label}</span>
    </motion.div>
  )
}

// ─── PHOTO ────────────────────────────────────────────────────
function Photo({ c }: { c: C }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...fadeLeft(0.08)} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
      style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', width: '100%', minHeight: 440, cursor: 'default', border: `1px solid ${hov ? c.accentRing : 'rgba(255,255,255,0.07)'}`, boxShadow: hov ? `0 28px 72px rgba(0,0,0,0.40)` : 'none', transition: 'box-shadow 0.5s, border-color 0.5s' }}>
      <img src="./public/alibek.jpg" alt="Alibek"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease', minHeight: 440 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)', pointerEvents: 'none' }} />
      {/* Badges */}
      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 999, padding: '5px 12px' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', animation: 'avail-ping 2s ease infinite' }} />
        <span style={{ color: '#4ADE80', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>Available</span>
      </div>
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 999, padding: '5px 12px', color: 'rgba(255,255,255,0.65)', fontSize: 11, fontWeight: 600 }}>
        <Ico.Pin />&nbsp;Khorezm, UZ
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: 18 }}>
        <div style={{ color: '#fff', fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em' }}>Alibek Allaberganov</div>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, marginTop: 3 }}>Frontend Developer</div>
      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function About() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const c = isDark ? DARK : LIGHT

  const exp: ExpItem[] = [
    { period: '2024 – Present', role: 'Frontend Developer', place: 'Freelance',     current: true  },
    { period: '2023',           role: 'React Native Dev',   place: 'Side Projects', current: false },
    { period: '2022',           role: 'Web Developer',      place: 'Self-taught',   current: false },
  ]

  return (
    <section id="about" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: c.bg, transition: 'background 0.5s', padding: '80px 0' }}>
      <Blobs c={c} />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 48 }}>
          <SectionLabel icon={Ico.User} text="About Me" c={c} />
        </motion.div>

        {/* TOP ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 20, alignItems: 'stretch', marginBottom: 20 }}>

          {/* Photo */}
          <Card c={c} delay={0.06} style={{ padding: 10 }}>
            <Photo c={c} />
          </Card>

          {/* Intro */}
          <Card c={c} delay={0.10} style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <motion.h2 {...fadeRight(0.16)} style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 1.08, background: `linear-gradient(125deg, ${c.text} 0%, ${c.accent} 170%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 10 }}>
                Hi, I'm Alibek.
              </motion.h2>
              <motion.p {...fadeRight(0.22)} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.textMuted, marginBottom: 28 }}>
                Frontend Developer · Khorezm, Uzbekistan
              </motion.p>
              <motion.p {...fadeRight(0.28)} style={{ fontSize: 16, lineHeight: 1.85, color: c.text, marginBottom: 14 }}>
                I'm a <strong style={{ color: c.accent, fontWeight: 700 }}>passionate frontend developer</strong> who loves turning ideas into polished digital experiences — clean code, thoughtful UX, and modern JS frameworks.
              </motion.p>
              <motion.p {...fadeRight(0.34)} style={{ fontSize: 15, lineHeight: 1.8, color: c.textSec }}>
                Deeply into <span style={{ color: c.accent, fontWeight: 600 }}>AI-powered interfaces</span> and building products that feel natural and delightful to use.
              </motion.p>
            </div>

            <motion.div {...fadeUp(0.40)} style={{ marginTop: 36 }}>
              <div style={{ height: 1, background: c.divider, marginBottom: 22 }} />
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.textMuted, marginBottom: 14 }}>At a Glance</div>
              <div style={{ display: 'flex', gap: 12 }}>
                <Stat value="3+"  label="Years Exp"  c={c} delay={0.44} />
                <Stat value="20+" label="Projects"   c={c} delay={0.48} />
                <Stat value="8+"  label="Tech Stack" c={c} delay={0.52} />
              </div>
            </motion.div>
          </Card>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

          {/* Experience */}
          <Card c={c} delay={0.20} style={{ padding: '36px 40px' }}>
            <motion.div {...fadeUp(0.24)}>
              <div style={{ marginBottom: 26 }}><SectionLabel icon={Ico.Work} text="Experience" c={c} /></div>
              <ExpStepper items={exp} c={c} />

              {/* ── Action buttons ── */}
              <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
                <a href="#projects"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 14, background: c.accentGrad, color: '#fff', fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '0.01em', boxShadow: `0 6px 24px ${c.accentGlow}`, transition: 'filter 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.filter = 'brightness(1.12)'; el.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.filter = ''; el.style.transform = '' }}
                >
                  View Projects <Ico.ArrowRight />
                </a>
                <a href="/resume.pdf" download
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 14, background: c.secBtnBg, border: `1px solid ${c.secBtnBrd}`, color: c.text, fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '0.01em', transition: 'transform 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = '' }}
                >
                  <Ico.Download /> Resume
                </a>
              </div>
            </motion.div>
          </Card>

          {/* Interests */}
          <Card c={c} delay={0.24} style={{ padding: '36px 40px' }}>
            <motion.div {...fadeUp(0.28)}>
              <div style={{ marginBottom: 26 }}><SectionLabel icon={Ico.Heart} text="Interests" c={c} /></div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {INTERESTS.map((it, i) => (
                  <Pill key={it.label} Icon={it.Icon} label={it.label} color={it.color} c={c} delay={0.32 + i * 0.04} />
                ))}
              </div>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  )
}