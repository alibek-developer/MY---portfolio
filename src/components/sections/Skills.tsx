"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'

// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
  bg: '#06070E',
  tile: 'rgba(255,255,255,0.032)',
  tileBrd: 'rgba(255,255,255,0.07)',
  tileHov: 'rgba(255,255,255,0.058)',
  divider: 'rgba(255,255,255,0.065)',
  accent: '#818CF8', accent2: '#A78BFA',
  accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
  text: '#F0F0FF', textSec: '#7880A0', textMuted: '#363D5A',
  catLine: 'rgba(255,255,255,0.07)',
  blob1: 'rgba(99,102,241,0.13)', blob2: 'rgba(139,92,246,0.10)',
  shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)',
}
const LIGHT = {
  bg: '#F1F3FA',
  tile: 'rgba(255,255,255,0.80)',
  tileBrd: 'rgba(255,255,255,0.95)',
  tileHov: 'rgba(255,255,255,0.98)',
  divider: 'rgba(0,0,0,0.065)',
  accent: '#4F46E5', accent2: '#7C3AED',
  accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
  text: '#0C0F1E', textSec: '#4B5568', textMuted: '#9CA3AF',
  catLine: 'rgba(0,0,0,0.065)',
  blob1: 'rgba(99,102,241,0.08)', blob2: 'rgba(139,92,246,0.07)',
  shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
}
type C = typeof DARK

// ─── SVG BRAND ICONS ──────────────────────────────────────────
const BrandIcons: Record<string, (color: string) => JSX.Element> = {
  React: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="2" fill={c}/>
    </svg>
  ),
  'Next.js': (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.7 14.286L8.5 7.5H7v9.007h1.5v-7.3l6.5 8.793H16.5V7.5H15v8.786z"/>
    </svg>
  ),
  TypeScript: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <rect width="24" height="24" rx="3" fill={c}/>
      <path d="M14.1 14.4v1.7c.3.1.6.2.9.2.4 0 .7-.1.9-.2.2-.2.3-.4.3-.7 0-.2-.1-.4-.2-.5-.1-.1-.4-.3-.8-.4l-.5-.2c-.8-.3-1.3-.5-1.6-.9-.3-.3-.5-.8-.5-1.3 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2-.6.6 0 1.2.1 1.8.3v1.6c-.5-.3-1-.4-1.6-.4-.4 0-.7.1-.9.2-.2.1-.3.3-.3.6 0 .2.1.4.3.5.2.1.5.3.9.4l.4.2c.7.3 1.2.5 1.5.9.3.3.5.8.5 1.4 0 .7-.3 1.3-.8 1.7-.5.4-1.3.6-2.2.6-.7 0-1.3-.1-1.9-.4zm-3.6-3.6H8.5V9.5h6.8v1.3h-2.5v6.7h-2.3v-6.7z" fill="white"/>
    </svg>
  ),
  JavaScript: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <rect width="24" height="24" rx="3" fill={c}/>
      <path d="M7.5 17.5c.3.6.8 1 1.5 1 .7 0 1.2-.4 1.2-1.8v-5.7h1.8v5.7c0 2.3-1.3 3.3-3 3.3-1.6 0-2.5-.8-3-1.9l1.5-.6zm5.7-.2c.4.7 1 1.2 2 1.2.9 0 1.4-.4 1.4-1 0-.7-.6-1-1.5-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.6l-1.5.9c-.3-.6-.6-.8-1.2-.8-.6 0-1 .4-1 .8 0 .6.4.9 1.3 1.3l.5.2c1.6.7 2.5 1.4 2.5 3.1 0 1.7-1.3 2.8-3.2 2.8-1.8 0-2.9-.8-3.5-2l1.3-.9z" fill="black"/>
    </svg>
  ),
  HTML5: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS3: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  Tailwind: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/>
    </svg>
  ),
  'Framer Motion': (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  'React Native': (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="4.2" stroke={c} strokeWidth="1.4" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="2" fill={c}/>
    </svg>
  ),
  Supabase: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.01 13.003.74 14.4 1.954 14.4h9.018l.079 8.564c.015.986 1.26 1.41 1.874.637l9.262-11.652c.754-.953.024-2.35-1.19-2.35h-9.018l-.079-8.563z"/>
    </svg>
  ),
  Firebase: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M3.89 15.672L6.255.461A.25.25 0 016.74.288l2.367 4.bonk M3.89 15.672l7.405 4.737M3.89 15.672L.449 9.779a.25.25 0 01.177-.4l2.97-.177M11.295 20.41L6.255.461M11.295 20.41l8.758-5.633-3.613-14.6a.25.25 0 00-.457-.038L11.295 20.41z"/>
      <path d="M3.89 15.67L6.255.46a.25.25 0 01.486.027l2.367 4.82M3.89 15.67l7.406 4.74m0 0l8.758-5.633-3.613-14.6a.252.252 0 00-.457-.038L11.296 20.41M3.89 15.67L.449 9.78a.25.25 0 01.177-.4l2.97-.177 6.66-4.87" fill={c}/>
    </svg>
  ),
  'Node.js': (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M11.998 24a1.494 1.494 0 01-.75-.2l-2.381-1.416c-.356-.2-.182-.27-.065-.31.475-.165.57-.202 1.075-.488a.18.18 0 01.174.013l1.829 1.087a.238.238 0 00.22 0l7.13-4.122a.226.226 0 00.111-.196V6.632a.228.228 0 00-.113-.198l-7.127-4.117a.222.222 0 00-.22 0L4.876 6.434a.228.228 0 00-.114.198v8.232c0 .08.044.156.114.195l1.954 1.128c1.059.53 1.708-.094 1.708-.723V7.496a.207.207 0 01.207-.208h.903a.207.207 0 01.207.208v8.273c0 1.416-.77 2.228-2.112 2.228-.413 0-.738 0-1.645-.447L3.917 16.44a1.502 1.502 0 01-.75-1.299V6.632a1.503 1.503 0 01.75-1.3l7.13-4.124a1.56 1.56 0 011.502 0l7.13 4.123a1.502 1.502 0 01.75 1.3v8.509a1.504 1.504 0 01-.75 1.3l-7.13 4.122a1.508 1.508 0 01-.751.2z"/>
    </svg>
  ),
  Git: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.334l2.658 2.658a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.37-2.581L13.37 8.098v6.284a1.837 1.837 0 11-1.503-.543V7.956a1.837 1.837 0 01-.997-2.404L8.14 2.834 .454 10.52a1.55 1.55 0 000 2.187l10.48 10.477a1.55 1.55 0 002.187 0l10.424-10.424a1.55 1.55 0 000-2.187"/>
    </svg>
  ),
  Figma: (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zm-4.587-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038H8.148zm4.587 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zm6.864-6.499c0 2.476-2.014 4.49-4.49 4.49h-1.471v-8.98h1.471c2.476 0 4.49 2.014 4.49 4.49zm-4.49-3.019h-.001v6.038h.001c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019z"/>
    </svg>
  ),
  'AI Tools': (color) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  ),
  'VS Code': (c) => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={c}>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  ),
}

