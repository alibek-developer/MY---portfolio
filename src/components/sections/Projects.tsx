// components/SelectedProjects.tsx
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✅ Section ichida theme toggle YO'Q — faqat headerda bor
// ✅ Dark mode: Tailwind dark: klasslari + mounted guard
// ✅ 3D browser mockup, bento grid, hover tilt/glow, parallax
// ✅ Copy-paste qilishga tayyor, Next.js App Router + next-themes
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"use client";

import { useTheme } from "next-themes"
import { useCallback, useEffect, useRef, useState } from "react"

// ─── LOYIHA MA'LUMOTLARI ─────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "ai-english",
    large: true,
    title: "AI-Powered English Learning Website with Mobile App",
    desc: "An interactive educational platform that uses AI for personalized English lessons, quizzes, progress tracking, and an intelligent tutor. Includes a responsive website and cross-platform mobile app for seamless learning on the go.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Native", "AI Integration"],
    // Browser mockup ekranidagi gradient
    screenGrad: "linear-gradient(135deg,#0EA5E9 0%,#4F46E5 52%,#0f1729 100%)",
    accentDark: "#00FFFF",
    accentLight: "#2563EB",
    glowDark: "rgba(0,255,255,0.4)",
    glowLight: "rgba(37,99,235,0.18)",
    demoBtnDark: "linear-gradient(90deg,#00FFFF,#6366F1)",
    demoBtnLight: "linear-gradient(90deg,#3B82F6,#4F46E5)",
  },
  {
    id: "restaurant",
    large: false,
    title: "Restaurant Management Website",
    desc: "A comprehensive website for restaurant owners to manage menus, reservations, orders, and analytics. Features real-time updates, payment integration, and a user-friendly admin dashboard.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    screenGrad: "linear-gradient(135deg,#7C3AED 0%,#C026D3 52%,#1e1040 100%)",
    accentDark: "#FF00FF",
    accentLight: "#6366F1",
    glowDark: "rgba(255,0,255,0.4)",
    glowLight: "rgba(99,102,241,0.18)",
    demoBtnDark: "linear-gradient(90deg,#A855F7,#FF00FF)",
    demoBtnLight: "linear-gradient(90deg,#6366F1,#8B5CF6)",
  },
  {
    id: "ecommerce",
    large: false,
    title: "E-Commerce Dashboard Website",
    desc: "A sleek admin panel for managing e-commerce products, orders, and analytics with clean architecture and responsive design across all device sizes.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    screenGrad: "linear-gradient(135deg,#0891B2 0%,#06B6D4 52%,#052e3e 100%)",
    accentDark: "#00FFFF",
    accentLight: "#0891B2",
    glowDark: "rgba(0,255,255,0.38)",
    glowLight: "rgba(8,145,178,0.18)",
    demoBtnDark: "linear-gradient(90deg,#00FFFF,#0EA5E9)",
    demoBtnLight: "linear-gradient(90deg,#0891B2,#3B82F6)",
  },
] as const;

// ─── HOOKS ───────────────────────────────────────────────────────────────────

// Scroll qilganda ko'rish maydoniga kirganini aniqlaydi
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

// Sichqoncha holatiga qarab 3D burilish
function useTilt(maxDeg = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTilt({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
      on: true,
    });
  }, []);

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0, on: false }), []);

  const transform = tilt.on
    ? `perspective(1000px) rotateX(${-tilt.y * maxDeg}deg) rotateY(${tilt.x * maxDeg}deg) translateY(-12px) scale(1.03)`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;

  return [ref, transform, tilt.on, onMove, onLeave] as const;
}

// Scroll parallax offset
function useParallax(speed = 0.22) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY * speed);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [speed]);
  return y;
}

// ─── IKONALAR ────────────────────────────────────────────────────────────────

