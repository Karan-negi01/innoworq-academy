"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA({ onEnrollClick }) {
  const containerRef = useRef(null);

  // Use framer motion scroll to slightly scale up the inner container as you scroll into the CTA
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);

  return (
    <section ref={containerRef} className="final-cta-section" style={{ background: "#000000", paddingBottom: "0" }}>
      <motion.div
        className="final-cta-container"
        style={{
          scale,
          borderRadius,
          background: "#000000",
          position: "relative",
          overflow: "hidden",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        {/* Animated ambient blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,140,0,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,41,28,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div className="final-cta-content" style={{ position: "relative", zIndex: 10, maxWidth: "800px", padding: "0 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >


            <h2 className="final-cta-title" style={{
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "white",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "32px"
            }}>
              Don't get left behind
            </h2>
            <p className="final-cta-subtitle" style={{
              color: "#cbd5e1",
              maxWidth: "600px",
              margin: "0 auto 48px",
              lineHeight: 1.6
            }}>
              Join the next cohort of AI Generalists. Learn the skills that companies are desperately hiring for today
            </p>

            <motion.button
              onClick={onEnrollClick}
              whileHover={{
                y: -4,
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="final-cta-button"
              style={{
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "100px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                fontFamily: "'Inter', sans-serif",
                transition: "all 0.3s ease"
              }}
            >
              Start Building Now
            </motion.button>
            <div style={{ marginTop: "24px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              Next cohort begins soon. Limited spots available.
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .final-cta-section { padding-top: 160px; }
        .final-cta-title { font-size: clamp(48px, 6vw, 80px); }
        .final-cta-subtitle { font-size: 20px; }
        .final-cta-button { padding: 24px 48px; font-size: 18px; }
        .avatar-circle { width: 64px; height: 64px; margin-left: -24px; }
        .avatar-circle:first-child { margin-left: 0; }

        @media (max-width: 768px) {
          .final-cta-section { padding-top: 80px; }
          .final-cta-container { min-height: 60vh !important; }
          .final-cta-title { font-size: 44px; }
          .final-cta-subtitle { font-size: 16px; margin-bottom: 32px !important; }
          .final-cta-button { padding: 18px 36px; font-size: 16px; width: 100%; }
          .avatar-circle { width: 48px; height: 48px; margin-left: -16px; }
          .final-cta-avatars { margin-bottom: 24px !important; }
        }
      `}</style>
    </section>
  );
}
