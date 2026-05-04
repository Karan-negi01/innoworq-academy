"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  {
    title: "Working Professionals",
    description: "Want to automate 80% of your workload and become indispensable at your company.",
    color: "#FF8C00",
    icon: "💼",
  },
  {
    title: "Freelancers & Creators",
    description: "Looking to offer AI-powered services and multiply your output without multiplying your hours.",
    color: "#E8291C",
    icon: "🎨",
  },
  {
    title: "Students & Freshers",
    description: "Want to enter the job market with skills that companies are desperately paying premium for.",
    color: "#4D7FFF",
    icon: "🎓",
  },
  {
    title: "Entrepreneurs",
    description: "Need to build and ship AI-powered products fast — without hiring a full engineering team.",
    color: "#FF8C00",
    icon: "🚀",
  },
  {
    title: "Non-Technical People",
    description: "Curious about AI but don't know where to start. No coding background required whatsoever.",
    color: "#E8291C",
    icon: "✨",
  },
  {
    title: "Developers",
    description: "Already coding but want to 10x output using AI-native workflows instead of brute-force typing.",
    color: "#4D7FFF",
    icon: "⚡",
  },
];

export default function WorkshopWhoIsItFor({ onEnrollClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#000000", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(77,127,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          <div className="who-header-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div className="who-header-text">
              <div
                className="who-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  background: "rgba(77,127,255,0.08)",
                  border: "1px solid rgba(77,127,255,0.2)",
                  borderRadius: "100px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4D7FFF",
                    boxShadow: "0 0 8px #4D7FFF",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#4D7FFF",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Who It&apos;s For
                </span>
              </div>

              <h2
                className="who-title"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 800,
                  fontFamily: "'Inter', sans-serif",
                  color: "#ffffff",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                }}
              >
                Built for anyone
                <br />
                <span
                  style={{
                    color: "#ffffff",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  who wants to lead
                </span>
              </h2>
            </div>

            <motion.button
              onClick={onEnrollClick}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,140,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "16px 36px",
                background: "linear-gradient(135deg, #FF8C00, #E8291C)",
                color: "#fff",
                border: "none",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                flexShrink: 0,
              }}
            >
              Enroll Now @ ₹1
            </motion.button>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              style={{
                padding: "40px 36px",
                background: "#000000",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#000000";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{item.icon}</div>
              <div
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "2px",
                  background: item.color,
                  borderRadius: "2px",
                  marginBottom: "16px",
                }}
              />
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "10px",
                  letterSpacing: "-0.3px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.65,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .who-header-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .who-badge { margin: 0 auto 24px !important; display: flex !important; width: fit-content !important; }
          .who-title { font-size: 36px !important; }
        }
        @media (max-width: 600px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