const getIcon = (name: string, color: string) => {
  const fn = BrandIcons[name]
  return fn ? fn(color) : (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>
    </svg>
  )
}

// ─── SKILL DATA ───────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'frontend', label: 'Frontend',
    skills: [
      { name: 'React',          color: '#61DAFB' },
      { name: 'Next.js',        color: '#AAAAAA' },
      { name: 'TypeScript',     color: '#3178C6' },
      { name: 'JavaScript',     color: '#F7DF1E' },
      { name: 'HTML5',          color: '#E44D26' },
      { name: 'CSS3',           color: '#264DE4' },
      { name: 'Tailwind',       color: '#38BDF8' },
      { name: 'Framer Motion',  color: '#BB4AE8' },
    ],
  },
  {
    id: 'mobile', label: 'Mobile & Backend',
    skills: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Supabase',     color: '#3ECF8E' },
      { name: 'Firebase',     color: '#FFCA28' },
      { name: 'Node.js',      color: '#68A063' },
    ],
  },
  {
    id: 'tools', label: 'Tools & AI',
    skills: [
      { name: 'Git',      color: '#F05032' },
      { name: 'Figma',    color: '#F24E1E' },
      { name: 'AI Tools', color: '#A78BFA' },
      { name: 'VS Code',  color: '#007ACC' },
    ],
  },
]

// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }: { c: C }) {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`, filter: 'blur(60px)', top: '-20%', left: '-15%', animation: 'sb1 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`, filter: 'blur(60px)', bottom: '-20%', right: '-10%', animation: 'sb2 28s ease-in-out infinite' }} />
      <style>{`@keyframes sb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes sb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`}</style>
    </div>
  )
}

// ─── MAGNETIC TILE ────────────────────────────────────────────
interface Skill { name: string; color: string }

