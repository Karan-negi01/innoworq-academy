"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    src: "/gallery/ai_workflow_1_1777027613647.png",
    title: "Neural Architectures",
    tag: "Module 2.0"
  },
  {
    src: "/gallery/ai_workflow_2_1777027652282.png",
    title: "Data Pipelines",
    tag: "Workflow Auto"
  },
  {
    src: "/gallery/ai_workflow_3_1777027675337.png",
    title: "Agentic Systems",
    tag: "Final Project"
  }
];

export default function MediaGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal movement required
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={targetRef} style={{ height: "300vh", background: "#0a0a0a", position: "relative" }}>
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        
        {/* Left Side Static Text */}
        <div style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          maxWidth: "400px",
          pointerEvents: "none"
        }}>
          <span style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 600,
            color: "white",
            marginBottom: "24px",
            backdropFilter: "blur(10px)"
          }}>
            Real World Execution
          </span>
          <h2 style={{
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "24px"
          }}>
            Build what<br/>matters.
          </h2>
          <p style={{ fontSize: "18px", color: "#94a3b8", lineHeight: 1.6 }}>
            Our graduates don't just learn theory. They build systems, pipelines, and agents that fundamentally transform business operations. From college to career, your portfolio will speak for itself.
          </p>
        </div>

        {/* Right Side Horizontal Scroll Gallery */}
        <motion.div style={{
          x,
          display: "flex",
          gap: "40px",
          paddingLeft: "45vw",
          alignItems: "center"
        }}>
          {images.map((img, index) => (
            <div 
              key={index}
              style={{
                position: "relative",
                width: "60vw",
                maxWidth: "900px",
                aspectRatio: "16/9",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                flexShrink: 0
              }}
            >
              <img 
                src={img.src} 
                alt={img.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.9)"
                }}
              />
              {/* Play UI Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "40px"
              }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  borderRadius: "50%", 
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                }}>
                  <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "12px solid white", marginLeft: "4px" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ background: "#4F46E5", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 700 }}>
                    {img.tag}
                  </span>
                  <h3 style={{ fontSize: "24px", fontWeight: 600, color: "white", margin: 0, letterSpacing: "-0.5px" }}>
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
