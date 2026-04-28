"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WorkshopHero({ onEnrollClick, seatsLeft }) {
  return (
    <section className="workshop-hero" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "120px 24px 80px",
      background: "#000"
    }}>
      {/* Background with Generated Image Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.5
      }}>
        {/* We'll use a placeholder or the generated image path if we can access it relative to public. 
            Since I generated it in the brain directory, I should ideally move it to public or use a high-end CSS gradient if I can't.
            Actually, I'll use a premium CSS gradient that mimics the prompt for now, or assume the user will place the image.
        */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2) 0%, rgba(0, 0, 0, 1) 100%)",
        }} />
        <div className="grid-overlay" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black, transparent)",
        }} />
      </div>

      <div className="container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        textAlign: "center"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(79, 70, 229, 0.1)",
            border: "1px solid rgba(79, 70, 229, 0.3)",
            borderRadius: "100px",
            color: "#818cf8",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "32px"
          }}
        >
          Limited Seats: {seatsLeft} / 100 Remaining
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "24px",
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Ultimate AI Workshop<br />
          <span style={{ 
            background: "linear-gradient(to right, #818cf8, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>& Training</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "clamp(18px, 1.5vw, 24px)",
            color: "#94a3b8",
            maxWidth: "800px",
            margin: "0 auto 48px",
            lineHeight: 1.6
          }}
        >
          3-Hour Intense Workshop. Sunday from 10:00 AM to 1:00 PM. Master Vibe Coding, AI Automation, and Generative media.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginBottom: "64px"
          }}
        >
          {[
            { label: "Duration", value: "3 Hours" },
            { label: "Schedule", value: "Sunday 10 AM - 1 PM" },
            { label: "Curriculum", value: "3 Core Topics" },
            { label: "Investment", value: "₹199" }
          ].map((item, i) => (
            <div key={i} style={{
              padding: "32px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</div>
              <div style={{ color: "#fff", fontSize: "24px", fontWeight: 700 }}>{item.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.button
            onClick={onEnrollClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "20px 48px",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s"
            }}
          >
            Enroll Now @ ₹199
          </motion.button>
          <motion.a
            href="#topics"
            whileHover={{ background: "rgba(255, 255, 255, 0.1)" }}
            style={{
              padding: "20px 48px",
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "100px",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
          >
            View Topics
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
