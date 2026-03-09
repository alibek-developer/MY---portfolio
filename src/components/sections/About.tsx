import { motion } from 'framer-motion'
import { useState } from 'react'

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

// ─── STAT CELL ────────────────────────────────────────────────
function Stat({ value, label, c, delay }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeUp(delay)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			style={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				padding: '20px 18px',
				borderRadius: 16,
				background: hov ? `${c.accent}18` : 'rgba(255,255,255,0.03)',
				border: `1px solid ${hov ? c.accentRing : c.divider}`,
				transition: 'all 0.26s ease',
				cursor: 'default',
			}}
		>
			<div
				style={{
					fontSize: '2.5rem',
					fontWeight: 900,
					letterSpacing: '-0.05em',
					lineHeight: 1,
					background: c.accentGrad,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
			>
				{value}
			</div>
			<div
				style={{
					fontSize: 10,
					color: c.textMuted,
					fontWeight: 800,
					letterSpacing: '0.12em',
					textTransform: 'uppercase',
				}}
			>
				{label}
			</div>
		</motion.div>
	)
}

// ─── EXPERIENCE STEPPER (compact vertical) ────────────────────
function ExpStepper({ items, c }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
			{items.map((x, i) => {
				const last = i === items.length - 1
				return (
					<motion.div
						key={i}
						{...fadeRight(0.52 + i * 0.08)}
						style={{ display: 'flex', gap: 14, position: 'relative' }}
					>
						{/* spine */}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								width: 20,
								flexShrink: 0,
							}}
						>
							<div
								style={{
									width: 8,
									height: 8,
									borderRadius: '50%',
									marginTop: 3,
									flexShrink: 0,
									background: x.current ? c.accent : c.textMuted,
									boxShadow: x.current ? `0 0 0 3px ${c.accentGlow}` : 'none',
									transition: 'all 0.3s',
								}}
							/>
							{!last && (
								<div
									style={{
										flex: 1,
										width: 1,
										background: c.stepLine,
										marginTop: 4,
										minHeight: 28,
									}}
								/>
							)}
						</div>
						{/* content */}
						<div style={{ paddingBottom: last ? 0 : 20 }}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 8,
									flexWrap: 'wrap',
								}}
							>
								<span
									style={{
										fontSize: 13,
										fontWeight: 700,
										color: c.text,
										letterSpacing: '-0.01em',
									}}
								>
									{x.role}
								</span>
								{x.current && (
									<span
										style={{
											fontSize: 9,
											fontWeight: 800,
											letterSpacing: '0.1em',
											textTransform: 'uppercase',
											background: `${c.accent}18`,
											color: c.accent,
											borderRadius: 100,
											padding: '2px 8px',
											border: `1px solid ${c.accent}35`,
										}}
									>
										Now
									</span>
								)}
							</div>
							<div style={{ fontSize: 11, color: c.textMuted, marginTop: 2 }}>
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

function Pill({ icon, label, c, delay }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeUp(delay)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				gap: 8,
				background: hov ? `${c.accent}18` : c.pillBg,
				border: `1px solid ${hov ? c.accentRing : c.pillBrd}`,
				borderRadius: 100,
				padding: '8px 16px',
				boxShadow: hov ? `0 0 18px ${c.accentGlow}` : 'none',
				transform: hov ? 'translateY(-2px)' : 'translateY(0)',
				transition: 'all 0.26s cubic-bezier(.34,1.3,.64,1)',
				cursor: 'default',
				userSelect: 'none',
				whiteSpace: 'nowrap',
			}}
		>
			<span style={{ fontSize: 16 }}>{icon}</span>
			<span
				style={{
					fontSize: 13,
					fontWeight: 600,
					color: hov ? c.accent : c.textSec,
					transition: 'color 0.2s',
					letterSpacing: '0.02em',
				}}
			>
				{label}
			</span>
		</motion.div>
	)
}

