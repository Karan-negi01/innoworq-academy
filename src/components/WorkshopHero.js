"use client";
import { motion } from "framer-motion";

export default function WorkshopHero({ onEnrollClick, seatsLeft }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 24px 80px",
        background: "#000000",
      }}
    >
      {/* Background glows — brand colours */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Orange top-left */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Red bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,41,28,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Blue center */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(77,127,255,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Seats badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            background: "rgba(255,140,0,0.08)",
            border: "1px solid rgba(255,140,0,0.25)",
            borderRadius: "100px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#FF8C00",
              boxShadow: "0 0 8px #FF8C00",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#FF8C00",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {seatsLeft} / 100 Seats Remaining
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.0,
            marginBottom: "12px",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          Ultimate AI
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.0,
            marginBottom: "32px",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #FF8C00 0%, #E8291C 50%, #4D7FFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}
        >
          Workshop & Training
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "clamp(17px, 1.5vw, 22px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "680px",
            margin: "0 auto 56px",
            lineHeight: 1.65,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          3-Hour Intensive. Sunday 10:00 AM – 1:00 PM. Master Vibe Coding,
          AI Automation, and Generative Media in one session.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Duration", value: "3 Hours" },
            { label: "Schedule", value: "Sun · 10 AM" },
            { label: "Topics", value: "3 Modules" },
            { label: "Investment", value: "₹199" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "28px 40px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.button
            onClick={onEnrollClick}
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,140,0,0.35)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "18px 48px",
              background: "linear-gradient(135deg, #FF8C00, #E8291C)",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              fontSize: "17px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            Enroll Now @ ₹199
          </motion.button>
          <motion.a
            href="#topics"
            whileHover={{ background: "rgba(255,255,255,0.07)" }}
            style={{
              padding: "18px 48px",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "100px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              transition: "background 0.25s ease",
            }}
          >
            View Topics ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