const IconExternal = () => (
  <svg aria-hidden width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconGithub = () => (
  <svg aria-hidden width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

// ─── BROWSER MOCKUP ──────────────────────────────────────────────────────────

function BrowserMockup({
  gradient,
  large,
  isDark,
}: {
  gradient: string;
  large: boolean;
  isDark: boolean;
}) {
  return (
    <div className="mb-7" style={{ perspective: 900 }}>
      <div
        className="rounded-[10px] overflow-hidden"
        style={{
          transform: `rotateX(${large ? 7 : 10}deg) rotateY(${large ? -4 : 5}deg)`,
          transition: "transform 0.9s cubic-bezier(.34,1.3,.64,1)",
          border: isDark ? "1px solid #2a2a2a" : "1px solid #d4d4d4",
          boxShadow: isDark
            ? "0 28px 70px rgba(0,0,0,0.85), 0 0 0 1px #1a1a1a"
            : "0 18px 48px rgba(0,0,0,0.12), 0 0 0 1px #e0e0e0",
        }}
      >
        {/* macOS traffic lights */}
        <div
          className="flex items-center gap-[6px] px-3 py-[9px]"
          style={{
            background: isDark ? "#1c1c1c" : "#ececec",
            borderBottom: isDark ? "1px solid #2a2a2a" : "1px solid #d8d8d8",
          }}
        >
          {(["#FF5F57","#FFBD2E","#28C840"] as const).map((c, i) => (
            <div key={i} style={{
              width: 11, height: 11, borderRadius: "50%",
              background: c, boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
              flexShrink: 0,
            }} />
          ))}
          {/* URL bar */}
          <div
            className="flex-1 ml-2 rounded-[5px] py-[3px] px-2.5 text-[10.5px] overflow-hidden whitespace-nowrap"
            style={{
              background: isDark ? "#0d0d0d" : "#fff",
              border: isDark ? "1px solid #333" : "1px solid #ddd",
              color: isDark ? "#4a4a4a" : "#aaa",
              fontFamily: "monospace",
            }}
          >
            https://project.vercel.app
          </div>
        </div>

        {/* Ekran ichidagi gradient va skeleton UI */}
        <div className="relative overflow-hidden" style={{ height: large ? 196 : 142, background: gradient }}>
          <div className="p-[14px_16px] flex flex-col gap-[7px]">
            <div className="flex gap-2">
              {[72, 48, 60].map((w, i) => (
                <div key={i} className="h-2 rounded" style={{ width: w, background: "rgba(255,255,255,0.22)" }} />
              ))}
            </div>
            {[88, 68, 80, 55].map((w, i) => (
              <div key={i} className="rounded" style={{ height: 5, width: `${w}%`, background: "rgba(255,255,255,0.14)" }} />
            ))}
            <div className="flex gap-2 mt-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 rounded-lg" style={{
                  height: large ? 42 : 32,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }} />
              ))}
            </div>
          </div>
          {/* Oyna yarqilash effekti */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(130deg,rgba(255,255,255,0.07) 0%,transparent 45%)",
          }} />
        </div>
      </div>
    </div>
  );
}

// ─── TECH PILL ────────────────────────────────────────────────────────────────

function TechPill({
  label,
  accentColor,
  isDark,
}: {
  label: string;
  accentColor: string;
  isDark: boolean;
}) {
  return (
    // ✅ Tailwind dark: klasslari ishlatilgan:
    <span
      className={[
        "inline-block rounded-[5px] text-[0.7rem] font-semibold uppercase whitespace-nowrap",
        "px-3 py-[4px]",
        // Light va dark farqi Tailwind dark: klasslari orqali
        "bg-slate-100 border border-slate-300",
        "dark:bg-[#1a1a1a] dark:border-[#2e2e2e]",
      ].join(" ")}
      style={{
        letterSpacing: "0.04em",
        color: accentColor, // accent rang JS orqali (dinamik)
      }}
    >
      {label}
    </span>
  );
}

// ─── TUGMALAR ─────────────────────────────────────────────────────────────────

function DemoBtn({
  gradient,
  glowColor,
  isDark,
}: {
  gradient: string;
  glowColor: string;
  isDark: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="inline-flex items-center gap-[7px] rounded-lg text-[0.82rem] font-semibold text-white"
      style={{
        padding: "9px 20px",
        background: gradient,
        border: "none",
        cursor: "pointer",
        transform: hov ? "translateY(-2px) scale(1.04)" : "none",
        filter: hov ? "brightness(1.12)" : "none",
        boxShadow: hov ? `0 6px 28px ${glowColor}` : "none",
        transition: "all 0.22s ease",
        outline: "none",
        letterSpacing: "0.02em",
      }}
    >
      <IconExternal /> Live Demo
    </button>
  );
}

