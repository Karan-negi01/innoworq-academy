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
      const eased = 1 - Math.pow(1 - progress, 4); 
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
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Cinematic Video */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.08, // Very subtle to keep it premium and not distracting
            filter: "contrast(1.2) brightness(0.8)"
          }}
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technological-world-with-blue-and-white-lights-22757-large.mp4"
        />
        {/* Gradient Overlay for better text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, white 90%)",
          opacity: 0.1
        }} />
      </div>

      <div
        className="hero-container"
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
            className="hero-badge"
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
          className="hero-headline"
          style={{
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
          <br className="hero-br" />
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
            {" "}AI Generalist.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-subheadline"
          style={{
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
          className="hero-buttons"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <motion.button
            onClick={onEnrollClick}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: "0 15px 40px rgba(0,0,0,0.25)"
            }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn-primary"
            style={{
              background: "#0a0a0a",
              color: "white",
              border: "1px solid #000",
              borderRadius: "100px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.3s ease",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.2px",
            }}
          >
            Begin the Program
          </motion.button>
          
          <motion.a
            href="#curriculum"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn-secondary"
            style={{
              background: "white",
              color: "#0a0a0a",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "100px",
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
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
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
            <div key={i} className="stat-card" style={{ textAlign: "left" }}>
              <div style={{ 
                fontSize: "11px", 
                fontWeight: 600, 
                color: "#64748b", 
                letterSpacing: "1px",
                marginBottom: "4px"
              }}>
                {stat.label}
              </div>
              <div className="stat-value" style={{ 
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
        .hero-section {
          padding-top: 140px;
          padding-bottom: 80px;
        }
        .hero-headline { fontSize: 110px; }
        .hero-subheadline { fontSize: 22px; }
        .hero-buttons { gap: 20px; }
        .hero-btn-primary, .hero-btn-secondary { padding: 18px 40px; fontSize: 15px; }
        .hero-stats {
          margin-top: 80px;
          border-radius: 24px;
          padding: 24px 40px;
          gap: 60px;
        }
        .stat-value { fontSize: 32px; }

        @media (max-width: 1280px) {
          .hero-headline { fontSize: 80px; }
          .hero-subheadline { fontSize: 20px; }
        }

        @media (max-width: 992px) {
          .hero-section { padding-top: 120px; }
          .hero-headline { fontSize: 60px; }
          .hero-stats {
            gap: 40px;
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-headline { fontSize: 44px; }
          .hero-subheadline { fontSize: 18px; margin-bottom: 32px; }
          .hero-badge { margin-bottom: 24px; }
          .hero-br { display: none; } /* Allow natural wrapping on mobile */
          .hero-buttons { flex-direction: column; width: 100%; gap: 16px; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
          
          .hero-stats {
            flex-direction: column;
            gap: 24px;
            width: 100%;
            margin-top: 60px;
          }
          .stat-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 16px;
          }
          .stat-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .stat-value { fontSize: 24px; }
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

