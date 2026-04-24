"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "No. The AI Generalist role is about knowing how to string together AI tools, APIs, and no-code platforms. You will learn 'Vibe Coding' which allows you to build software by talking to AI assistants rather than writing manual syntax."
  },
  {
    question: "How is this different from an online course?",
    answer: "This is an intensive, cohort-based practical bootcamp. You will not be watching pre-recorded videos. Every session is live, interactive, and focused on building real agentic workflows that you can add to your portfolio immediately."
  },
  {
    question: "What tools will I actually master?",
    answer: "We cover the modern AI stack: Make.com, n8n for automation workflows, Claude and ChatGPT for prompt engineering, Vapi for voice agents, and Cursor/Antigravity for rapid full-stack development."
  },
  {
    question: "Is there a certificate provided?",
    answer: "Yes. Upon successful completion of your capstone project, you will receive the 'AI Generalist' Professional Certificate from Innoworq Academy, which you can add directly to your LinkedIn and resume."
  },
  {
    question: "What happens if I miss a live class?",
    answer: "All live sessions are recorded and made available within 24 hours. You'll also have access to our private community where you can ask questions and catch up."
  }
];

function FAQItem({ faq, index, isOpen, toggleOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        overflow: "hidden"
      }}
    >
      <button
        onClick={toggleOpen}
        style={{
          width: "100%",
          padding: "32px 0",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left"
        }}
      >
        <h3 style={{
          fontSize: "20px",
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          color: isOpen ? "#4F46E5" : "#0a0a0a",
          letterSpacing: "-0.3px",
          transition: "color 0.3s ease"
        }}>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ ease: "backOut", duration: 0.3 }}
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            borderRadius: "50%",
            background: isOpen ? "rgba(79,70,229,0.1)" : "#f1f5f9",
            color: isOpen ? "#4F46E5" : "#64748b"
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          >
            <p style={{
              paddingBottom: "32px",
              paddingRight: "80px",
              fontSize: "16px",
              color: "#475569",
              lineHeight: 1.6
            }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default
  const targetRef = useRef(null);
  const inView = useInView(targetRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" style={{ padding: "160px 0", background: "white" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }} ref={targetRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#4F46E5", textTransform: "uppercase", letterSpacing: "1px" }}>
            FAQ
          </span>
          <h2 style={{
            fontSize: "clamp(40px, 5vw, 56px)",
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: "#0a0a0a",
            letterSpacing: "-0.04em",
            marginTop: "16px"
          }}>
            Questions? <span style={{ color: "#94a3b8" }}>Answers.</span>
          </h2>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