function CodeBtn({
  borderColor,
  textColor,
}: {
  borderColor: string;
  textColor: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="inline-flex items-center gap-[7px] rounded-lg text-[0.82rem] font-semibold"
      style={{
        padding: "9px 20px",
        background: hov ? `${borderColor}18` : "transparent",
        border: `2px solid ${borderColor}`,
        color: textColor,
        cursor: "pointer",
        transform: hov ? "translateY(-2px)" : "none",
        transition: "all 0.22s ease",
        outline: "none",
        letterSpacing: "0.02em",
      }}
    >
      <IconGithub /> View Code
    </button>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  delay,
  isDark,
}: {
  project: typeof PROJECTS[number];
  delay: number;
  isDark: boolean;
}) {
  const [visRef, visible] = useInView(0.08);
  const [tiltRef, tiltTransform, tiltActive, onMove, onLeave] = useTilt(
    project.large ? 6 : 10
  );

  // Ikki ref ni birlashtirish
  const setRef = (el: HTMLDivElement | null) => {
    (visRef as React.MutableRefObject<HTMLElement | null>).current = el;
    tiltRef.current = el;
  };

  const borderColor = tiltActive
    ? isDark ? project.accentDark : project.accentLight
    : isDark ? "#222222" : "#E2E8F0";

  const boxShadow = tiltActive
    ? isDark
      ? `0 24px 64px rgba(0,0,0,0.75), 0 0 36px ${project.glowDark}`
      : `4px 4px 0 #0F172A, 0 20px 48px rgba(0,0,0,0.1), 0 0 20px ${project.glowLight}`
    : isDark
      ? "0 10px 40px rgba(0,0,0,0.55)"
      : "3px 3px 0 #CBD5E1, 0 10px 30px rgba(0,0,0,0.07)";

  return (
    <article
      ref={setRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label={project.title}
      // ✅ Tailwind dark: klasslari — background, border, text
      className={[
        "relative overflow-hidden rounded-xl",
        // Light mode
        "bg-white",
        // Dark mode — Tailwind dark: klassi
        "dark:bg-gradient-to-br dark:from-[#111111] dark:to-[#1A1A1A]",
      ].join(" ")}
      style={{
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        border: isDark ? `4px solid ${borderColor}` : `2px solid ${borderColor}`,
        willChange: "transform",
        transform: visible ? tiltTransform : "translateY(40px) scale(0.96)",
        opacity: visible ? 1 : 0,
        transition: visible
          ? `transform 0.48s cubic-bezier(.16,1,.3,1) ${delay}s,
             opacity 0.55s ease ${delay}s,
             border-color 0.3s ease,
             box-shadow 0.35s ease`
          : "none",
        boxShadow,
        cursor: "default",
      }}
    >
      {/* Grain texture (faqat dark) */}
      {isDark && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Burchak glow */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[110px] h-[110px] rounded-[0_12px_0_0] pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(circle at top right,${project.glowDark} 0%,transparent 65%)`
            : `radial-gradient(circle at top right,${project.glowLight} 0%,transparent 65%)`,
          opacity: tiltActive ? 1 : 0.3,
          transition: "opacity 0.4s ease",
        }}
      />

      <div className="relative z-10">
        <BrowserMockup gradient={project.screenGrad} large={project.large} isDark={isDark} />

        {/* Sarlavha — Tailwind dark: klassi */}
        <h3
          className={[
            "font-extrabold leading-[1.18] mb-3",
            "text-slate-900 dark:text-white", // ✅ dark: klass
          ].join(" ")}
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: project.large ? "clamp(1.3rem,2.3vw,1.8rem)" : "clamp(1.05rem,1.8vw,1.3rem)",
            letterSpacing: "-0.025em",
          }}
        >
          {project.title}
        </h3>

        {/* Tavsif — Tailwind dark: klassi */}
        <p
          className={[
            "text-[0.95rem] leading-[1.75] mb-5",
            "text-slate-600 dark:text-[#BDBDBD]", // ✅ dark: klass
          ].join(" ")}
        >
          {project.desc}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-[7px] mb-6">
          {project.tech.map((t) => (
            <TechPill
              key={t}
              label={t}
              isDark={isDark}
              accentColor={isDark ? project.accentDark : project.accentLight}
            />
          ))}
        </div>

        {/* Tugmalar */}
        <div className="flex gap-[10px] flex-wrap">
          <DemoBtn
            gradient={isDark ? project.demoBtnDark : project.demoBtnLight}
            glowColor={isDark ? project.glowDark : project.glowLight}
            isDark={isDark}
          />
          <CodeBtn
            borderColor={isDark ? project.accentDark : "#64748B"}
            textColor={isDark ? project.accentDark : "#475569"}
          />
        </div>
      </div>
    </article>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────

function SectionHeader({ isDark }: { isDark: boolean }) {
  const [ref, visible] = useInView(0.05);

  return (
    <header
      ref={ref as React.RefObject<HTMLElement>}
      className="mb-16"
    >
      {/* Eyebrow */}
      <div
        className="inline-flex items-center gap-2 mb-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div
          className="h-[3px] w-7 rounded-sm"
          style={{
            background: isDark
              ? "linear-gradient(90deg,#00FFFF,#FF00FF)"
              : "linear-gradient(90deg,#3B82F6,#6366F1)",
          }}
        />
        <span
          className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-blue-500 dark:text-cyan-400"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Portfolio
        </span>
      </div>

      {/* Sarlavha + kinetic underline */}
      <div
        className="inline-block"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}
      >
        <h2
          // ✅ dark: klass bilan rang o'zgarishi
          className="font-black leading-[1.02] m-0 text-slate-900 dark:text-white"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(2.4rem, 6.5vw, 4.5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Selected Projects
        </h2>
        {/* Kinetic underline — 0% dan 100% gacha 1s ichida o'sadi */}
        <span
          className="block h-[5px] rounded-[3px] mt-[6px] mb-5"
          style={{
            background: isDark
              ? "linear-gradient(90deg,#00FFFF,#FF00FF)"
              : "linear-gradient(90deg,#3B82F6,#6366F1)",
            width: visible ? "100%" : "0%",
            transition: "width 1.1s cubic-bezier(.16,1,.3,1) 0.5s",
          }}
        />
      </div>

      {/* Subtitle */}
      <p
        className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.65] max-w-[800px] mt-4 text-slate-500 dark:text-[#AAAAAA]"
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}
      >
        A few projects I&apos;ve built using modern technologies like React, Next.js,
        TypeScript, Tailwind CSS, Supabase, Firebase, React Native, and AI&nbsp;tools.
      </p>
    </header>
  );
}

// ─── ASOSIY COMPONENT ─────────────────────────────────────────────────────────

export default function SelectedProjects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const parallaxY = useParallax(0.22);

  // ✅ SHART: mounted bo'lgunicha resolvedTheme ni o'qimaymiz
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mount bo'lmasa isDark = false (server render bilan mos)
  const isDark = mounted ? resolvedTheme === "dark" : false;

  // Font injection (bir marta)
  useEffect(() => {
    if (document.getElementById("sp-fonts")) return;
    const l = document.createElement("link");
    l.id = "sp-fonts";
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&family=Instrument+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }, []);

  return (
    // ✅ Tailwind dark: klass — bg o'zgaradi
    <section
      aria-label="Selected Projects"
      className="relative w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0A] transition-colors duration-300"
    >
      {/* Parallax ambient orbs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${-parallaxY * 0.35}px)` }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)"
              : "linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
        {/* Glow orbs */}
        {mounted && (
          <>
            <div className="absolute rounded-full" style={{
              top: "5%", left: "2%", width: 600, height: 600,
              background: isDark
                ? "radial-gradient(circle,rgba(0,255,255,0.032) 0%,transparent 68%)"
                : "radial-gradient(circle,rgba(99,102,241,0.055) 0%,transparent 68%)",
              filter: "blur(50px)",
              transform: "translate(-40%,-40%)",
            }} />
            <div className="absolute rounded-full" style={{
              bottom: "8%", right: "3%", width: 500, height: 500,
              background: isDark
                ? "radial-gradient(circle,rgba(255,0,255,0.028) 0%,transparent 68%)"
                : "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 68%)",
              filter: "blur(50px)",
              transform: "translate(40%,40%)",
            }} />
          </>
        )}
      </div>

      {/* Kontent */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto"
        style={{ padding: "clamp(40px,8vw,80px) clamp(16px,5vw,60px)" }}
      >
        <SectionHeader isDark={isDark} />

        {/* ━━━ BENTO GRID ━━━
            Mobile:  barcha cardlar to'liq kenglik (col-span-12)
            Desktop: Card 1 → 7 ustun (chap), Card 2+3 → 5 ustun (o'ng)
        */}
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* Card 1 — katta, chap */}
          <div className="col-span-12 lg:col-span-7">
            <ProjectCard project={PROJECTS[0]} delay={0} isDark={isDark} />
          </div>

          {/* Card 2 + 3 — kichik, o'ngda stack */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
            <ProjectCard project={PROJECTS[1]} delay={0.15} isDark={isDark} />
            <ProjectCard project={PROJECTS[2]} delay={0.30} isDark={isDark} />
          </div>

        </div>
      </div>
    </section>
  );
}

/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * FRAMER MOTION VARIANTLARI (agar framer-motion ishlatmoqchi bo'lsangiz):
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * import { motion } from "framer-motion";
 *
 * const container = {
 *   hidden: {},
 *   show: { transition: { staggerChildren: 0.15 } },
 * };
 *
 * const card = {
 *   hidden: { opacity: 0, y: 40, scale: 0.97 },
 *   show: {
 *     opacity: 1, y: 0, scale: 1,
 *     transition: { type: "spring", stiffness: 100, damping: 20 },
 *   },
 * };
 *
 * // Ishlatish:
 * <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
 *   {PROJECTS.map(p => (
 *     <motion.div key={p.id} variants={card} whileHover={{ scale: 1.02 }}>
 *       <ProjectCard ... />
 *     </motion.div>
 *   ))}
 * </motion.div>
 */