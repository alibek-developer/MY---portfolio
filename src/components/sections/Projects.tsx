'use client'

import { useTheme } from '@/components/ThemeProvider'
import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
	{
		title: 'AI-Powered Study Platform',
		description:
			'An educational web app that leverages AI for personalized learning with interactive quizzes, progress tracking, and an intelligent student assistant.',
		tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'AI'],
		demo: '#',
		github: '#',
		label: 'EdTech',
		color: '#6366f1',
		colorLight: '#818cf8',
		gradientFrom: '#eef2ff',
		gradientTo: '#ede9fe',
		gradientFromDark: '#1e1b4b',
		gradientToDark: '#2e1065',
		iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
		image: 'https://via.placeholder.com/400x250?text=AI+Study+Platform', // O'zingizning rasm URL'ingizni qo'ying
	},
	{
		title: 'E-Commerce Dashboard',
		description:
			'A sleek admin panel for managing products, orders, and analytics with clean architecture and responsive design across all device sizes.',
		tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
		demo: '#',
		github: '#',
		label: 'Dashboard',
		color: '#059669',
		colorLight: '#34d399',
		gradientFrom: '#ecfdf5',
		gradientTo: '#d1fae5',
		gradientFromDark: '#022c22',
		gradientToDark: '#064e3b',
		iconPath: 'M3 3h18M3 9h18M3 15h18M3 21h18',
		image: 'https://via.placeholder.com/400x250?text=E-Commerce+Dashboard', // O'zingizning rasm URL'ingizni qo'ying
	},
	{
		title: 'Delivery Mobile App',
		description:
			'Cross-platform mobile application for food delivery with real-time order tracking, rider management, and seamlessly integrated payments.',
		tech: ['React Native', 'TypeScript', 'Supabase'],
		demo: '#',
		github: '#',
		label: 'Mobile',
		color: '#d97706',
		colorLight: '#fbbf24',
		gradientFrom: '#fffbeb',
		gradientTo: '#fef3c7',
		gradientFromDark: '#1c1107',
		gradientToDark: '#292011',
		iconPath:
			'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
		image: 'https://via.placeholder.com/400x250?text=Delivery+App', // O'zingizning rasm URL'ingizni qo'ying
	},
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, duration: 0.8 },
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.7, ease: 'easeOut' },
	},
}

function ProjectCard({
	project,
	theme,
}: {
	project: (typeof projects)[0]
	theme: string
}) {
	const [hovered, setHovered] = useState(false)
	const isDark = theme === 'dark'

	const bgFrom = isDark ? project.gradientFromDark : project.gradientFrom
	const bgTo = isDark ? project.gradientToDark : project.gradientTo

	return (
		<motion.article
			variants={cardVariants}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			className='relative flex flex-col rounded-2xl overflow-hidden shadow-2xl'
			style={{
				background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
				border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}`,
				transition: 'all 0.3s ease',
			}}
			whileHover={{ scale: 1.03, boxShadow: `0 15px 30px ${project.color}60` }}
		>
			{/* Preview Image with Zoom Animation */}
			<motion.div
				className='relative h-48 overflow-hidden'
				animate={hovered ? { scale: 1.1 } : { scale: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				<Image
					src={project.image}
					alt={project.title}
					fill
					className='object-cover'
				/>
				{/* Label Badge */}
				<div
					className='absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-bold'
					style={{
						background: `${project.color}80`,
						color: 'white',
					}}
				>
					{project.label}
				</div>
			</motion.div>

			{/* Body */}
			<div className='p-6 flex flex-col gap-4 flex-1'>
				<h3
					className='text-2xl font-bold leading-tight'
					style={{ color: 'var(--text)' }}
				>
					{project.title}
				</h3>
				<p
					className='text-base leading-relaxed flex-1'
					style={{ color: 'var(--text-secondary)' }}
				>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-2'>
					{project.tech.map(t => (
						<motion.span
							key={t}
							className='px-3 py-1 rounded-full text-sm font-medium'
							style={{
								background: `${project.color}25`,
								color: project.color,
							}}
							whileHover={{ scale: 1.05 }}
						>
							{t}
						</motion.span>
					))}
				</div>
			</div>

			{/* Footer with Buttons */}
			<div className='px-6 pb-6 flex gap-4'>
				<motion.a
					href={project.demo}
					className='flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold'
					style={{ background: project.color }}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
				>
					<ExternalLink size={16} />
					Live Demo
				</motion.a>
				<motion.a
					href={project.github}
					className='flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold'
					style={{
						background: isDark ? 'rgba(255,255,255,0.1)' : '#f0f4f8',
						color: isDark ? '#fff' : '#000',
						border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
					}}
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
				>
					<Github size={16} />
					View Code
				</motion.a>
			</div>

			{/* Hover Overlay */}
			<motion.div
				className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0'
				animate={hovered ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				<motion.div
					className='flex items-center gap-2 text-white text-lg font-bold'
					animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					<ArrowUpRight size={24} />
					Explore Now
				</motion.div>
			</motion.div>
		</motion.article>
	)
}

export default function Projects() {
	const { theme } = useTheme()

	return (
		<section
			id='projects'
			className='py-32 relative overflow-hidden'
			style={{ background: 'var(--bg)' }}
		>
			{/* Decorative Background Elements */}
			<div className='absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-secondary)] opacity-50' />

			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<SectionHeading
						title='Selected Projects'
						subtitle="A few projects I've built using modern technologies like React, Next.js and AI tools."
					/>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					{projects.map(project => (
						<ProjectCard key={project.title} project={project} theme={theme} />
					))}
				</motion.div>
			</div>
		</section>
	)
}
