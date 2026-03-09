import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'

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
function Blobs({ c, dark }) {
	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				overflow: 'hidden',
				pointerEvents: 'none',
				zIndex: 0,
			}}
		>
			<div
				style={{
					position: 'absolute',
					width: 900,
					height: 900,
					borderRadius: '50%',
					background: c.blob1,
					filter: 'blur(170px)',
					opacity: dark ? 0.55 : 0.55,
					top: '-30%',
					left: '-20%',
					animation: 'b1 24s ease-in-out infinite',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					width: 700,
					height: 700,
					borderRadius: '50%',
					background: c.blob2,
					filter: 'blur(140px)',
					opacity: dark ? 0.4 : 0.45,
					bottom: '-20%',
					right: '-15%',
					animation: 'b2 30s ease-in-out infinite',
				}}
			/>
			<style>{`
        @keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(55px,45px)}}
        @keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-45px,-38px)}}
        *{box-sizing:border-box;margin:0;padding:0}
      `}</style>
		</div>
	)
}

// ─── TOGGLE ───────────────────────────────────────────────────
function Toggle({ dark, c, onToggle }) {
	return (
		<motion.button
			onClick={onToggle}
			whileHover={{ scale: 1.04 }}
			whileTap={{ scale: 0.96 }}
			style={{
				position: 'fixed',
				top: 24,
				right: 24,
				zIndex: 300,
				background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
				backdropFilter: 'blur(20px)',
				border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.08)'}`,
				borderRadius: 50,
				padding: '9px 20px',
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				gap: 8,
				color: c.text,
				fontSize: 12,
				fontWeight: 700,
				letterSpacing: '0.05em',
				boxShadow: dark
					? '0 4px 24px rgba(0,0,0,0.5)'
					: '0 4px 20px rgba(0,0,0,0.08)',
			}}
		>
			<span style={{ fontSize: 15 }}>{dark ? '🌙' : '☀️'}</span>
			{dark ? 'Dark' : 'Light'}
		</motion.button>
	)
}

