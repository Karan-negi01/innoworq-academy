"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  {
    emoji: "🏥",
    name: "Healthcare",
    roles: ["AI Health Analyst", "Medical Data Scientist", "Clinical AI Specialist"],
    color: "#ef4444",
    bg: "rgba(239,68,68,0.06)",
  },
  {
    emoji: "💰",
    name: "Finance",
    roles: ["AI Risk Analyst", "FinTech Automation Lead", "Quantitative AI Researcher"],
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
  },
  {
    emoji: "💻",
    name: "Tech / IT",
    roles: ["AI Product Manager", "Prompt Engineer", "AI Solutions Architect"],
    color: "#4F46E5",
    bg: "rgba(79,70,229,0.06)",
  },
  {
    emoji: "📱",
    name: "Digital Marketing",
    roles: ["AI Content Strategist", "Automation Marketer", "AI Campaign Manager"],
    color: "#ec4899",
    bg: "rgba(236,72,153,0.06)",
  },
  {
    emoji: "🔄",
    name: "Digital Transformation",
    roles: ["AI Transformation Lead", "Process Automation Expert", "AI Change Manager"],
    color: "#10b981",
    bg: "rgba(16,185,129,0.06)",
  },
];

function IndustryCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "32px 28px",
        border: "1px solid #f1f5f9",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "16px",
          background: item.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          marginBottom: "20px",
          border: `1px solid ${item.color}20`,
        }}
      >
        {item.emoji}
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          color: "#0a0a0a",
          marginBottom: "16px",
          letterSpacing: "-0.2px",
        }}
      >
        {item.name}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.roles.map((role) => (
          <div
            key={role}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "#475569",
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: item.color,
                flexShrink: 0,
              }}
            />
            {role}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function CareerOpportunities() {
  return (
    <section
      id="careers"
      style={{
        padding: "100px 0",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              background: "rgba(79,70,229,0.08)",
              border: "1px solid rgba(79,70,229,0.2)",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#4F46E5",
              marginBottom: "16px",
            }}
          >
            Career Outcomes
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              color: "#0a0a0a",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Land Jobs In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Top Industries
            </span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            AI skills are in demand across every sector. Graduates land roles commanding premium salaries.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {industries.map((item, i) => (
            <IndustryCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
