"use client";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

// ─── SPRING / VARIANTS ────────────────────────────────────────
const spring = { type: 'spring', stiffness: 52, damping: 15 }
const fadeUp = (d = 0) => ({
	initial: { opacity: 0, y: 36 },
	animate: { opacity: 1, y: 0 },
	transition: { ...spring, delay: d },
})
const fadeLeft = (d = 0) => ({
	initial: { opacity: 0, x: -40 },
	animate: { opacity: 1, x: 0 },
	transition: { ...spring, delay: d },
})
const fadeRight = (d = 0) => ({
	initial: { opacity: 0, x: 40 },
	animate: { opacity: 1, x: 0 },
	transition: { ...spring, delay: d },
})

// ─── TOKENS ───────────────────────────────────────────────────
const DARK = {
	bg: '#07090F',
	shell: 'rgba(255,255,255,0.035)',
	shellBrd: 'rgba(255,255,255,0.075)',
	divider: 'rgba(255,255,255,0.07)',
	accent: '#7C87F5',
	accentGrad: 'linear-gradient(135deg,#7C87F5 0%,#A78BFA 100%)',
	accentGlow: 'rgba(124,135,245,0.20)',
	accentRing: 'rgba(124,135,245,0.32)',
	text: '#EEF2FF',
	textSec: '#7A85A0',
	textMuted: '#3E4560',
	statNum: '#FFFFFF',
	pillBg: 'rgba(255,255,255,0.05)',
	pillBrd: 'rgba(255,255,255,0.09)',
	stepLine: 'rgba(255,255,255,0.08)',
	blob1: '#0B1730',
	blob2: '#12082E',
}
const LIGHT = {
	bg: '#F2F4FB',
	shell: 'rgba(255,255,255,0.78)',
	shellBrd: 'rgba(255,255,255,1.00)',
	divider: 'rgba(0,0,0,0.07)',
	accent: '#4F46E5',
	accentGrad: 'linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)',
	accentGlow: 'rgba(79,70,229,0.14)',
	accentRing: 'rgba(79,70,229,0.28)',
	text: '#0D111E',
	textSec: '#4B5563',
	textMuted: '#9CA3AF',
	statNum: '#0D111E',
	pillBg: 'rgba(255,255,255,0.85)',
	pillBrd: 'rgba(0,0,0,0.08)',
	stepLine: 'rgba(0,0,0,0.07)',
	blob1: '#C7D2FE',
	blob2: '#DDD6FE',
}

type ThemeColors = typeof DARK;

// ─── BLOBS ────────────────────────────────────────────────────
function Blobs({ c, isDark }: { c: ThemeColors; isDark: boolean }) {	
	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			<div
				className="absolute rounded-full"
				style={{
					width: 900,
					height: 900,
					background: c.blob1,
					filter: 'blur(170px)',
					opacity: 0.55,
					top: '-30%',
					left: '-20%',
					animation: 'b1 24s ease-in-out infinite',
				}}
			/>
			<div
				className="absolute rounded-full"
				style={{
					width: 700,
					height: 700,
					background: c.blob2,
					filter: 'blur(140px)',
					opacity: isDark ? 0.4 : 0.45,
					bottom: '-20%',
					right: '-15%',
					animation: 'b2 30s ease-in-out infinite',
				}}
			/>
			<style>{`
        @keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(55px,45px)}}
        @keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-45px,-38px)}}
      `}</style>
		</div>
	)
}

