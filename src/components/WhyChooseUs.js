"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "⚡",
    title: "Vibe Coding & Automation",
    description: "Forget typing syntax. Learn to generate production-ready code natively using high-end AI agents. We focus on outcome, not boilerplate.",
    color: "#4F46E5",
    bg: "linear-gradient(135deg, rgba(79,70,229,0.08), rgba(79,70,229,0.02))",
    desktopSpan: 2, 
  },
  {
    icon: "💼",
    title: "Industry Ready",
    description: "Skills taught by professionals, for professionals.",
    color: "#7C3AED",
    bg: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(124,58,237,0.02))",
    desktopSpan: 1, 
  },
  {
    icon: "📁",
    title: "Live Command Portfolio",
    description: "Don't just show certificates. Show your deployed agents working live.",
    color: "#0a0a0a",
    bg: "linear-gradient(135deg, rgba(10,10,10,0.05), rgba(10,10,10,0.01))",
    desktopSpan: 1, 
  },
  {
    icon: "🎯",
    title: "Zero-Fluff Curriculum",
    description: "20 hours of pure, dense, action-oriented learning. Every minute is spent on tools you'll actually use on the job tomorrow.",
    color: "#10b981",
    bg: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))",
    desktopSpan: 2,
  },
];

function BentoCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`bento-card span-${feature.desktopSpan}`}
      style={{
        background: feature.bg,
        border: "1px solid rgba(0,0,0,0.04)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}
    >
      <div 
        style={{
          width: "48px",
          height: "48px",
          background: "white",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          marginBottom: "32px",
          border: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        {feature.icon}
      </div>

      <div>
        <h3
          className="bento-title"
          style={{
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            color: "#0a0a0a",
            marginBottom: "12px",
            letterSpacing: "-0.5px",
            lineHeight: 1.2
          }}
        >
          {feature.title}
        </h3>
        <p
          className="bento-desc"
          style={{
            color: "#475569",
            lineHeight: 1.6,
            fontWeight: 400,
            maxWidth: "90%"
          }}
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="features-section"
      style={{
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "80px" }}
          className="features-header"
        >
          <h2
            className="features-title"
            style={{
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "#0a0a0a",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Built for the AI Era,
            <br className="features-br" />
            <span style={{ color: "#94a3b8", fontWeight: 400, fontStyle: "italic", fontFamily: "'Poppins', sans-serif" }}>
              {" "}Not the Past.
            </span>
          </h2>
          <p
            className="features-subtitle"
            style={{
              color: "#475569",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            We abandoned boring theory. We focus purely on execution and building your intuition for AI tools.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
          className="bento-grid"
        >
          {features.map((feature, i) => (
            <BentoCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
      <style>{`
        .features-section { padding: 120px 0; }
        .bento-card {
          border-radius: 24px;
          padding: 40px;
          min-height: 260px;
        }
        .bento-title { font-size: 22px; }
        .bento-desc { font-size: 15px; }
        .features-title { font-size: clamp(36px, 5vw, 56px); }
        .features-subtitle { font-size: 18px; }

        /* Mobile */
        @media (max-width: 768px) {
          .features-section { padding: 80px 0; }
          .features-header { margin-bottom: 40px !important; }
          .features-title { font-size: 36px; }
          .features-subtitle { font-size: 16px; }
          .features-br { display: none; }
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card {
            padding: 32px;
            min-height: auto;
          }
        }

        /* Tablet / Small Laptop */
        @media (min-width: 769px) and (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-card.span-2 { grid-column: span 2; }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .bento-card.span-2 { grid-column: span 2; }
          .bento-card.span-1 { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
