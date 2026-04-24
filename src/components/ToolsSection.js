"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const allTools = [
  { name: "Weavy", icon: "🔗", color: "#4F46E5" },
  { name: "Higgsfield", icon: "🎬", color: "#7C3AED" },
  { name: "HeyGen", icon: "🧑‍💻", color: "#6366f1" },
  { name: "Vapi", icon: "🎙️", color: "#8b5cf6" },
  { name: "ElevenLabs", icon: "🔊", color: "#4F46E5" },
  { name: "Twilio", icon: "📡", color: "#7C3AED" },
  { name: "Suno", icon: "🎵", color: "#6366f1" },
  { name: "Antigravity", icon: "⚡", color: "#8b5cf6" },
  { name: "n8n", icon: "🔄", color: "#4F46E5" },
  { name: "Claude", icon: "🤖", color: "#7C3AED" },
  { name: "Make.com", icon: "🛠️", color: "#6366f1" },
  { name: "Kling", icon: "✨", color: "#8b5cf6" }
];

// Split randomly or sequentially for 3 rows
const row1 = allTools.slice(0, 5);
const row2 = allTools.slice(4, 9);
const row3 = [...allTools.slice(8, 12), allTools[0]];

function BrutalistMarquee({ items, direction = 1, speed = 30 }) {
  // Over-duplicate to ensure infinite massive text scroll
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  
  return (
    <div style={{ 
      display: "flex", 
      whiteSpace: "nowrap", 
      overflow: "hidden", 
      padding: "0" 
    }}>
      <motion.div
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        style={{ display: "flex", gap: "60px", width: "max-content", paddingRight: "60px", alignItems: "center" }}
      >
        {duplicatedItems.map((tool, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "60px" }}>
            <motion.div
              whileHover="hover"
              initial="initial"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                cursor: "pointer"
              }}
            >
              <motion.div 
                variants={{
                  initial: { filter: "grayscale(100%) blur(2px)", opacity: 0.3, scale: 0.9 },
                  hover: { filter: "grayscale(0%) blur(0px)", opacity: 1, scale: 1.2 }
                }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: "56px" }}
              >
                {tool.icon}
              </motion.div>
              
              <motion.span 
                variants={{
                  initial: { color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.15)" },
                  hover: { color: tool.color, WebkitTextStroke: `0px ${tool.color}`, textShadow: `0 0 40px ${tool.color}80` }
                }}
                transition={{ duration: 0.3 }}
                style={{ 
                  fontSize: "clamp(64px, 8vw, 120px)", 
                  fontWeight: 900, 
                  fontFamily: "'Inter', sans-serif", 
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase"
                }}
              >
                {tool.name}
              </motion.span>
            </motion.div>

            {/* Separator Star */}
            <div style={{ color: "rgba(255,255,255,0.1)", fontSize: "40px" }}>✧</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ToolsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      id="tools"
      style={{
        padding: "160px 0",
        background: "#050505", // Deep black background
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Background glow mesh to give it that premium 3D lighting feel */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse at center, rgba(79,70,229,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Header Container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10, marginBottom: "80px" }}>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "12px", height: "12px", background: "#4F46E5", borderRadius: "50%", boxShadow: "0 0 20px #4F46E5" }} />
            <span style={{ fontSize: "14px", fontWeight: 700, color: "white", letterSpacing: "2px", textTransform: "uppercase" }}>
              Weaponize Your Workflow
            </span>
          </div>
          
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "white",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            maxWidth: "800px"
          }}>
            Master the instruments of <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>automation.</span>
          </h2>
        </motion.div>
      </div>

      {/* Giant Brutalist Marquees */}
      <div style={{ 
        position: "relative", 
        width: "100vw", 
        marginLeft: "calc(-50vw + 50%)", 
        zIndex: 5,
        transform: "rotate(-2deg) scale(1.05)",
        // Darken edges slightly so the text fades out
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <BrutalistMarquee items={row1} direction={1} speed={80} />
        <BrutalistMarquee items={row2} direction={-1} speed={90} />
        <BrutalistMarquee items={row3} direction={1} speed={75} />
      </div>

      {/* Very bottom decorative line */}
      <div style={{ 
        width: "100%", 
        height: "1px", 
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        marginTop: "120px"
      }} />
    </section>
  );
}
