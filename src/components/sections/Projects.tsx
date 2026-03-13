"use client";

import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"

// ─── TOKENS (same system as Navbar / About / Skills) ──────────
const DARK = {
  bg: '#06070E',
  card: 'rgba(255,255,255,0.032)',
  cardBrd: 'rgba(255,255,255,0.07)',
  cardHov: 'rgba(255,255,255,0.058)',
  divider: 'rgba(255,255,255,0.065)',
  accent: '#818CF8', accent2: '#A78BFA',
  accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
  text: '#F0F0FF', textSec: '#7880A0', textMuted: '#363D5A',
  pillBg: 'rgba(255,255,255,0.05)', pillBrd: 'rgba(255,255,255,0.09)',
  blob1: 'rgba(99,102,241,0.12)', blob2: 'rgba(139,92,246,0.10)',
  grid: 'rgba(255,255,255,0.022)',
  browserBar: '#1a1a1a', browserBrd: '#2a2a2a',
  urlBg: '#0d0d0d', urlBrd: '#333', urlText: '#444',
}
const LIGHT = {
  bg: '#F1F3FA',
  card: 'rgba(255,255,255,0.80)',
  cardBrd: 'rgba(255,255,255,0.95)',
  cardHov: 'rgba(255,255,255,0.98)',
  divider: 'rgba(0,0,0,0.065)',
  accent: '#4F46E5', accent2: '#7C3AED',
  accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
  text: '#0C0F1E', textSec: '#4B5568', textMuted: '#9CA3AF',
  pillBg: 'rgba(255,255,255,0.88)', pillBrd: 'rgba(0,0,0,0.07)',
  blob1: 'rgba(99,102,241,0.07)', blob2: 'rgba(139,92,246,0.06)',
  grid: 'rgba(0,0,0,0.028)',
  browserBar: '#ececec', browserBrd: '#d8d8d8',
  urlBg: '#fff', urlBrd: '#ddd', urlText: '#aaa',
}
type C = typeof DARK

// ─── PROJECTS DATA ────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'ai-english',
    large: true,
    title: 'AI-Powered English Learning Platform',
    desc: 'An interactive educational platform that uses AI for personalized English lessons, quizzes, progress tracking, and an intelligent tutor. Includes a responsive website and cross-platform mobile app.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React Native', 'AI Integration'],
    screenGrad: 'linear-gradient(135deg,#0EA5E9 0%,#4F46E5 52%,#0f1729 100%)',
    accentDark: '#818CF8', accentLight: '#4F46E5',
    glowDark: 'rgba(129,140,248,0.35)', glowLight: 'rgba(79,70,229,0.15)',
    liveUrl: 'https://github.com/alibek-developer/',
    codeUrl: 'https://github.com/alibek-developer/',
  },
  {
    id: 'restaurant',
    large: false,
    title: 'Restaurant Management System',
    desc: 'A comprehensive platform for restaurant owners to manage menus, reservations, orders, and analytics with real-time updates and payment integration.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    screenGrad: 'linear-gradient(135deg,#7C3AED 0%,#C026D3 52%,#1e1040 100%)',
    accentDark: '#A78BFA', accentLight: '#7C3AED',
    glowDark: 'rgba(167,139,250,0.32)', glowLight: 'rgba(124,58,237,0.14)',
    liveUrl: 'https://github.com/alibek-developer/',
    codeUrl: 'https://github.com/alibek-developer/',
  },
  {
    id: 'ecommerce',
    large: false,
    title: 'Restourant mobile app',
    desc: 'A sleek admin panel for managing e-commerce products, orders, and analytics with clean architecture and responsive design across all device sizes.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    screenGrad: 'linear-gradient(135deg,#0891B2 0%,#06B6D4 52%,#052e3e 100%)',
    accentDark: '#67E8F9', accentLight: '#0891B2',
    glowDark: 'rgba(103,232,249,0.28)', glowLight: 'rgba(8,145,178,0.14)',
    liveUrl: 'https://github.com/alibek-developer/',
    codeUrl: 'https://github.com/alibek-developer/',
  },
]

// ─── SVG ICONS ────────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
)
const CodeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const FolderIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
  </svg>
)

// ─── HOOKS ────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible] as const
}

