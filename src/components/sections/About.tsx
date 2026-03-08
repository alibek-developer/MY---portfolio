import { useState } from "react";
import { motion } from "framer-motion";

// ─── SPRING CONFIG ────────────────────────────────────────────
const spring = { type: "spring", stiffness: 55, damping: 16 };
const fadeUp    = (delay=0) => ({ initial:{opacity:0,y:44},    animate:{opacity:1,y:0},  transition:{...spring,delay} });
const fadeLeft  = (delay=0) => ({ initial:{opacity:0,x:-52},   animate:{opacity:1,x:0},  transition:{...spring,delay} });
const fadeRight = (delay=0) => ({ initial:{opacity:0,x:52},    animate:{opacity:1,x:0},  transition:{...spring,delay} });

// ─── THEMES ───────────────────────────────────────────────────
const DARK = {
  bg:"#07090F", blob1:"#0B1730", blob2:"#12082E",
  panel:"rgba(11,14,26,0.72)", border:"rgba(255,255,255,0.07)",
  accent:"#7C87F5", accentGrad:"linear-gradient(135deg,#7C87F5 0%,#A78BFA 100%)",
  glow:"rgba(124,135,245,0.22)", text:"#F1F5FF",
  textSec:"#7A85A0", textMuted:"#3E4560",
  divider:"rgba(255,255,255,0.06)", statNum:"#FFFFFF",
};
const LIGHT = {
  bg:"#F4F6FD", blob1:"#C7D2FE", blob2:"#DDD6FE",
  panel:"rgba(255,255,255,0.80)", border:"rgba(0,0,0,0.07)",
  accent:"#4F46E5", accentGrad:"linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%)",
  glow:"rgba(79,70,229,0.14)", text:"#0D111E",
  textSec:"#6B7280", textMuted:"#9CA3AF",
  divider:"rgba(0,0,0,0.06)", statNum:"#0D111E",
};

// ─── BACKGROUND ───────────────────────────────────────────────
function Bg({ c, isDark }) {
  return (
    <div style={{ position:"fixed",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0 }}>
      <div style={{ position:"absolute",width:900,height:900,borderRadius:"50%",background:c.blob1,filter:"blur(160px)",opacity:isDark?0.55:0.60,top:"-30%",left:"-20%",animation:"b1 24s ease-in-out infinite" }} />
      <div style={{ position:"absolute",width:700,height:700,borderRadius:"50%",background:c.blob2,filter:"blur(130px)",opacity:isDark?0.40:0.50,bottom:"-20%",right:"-15%",animation:"b2 30s ease-in-out infinite" }} />
      <style>{`@keyframes b1{0%,100%{transform:translate(0,0)}50%{transform:translate(60px,50px)}}@keyframes b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-50px,-40px)}}`}</style>
    </div>
  );
}

// ─── IMAGE FRAME ──────────────────────────────────────────────
function ImageFrame({ c }) {
  const [hov,setHov]=useState(false);
  return (
    <motion.div {...fadeLeft(0.10)} onHoverStart={()=>setHov(true)} onHoverEnd={()=>setHov(false)}
      style={{ position:"relative",borderRadius:24,overflow:"hidden",
        border:`1px solid ${hov?c.accent+"55":"rgba(255,255,255,0.10)"}`,
        boxShadow:hov?`0 32px 80px rgba(0,0,0,0.45),0 0 0 1px ${c.accent}30`:"0 24px 64px rgba(0,0,0,0.35)",
        aspectRatio:"3/4",width:"100%",cursor:"default",background:"rgba(255,255,255,0.03)",
        transform:hov?"scale(1.02)":"scale(1)",
        transition:"transform 0.5s cubic-bezier(.34,1.2,.64,1),box-shadow 0.4s,border-color 0.4s",
      }}>
      {/* ← Replace with your own photo URL */}
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85" alt="Alibek"
        style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",
          transform:hov?"scale(1.06)":"scale(1)",
          transition:"transform 0.6s cubic-bezier(.34,1.1,.64,1)" }} />
      <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,0,0,0.62) 0%,rgba(0,0,0,0.08) 45%,transparent 100%)",pointerEvents:"none" }} />
      {/* Available badge */}
      <div style={{ position:"absolute",top:16,left:16,display:"flex",alignItems:"center",gap:6,background:"rgba(0,0,0,0.50)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:100,padding:"5px 12px",pointerEvents:"none" }}>
        <span style={{ width:6,height:6,background:"#4ADE80",borderRadius:"50%",display:"inline-block",boxShadow:"0 0 7px #4ADE80" }} />
        <span style={{ color:"#4ADE80",fontSize:11,fontWeight:700,letterSpacing:"0.06em" }}>Available</span>
      </div>
      {/* Name tag */}
      <div style={{ position:"absolute",bottom:20,left:20,pointerEvents:"none" }}>
        <div style={{ fontSize:16,fontWeight:800,color:"#fff",letterSpacing:"-0.02em",textShadow:"0 2px 12px rgba(0,0,0,0.5)" }}>Alibek Allaberganov</div>
        <div style={{ fontSize:12,color:"rgba(255,255,255,0.60)",marginTop:3,letterSpacing:"0.04em" }}>Frontend Developer</div>
      </div>
    </motion.div>
  );
}