// ─── MAGNETIC TILE ────────────────────────────────────────────
function MagneticTile({ skill, c, dark, index, catIndex }) {
	const ref = useRef(null)
	const [hov, setHov] = useState(false)
	const [iconColor, setIconColor] = useState(false)

	// Magnetic spring values
	const rawX = useMotionValue(0)
	const rawY = useMotionValue(0)
	const x = useSpring(rawX, { stiffness: 180, damping: 18 })
	const y = useSpring(rawY, { stiffness: 180, damping: 18 })

	const handleMouseMove = useCallback(
		e => {
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

	// stagger delay: category offset + item offset
	const delay = catIndex * 0.08 + index * 0.055

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
			style={{ x, y, position: 'relative' }}
			initial={{ opacity: 0, y: 36, scale: 0.94 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: '-40px' }}
			transition={{ type: 'spring', stiffness: 52, damping: 15, delay }}
		>
			{/* Glow bloom behind tile */}
			<div
				style={{
					position: 'absolute',
					inset: -16,
					borderRadius: 28,
					background: `radial-gradient(ellipse at center, ${skill.color}55 0%, transparent 70%)`,
					filter: 'blur(20px)',
					opacity: hov ? 1 : 0,
					transition: 'opacity 0.4s ease',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			{/* Tile itself */}
			<motion.div
				whileHover={{ scale: 1.09 }}
				transition={{ type: 'spring', stiffness: 300, damping: 18 }}
				style={{
					position: 'relative',
					zIndex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 12,
					padding: '28px 18px',
					background: hov ? c.tileHov : c.tile,
					backdropFilter: 'blur(24px) saturate(160%)',
					WebkitBackdropFilter: 'blur(24px) saturate(160%)',
					border: `1px solid ${hov ? skill.color + '55' : c.tileBrd}`,
					borderRadius: 20,
					boxShadow: hov
						? `0 20px 50px rgba(0,0,0,${dark ? 0.45 : 0.12}), 0 0 0 1px ${skill.color}30, inset 0 1px 0 rgba(255,255,255,${dark ? 0.08 : 0.7})`
						: `0 4px 20px rgba(0,0,0,${dark ? 0.3 : 0.06}), inset 0 1px 0 rgba(255,255,255,${dark ? 0.05 : 0.8})`,
					cursor: 'default',
					transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
				}}
			>
				{/* Icon area */}
				<div
					style={{
						width: 52,
						height: 52,
						borderRadius: 15,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						background: hov
							? `linear-gradient(135deg, ${skill.color}30, ${skill.color}15)`
							: dark
								? 'rgba(255,255,255,0.04)'
								: 'rgba(0,0,0,0.04)',
						border: `1px solid ${hov ? skill.color + '40' : 'rgba(255,255,255,0.06)'}`,
						transition: 'all 0.35s ease',
						fontSize: 26,
						boxShadow: hov ? `0 4px 16px ${skill.color}30` : 'none',
					}}
				>
					<span
						style={{
							filter: iconColor
								? 'none'
								: dark
									? 'grayscale(0.3) brightness(1.1)'
									: 'grayscale(0.2)',
							transition: 'filter 0.35s ease',
							lineHeight: 1,
						}}
					>
						{skill.icon}
					</span>
				</div>

				{/* Name */}
				<span
					style={{
						fontSize: 13,
						fontWeight: 700,
						letterSpacing: '0.01em',
						textAlign: 'center',
						lineHeight: 1.3,
						color: hov ? c.text : c.textSec,
						transition: 'color 0.25s',
					}}
				>
					{skill.name}
				</span>

				{/* Brand color dot on hover */}
				<div
					style={{
						width: 4,
						height: 4,
						borderRadius: '50%',
						background: skill.color,
						opacity: hov ? 1 : 0,
						transform: hov ? 'scale(1)' : 'scale(0)',
						transition: 'all 0.25s cubic-bezier(.34,1.5,.64,1)',
						boxShadow: `0 0 8px ${skill.color}`,
					}}
				/>
			</motion.div>
		</motion.div>
	)
}

// ─── CATEGORY SECTION ─────────────────────────────────────────
function Category({ cat, c, dark, catIndex }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-30px' }}
			transition={{
				type: 'spring',
				stiffness: 50,
				damping: 15,
				delay: catIndex * 0.12,
			}}
			style={{ marginBottom: catIndex < CATEGORIES.length - 1 ? 72 : 0 }}
		>
			{/* Category header */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 20,
					marginBottom: 36,
				}}
			>
				<h2
					style={{
						fontSize: 'clamp(2rem,3.5vw,2.8rem)',
						fontWeight: 900,
						letterSpacing: '-0.04em',
						color: c.text,
						margin: 0,
						lineHeight: 1,
					}}
				>
					{cat.label}
				</h2>
				<div style={{ flex: 1, height: 1, background: c.catLine }} />
				<span
					style={{
						fontSize: 11,
						fontWeight: 800,
						letterSpacing: '0.18em',
						textTransform: 'uppercase',
						color: c.textMuted,
						flexShrink: 0,
					}}
				>
					{cat.skills.length} skills
				</span>
			</div>

			{/* Tiles grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
					gap: 16,
				}}
			>
				{cat.skills.map((skill, i) => (
					<MagneticTile
						key={skill.name}
						skill={skill}
						c={c}
						dark={dark}
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
	const [dark, setDark] = useState(true)
	const c = dark ? DARK : LIGHT

	return (
		<div
			style={{
				minHeight: '100vh',
				background: c.bg,
				fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
				transition: 'background 0.7s ease',
				position: 'relative',
				overflowX: 'hidden',
			}}
		>
			<Blobs c={c} dark={dark} />
			<Toggle dark={dark} c={c} onToggle={() => setDark(v => !v)} />

			<div
				style={{
					maxWidth: 1100,
					margin: '0 auto',
					padding: '88px 40px 96px',
					position: 'relative',
					zIndex: 1,
				}}
			>
				{/* ── Section header */}
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 50, damping: 15 }}
					style={{ marginBottom: 72 }}
				>
					{/* eyebrow */}
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 8,
							background: `${c.accent}14`,
							border: `1px solid ${c.accent}30`,
							borderRadius: 100,
							padding: '5px 18px',
							fontSize: 10,
							fontWeight: 800,
							color: c.accent,
							letterSpacing: '0.22em',
							textTransform: 'uppercase',
							marginBottom: 20,
						}}
					>
						<span
							style={{
								width: 5,
								height: 5,
								background: c.accent,
								borderRadius: '50%',
								display: 'inline-block',
							}}
						/>
						Tech Stack
					</div>

					<h1
						style={{
							fontSize: 'clamp(3rem,6vw,5rem)',
							fontWeight: 900,
							letterSpacing: '-0.048em',
							lineHeight: 1.02,
							margin: 0,
							marginBottom: 18,
							background: `linear-gradient(128deg,${c.text} 0%,${c.accent} 160%)`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						Skills &amp; Technologies
					</h1>

					<p
						style={{
							fontSize: 16,
							lineHeight: 1.8,
							color: c.textSec,
							maxWidth: 520,
							margin: 0,
						}}
					>
						Tools and technologies I use to craft fast, beautiful, and
						accessible digital experiences.
					</p>
				</motion.div>

				{/* ── Categories */}
				{CATEGORIES.map((cat, i) => (
					<Category key={cat.id} cat={cat} c={c} dark={dark} catIndex={i} />
				))}
			</div>
		</div>
	)
}