// ─── STAT CELL ────────────────────────────────────────────────
function Stat({ value, label, c, delay }: { value: string | number; label: string; c: ThemeColors; delay?: number }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeUp(delay)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			className="flex-1 flex flex-col gap-1 p-5 rounded-2xl cursor-default transition-all duration-300"
			style={{
				background: hov ? `${c.accent}18` : 'rgba(255,255,255,0.03)',
				border: `1px solid ${hov ? c.accentRing : c.divider}`,
			}}
		>
			<div
				className="text-4xl font-black tracking-tighter leading-none"
				style={{
					background: c.accentGrad,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				{value}
			</div>
			<div
				className="text-[10px] font-extrabold tracking-widest uppercase"
				style={{ color: c.textMuted }}
			>
				{label}
			</div>
		</motion.div>
	)
}

// ─── EXPERIENCE STEPPER ────────────────────
interface ExpItem {
	period: string;
	role: string;
	place: string;
	current: boolean;
}
function ExpStepper({ items, c }: { items: ExpItem[]; c: ThemeColors }) {
	return (
		<div className="flex flex-col gap-0">
			{items.map((x, i) => {
				const last = i === items.length - 1
				return (
					<motion.div
						key={i}
						{...fadeRight(0.52 + i * 0.08)}
						className="flex gap-4 relative"
					>
						<div className="flex flex-col items-center w-5 flex-shrink-0">
							<div
								className="w-2 h-2 rounded-full mt-1 flex-shrink-0 transition-all duration-300"
								style={{
									background: x.current ? c.accent : c.textMuted,
									boxShadow: x.current ? `0 0 0 3px ${c.accentGlow}` : 'none',
								}}
							/>
							{!last && (
								<div
									className="flex-1 w-px mt-1 min-h-[28px]"
									style={{ background: c.stepLine }}
								/>
							)}
						</div>
						<div className={last ? "" : "pb-5"}>
							<div className="flex items-center gap-2 flex-wrap">
								<span className="text-sm font-bold tracking-tight" style={{ color: c.text }}>
									{x.role}
								</span>
								{x.current && (
									<span
										className="text-[9px] font-extrabold tracking-widest uppercase rounded-full px-2 py-0.5"
										style={{
											background: `${c.accent}18`,
											color: c.accent,
											border: `1px solid ${c.accent}35`,
										}}
									>
										Now
									</span>
								)}
							</div>
							<div className="text-[11px] mt-1" style={{ color: c.textMuted }}>
								{x.place} · {x.period}
							</div>
						</div>
					</motion.div>
				)
			})}
		</div>
	)
}

// ─── INTEREST PILLS ───────────────────────────────────────────
const INTERESTS = [
	{ icon: '🎮', label: 'Gaming' },
	{ icon: '📚', label: 'Reading' },
	{ icon: '🎵', label: 'Music' },
	{ icon: '✈️', label: 'Travel' },
	{ icon: '☕', label: 'Coffee' },
	{ icon: '🤖', label: 'AI / ML' },
	{ icon: '🎨', label: 'Design' },
	{ icon: '🧩', label: 'Puzzles' },
]

function Pill({ icon, label, c, delay }: { icon: string; label: string; c: ThemeColors; delay?: number }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeUp(delay)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			className="inline-flex items-center gap-2 rounded-full px-4 py-2 cursor-default select-none whitespace-nowrap transition-all duration-300"
			style={{
				background: hov ? `${c.accent}18` : c.pillBg,
				border: `1px solid ${hov ? c.accentRing : c.pillBrd}`,
				boxShadow: hov ? `0 0 18px ${c.accentGlow}` : 'none',
				transform: hov ? 'translateY(-2px)' : 'translateY(0)',
			}}
		>
			<span className="text-base">{icon}</span>
			<span
				className="text-sm font-semibold tracking-wide transition-colors duration-200"
				style={{ color: hov ? c.accent : c.textSec }}
			>
				{label}
			</span>
		</motion.div>
	)
}