// ─── STAT BLOCK ───────────────────────────────────────────────
function StatBlock({ value,label,c,delay }) {
  const [hov,setHov]=useState(false);
  return (
    <motion.div {...fadeUp(delay)} onHoverStart={()=>setHov(true)} onHoverEnd={()=>setHov(false)}
      style={{ display:"flex",flexDirection:"column",gap:4,padding:"20px 22px",
        background:hov?`${c.accent}18`:"rgba(255,255,255,0.03)",
        border:`1px solid ${hov?c.accent+"40":c.border}`,
        borderRadius:18,transition:"all 0.28s ease",cursor:"default",flex:1 }}>
      <div style={{ fontSize:"2.6rem",fontWeight:900,letterSpacing:"-0.05em",lineHeight:1,
        background:hov?c.accentGrad:"none",WebkitBackgroundClip:hov?"text":"unset",
        WebkitTextFillColor:hov?"transparent":c.statNum,color:c.statNum,transition:"all 0.28s" }}>{value}</div>
      <div style={{ fontSize:11,color:c.textMuted,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase" }}>{label}</div>
    </motion.div>
  );
}

// ─── EXP ROW ──────────────────────────────────────────────────
function ExpRow({ period,role,place,current,c,delay }) {
  return (
    <motion.div {...fadeRight(delay)}
      style={{ display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"15px 0",borderBottom:`1px solid ${c.divider}` }}>
      <div style={{ display:"flex",alignItems:"center",gap:14 }}>
        <div style={{ width:7,height:7,borderRadius:"50%",flexShrink:0,
          background:current?c.accent:c.textMuted,
          boxShadow:current?`0 0 0 3px ${c.accent}28`:"none" }} />
        <div>
          <div style={{ fontSize:14,fontWeight:700,color:c.text,letterSpacing:"-0.01em" }}>{role}</div>
          <div style={{ fontSize:12,color:c.textMuted,marginTop:2 }}>{place}</div>
        </div>
      </div>
      <div style={{ display:"flex",alignItems:"center",gap:8 }}>
        {current&&<div style={{ fontSize:9,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",background:`${c.accent}18`,color:c.accent,borderRadius:100,padding:"3px 9px",border:`1px solid ${c.accent}35` }}>Now</div>}
        <div style={{ fontSize:12,color:c.textMuted,fontWeight:500,whiteSpace:"nowrap" }}>{period}</div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────
export default function About() {
  const [isDark,setIsDark]=useState(true);
  const c = isDark ? DARK : LIGHT;

  const exp=[
    {period:"2024 – Present",role:"Frontend Developer",    place:"Freelance",    current:true },
    {period:"2023",          role:"React Native Developer",place:"Side Projects",current:false},
    {period:"2022",          role:"Web Developer",         place:"Self-taught",  current:false},
  ];

  return (
    <div style={{ minHeight:"100vh",background:c.bg,fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif",transition:"background 0.7s ease",position:"relative",overflowX:"hidden" }}>
      <Bg c={c} isDark={isDark} />

      {/* Toggle */}
      <motion.button onClick={()=>setIsDark(v=>!v)} whileHover={{scale:1.04}} whileTap={{scale:0.96}}
        style={{ position:"fixed",top:24,right:24,zIndex:300,
          background:isDark?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.82)",
          backdropFilter:"blur(20px)",
          border:`1px solid ${isDark?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)"}`,
          borderRadius:50,padding:"9px 20px",cursor:"pointer",
          display:"flex",alignItems:"center",gap:8,
          color:c.text,fontSize:12,fontWeight:700,letterSpacing:"0.05em",
          boxShadow:isDark?"0 4px 24px rgba(0,0,0,0.5)":"0 4px 20px rgba(0,0,0,0.08)" }}>
        <span style={{fontSize:15}}>{isDark?"🌙":"☀️"}</span>
        {isDark?"Dark":"Light"}
      </motion.button>

      {/* Content */}
      <div style={{ maxWidth:1160,margin:"0 auto",padding:"96px 40px 96px",position:"relative",zIndex:1 }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.0)} style={{marginBottom:60}}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:`${c.accent}14`,border:`1px solid ${c.accent}30`,borderRadius:100,padding:"5px 18px",fontSize:10,fontWeight:800,color:c.accent,letterSpacing:"0.22em",textTransform:"uppercase" }}>
            <span style={{width:5,height:5,background:c.accent,borderRadius:"50%",display:"inline-block"}}/>
            About Me
          </div>
        </motion.div>

        {/* 2-col grid */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1.35fr",gap:72,alignItems:"start" }}>

          {/* LEFT */}
          <ImageFrame c={c} />

          {/* RIGHT */}
          <div style={{display:"flex",flexDirection:"column"}}>

            {/* Heading */}
            <motion.h1 {...fadeRight(0.18)}
              style={{ fontSize:"clamp(2.8rem,5.5vw,4.5rem)",fontWeight:900,letterSpacing:"-0.045em",lineHeight:1.04,
                margin:0,marginBottom:12,
                background:`linear-gradient(130deg,${c.text} 0%,${c.accent} 140%)`,
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Hi, I'm Alibek.
            </motion.h1>

            <motion.p {...fadeRight(0.24)}
              style={{fontSize:15,color:c.textMuted,letterSpacing:"0.04em",margin:0,marginBottom:36,fontWeight:500}}>
              Frontend Developer · Khorezm, Uzbekistan
            </motion.p>

            <motion.p {...fadeRight(0.30)}
              style={{fontSize:16.5,lineHeight:1.90,color:c.text,margin:0,marginBottom:12}}>
              I'm a <strong style={{color:c.accent,fontWeight:700}}>passionate frontend developer</strong> who loves turning ideas into polished digital experiences — clean code, thoughtful UX, and modern JavaScript frameworks.
            </motion.p>

            <motion.p {...fadeRight(0.36)}
              style={{fontSize:15.5,lineHeight:1.85,color:c.textSec,margin:0,marginBottom:52}}>
              Deeply interested in <span style={{color:c.accent,fontWeight:600}}>AI-powered interfaces</span> and building products that feel natural and delightful. I believe great software lives at the intersection of performance, accessibility, and beauty.
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeUp(0.40)} style={{marginBottom:52}}>
              <div style={{fontSize:10,color:c.textMuted,fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:16}}>Stats</div>
              <div style={{display:"flex",gap:12}}>
                <StatBlock value="3+"  label="Years Exp"  c={c} delay={0.44}/>
                <StatBlock value="20+" label="Projects"   c={c} delay={0.50}/>
                <StatBlock value="8+"  label="Tech Stack" c={c} delay={0.56}/>
              </div>
            </motion.div>

            <div style={{height:1,background:c.divider,marginBottom:40}}/>

            {/* Experience */}
            <div style={{marginBottom:52}}>
              <motion.div {...fadeRight(0.48)} style={{fontSize:10,color:c.textMuted,fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:8}}>Experience</motion.div>
              {exp.map((x,i)=><ExpRow key={i} {...x} c={c} delay={0.52+i*0.08}/>)}
            </div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.72)} style={{display:"flex",gap:14,flexWrap:"wrap"}}>
              <a href="#projects" style={{ display:"inline-flex",alignItems:"center",gap:10,
                background:c.accentGrad,color:"#fff",fontWeight:700,fontSize:15,letterSpacing:"0.02em",
                padding:"15px 32px",borderRadius:16,textDecoration:"none",
                boxShadow:`0 10px 36px ${c.glow}`,transition:"opacity 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.opacity="0.86";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="translateY(0)"}}>
                View Projects →
              </a>
              <a href="/resume.pdf" style={{ display:"inline-flex",alignItems:"center",gap:10,
                background:isDark?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.85)",
                border:`1px solid ${isDark?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.09)"}`,
                backdropFilter:"blur(16px)",color:c.text,fontWeight:600,fontSize:15,
                padding:"14px 30px",borderRadius:16,textDecoration:"none",
                boxShadow:isDark?"0 4px 24px rgba(0,0,0,0.25)":"0 4px 20px rgba(0,0,0,0.07)",
                transition:"all 0.22s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.background=`${c.accent}18`;e.currentTarget.style.borderColor=`${c.accent}50`;e.currentTarget.style.color=c.accent;e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.background=isDark?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.85)";e.currentTarget.style.borderColor=isDark?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.09)";e.currentTarget.style.color=c.text;e.currentTarget.style.transform="translateY(0)"}}>
                ⬇ Resume
              </a>
            </motion.div>

          </div>
        </div>
      </div>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}@media(max-width:760px){}`}</style>
    </div>
  );
}