// ─── PHOTO ────────────────────────────────────────────────────
function Photo({ c }) {
	const [hov, setHov] = useState(false)
	return (
		<motion.div
			{...fadeLeft(0.08)}
			onHoverStart={() => setHov(true)}
			onHoverEnd={() => setHov(false)}
			style={{
				position: 'relative',
				borderRadius: 20,
				overflow: 'hidden',
				width: '100%',
				height: '100%',
				minHeight: 520,
				cursor: 'default',
				border: `1px solid ${hov ? c.accentRing : 'rgba(255,255,255,0.08)'}`,
				boxShadow: hov
					? `0 32px 80px rgba(0,0,0,0.45),0 0 0 1px ${c.accent}28`
					: '0 20px 60px rgba(0,0,0,0.30)',
				transition: 'all 0.5s cubic-bezier(.34,1.1,.64,1)',
			}}
		>
			{/* photo — swap src for your own */}
			<img
				src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85'
				alt='Alibek'
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					display: 'block',
					transform: hov ? 'scale(1.05)' : 'scale(1)',
					transition: 'transform 0.6s cubic-bezier(.34,1.1,.64,1)',
				}}
			/>
			{/* gradient overlay */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					pointerEvents: 'none',
					background:
						'linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.10) 40%,transparent 100%)',
				}}
			/>
			{/* available badge */}
			<div
				style={{
					position: 'absolute',
					top: 16,
					left: 16,
					display: 'flex',
					alignItems: 'center',
					gap: 6,
					background: 'rgba(0,0,0,0.48)',
					backdropFilter: 'blur(12px)',
					border: '1px solid rgba(255,255,255,0.12)',
					borderRadius: 100,
					padding: '5px 13px',
				}}
			>
				<span
					style={{
						width: 6,
						height: 6,
						background: '#4ADE80',
						borderRadius: '50%',
						display: 'inline-block',
						boxShadow: '0 0 7px #4ADE80',
						animation: 'pulse 2s ease-in-out infinite',
					}}
				/>
				<span
					style={{
						color: '#4ADE80',
						fontSize: 11,
						fontWeight: 700,
						letterSpacing: '0.06em',
					}}
				>
					Available
				</span>
			</div>
			{/* name tag */}
			<div
				style={{
					position: 'absolute',
					bottom: 20,
					left: 20,
					pointerEvents: 'none',
				}}
			>
				<div
					style={{
						fontSize: 16,
						fontWeight: 800,
						color: '#fff',
						letterSpacing: '-0.02em',
						textShadow: '0 2px 12px rgba(0,0,0,0.5)',
					}}
				>
					Alibek Allaberganov
				</div>
				<div
					style={{
						fontSize: 12,
						color: 'rgba(255,255,255,0.55)',
						marginTop: 3,
						letterSpacing: '0.04em',
					}}
				>
					Frontend Developer · Khorezm
				</div>
			</div>
			<style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.45}}`}</style>
		</motion.div>
	)
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function About() {
	const [dark, setDark] = useState(true)
	const c = dark ? DARK : LIGHT

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
					maxWidth: 1180,
					margin: '0 auto',
					padding: '80px 32px',
					position: 'relative',
					zIndex: 1,
				}}
			>
				{/* Badge */}
				<motion.div {...fadeUp(0)} style={{ marginBottom: 44 }}>
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
						About Me
					</div>
				</motion.div>

				{/* ═══ OUTER GLASS SHELL ═══ */}
				<motion.div
					{...fadeUp(0.06)}
					style={{
						background: c.shell,
						backdropFilter: 'blur(32px) saturate(180%)',
						WebkitBackdropFilter: 'blur(32px) saturate(180%)',
						border: `1px solid ${c.shellBrd}`,
						borderRadius: 28,
						overflow: 'hidden',
						/* subtle top-edge shimmer */
						boxShadow: dark
							? '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)'
							: '0 12px 48px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9)',
					}}
				>
					{/* ─── ROW 1 : Photo | Header+Bio+Stats ─── */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '2fr 3fr',
							minHeight: 380,
						}}
					>
						{/* COL A — full-height photo */}
						<div style={{ padding: 20, borderRight: `1px solid ${c.divider}` }}>
							<Photo c={c} />
						</div>

						{/* COL B — name · bio · stats */}
						<div
							style={{
								padding: '44px 44px 36px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							{/* top: heading + bio */}
							<div>
								<motion.h1
									{...fadeRight(0.16)}
									style={{
										fontSize: 'clamp(2.6rem,4.5vw,4rem)',
										fontWeight: 900,
										letterSpacing: '-0.045em',
										lineHeight: 1.06,
										margin: 0,
										marginBottom: 10,
										background: `linear-gradient(128deg,${c.text} 0%,${c.accent} 160%)`,
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
									}}
								>
									Hi, I'm Alibek.
								</motion.h1>

								<motion.p
									{...fadeRight(0.22)}
									style={{
										fontSize: 13,
										color: c.textMuted,
										letterSpacing: '0.05em',
										margin: 0,
										marginBottom: 28,
										fontWeight: 600,
										textTransform: 'uppercase',
									}}
								>
									Frontend Developer · Khorezm, Uzbekistan
								</motion.p>

								<motion.p
									{...fadeRight(0.28)}
									style={{
										fontSize: 16,
										lineHeight: 1.88,
										color: c.text,
										margin: 0,
										marginBottom: 12,
									}}
								>
									I'm a{' '}
									<strong style={{ color: c.accent, fontWeight: 700 }}>
										passionate frontend developer
									</strong>{' '}
									who loves turning ideas into polished digital experiences —
									clean code, thoughtful UX, and modern JS frameworks.
								</motion.p>

								<motion.p
									{...fadeRight(0.34)}
									style={{
										fontSize: 15,
										lineHeight: 1.82,
										color: c.textSec,
										margin: 0,
									}}
								>
									Deeply into{' '}
									<span style={{ color: c.accent, fontWeight: 600 }}>
										AI-powered interfaces
									</span>{' '}
									and building products that feel natural and delightful.
								</motion.p>
							</div>

							{/* bottom: stats row */}
							<div>
								<motion.div {...fadeUp(0.38)}>
									<div
										style={{
											height: 1,
											background: c.divider,
											margin: '32px 0 24px',
										}}
									/>
									<div
										style={{
											fontSize: 10,
											color: c.textMuted,
											fontWeight: 800,
											letterSpacing: '0.18em',
											textTransform: 'uppercase',
											marginBottom: 16,
										}}
									>
										At a Glance
									</div>
									<div style={{ display: 'flex', gap: 12 }}>
										<Stat value='3+' label='Years Exp' c={c} delay={0.42} />
										<Stat value='20+' label='Projects' c={c} delay={0.47} />
										<Stat value='8+' label='Tech Stack' c={c} delay={0.52} />
									</div>
								</motion.div>
							</div>
						</div>
					</div>

					{/* ─── DIVIDER ─── */}
					<div style={{ height: 1, background: c.divider }} />

					{/* ─── ROW 2 : Experience | Interests ─── */}
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
						{/* LEFT — Experience stepper */}
						<div
							style={{
								padding: '36px 44px',
								borderRight: `1px solid ${c.divider}`,
							}}
						>
							<motion.div {...fadeUp(0.46)}>
								<div
									style={{
										fontSize: 10,
										color: c.textMuted,
										fontWeight: 800,
										letterSpacing: '0.18em',
										textTransform: 'uppercase',
										marginBottom: 24,
									}}
								>
									Experience
								</div>
								<ExpStepper items={exp} c={c} />
							</motion.div>

							{/* CTAs inside left column, below exp */}
							<motion.div
								{...fadeUp(0.72)}
								style={{
									display: 'flex',
									gap: 12,
									flexWrap: 'wrap',
									marginTop: 32,
								}}
							>
								<a
									href='#projects'
									style={{
										display: 'inline-flex',
										alignItems: 'center',
										gap: 8,
										background: c.accentGrad,
										color: '#fff',
										fontWeight: 700,
										fontSize: 14,
										padding: '13px 26px',
										borderRadius: 14,
										textDecoration: 'none',
										boxShadow: `0 8px 28px ${c.accentGlow}`,
										transition: 'opacity 0.2s,transform 0.2s',
									}}
									onMouseEnter={e => {
										e.currentTarget.style.opacity = '0.85'
										e.currentTarget.style.transform = 'translateY(-2px)'
									}}
									onMouseLeave={e => {
										e.currentTarget.style.opacity = '1'
										e.currentTarget.style.transform = 'translateY(0)'
									}}
								>
									View Projects →
								</a>
								<a
									href='/resume.pdf'
									style={{
										display: 'inline-flex',
										alignItems: 'center',
										gap: 8,
										background: dark
											? 'rgba(255,255,255,0.05)'
											: 'rgba(255,255,255,0.85)',
										border: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)'}`,
										backdropFilter: 'blur(14px)',
										color: c.text,
										fontWeight: 600,
										fontSize: 14,
										padding: '12px 22px',
										borderRadius: 14,
										textDecoration: 'none',
										transition: 'all 0.22s ease',
									}}
									onMouseEnter={e => {
										e.currentTarget.style.background = `${c.accent}18`
										e.currentTarget.style.borderColor = `${c.accent}50`
										e.currentTarget.style.color = c.accent
										e.currentTarget.style.transform = 'translateY(-2px)'
									}}
									onMouseLeave={e => {
										e.currentTarget.style.background = dark
											? 'rgba(255,255,255,0.05)'
											: 'rgba(255,255,255,0.85)'
										e.currentTarget.style.borderColor = dark
											? 'rgba(255,255,255,0.09)'
											: 'rgba(0,0,0,0.09)'
										e.currentTarget.style.color = c.text
										e.currentTarget.style.transform = 'translateY(0)'
									}}
								>
									⬇ Resume
								</a>
							</motion.div>
						</div>

						{/* RIGHT — Interests pill grid */}
						<div style={{ padding: '36px 44px' }}>
							<motion.div {...fadeUp(0.5)}>
								<div
									style={{
										fontSize: 10,
										color: c.textMuted,
										fontWeight: 800,
										letterSpacing: '0.18em',
										textTransform: 'uppercase',
										marginBottom: 24,
									}}
								>
									Interests
								</div>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
									{INTERESTS.map((it, i) => (
										<Pill
											key={it.label}
											icon={it.icon}
											label={it.label}
											c={c}
											delay={0.54 + i * 0.05}
										/>
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