// ─── PHOTO ────────────────────────────────────────────────────
function Photo({ c }: { c: ThemeColors }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeLeft(0.08)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			className="relative rounded-[20px] overflow-hidden w-full h-full min-h-[420px] cursor-default transition-all duration-500 ease-out shadow-2xl"
			style={{
				border: `1px solid ${hov ? c.accentRing : 'rgba(255,255,255,0.08)'}`,
				boxShadow: hov
					? `0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px ${c.accent}28`
					: '0 20px 60px rgba(0,0,0,0.30)',
			}}
		>
			<img
				src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85'
				alt='Alibek'
				className="w-full h-full object-cover block transition-transform duration-700 ease-out"
				style={{ transform: hov ? 'scale(1.05)' : 'scale(1)' }}
			/>
			<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
			<div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
				<span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ADE80] animate-pulse" />
				<span className="text-green-400 text-[11px] font-bold tracking-wider capitalize">Available</span>
			</div>
			<div className="absolute bottom-5 left-5 pointer-events-none">
				<div className="text-lg font-black text-white tracking-tight drop-shadow-lg">Alibek Allaberganov</div>
				<div className="text-xs text-white/60 mt-0.5 tracking-wide">Frontend Developer · Khorezm</div>
			</div>
		</motion.div>
	)
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function About() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const isDark = resolvedTheme === 'dark';
	const c = isDark ? DARK : LIGHT

	const exp = [
		{
			period: '2024 – Present',
			role: 'Frontend Developer',
			place: 'Freelance',
			current: true,
		},
		{
			period: '2023',
			role: 'React Native Developer',
			place: 'Side Projects',
			current: false,
		},
		{
			period: '2022',
			role: 'Web Developer',
			place: 'Self-taught',
			current: false,
		},
	]

	return (
		<div id="about" className="min-h-screen relative overflow-x-hidden transition-colors duration-700" style={{ background: c.bg }}>
			<Blobs c={c} isDark={isDark} />

			<div className="max-w-[1180px] mx-auto px-8 py-20 relative z-10">
				
				{/* Badge */}
				<motion.div {...fadeUp(0)} className="mb-12">
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-extrabold tracking-[0.22em] uppercase"
						style={{
							background: `${c.accent}14`,
							border: `1px solid ${c.accent}30`,
							color: c.accent,
						}}
					>
						<span className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
						About Me
					</div>
				</motion.div>

				{/* ═══ OUTER GLASS SHELL ═══ */}
				<motion.div
					{...fadeUp(0.06)}
					className="rounded-[28px] overflow-hidden backdrop-blur-[32px] saturate-[180%] shadow-2xl"
					style={{
						background: c.shell,
						border: `1px solid ${c.shellBrd}`,
						boxShadow: isDark
							? '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)'
							: '0 12px 48px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,1)',
					}}
				>
					<div className="grid grid-cols-1 md:grid-cols-5 flex-col md:flex-row min-h-[340px]">
						<div className="md:col-span-2 p-4 border-b md:border-b-0 md:border-r" style={{ borderColor: c.divider }}>
							<Photo c={c} />
						</div>

						<div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
							<div>
								<motion.h1
									{...fadeRight(0.16)}
									className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-4"
									style={{
										background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
									}}
								>
									Hi, I'm Alibek.
								</motion.h1>

								<motion.p
									{...fadeRight(0.22)}
									className="text-xs font-bold tracking-widest uppercase mb-8"
									style={{ color: c.textMuted }}
								>
									Frontend Developer · Khorezm, Uzbekistan
								</motion.p>

								<motion.p
									{...fadeRight(0.28)}
									className="text-base md:text-lg leading-relaxed mb-4"
									style={{ color: c.text }}
								>
									I'm a <strong style={{ color: c.accent, fontWeight: 700 }}>passionate frontend developer</strong> who loves turning ideas into polished digital experiences — clean code, thoughtful UX, and modern JS frameworks.
								</motion.p>

								<motion.p
									{...fadeRight(0.34)}
									className="text-sm md:text-base leading-relaxed"
									style={{ color: c.textSec }}
								>
									Deeply into <span style={{ color: c.accent, fontWeight: 600 }}>AI-powered interfaces</span> and building products that feel natural and delightful.
								</motion.p>
							</div>

							<div className="mt-12">
								<motion.div {...fadeUp(0.38)}>
									<div className="h-px w-full mb-6" style={{ background: c.divider }} />
									<div className="text-[10px] font-extrabold tracking-[0.18em] uppercase mb-4" style={{ color: c.textMuted }}>
										At a Glance
									</div>
									<div className="flex gap-4">
										<Stat value='3+' label='Years Exp' c={c} delay={0.42} />
										<Stat value='20+' label='Projects' c={c} delay={0.47} />
										<Stat value='8+' label='Tech Stack' c={c} delay={0.52} />
									</div>
								</motion.div>
							</div>
						</div>
					</div>

					<div className="h-px w-full" style={{ background: c.divider }} />

					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r" style={{ borderColor: c.divider }}>
							<motion.div {...fadeUp(0.46)}>
								<div className="text-[10px] font-extrabold tracking-[0.18em] uppercase mb-6" style={{ color: c.textMuted }}>
									Experience
								</div>
								<ExpStepper items={exp} c={c} />
							</motion.div>

							<motion.div {...fadeUp(0.72)} className="flex flex-wrap gap-3 mt-10">
								<a
									href='#projects'
									className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-1 shadow-lg shadow-indigo-500/20"
									style={{ background: c.accentGrad, boxShadow: `0 8px 28px ${c.accentGlow}` }}
								>
									View Projects →
								</a>
								<a
									href='/resume.pdf'
									className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border transition-all duration-300 hover:-translate-y-1"
									style={{ 
										background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
										borderColor: isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)',
										color: c.text 
									}}
								>
									⬇ Resume
								</a>
							</motion.div>
						</div>

						<div className="p-8 md:p-12">
							<motion.div {...fadeUp(0.5)}>
								<div className="text-[10px] font-extrabold tracking-[0.18em] uppercase mb-6" style={{ color: c.textMuted }}>
									Interests
								</div>
								<div className="flex flex-wrap gap-3">
									{INTERESTS.map((it, i) => (
										<Pill key={it.label} icon={it.icon} label={it.label} c={c} delay={0.54 + i * 0.05} />
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
