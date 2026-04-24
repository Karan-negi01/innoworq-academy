"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const mediaItems = [
  {
    type: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1587-large.mp4",
    title: "Neural Architectures",
    tag: "Module 2.0"
  },
  {
    type: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-flowing-energy-spheres-in-abstract-space-28704-large.mp4",
    title: "Data Pipelines",
    tag: "Workflow Auto"
  },
  {
    type: "video",
    src: "https://assets.mixkit.co/videos/preview/mixkit-abstract-animation-of-falling-bubbles-overlay-28684-large.mp4",
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
    <section ref={targetRef} className="media-gallery-section" style={{ background: "#0a0a0a", position: "relative" }}>
      <div className="media-gallery-sticky" style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        
        {/* Left Side Static Text */}
        <div className="media-gallery-text" style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          maxWidth: "400px",
          pointerEvents: "none"
        }}>
          <span className="media-gallery-badge" style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "100px",
            fontWeight: 600,
            color: "white",
            marginBottom: "24px",
            backdropFilter: "blur(10px)"
          }}>
            Cinematic Learning
          </span>
          <h2 className="media-gallery-title" style={{
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "24px"
          }}>
            Visualize the<br className="media-title-br" /> Machine.
          </h2>
          <p className="media-gallery-desc" style={{ color: "#94a3b8", lineHeight: 1.6 }}>
            Step into the future with our cinematic curriculum. We don't just show screenshots; we visualize the core of Agentic AI.
          </p>
        </div>

        {/* Right Side Horizontal Scroll Gallery */}
        <motion.div className="media-gallery-scroll" style={{
          x,
          display: "flex",
          alignItems: "center"
        }}>
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className="media-gallery-card"
              style={{
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                flexShrink: 0,
                background: "#111"
              }}
            >
              <video 
                src={item.src} 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)"
                }}
              />
              
              {/* Play UI Overlay */}
              <div className="media-gallery-overlay" style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span className="media-tag" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)", border: "1px solid rgba(255,255,255,0.1)", color: "white", borderRadius: "100px", fontWeight: 700 }}>
                    {item.tag}
                  </span>
                  <h3 className="media-overlay-title" style={{ fontWeight: 600, color: "white", margin: 0, letterSpacing: "-0.5px" }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .media-gallery-section { height: 300vh; }
        .media-gallery-badge { font-size: 12px; }
        .media-gallery-title { font-size: clamp(48px, 6vw, 72px); }
        .media-gallery-desc { font-size: 18px; }
        .media-gallery-scroll { gap: 40px; padding-left: 45vw; }
        .media-gallery-card { width: 60vw; max-width: 900px; }
        .media-gallery-overlay { padding: 40px; }
        .play-btn { width: 48px; height: 48px; }
        .media-tag { padding: 4px 12px; font-size: 12px; }
        .media-overlay-title { font-size: 24px; }

        @media (max-width: 1024px) {
          .media-gallery-text { left: 4%; max-width: 380px; }
          .media-gallery-scroll { padding-left: 55vw; }
          .media-gallery-card { width: 65vw; }
        }

        @media (max-width: 768px) {
          /* On mobile, standardizing the horizontal scroll overlay */
          .media-gallery-section { height: 250vh; }
          .media-gallery-text {
            top: 20%; /* Push text up */
            transform: translateY(0);
            left: 5%;
            right: 5%;
            max-width: none;
            z-index: 50;
            background: linear-gradient(to bottom, rgba(10,10,10,0.9) 50%, transparent 100%);
            padding-bottom: 20px;
          }
          .media-title-br { display: none; }
          .media-gallery-title { font-size: 40px; margin-bottom: 16px; }
          .media-gallery-desc { font-size: 15px; }
          
          /* Cards fill screen more and start lower */
          .media-gallery-scroll { padding-left: 5vw; padding-right: 5vw; gap: 24px; margin-top: 30vh; }
          .media-gallery-card { width: 85vw; aspect-ratio: 4/5; /* Taller on mobile */ } 
          
          .media-gallery-overlay { padding: 24px; }
          .play-btn { width: 40px; height: 40px; margin-bottom: 16px; }
          .media-tag { font-size: 11px; padding: 4px 10px; }
          .media-overlay-title { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
