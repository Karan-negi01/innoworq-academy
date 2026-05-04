"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  {
    time: "10:00 AM",
    duration: "60 min",
    title: "Vibe Coding",
    description:
      "Jumpstart your session by building a real project using AI agents. No syntax memorisation — pure creative execution using Cursor and Claude.",
    color: "#FF8C00",
    tag: "Session 1",
  },
  {
    time: "11:00 AM",
    duration: "60 min",
    title: "AI Automation",
    description:
      "Build your first live automation workflow. Connect APIs, trigger actions, and deploy an n8n or Make.com agent that runs on its own.",
    color: "#E8291C",
    tag: "Session 2",
  },
  {
    time: "12:00 PM",
    duration: "60 min",
    title: "Generative Media",
    description:
      "Create AI images, videos, and voice content at scale. Hands-on with Midjourney, Kling, ElevenLabs, and Runway — from prompt to publish.",
    color: "#4D7FFF",
    tag: "Session 3",
  },
];

function ScheduleCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        padding: "40px",
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${item.color}40`;
        e.currentTarget.style.boxShadow = `0 0 40px ${item.color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}25 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: item.color,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "6px",
            }}
          >
            {item.tag}
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            {item.time}
          </div>
        </div>
        <div
          style={{
            padding: "6px 16px",
            borderRadius: "100px",
            background: `${item.color}15`,
            border: `1px solid ${item.color}35`,
            fontSize: "12px",
            fontWeight: 600,
            color: item.color,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {item.duration}
        </div>
      </div>

      <h3
        style={{
          fontSize: "21px",
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "-0.4px",
          marginBottom: "12px",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.38)",
          lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function WorkshopSchedule() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#000000", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              background: "rgba(232,41,28,0.08)",
              border: "1px solid rgba(232,41,28,0.2)",
              borderRadius: "100px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E8291C",
                boxShadow: "0 0 8px #E8291C",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#E8291C",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              The Schedule
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
              marginBottom: "16px",
            }}
          >
            3 hours
            <br />
            <span
              style={{
                color: "#ffffff",
                fontStyle: "italic",
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Zero wasted minutes
            </span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.38)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.65,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Every hour is dedicated to one core skill — hands-on, live, and immediately applicable.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {schedule.map((item, i) => (
            <ScheduleCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
