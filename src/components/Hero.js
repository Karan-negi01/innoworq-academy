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
            opacity: 0.25, // High impact on Retina displays
            filter: "contrast(1.1) brightness(0.95)"
          }}
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technological-world-with-blue-and-white-lights-22757-large.mp4"
        />
        {/* Gradient Overlay for better text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, white 100%)",
          opacity: 0.3
        }} />
      </div>

      <div
        className="hero-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid #e2e8f0",
            borderRadius: "100px",
            marginBottom: "40px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}
        >
          <div style={{ width: "8px", height: "8px", background: "#10b981", borderRadius: "50%", boxShadow: "0 0 10px #10b981" }} />
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#1e293b", textTransform: "uppercase", letterSpacing: "1px" }}>
            Enrollment Open • Cohort 04
          </span>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline"
          style={{
            fontSize: "clamp(48px, 7vw, 115px)", // Slightly reduced for balance
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "#0a0a0a",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "32px",
            maxWidth: "1200px",
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
            fontSize: "clamp(17px, 1.1vw, 21px)", // Refined subheadline
            lineHeight: 1.6,
            marginBottom: "48px",
            maxWidth: "750px",
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
              border: "1px solid #e2e8f0",
              borderRadius: "100px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              fontFamily: "'Inter', sans-serif"
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
              <div className="stat-label" style={{ 
                fontWeight: 600, 
                color: "#64748b", 
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

      <div 
        className="hero-ticker"
        style={{
          background: "#0a0a0a",
          padding: "20px 0", // Reduced padding
          width: "100%",
          overflow: "hidden",
          display: "flex",
          whiteSpace: "nowrap",
          marginTop: "auto",
          borderTop: "1px solid rgba(255,255,255,0.08)"
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
                color: "rgba(255,255,255,1)",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {item}
              <span style={{ margin: "0 40px", opacity: 0.6 }}>✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 180px;
          padding-bottom: 120px;
          min-height: 95vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-headline { fontSize: 130px; }
        .hero-subheadline { fontSize: 24px; margin-bottom: 64px; }
        .hero-buttons { gap: 24px; }
        .hero-btn-primary, .hero-btn-secondary { padding: 20px 48px; fontSize: 16px; }
        .hero-stats {
          margin-top: 40px;
          border-radius: 40px;
          padding: 48px 80px;
          gap: 100px;
        }
        .stat-value { fontSize: 56px; letter-spacing: -2px; }
        .stat-label { fontSize: 13px; letter-spacing: 1.5px; margin-bottom: 8px; }

        @media (max-width: 1536px) {
          .hero-headline { fontSize: 110px; }
          .hero-stats { gap: 60px; padding: 24px 40px; }
        }

        @media (max-width: 1280px) {
          .hero-section { padding-top: 140px; }
          .hero-headline { fontSize: 80px; }
          .hero-subheadline { fontSize: 20px; }
        }

        @media (max-width: 992px) {
          .hero-section { padding-top: 120px; min-height: auto; }
          .hero-headline { fontSize: 60px; }
          .hero-stats {
            gap: 40px;
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-section { padding-top: 80px; padding-bottom: 60px; }
          .hero-headline { fontSize: 44px; }
          .hero-subheadline { fontSize: 18px; margin-bottom: 32px; }
          .hero-badge { margin-bottom: 24px; }
          .hero-br { display: none; }
          .hero-buttons { flex-direction: column; width: 100%; gap: 16px; }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
          
          .hero-stats {
            flex-direction: column;
            gap: 24px;
            width: 100%;
            margin-top: 48px;
            padding: 24px;
          }
          .stat-value { fontSize: 32px; letter-spacing: -1px; }
          .stat-label { fontSize: 11px; margin-bottom: 4px; }
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