function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false })
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5, on: true })
  }, [])
  const onLeave = useCallback(() => setTilt({ x: 0, y: 0, on: false }), [])
  const transform = tilt.on
    ? `perspective(1000px) rotateX(${-tilt.y * maxDeg}deg) rotateY(${tilt.x * maxDeg}deg) translateY(-8px) scale(1.02)`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`
  return [ref, transform, tilt.on, onMove, onLeave] as const
}

function useParallax(speed = 0.18) {
  const [y, setY] = useState(0)
  useEffect(() => {
    const fn = () => setY(window.scrollY * speed)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [speed])
  return y
}

// ─── BROWSER MOCKUP ───────────────────────────────────────────
function BrowserMockup({ gradient, large, c }: { gradient: string; large: boolean; c: C }) {
  return (
    <div style={{ marginBottom: 24, perspective: 900 }}>
      <div style={{
        borderRadius: 12, overflow: 'hidden',
        transform: `rotateX(${large ? 6 : 9}deg) rotateY(${large ? -3 : 4}deg)`,
        transition: 'transform 0.9s cubic-bezier(.34,1.3,.64,1)',
        border: `1px solid ${c.browserBrd}`,
        boxShadow: c === DARK
          ? '0 24px 60px rgba(0,0,0,0.80), 0 0 0 1px rgba(255,255,255,0.04)'
          : '0 14px 40px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)',
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', background: c.browserBar, borderBottom: `1px solid ${c.browserBrd}` }}>
          {(['#FF5F57','#FFBD2E','#28C840'] as const).map((col, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: col, boxShadow: '0 0 0 1px rgba(0,0,0,0.15)', flexShrink: 0 }} />
          ))}
          <div style={{ flex: 1, marginLeft: 8, borderRadius: 5, padding: '3px 10px', background: c.urlBg, border: `1px solid ${c.urlBrd}`, color: c.urlText, fontFamily: 'monospace', fontSize: 10, overflow: 'hidden', whiteSpace: 'nowrap' }}>
            https://alibek.vercel.app
          </div>
        </div>
        {/* Screen */}
        <div style={{ height: large ? 164 : 116, background: gradient, position: 'relative', overflow: 'hidden', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[72, 48, 60].map((w, i) => <div key={i} style={{ height: 8, width: w, borderRadius: 4, background: 'rgba(255,255,255,0.22)' }} />)}
          </div>
          {[88, 68, 80, 55].map((w, i) => <div key={i} style={{ height: 5, width: `${w}%`, borderRadius: 3, background: 'rgba(255,255,255,0.14)' }} />)}
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            {[1,2,3].map(i => <div key={i} style={{ flex: 1, height: large ? 40 : 28, borderRadius: 8, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }} />)}
          </div>
          {/* Shimmer */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(130deg,rgba(255,255,255,0.07) 0%,transparent 45%)', pointerEvents: 'none' }} />
        </div>
      </div>
    </div>
  )
}

// ─── TECH PILL ────────────────────────────────────────────────
function TechPill({ label, accentColor, c }: { label: string; accentColor: string; c: C }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block', borderRadius: 6,
        padding: '4px 10px', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.05em', textTransform: 'uppercase',
        whiteSpace: 'nowrap', cursor: 'default',
        background: hov ? `${accentColor}18` : c.pillBg,
        border: `1px solid ${hov ? `${accentColor}40` : c.pillBrd}`,
        color: hov ? accentColor : c.textMuted,
        transition: 'all 0.2s',
      }}
    >
      {label}
    </span>
  )
}

// ─── PROJECT CARD ─────────────────────────────────────────────
function ProjectCard({ project, delay, c, isDark }: { project: typeof PROJECTS[number]; delay: number; c: C; isDark: boolean }) {
  const [visRef, visible] = useInView(0.08)
  const [tiltRef, tiltTransform, tiltOn, onMove, onLeave] = useTilt(project.large ? 5 : 8)
  const accentColor = isDark ? project.accentDark : project.accentLight
  const glowColor = isDark ? project.glowDark : project.glowLight

  const setRef = (el: HTMLDivElement | null) => {
    (visRef as React.MutableRefObject<HTMLElement | null>).current = el
    tiltRef.current = el
  }

  return (
    <article
      ref={setRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 22, cursor: 'default',
        padding: 'clamp(20px,2.5vw,32px)',
        background: tiltOn ? c.cardHov : c.card,
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${tiltOn ? accentColor + '40' : c.cardBrd}`,
        boxShadow: tiltOn
          ? `0 24px 64px rgba(0,0,0,${isDark ? 0.6 : 0.14}), 0 0 0 1px ${accentColor}22, inset 0 1px 0 rgba(255,255,255,${isDark ? 0.07 : 0.8})`
          : `0 6px 28px rgba(0,0,0,${isDark ? 0.35 : 0.07}), inset 0 1px 0 rgba(255,255,255,${isDark ? 0.05 : 0.9})`,
        willChange: 'transform',
        transform: visible ? tiltTransform : 'translateY(40px) scale(0.96)',
        opacity: visible ? 1 : 0,
        transition: visible
          ? `transform 0.5s cubic-bezier(.16,1,.3,1) ${delay}s, opacity 0.55s ease ${delay}s, border-color 0.3s, box-shadow 0.35s, background 0.25s`
          : 'none',
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 140, height: 140,
        borderRadius: '0 22px 0 0', pointerEvents: 'none',
        background: `radial-gradient(circle at top right, ${glowColor} 0%, transparent 65%)`,
        opacity: tiltOn ? 1 : 0.25, transition: 'opacity 0.4s',
      }} />

      {/* Noise texture */}
      {isDark && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, borderRadius: 22, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }} />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Browser mockup */}
        <BrowserMockup gradient={project.screenGrad} large={project.large} c={c} />

        {/* Project number + title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
          <span style={{
            fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
            color: accentColor, opacity: 0.6, marginTop: 4, flexShrink: 0,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {String(PROJECTS.indexOf(project) + 1).padStart(2, '0')}
          </span>
          <h3 style={{
            fontSize: project.large ? 'clamp(1.15rem,2vw,1.6rem)' : 'clamp(1rem,1.6vw,1.25rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2,
            color: c.text, margin: 0,
          }}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ fontSize: 14, lineHeight: 1.8, color: c.textSec, margin: '0 0 18px' }}>
          {project.desc}
        </p>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
          {project.tech.map(t => (
            <TechPill key={t} label={t} accentColor={accentColor} c={c} />
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: c.divider, marginBottom: 20 }} />

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <ActionBtn primary href={project.liveUrl} accentColor={accentColor} glowColor={glowColor} isDark={isDark} c={c}>
            <ExternalIcon /> Live Demo
          </ActionBtn>
          <ActionBtn href={project.codeUrl} accentColor={accentColor} glowColor={glowColor} isDark={isDark} c={c}>
            <GithubIcon /> Source Code
          </ActionBtn>
        </div>
      </div>
    </article>
  )
}

// ─── ACTION BUTTON ────────────────────────────────────────────
function ActionBtn({ children, primary, accentColor, glowColor, isDark, c, href }: {
  children: React.ReactNode; primary?: boolean; href: string
  accentColor: string; glowColor: string; isDark: boolean; c: C
}) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '11px 22px', borderRadius: 12,
        fontSize: 13, fontWeight: 700, letterSpacing: '0.01em',
        cursor: 'pointer', outline: 'none', textDecoration: 'none',
        background: primary
          ? (hov ? `linear-gradient(135deg,${accentColor},${isDark ? '#A78BFA' : '#7C3AED'})` : `linear-gradient(135deg,${accentColor},${isDark ? '#9CA3F5' : '#6366F1'})`)
          : (hov ? `${accentColor}18` : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)')),
        color: primary ? '#fff' : c.text,
        border: primary ? '1px solid transparent' : `1px solid ${hov ? accentColor + '40' : c.cardBrd}`,
        boxShadow: primary && hov ? `0 6px 24px ${glowColor}` : 'none',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: 'all 0.22s ease',
      } as React.CSSProperties}
    >
      {children}
    </a>
  )
}

// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }: { c: C }) {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`, filter: 'blur(60px)', top: '-20%', left: '-15%', animation: 'pb1 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`, filter: 'blur(60px)', bottom: '-20%', right: '-10%', animation: 'pb2 28s ease-in-out infinite' }} />
      <style>{`@keyframes pb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes pb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`}</style>
    </div>
  )
}

// ─── SECTION LABEL ────────────────────────────────────────────
function SectionLabel({ c }: { c: C }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 999, padding: '6px 14px', background: `${c.accent}12`, border: `1px solid ${c.accent}28`, color: c.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase' as const }}>
      <FolderIcon />
      Selected Projects
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function Projects() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const parallaxY = useParallax(0.18)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const c = isDark ? DARK : LIGHT

  return (
    <section
      id="projects"
      style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: c.bg, transition: 'background 0.5s', padding: '80px 0' }}
    >
      <Blobs c={c} />

      {/* Grid pattern */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `linear-gradient(${c.grid} 1px,transparent 1px),linear-gradient(90deg,${c.grid} 1px,transparent 1px)`,
        backgroundSize: '52px 52px',
        transform: `translateY(${-parallaxY * 0.3}px)`,
      }} />

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 20 }}>
            <SectionLabel c={c} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem,7vw,5.5rem)', fontWeight: 900,
            letterSpacing: '-0.045em', lineHeight: 1, marginBottom: 6,
            background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Selected<br />Projects
          </h1>

          {/* Animated underline */}
          <div style={{
            height: 4, borderRadius: 2, width: '100%', maxWidth: 360,
            background: c.accentGrad, marginBottom: 20,
          }} />

          <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 560, color: c.textSec }}>
            A few projects I've built using modern technologies like React, Next.js, TypeScript, Supabase, Firebase, React Native, and AI tools.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 20, alignItems: 'start' }}>

          {/* Large card — left 7 cols */}
          <div style={{ gridColumn: 'span 12' }} className="lg-span-7">
            <style>{`@media(min-width:1024px){.lg-span-7{grid-column:span 7!important}.lg-span-5{grid-column:span 5!important}}`}</style>
            <ProjectCard project={PROJECTS[0]} delay={0} c={c} isDark={isDark} />
          </div>

          {/* Right stack — 5 cols */}
          <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: 20 }} className="lg-span-5">
            <ProjectCard project={PROJECTS[1]} delay={0.12} c={c} isDark={isDark} />
            <ProjectCard project={PROJECTS[2]} delay={0.24} c={c} isDark={isDark} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://github.com/alibek-developer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 32px', borderRadius: 14,
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
              border: `1px solid ${c.cardBrd}`,
              color: c.textSec, fontSize: 14, fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.01em',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.color = c.accent; el.style.borderColor = c.accent + '40'; el.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.color = c.textSec; el.style.borderColor = c.cardBrd; el.style.transform = '' }}
          >
            <GithubIcon />
            View all projects on GitHub
            <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  )
}