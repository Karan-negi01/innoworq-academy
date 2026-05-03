"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topics = [
  {
    number: "01",
    title: "Vibe Coding",
    description:
      "Learn to code with the flow. Leverage AI to write code faster, cleaner, and with more intuition than you ever thought possible.",
    color: "#FF8C00",
    tag: "Build",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Automate repetitive tasks. Build agents and workflows that run 24/7 using n8n and Make.com — without writing a single line of code.",
    color: "#E8291C",
    tag: "Automate",
  },
  {
    number: "03",
    title: "Generative Media",
    description:
      "Master AI-generated images, video, and audio. Use Midjourney, Runway, ElevenLabs, and Kling to create content at scale.",
    color: "#4D7FFF",
    tag: "Create",
  },
];

function TopicRow({ topic, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        gap: "32px",
        alignItems: "center",
        padding: "36px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        borderRadius: "4px",
        transition: "background 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.015)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {/* Accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          background: topic.color,
          borderRadius: "2px",
          transformOrigin: "top",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "'Inter', sans-serif",
          color: topic.color,
          letterSpacing: "1px",
          opacity: 0.85,
        }}
      >
        {topic.number}
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            color: "#ffffff",
            letterSpacing: "-0.4px",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
        >
          {topic.title}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.65,
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            maxWidth: "520px",
          }}
        >
          {topic.description}
        </p>
      </div>

      {/* Tag */}
      <div
        style={{
          padding: "6px 18px",
          borderRadius: "100px",
          border: `1px solid ${topic.color}40`,
          background: `${topic.color}10`,
          fontSize: "12px",
          fontWeight: 700,
          color: topic.color,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {topic.tag}
      </div>
    </motion.div>
  );
}

export default function WorkshopTopics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="topics" style={{ background: "#000000", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "72px" }}
        >
          {/* Badge */}
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
              What You&apos;ll Learn
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "0",
            }}
          >
            3 sessions.
            <br />
            <span
              style={{
                color: "#ffffff",
                fontStyle: "italic",
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Infinite leverage.
            </span>
          </h2>
        </motion.div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "0" }} />

        {/* Topic rows */}
        {topics.map((topic, i) => (
          <TopicRow key={topic.number} topic={topic} index={i} />
        ))}
      </div>
    </section>
  );
}
