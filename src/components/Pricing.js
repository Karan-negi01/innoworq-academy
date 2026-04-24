"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "20 Contact Hours of Native Practical Training",
  "9 Comprehensive Modules covering standard & advanced workflows",
  "3 Classes Per Week structured for maximum retention",
  "Build live agentic workflows in n8n & Make.com",
  "Exclusive access to specialized prompt libraries",
  "Portfolio Review & Career positioning strategies",
  "Official 'AI Generalist' Certification upon completion"
];

export default function Pricing({ onEnrollClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{
        background: "#050505", // Deep premium black
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "80px" }}
          className="pricing-header"
        >
          <h2 className="pricing-title" style={{
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "white",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            An investment in your
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400, fontFamily: "'Poppins', sans-serif", color: "#a5b4fc" }}>
              future leverage.
            </span>
          </h2>
          <p className="pricing-subtitle" style={{ color: "#94a3b8", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
            One straightforward price. No upsells. Gain the skills required to 10x your productivity and career value.
          </p>
        </motion.div>

        {/* The Black Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pricing-card"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {/* Left Side - Details */}
          <div className="pricing-left" style={{ flex: "1 1 500px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Professional Certification
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.6, marginBottom: "40px" }}>
              Everything included. Gain full access to the live cohort, materials, and private community.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {features.map((feature, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ 
                    marginTop: "3px", 
                    width: "20px", 
                    height: "20px", 
                    borderRadius: "50%", 
                    background: "rgba(79,70,229,0.2)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#818cf8" }} />
                  </div>
                  <span style={{ fontSize: "15px", color: "#cbd5e1" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Price & CTA */}
          <div className="pricing-right" style={{ 
            flex: "1 1 300px", 
            background: "linear-gradient(135deg, rgba(79,70,229,0.05), rgba(0,0,0,0))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#818cf8", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
              One-Time Payment
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "4px", marginBottom: "8px" }}>
              <span style={{ fontSize: "28px", fontWeight: 600, color: "white", marginTop: "8px" }}>₹</span>
              <span style={{ fontSize: "64px", fontWeight: 800, color: "white", lineHeight: 1, letterSpacing: "-2px" }}>25,000</span>
            </div>
            <div style={{ fontSize: "14px", color: "#64748b", marginBottom: "40px" }}>
              All taxes included. Seats are strictly limited.
            </div>

            <button
              onClick={onEnrollClick}
              style={{
                width: "100%",
                padding: "20px",
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "16px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Secure Your Seat
            </button>
            <div style={{ marginTop: "24px", fontSize: "12px", color: "#64748b", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ filter: "grayscale(100%)" }}>🔒</span> Bank-grade SSL encryption
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .pricing-section { padding: 160px 0; }
        .pricing-title { font-size: clamp(36px, 5vw, 56px); }
        .pricing-subtitle { font-size: 18px; }
        .pricing-left { padding: 64px 48px; }
        .pricing-right { padding: 64px 48px; }

        @media (max-width: 768px) {
          .pricing-section { padding: 80px 0; }
          .pricing-header { margin-bottom: 40px !important; }
          .pricing-title { font-size: 36px; }
          .pricing-subtitle { font-size: 16px; }
          
          .pricing-left { 
            padding: 32px 24px; 
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .pricing-right { padding: 32px 24px; }
        }
      `}</style>
    </section>
  );
}
