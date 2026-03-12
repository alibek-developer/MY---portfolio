"use client";

import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// ─── TOKENS (same system as all sections) ─────────────────────
const DARK = {
  bg: '#06070E',
  card: 'rgba(255,255,255,0.032)',
  cardBrd: 'rgba(255,255,255,0.07)',
  cardHov: 'rgba(255,255,255,0.055)',
  divider: 'rgba(255,255,255,0.065)',
  accent: '#818CF8', accent2: '#A78BFA',
  accentGrad: 'linear-gradient(135deg,#818CF8,#A78BFA)',
  text: '#F0F0FF', textSec: '#7880A0', textMuted: '#363D5A',
  inputBg: 'rgba(255,255,255,0.04)',
  inputBrd: 'rgba(255,255,255,0.08)',
  inputFocusBrd: '#818CF8',
  inputFocusRing: 'rgba(129,140,248,0.15)',
  blob1: 'rgba(99,102,241,0.12)', blob2: 'rgba(139,92,246,0.10)',
  shadow: '0 20px 60px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)',
  pillBg: 'rgba(255,255,255,0.05)', pillBrd: 'rgba(255,255,255,0.09)',
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
  inputBg: 'rgba(0,0,0,0.025)',
  inputBrd: 'rgba(0,0,0,0.10)',
  inputFocusBrd: '#4F46E5',
  inputFocusRing: 'rgba(79,70,229,0.12)',
  blob1: 'rgba(99,102,241,0.08)', blob2: 'rgba(139,92,246,0.07)',
  shadow: '0 8px 40px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)',
  pillBg: 'rgba(255,255,255,0.88)', pillBrd: 'rgba(0,0,0,0.07)',
}
type C = typeof DARK

// ─── SVG ICONS ────────────────────────────────────────────────
const Ico = {
  Send: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Spin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.9s linear infinite' }}>
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </svg>
  ),
  GitHub: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Telegram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
}

const SOCIALS = [
  { name: 'GitHub',   Icon: Ico.GitHub,   href: 'https://github.com/alibek-developer', handle: '@alibek-developer', color: '#818CF8' },
  { name: 'LinkedIn', Icon: Ico.LinkedIn, href: 'https://www.linkedin.com/in/alibek-allaberganov-903a1b363',               handle: 'Alibek Allaberganov', color: '#0A66C2' },
  { name: 'Telegram', Icon: Ico.Telegram, href: 'https://t.me/Alibekdew',       handle: '@Alibekdew',  color: '#26A5E4' },
]

// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c }: { c: C }) {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`, filter: 'blur(60px)', top: '-20%', left: '-15%', animation: 'cb1 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`, filter: 'blur(60px)', bottom: '-20%', right: '-10%', animation: 'cb2 28s ease-in-out infinite' }} />
      <style>{`@keyframes cb1{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,40px)}} @keyframes cb2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-35px)}}`}</style>
    </div>
  )
}

// ─── SECTION LABEL ────────────────────────────────────────────
function SectionLabel({ c }: { c: C }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 999, padding: '6px 14px', background: `${c.accent}12`, border: `1px solid ${c.accent}28`, color: c.accent, fontSize: 10, fontWeight: 800, letterSpacing: '0.20em', textTransform: 'uppercase' as const }}>
      <Ico.Mail />
      Contact
    </div>
  )
}

// ─── CARD WRAPPER ─────────────────────────────────────────────
function Card({ children, c, style = {} }: { children: React.ReactNode; c: C; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: c.card, border: `1px solid ${c.cardBrd}`,
      borderRadius: 22, backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)', boxShadow: c.shadow,
      ...style,
    }}>
      {children}
    </div>
  )
}

// ─── SOCIAL LINK ──────────────────────────────────────────────
function SocialLink({ social, c }: { social: typeof SOCIALS[0]; c: C }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      animate={{ x: hov ? 6 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 16px', borderRadius: 14, textDecoration: 'none',
        background: hov ? `${social.color}10` : 'transparent',
        border: `1px solid ${hov ? social.color + '30' : 'transparent'}`,
        transition: 'background 0.22s, border-color 0.22s',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hov ? `${social.color}18` : c.pillBg,
        border: `1px solid ${hov ? social.color + '35' : c.pillBrd}`,
        color: hov ? social.color : c.textMuted,
        transition: 'all 0.22s',
      }}>
        <social.Icon />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.textMuted, marginBottom: 2 }}>
          {social.name}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: hov ? social.color : c.text, transition: 'color 0.2s' }}>
          {social.handle}
        </div>
      </div>

      <div style={{ color: hov ? social.color : c.textMuted, opacity: hov ? 1 : 0.3, transition: 'all 0.2s' }}>
        <Ico.ArrowRight />
      </div>
    </motion.a>
  )
}

