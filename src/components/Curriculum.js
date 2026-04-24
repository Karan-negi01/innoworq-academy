"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const modules = [
  {
    number: "01",
    title: "Introduction to AI Generalist Role",
    duration: "2 hrs",
    description: "Understand what it means to be an AI Generalist in today's job market. Explore the AI landscape, career paths, and how companies are leveraging AI talent.",
    topics: ["AI Generalist vs Specialist", "Job market", "Tools overview"],
  },
  {
    number: "02",
    title: "AI Fundamentals & Core Concepts",
    duration: "2 hrs",
    description: "Build a solid foundation in AI concepts — from machine learning to neural networks.",
    topics: ["Machine learning", "Neural networks", "Key terminologies"],
  },
  {
    number: "03",
    title: "Foundations of LLMs, RAG & MCP",
    duration: "2 hrs",
    description: "Dive into Large Language Models, Retrieval-Augmented Generation, and the Model Context Protocol.",
    topics: ["LLM Architecture", "RAG", "MCP Protocol"],
  },
  {
    number: "04",
    title: "Advanced Prompt Engineering",
    duration: "2 hrs",
    description: "Master the art and science of prompt engineering. Learn techniques that unlock the full potential of AI models.",
    topics: ["Chain-of-thought", "Few-shot", "System prompts"],
  },
  {
    number: "05",
    title: "Diffusion Models & Generative Media",
    duration: "2 hrs",
    description: "Explore the world of generative AI for images, video, audio, and music.",
    topics: ["Stable Diffusion", "AI Video", "Suno Music"],
  },
  {
    number: "06",
    title: "Vibe Coding – Full-Stack Foundations",
    duration: "3 hrs",
    description: "Learn to build full-stack applications using AI-powered coding assistants without typing syntax.",
    topics: ["AI assistants", "Rapid dev", "Deployment"],
  },
  {
    number: "07",
    title: "Agentic Workflows & Automation",
    duration: "3 hrs",
    description: "Build autonomous AI agents and complex automation pipelines using n8n and Make.",
    topics: ["n8n workflows", "Make.com", "Voice agents"],
  },
  {
    number: "08",
    title: "Data Ethics & Responsible AI",
    duration: "2 hrs",
    description: "Navigate the ethical landscape of AI. Learn about bias, fairness, and privacy.",
    topics: ["Bias", "Privacy", "Frameworks"],
  },
  {
    number: "09",
    title: "Future Careers & Portfolio",
    duration: "2 hrs",
    description: "Prepare for the AI job market. Build a standout portfolio and craft your brand.",
    topics: ["Portfolio", "LinkedIn", "Interviews"],
  },
];

function ModuleCard({ mod, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "white",
        borderRadius: "24px",
        padding: "32px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
        marginBottom: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div 
          style={{
            fontSize: "14px",
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "#4F46E5",
            letterSpacing: "1px",
          }}
        >
          MODULE {mod.number}
        </div>
        <div style={{ fontSize: "14px", color: "#64748b", fontWeight: 600 }}>
          {mod.duration}
        </div>
      </div>

      <h3
        style={{
          fontSize: "24px",
          fontWeight: 700,
          fontFamily: "'Inter', sans-serif",
          color: "#0a0a0a",
          letterSpacing: "-0.5px",
          lineHeight: 1.2
        }}
      >
        {mod.title}
      </h3>
      
      <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
        {mod.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
        {mod.topics.map((topic) => (
          <span
            key={topic}
            style={{
              padding: "6px 12px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#64748b",
            }}
          >
            {topic}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Curriculum() {
  const totalHours = modules.reduce((acc, m) => acc + parseInt(m.duration), 0);
  const containerRef = useRef(null);

  return (
    <section
      id="curriculum"
      style={{
        padding: "160px 0",
        background: "#fafafa",
        position: "relative"
      }}
    >
      <div 
        ref={containerRef}
        style={{ 
          maxWidth: "1400px", 
          margin: "0 auto", 
          padding: "0 24px",
        }}
        className="curriculum-container"
      >
        {/* Left Sticky Side */}
        <div className="sticky-sidebar">
          <span
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 700,
              color: "#4F46E5",
              letterSpacing: "1px",
              marginBottom: "16px",
              textTransform: "uppercase"
            }}
          >
            Curriculum
          </span>
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: "#0a0a0a",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Everything
            <br />
            you need to
            <br />
            <span style={{ color: "#94a3b8", fontStyle: "italic", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>
              execute.
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: "40px",
              maxWidth: "400px"
            }}
          >
            A carefully structured journey from AI fundamentals to advanced applications — {totalHours} hours of intensive, practical learning.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Total Training", value: `${totalHours} Hours` },
              { label: "Modules", value: "9 Comprehensive" },
              { label: "Pacing", value: "3 Classes per Week" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "20px",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span style={{ fontSize: "14px", color: "#64748b", fontWeight: 500 }}>{s.label}</span>
                <strong style={{ fontSize: "15px", color: "#0a0a0a", fontWeight: 700 }}>{s.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scrolling Side */}
        <div className="scrolling-content">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.number} mod={mod} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .curriculum-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          align-items: start;
        }
        .sticky-sidebar {
          position: sticky;
          top: 120px;
        }
        @media (max-width: 992px) {
          .curriculum-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .sticky-sidebar {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
}