function SkillTile({ skill, c, isDark, index, catIndex }: { skill: Skill; c: C; isDark: boolean; index: number; catIndex: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hov, setHov] = useState(false)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 180, damping: 18 })
  const y = useSpring(rawY, { stiffness: 180, damping: 18 })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    rawX.set((e.clientX - (r.left + r.width / 2)) * 0.28)
    rawY.set((e.clientY - (r.top + r.height / 2)) * 0.28)
  }, [rawX, rawY])

  const onLeave = useCallback(() => { rawX.set(0); rawY.set(0); setHov(false) }, [rawX, rawY])

  const delay = catIndex * 0.08 + index * 0.05

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setHov(true)}
      style={{ x, y, position: 'relative' }}
      initial={{ opacity: 0, y: 32, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 52, damping: 15, delay }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: -14, borderRadius: 28, pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(circle, ${skill.color}50 0%, transparent 70%)`,
        filter: 'blur(18px)', opacity: hov ? 1 : 0, transition: 'opacity 0.35s',
      }} />

      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
          padding: '22px 12px 18px',
          borderRadius: 18,
          cursor: 'default',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          background: hov ? c.tileHov : c.tile,
          border: `1px solid ${hov ? skill.color + '55' : c.tileBrd}`,
          boxShadow: hov
            ? `0 18px 48px rgba(0,0,0,${isDark ? 0.45 : 0.12}), 0 0 0 1px ${skill.color}25, inset 0 1px 0 rgba(255,255,255,${isDark ? 0.08 : 0.75})`
            : `0 4px 18px rgba(0,0,0,${isDark ? 0.28 : 0.06}), inset 0 1px 0 rgba(255,255,255,${isDark ? 0.05 : 0.85})`,
          transition: 'background 0.25s, border-color 0.25s, box-shadow 0.3s',
        }}
      >
        {/* Icon container */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? `${skill.color}20` : (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'),
          border: `1px solid ${hov ? skill.color + '40' : (isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)')}`,
          boxShadow: hov ? `0 4px 16px ${skill.color}28` : 'none',
          transition: 'all 0.3s',
          filter: hov ? 'none' : (isDark ? 'grayscale(0.25) brightness(0.9)' : 'grayscale(0.15)'),
        }}>
          {getIcon(skill.name, skill.color)}
        </div>

        {/* Name */}
        <span style={{
          fontSize: 12, fontWeight: 700, letterSpacing: '-0.01em',
          textAlign: 'center', lineHeight: 1.3,
          color: hov ? c.text : c.textSec,
          transition: 'color 0.22s',
        }}>
          {skill.name}
        </span>

        {/* Active dot */}
        <div style={{
          width: 5, height: 5, borderRadius: '50%',
          background: skill.color,
          boxShadow: hov ? `0 0 10px ${skill.color}` : 'none',
          opacity: hov ? 1 : 0,
          transform: hov ? 'scale(1)' : 'scale(0)',
          transition: 'all 0.25s',
        }} />
      </motion.div>
    </motion.div>
  )
}

// ─── CATEGORY ─────────────────────────────────────────────────
function Category({ cat, c, isDark, catIndex }: { cat: typeof CATEGORIES[0]; c: C; isDark: boolean; catIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: catIndex * 0.1 }}
      style={{ marginBottom: catIndex < CATEGORIES.length - 1 ? 72 : 0 }}
    >
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: c.text, flexShrink: 0 }}>
          {cat.label}
        </h2>
        <div style={{ flex: 1, height: 1, background: c.catLine }} />
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.textMuted, flexShrink: 0 }}>
          {cat.skills.length} skills
        </span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 14 }}>
        {cat.skills.map((skill, i) => (
          <SkillTile key={skill.name} skill={skill} c={c} isDark={isDark} index={i} catIndex={catIndex} />
        ))}
      </div>
    </motion.div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function Skills() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const c = isDark ? DARK : LIGHT

  return (
    <section id="skills" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: c.bg, transition: 'background 0.5s', padding: '80px 0' }}>
      <Blobs c={c} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          style={{ marginBottom: 72 }}
        >
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 999, padding: '6px 14px', marginBottom: 20, background: `${c.accent}12`, border: `1px solid ${c.accent}28`, color: c.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Tech Stack
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 1, marginBottom: 18, background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Skills &<br />Technologies
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 480, color: c.textSec }}>
            Tools and technologies I use to craft fast, beautiful, and accessible digital experiences.
          </p>
        </motion.div>

        {/* Categories */}
        {CATEGORIES.map((cat, i) => (
          <Category key={cat.id} cat={cat} c={c} isDark={isDark} catIndex={i} />
        ))}
      </div>
    </section>
  )
}