// ─── INPUT FIELD ──────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' as const, paddingLeft: 4, opacity: 0.55 }}>
        {label}
      </label>
      {children}
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function Contact() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const c = isDark ? DARK : LIGHT

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await new Promise(r => setTimeout(r, 1800))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '14px 18px',
    borderRadius: 14, fontSize: 14, fontWeight: 500,
    outline: 'none', fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
    background: focused === field ? (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.98)') : c.inputBg,
    border: `1px solid ${focused === field ? c.inputFocusBrd : c.inputBrd}`,
    boxShadow: focused === field ? `0 0 0 3px ${c.inputFocusRing}` : 'none',
    color: c.text,
    transition: 'all 0.22s',
  })

  return (
    <section id="contact" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: c.bg, transition: 'background 0.5s', padding: '80px 0' }}>
      <Blobs c={c} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 52, damping: 15 }}
          style={{ marginBottom: 52 }}
        >
          <div style={{ marginBottom: 20 }}><SectionLabel c={c} /></div>
          <h1 style={{
            fontSize: 'clamp(2.8rem,7vw,5rem)', fontWeight: 900,
            letterSpacing: '-0.045em', lineHeight: 1, marginBottom: 16,
            background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Let's Work<br />Together
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 480, color: c.textSec }}>
            I'm currently available for freelance projects and full-time opportunities. Let's build something amazing!
          </p>
        </motion.div>

        {/* Two column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 20, alignItems: 'start' }}>

          {/* Left — socials card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 52, damping: 15, delay: 0.1 }}
          >
            <Card c={c} style={{ padding: '28px 20px' }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.textMuted, marginBottom: 20, paddingLeft: 4 }}>
                Connect With Me
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {SOCIALS.map(s => <SocialLink key={s.name} social={s} c={c} />)}
              </div>

              <div style={{ height: 1, background: c.divider, margin: '24px 0' }} />

              {/* Availability badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 14, background: c.pillBg, border: `1px solid ${c.pillBrd}` }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 0 3px rgba(34,197,94,0.2)', animation: 'avail 2s ease infinite' }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: c.text }}>Available for work</div>
                  <div style={{ fontSize: 11, color: c.textMuted, marginTop: 1 }}>Response within 24 hours</div>
                </div>
                <style>{`@keyframes avail{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.45)}70%{box-shadow:0 0 0 8px rgba(34,197,94,0)}}`}</style>
              </div>
            </Card>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 52, damping: 15, delay: 0.15 }}
          >
            <Card c={c} style={{ padding: '36px 36px', position: 'relative' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Your Name">
                    <input
                      type="text" required placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle('name') }}
                    />
                  </Field>
                  <Field label="Your Email">
                    <input
                      type="email" required placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle('email') }}
                    />
                  </Field>
                </div>

                <Field label="Your Message">
                  <textarea
                    required rows={5} placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'none' as const, lineHeight: 1.7 }}
                  />
                </Field>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  style={{
                    width: '100%', height: 58, borderRadius: 14,
                    background: status === 'success' ? 'linear-gradient(135deg,#22C55E,#16A34A)' : c.accentGrad,
                    color: '#fff', fontWeight: 800, fontSize: 15,
                    border: 'none', cursor: status !== 'idle' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.8 : 1,
                    boxShadow: `0 6px 28px ${status === 'success' ? 'rgba(34,197,94,0.35)' : 'rgba(129,140,248,0.30)'}`,
                    transition: 'all 0.3s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    letterSpacing: '0.01em',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' && (
                      <motion.div key="loading" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Ico.Spin /> Sending...
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Ico.Check /> Message Sent!
                      </motion.div>
                    )}
                    {status === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Ico.Send /> Send Message
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        Try Again
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <p style={{ fontSize: 12, textAlign: 'center', color: c.textMuted, margin: 0 }}>
                  I'll get back to you within 24 hours 🤝
                </p>
              </form>

              {/* Success overlay */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ position: 'absolute', inset: 0, borderRadius: 22, background: isDark ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)', backdropFilter: 'blur(2px)', pointerEvents: 'none' }}
                  />
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}