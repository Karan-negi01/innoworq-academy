"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quertic ease out for super smooth finish
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

export default function Hero({ onEnrollClick }) {
  const ref = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const tickerItems = [
    "NEXT-GEN LLMs", "PROMPT ENGINEERING", "VAPI VOICE AGENTS", 
    "VIBE CODING", "RAG PIPELINES", "AGENTIC WORKFLOWS", 
    "N8N AUTOMATION", "HEYGEN AVATARS"
  ];

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "120px", // clearance for navbar
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Soft Glows */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "60vh",
          background: "radial-gradient(ellipse at top, rgba(79,70,229,0.07), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        {/* Top specific badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "32px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 20px",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#0a0a0a",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
            }}
          >
            <span style={{ 
              width: "8px", 
              height: "8px", 
              borderRadius: "50%", 
              background: "#10b981",
              boxShadow: "0 0 10px rgba(16,185,129,0.5)"
            }} />
            Enrollment Open • Cohort 04
          </div>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(56px, 9vw, 110px)",
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "#0a0a0a",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "32px",
            maxWidth: "1100px",
          }}
        >
          The Era of the
          <br />
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.02em",
              color: "#4F46E5",
              position: "relative",
              display: "inline-block"
            }}
          >
            AI Generalist.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "#475569",
            lineHeight: 1.6,
            marginBottom: "48px",
            maxWidth: "680px",
            fontWeight: 400,
          }}
        >
          Master LLMs, deep automation, and vibe coding in <strong>20 intensive hours</strong>. We don't teach AI theory; we build the future of workflows.
        </motion.p>

        {/* Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <motion.button
            onClick={onEnrollClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: "18px 40px",
              background: "#0a0a0a",
              color: "white",
              border: "1px solid #000",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.2px",
            }}
            onHoverStart={(e) => {
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)";
            }}
            onHoverEnd={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
            }}
          >
            Begin the Program
          </motion.button>
          
          <motion.a
            href="#curriculum"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: "18px 40px",
              background: "white",
              color: "#0a0a0a",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Explore Curriculum
          </motion.a>
        </motion.div>

        {/* Floating Mini Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "80px",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "24px",
            padding: "24px 40px",
            display: "flex",
            gap: "60px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
          className="hero-stats"
        >
          {[
             { label: "CONTACT HOURS", value: 20, suffix: "+" },
             { label: "MODULES", value: 9, suffix: "" },
             { label: "PLACEMENT RATE", value: 94, suffix: "%" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "left" }}>
              <div style={{ 
                fontSize: "11px", 
                fontWeight: 600, 
                color: "#64748b", 
                letterSpacing: "1px",
                marginBottom: "4px"
              }}>
                {stat.label}
              </div>
              <div style={{ 
                fontSize: "32px", 
                fontWeight: 800, 
                fontFamily: "'Inter', sans-serif",
                color: "#0a0a0a",
                lineHeight: 1
              }}>
                <Counter value={stat.value} animate={statsVisible} />
                <span style={{ color: "#4F46E5" }}>{stat.suffix}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Bottom Ticker */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: 0, 
          left: 0, 
          right: 0,
          background: "linear-gradient(to right, #4F46E5, #7C3AED)",
          padding: "16px 0",
          overflow: "hidden",
          display: "flex",
          whiteSpace: "nowrap"
        }}
      >
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ ease: "linear", duration: 30, repeat: Infinity }}
           style={{ display: "flex", width: "max-content" }}
        >
          {/* Double the array for seamless looping */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div 
              key={i} 
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.9)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {item}
              <span style={{ margin: "0 30px", opacity: 0.5 }}>✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats {
            gap: 30px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

// Child component so we only re-render the number, not the whole hero
function Counter({ value, animate }) {
  const count = useCountUp(value, 2500, animate);
  return <>{count}</>;
}

