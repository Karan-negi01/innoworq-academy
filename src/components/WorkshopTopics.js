"use client";
import { motion } from "framer-motion";

export default function WorkshopTopics() {
  const topics = [
    {
      title: "Vibe Coding",
      description: "Learn to code with the flow. Leverage AI to write code faster, cleaner, and with more intuition.",
      icon: "⚡"
    },
    {
      title: "AI Automation",
      description: "Automate boring tasks. Build agents and workflows that work for you 24/7 using n8n and Make.com.",
      icon: "🤖"
    },
    {
      title: "Generative Media",
      description: "Deep dive into generative media. Master Stable Diffusion, Midjourney, and video generation tools.",
      icon: "🎨"
    }
  ];

  return (
    <section id="topics" style={{ padding: "100px 24px", background: "#0a0a0a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "14px", color: "#4F46E5", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What You'll Learn</h2>
          <h3 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#fff", fontWeight: 800 }}>Workshop Highlights</h3>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "48px",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "32px",
                transition: "all 0.3s"
              }}
              whileHover={{ y: -10, border: "1px solid rgba(79, 70, 229, 0.3)" }}
            >
              <div style={{ fontSize: "40px", marginBottom: "24px" }}>{topic.icon}</div>
              <h4 style={{ fontSize: "24px", color: "#fff", fontWeight: 700, marginBottom: "16px" }}>{topic.title}</h4>
              <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "17px" }}>{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
