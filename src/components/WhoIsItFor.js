"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  { emoji: "🎓", label: "BCA Students", description: "Perfect foundation alongside your degree" },
  { emoji: "💻", label: "BE / B.Tech (CS)", description: "Add AI skills to your engineering toolkit" },
  { emoji: "📊", label: "BBA (Tech)", description: "Combine business acumen with AI power" },
  { emoji: "🔄", label: "Career Switchers", description: "Transition into the booming AI industry" },
  { emoji: "💼", label: "Working Professionals", description: "Upskill and stay ahead in your field" },
  { emoji: "🚀", label: "Tech Enthusiasts", description: "Formalize your passion into a career" },
];

function AudienceCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ 
        y: -5, 
        scale: 1.03,
        boxShadow: "0 16px 40px rgba(79,70,229,0.12)"
      }}
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "20px",
        padding: "32px 24px",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        cursor: "default",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          fontSize: "44px",
          marginBottom: "16px",
          lineHeight: 1,
        }}
      >
        {item.emoji}
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          color: "#ffffff",
          marginBottom: "8px",
          letterSpacing: "-0.2px",
        }}
      >
        {item.label}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.5,
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function WhoIsItFor() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="audience"
      style={{
      padding: "100px 0",
        background: "#000000",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(255,140,0,0.12)",
              border: "1px solid rgba(255,140,0,0.2)",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #FF8C00, #E8291C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
            }}
          >
            Perfect Fit
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Who Is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #E8291C, #4D7FFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              This For?
            </span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Perfect as a value-added certification for students from any stream looking to enter the AI space — or professionals ready to level up.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {audiences.map((item, i) => (
            <AudienceCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            padding: "28px 40px",
            background: "linear-gradient(135deg, rgba(255,140,0,0.08), rgba(232,41,28,0.06))",
            borderRadius: "20px",
            border: "1px solid rgba(255,140,0,0.15)",
          }}
        >
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            🎯 No prior AI knowledge required.{" "}
            <strong style={{ background: "linear-gradient(135deg, #FF8C00, #E8291C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Basic computer literacy</strong> is all you need to get started. We handle the rest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
