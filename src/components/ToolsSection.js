"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Claude", color: "#FF8C00" },
  { name: "n8n", color: "#E8291C" },
  { name: "Make.com", color: "#4D7FFF" },
  { name: "Vapi", color: "#FF8C00" },
  { name: "ElevenLabs", color: "#E8291C" },
  { name: "HeyGen", color: "#4D7FFF" },
  { name: "Suno", color: "#FF8C00" },
  { name: "Antigravity", color: "#E8291C" },
  { name: "Kling", color: "#4D7FFF" },
  { name: "Higgsfield", color: "#FF8C00" },
  { name: "Twilio", color: "#E8291C" },
  { name: "Weavy", color: "#4D7FFF" },
  { name: "ChatGPT", color: "#FF8C00" },
  { name: "Cursor", color: "#4D7FFF" },
  { name: "Midjourney", color: "#E8291C" },
  { name: "Runway", color: "#FF8C00" },
];

const row1 = [...tools.slice(0, 8), ...tools.slice(0, 8)];
const row2 = [...tools.slice(4, 12), ...tools.slice(4, 12)];
const row3 = [...tools.slice(8, 16), ...tools.slice(8, 16)];

function Pill({ tool }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 32px",
        borderRadius: "100px",
        border: "1px solid rgba(255,255,255,0.09)",
        background: "rgba(255,255,255,0.03)",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "9px",
          height: "9px",
          borderRadius: "50%",
          background: tool.color,
          boxShadow: `0 0 6px ${tool.color}`,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "17px",
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.2px",
        }}
      >
        {tool.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction = 1, speed = 45 }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
      <motion.div
        animate={{ x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        style={{ display: "flex", gap: "20px", width: "max-content" }}
      >
        {doubled.map((tool, i) => (
          <Pill key={i} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ToolsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tools"
      style={{
        background: "#000000",
        padding: "140px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(255,140,0,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto 72px",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              background: "rgba(255,140,0,0.08)",
              border: "1px solid rgba(255,140,0,0.2)",
              borderRadius: "100px",
              marginBottom: "32px",
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
                fontSize: "12px",
                fontWeight: 700,
                color: "#FF8C00",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              The AI Stack
            </span>
          </div>

          {/* Title */}
          <h2
            className="tools-title"
            style={{
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            Weaponize your workflow
          </h2>

          <p
            className="tools-gradient-sub"
            style={{
              fontWeight: 500,
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(135deg, #FF8C00, #E8291C, #4D7FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              marginBottom: "24px",
              fontStyle: "italic",
            }}
          >
            with the tools that run the world.
          </p>

          <p
            className="tools-desc"
            style={{
              color: "rgba(255,255,255,0.4)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Hands-on training with the exact tools companies use to ship AI products — no theory, pure execution.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          position: "relative",
          zIndex: 5,
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <MarqueeRow items={row1} direction={1} speed={55} />
        <MarqueeRow items={row2} direction={-1} speed={45} />
        <MarqueeRow items={row3} direction={1} speed={60} />
      </motion.div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          textAlign: "center",
          marginTop: "60px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.25)",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          16+ industry tools · live projects · job-ready portfolio
        </span>
      </motion.div>

      <style>{`
        .tools-title { font-size: clamp(36px, 5vw, 68px); }
        .tools-gradient-sub { font-size: clamp(22px, 3.5vw, 42px); }
        .tools-desc { font-size: 17px; }

        @media (max-width: 768px) {
          .tools-title { font-size: 34px; }
          .tools-gradient-sub { font-size: 22px; }
          .tools-desc { font-size: 15px; }
        }
      `}</style>
    </section>
  );
}
