"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

// ─── THEME TOKENS ─────────────────────────────────────────────
const DARK = {
	bg: '#07090F',
	blob1: '#0B1730',
	blob2: '#12082E',
	shell: 'rgba(255,255,255,0.00)',
	tile: 'rgba(255,255,255,0.035)',
	tileBrd: 'rgba(255,255,255,0.07)',
	tileHov: 'rgba(255,255,255,0.06)',
	divider: 'rgba(255,255,255,0.07)',
	accent: '#7C87F5',
	accentGrad: 'linear-gradient(135deg,#7C87F5,#A78BFA)',
	text: '#EEF2FF',
	textSec: '#7A85A0',
	textMuted: '#3E4560',
	catLine: 'rgba(255,255,255,0.08)',
}
const LIGHT = {
	bg: '#F2F4FB',
	blob1: '#C7D2FE',
	blob2: '#DDD6FE',
	shell: 'rgba(255,255,255,0.00)',
	tile: 'rgba(255,255,255,0.82)',
	tileBrd: 'rgba(255,255,255,1.00)',
	tileHov: 'rgba(255,255,255,0.95)',
	divider: 'rgba(0,0,0,0.07)',
	accent: '#4F46E5',
	accentGrad: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
	text: '#0D111E',
	textSec: '#4B5563',
	textMuted: '#9CA3AF',
	catLine: 'rgba(0,0,0,0.07)',
}

type ThemeColors = typeof DARK;

// ─── SKILL DATA ───────────────────────────────────────────────
const CATEGORIES = [
	{
		id: 'frontend',
		label: 'Frontend',
		skills: [
			{ name: 'React', color: '#61DAFB', icon: '⚛️' },
			{ name: 'Next.js', color: '#AAAAAA', icon: '▲' },
			{ name: 'TypeScript', color: '#3178C6', icon: '𝗧𝗦' },
			{ name: 'JavaScript', color: '#F7DF1E', icon: '𝗝𝗦' },
			{ name: 'HTML5', color: '#E44D26', icon: '🔶' },
			{ name: 'CSS3', color: '#264DE4', icon: '🔷' },
			{ name: 'Tailwind', color: '#38BDF8', icon: '🌊' },
			{ name: 'Framer Motion', color: '#BB4AE8', icon: '✦' },
		],
	},
	{
		id: 'mobile',
		label: 'Mobile & Backend',
		skills: [
			{ name: 'React Native', color: '#61DAFB', icon: '📱' },
			{ name: 'Supabase', color: '#3ECF8E', icon: '⚡' },
			{ name: 'Firebase', color: '#FFCA28', icon: '🔥' },
			{ name: 'Node.js', color: '#68A063', icon: '🟢' },
		],
	},
	{
		id: 'tools',
		label: 'Tools & AI',
		skills: [
			{ name: 'Git', color: '#F05032', icon: '🌿' },
			{ name: 'Figma', color: '#F24E1E', icon: '🎨' },
			{ name: 'AI Tools', color: '#A78BFA', icon: '🤖' },
			{ name: 'VS Code', color: '#007ACC', icon: '💙' },
		],
	},
]

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

// ─── MAGNETIC TILE ────────────────────────────────────────────
interface Skill {
    name: string;
    color: string;
    icon: string;
}

