"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const perks = [
  "3 Hours of Live, Hands-On Training",
  "Access to session recordings",
  "Exclusive prompt libraries & templates",
  "Private community access",
  "Certificate of completion",
  "Post-session doubt-clearing Q&A",
];

export default function WorkshopPricing({ onEnrollClick, seatsLeft }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#000000", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Ambient glows */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,41,28,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
          className="pricing-header"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(255,140,0,0.08)",
              border: "1px solid rgba(255,140,0,0.2)",
              borderRadius: "100px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#FF8C00",
                boxShadow: "0 0 8px #FF8C00",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#FF8C00",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {seatsLeft} seats left
            </span>
          </div>

          <h2
            className="pricing-title"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "16px",
            }}
          >
            One price.
            <br />
            <span
              style={{
                color: "#ffffff",
                fontStyle: "italic",
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Everything included.
            </span>
          </h2>
          <p className="pricing-desc" style={{ fontSize: "17px", color: "rgba(255,255,255,0.38)", fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}>
            No upsells. No hidden costs. Just a single payment to unlock 3 hours of career-changing training.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="workshop-price-card"
        >
          {/* Left — perks */}
          <div
            style={{
              padding: "56px 48px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "32px",
              }}
            >
              What&apos;s Included
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {perks.map((perk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(255,140,0,0.12)",
                      border: "1px solid rgba(255,140,0,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#FF8C00",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.65)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — price + CTA */}
          <div
            style={{
              padding: "56px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              background: "rgba(255,255,255,0.01)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #FF8C00, #E8291C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              One-Time Investment
            </div>

            {/* Crossed out fake price */}
            <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.2)", textDecoration: "line-through", fontFamily: "'Inter', sans-serif", marginBottom: "4px" }}>
              ₹999
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "4px", marginBottom: "8px" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#fff", marginTop: "10px", fontFamily: "'Inter', sans-serif" }}>₹</span>
              <span style={{ fontSize: "80px", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-3px", fontFamily: "'Inter', sans-serif" }}>1</span>
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", marginBottom: "40px", fontFamily: "'Inter', sans-serif" }}>
              All taxes included
            </div>

            <motion.button
              onClick={onEnrollClick}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,140,0,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "18px",
                background: "linear-gradient(135deg, #FF8C00, #E8291C)",
                color: "#fff",
                border: "none",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "16px",
              }}
            >
              Secure Your Seat →
            </motion.button>

            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", fontFamily: "'Inter', sans-serif" }}>
              🔒 Secure payment · Instant confirmation
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #FF8C00; }
          50% { opacity: 0.5; box-shadow: 0 0 3px #FF8C00; }
        }
        @media (max-width: 768px) {
          .workshop-price-card { grid-template-columns: 1fr !important; }
          .pricing-title { font-size: 36px !important; }
          .pricing-desc { font-size: 15px !important; }
        }
      `}</style>
    </section>
  );
}
