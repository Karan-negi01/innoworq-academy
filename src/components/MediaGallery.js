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
    <section ref={targetRef} className="media-gallery-section" style={{ background: "#000000", position: "relative" }}>
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
          alignItems: "center",
          gap: "80px", 
          paddingLeft: "600px", // Use fixed padding for better predictability on huge screens
          paddingRight: "200px"
        }}>
          {mediaItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="media-gallery-card"
              style={{
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "32px",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.2)", // Thicker border
                boxShadow: "0 60px 120px rgba(0,0,0,0.9)",
                flexShrink: 0,
                background: "#000000",
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
                  opacity: 0.8
                }}
              />
              
              {/* Play UI Overlay */}
              <div className="media-gallery-overlay" style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "60px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                   <span className="media-tag" style={{ background: "rgba(255,255,255,0.2)", color: "white", padding: "10px 24px", borderRadius: "100px", fontSize: "14px", fontWeight: 700, letterSpacing: "1px" }}>
                    {item.tag}
                  </span>
                  <h3 className="media-overlay-title" style={{ fontSize: "36px", fontWeight: 700, color: "white", margin: 0, letterSpacing: "-1px" }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .media-gallery-section { height: 320vh; background: #000 !important; }
        .media-gallery-badge { font-size: 13px; color: #4F46E5; }
        .media-gallery-title { font-size: 72px; }
        .media-gallery-desc { font-size: 19px; max-width: 450px; opacity: 0.85; }
        .media-gallery-card { width: 900px; }

        @media (max-width: 1536px) {
           .media-gallery-title { font-size: 64px; }
           .media-gallery-card { width: 750px; }
           .media-gallery-scroll { padding-left: 450px; }
        }

        @media (max-width: 1024px) {
          .media-gallery-text { left: 4%; max-width: 380px; }
          .media-gallery-scroll { padding-left: 60vw; }
          .media-gallery-card { width: 75vw; }
        }

        @media (max-width: 768px) {
          /* On mobile, standardizing the horizontal scroll overlay */
          .media-gallery-section { height: 250vh; }
          .media-gallery-text {
            top: 15%; /* Push text up */
            transform: translateY(0);
            left: 5%;
            right: 5%;
            max-width: none;
            z-index: 50;
            background: linear-gradient(to bottom, rgba(10,10,10,0.9) 50%, transparent 100%);
            padding-bottom: 20px;
            text-align: center;
          }
          .media-gallery-badge { margin: 0 auto 16px !important; display: inline-block !important; }
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