function MagneticTile({ skill, c, isDark, index, catIndex }: { skill: Skill; c: ThemeColors; isDark: boolean; index: number; catIndex: number }) {
	const ref = useRef<HTMLDivElement>(null)
	const [hov, setHov] = useState(false)
	const [iconColor, setIconColor] = useState(false)

	const rawX = useMotionValue(0)
	const rawY = useMotionValue(0)
	const x = useSpring(rawX, { stiffness: 180, damping: 18 })
	const y = useSpring(rawY, { stiffness: 180, damping: 18 })

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			const el = ref.current
			if (!el) return
			const rect = el.getBoundingClientRect()
			const cx = rect.left + rect.width / 2
			const cy = rect.top + rect.height / 2
			rawX.set((e.clientX - cx) * 0.28)
			rawY.set((e.clientY - cy) * 0.28)
		},
		[rawX, rawY],
	)

	const handleMouseLeave = useCallback(() => {
		rawX.set(0)
		rawY.set(0)
		setHov(false)
		setIconColor(false)
	}, [rawX, rawY])

	const handleMouseEnter = useCallback(() => {
		setHov(true)
		setIconColor(true)
	}, [])

	const delay = catIndex * 0.08 + index * 0.055

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			className="relative"
			style={{ x, y }}
			initial={{ opacity: 0, y: 36, scale: 0.94 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{ type: 'spring', stiffness: 52, damping: 15, delay }}
		>
			<div
				className="absolute -inset-4 rounded-[28px] transition-opacity duration-400 pointer-events-none z-0"
				style={{
					background: `radial-gradient(circle at center, ${skill.color}55 0%, transparent 70%)`,
					filter: 'blur(20px)',
					opacity: hov ? 1 : 0,
				}}
			/>

			<motion.div
				whileHover={{ scale: 1.09 }}
				transition={{ type: 'spring', stiffness: 300, damping: 18 }}
				className="relative z-10 flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default transition-all duration-300 backdrop-blur-3xl saturate-[160%]"
				style={{
					background: hov ? c.tileHov : c.tile,
					border: `1px solid ${hov ? skill.color + '55' : c.tileBrd}`,
					boxShadow: hov
						? `0 20px 50px rgba(0,0,0,${isDark ? 0.45 : 0.12}), 0 0 0 1px ${skill.color}30, inset 0 1px 0 rgba(255,255,255,${isDark ? 0.08 : 0.7})`
						: `0 4px 20px rgba(0,0,0,${isDark ? 0.3 : 0.06}), inset 0 1px 0 rgba(255,255,255,${isDark ? 0.05 : 0.8})`,
				}}
			>
				<div
					className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300"
					style={{
						background: hov
							? `linear-gradient(135deg, ${skill.color}30, ${skill.color}15)`
							: isDark
								? 'rgba(255,255,255,0.04)'
								: 'rgba(0,0,0,0.04)',
						border: `1px solid ${hov ? skill.color + '40' : 'rgba(255,255,255,0.06)'}`,
						boxShadow: hov ? `0 4px 16px ${skill.color}30` : 'none',
					}}
				>
					<span
						className="transition-all duration-300 leading-none"
						style={{
							filter: iconColor
								? 'none'
								: isDark
									? 'grayscale(0.3) brightness(1.1)'
									: 'grayscale(0.2)',
						}}
					>
						{skill.icon}
					</span>
				</div>

				<span
					className="text-[13px] font-bold tracking-tight text-center leading-tight transition-colors duration-200"
					style={{ color: hov ? c.text : c.textSec }}
				>
					{skill.name}
				</span>

				<div
					className="w-1 h-1 rounded-full transition-all duration-300"
					style={{
						background: skill.color,
						opacity: hov ? 1 : 0,
						transform: hov ? 'scale(1)' : 'scale(0)',
						boxShadow: `0 0 8px ${skill.color}`,
					}}
				/>
			</motion.div>
		</motion.div>
	)
}

// ─── CATEGORY SECTION ─────────────────────────────────────────
interface CategoryProps {
    id: string;
    label: string;
    skills: Skill[];
}

function Category({ cat, c, isDark, catIndex }: { cat: CategoryProps; c: ThemeColors; isDark: boolean; catIndex: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-30px' }}
			transition={{ type: 'spring', stiffness: 50, damping: 15, delay: catIndex * 0.12 }}
			className={catIndex < CATEGORIES.length - 1 ? "mb-[72px]" : ""}
		>
			<div className="flex items-center gap-5 mb-9">
				<h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none" style={{ color: c.text }}>
					{cat.label}
				</h2>
				<div className="flex-1 h-px" style={{ background: c.catLine }} />
				<span className="text-[11px] font-extrabold tracking-[0.18em] uppercase flex-shrink-0" style={{ color: c.textMuted }}>
					{cat.skills.length} skills
				</span>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{cat.skills.map((skill, i) => (
					<MagneticTile
						key={skill.name}
						skill={skill}
						c={c}
						isDark={isDark}
						index={i}
						catIndex={catIndex}
					/>
				))}
			</div>
		</motion.div>
	)
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function Skills() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const isDark = resolvedTheme === 'dark';
	const c = isDark ? DARK : LIGHT

	return (
		<div id="skills" className="min-h-screen relative overflow-x-hidden transition-colors duration-700" style={{ background: c.bg }}>
			<Blobs c={c} isDark={isDark} />

			<div className="max-w-[1100px] mx-auto px-8 py-24 relative z-10">
				
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 50, damping: 15 }}
					className="mb-[72px]"
				>
					<div
						className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-extrabold tracking-[0.22em] uppercase mb-5"
						style={{
							background: `${c.accent}14`,
							border: `1px solid ${c.accent}30`,
							color: c.accent,
						}}
					>
						<span className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
						Tech Stack
					</div>

					<h1
						className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4"
						style={{
							background: `linear-gradient(128deg, ${c.text} 0%, ${c.accent} 160%)`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						Skills & Technologies
					</h1>

					<p className="text-base leading-relaxed max-w-lg" style={{ color: c.textSec }}>
						Tools and technologies I use to craft fast, beautiful, and accessible digital experiences.
					</p>
				</motion.div>

				{CATEGORIES.map((cat, i) => (
					<Category key={cat.id} cat={cat} c={c} isDark={isDark} catIndex={i} />
				))}
			</div>
		</div>
	)
}
