"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "01",
    title: "Vibe Coding & Automation",
    description:
      "Forget typing syntax. Learn to generate production-ready code using high-end AI agents. We focus on outcome, not boilerplate.",
    color: "#FF8C00",
    tag: "Build",
  },
  {
    number: "02",
    title: "Industry-Ready Skills",
    description:
      "Every module is built around real workflows used by top companies. No fluff — just the skills that get you hired.",
    color: "#4D7FFF",
    tag: "Work",
  },
  {
    number: "03",
    title: "Live Command Portfolio",
    description:
      "Don't just show certificates. Walk into interviews with deployed AI agents that actually run live.",
    color: "#E8291C",
    tag: "Ship",
  },
  {
    number: "04",
    title: "Zero-Fluff Curriculum",
    description:
      "20 hours of dense, action-oriented learning. Every minute is spent on tools you'll use on the job tomorrow.",
    color: "#FF8C00",
    tag: "Execute",
  },
];

function FeatureRow({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="feature-row"
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr auto",
        gap: "32px",
        alignItems: "center",
        padding: "32px 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.015)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {/* Accent left bar on hover */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          background: feature.color,
          borderRadius: "2px",
          transformOrigin: "top",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "'Inter', sans-serif",
          color: feature.color,
          letterSpacing: "1px",
          opacity: 0.8,
        }}
      >
        {feature.number}
      </div>

      {/* Text */}
      <div>
        <h3
          className="feature-title"
          style={{
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            color: "#ffffff",
            letterSpacing: "-0.4px",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="feature-desc"
          style={{
            color: "rgba(255,255,255,0.38)",
            lineHeight: 1.65,
            fontFamily: "'Inter', sans-serif",
            maxWidth: "520px",
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Tag pill */}
      <div
        style={{
          padding: "6px 16px",
          borderRadius: "100px",
          border: `1px solid ${feature.color}40`,
          background: `${feature.color}10`,
          fontSize: "12px",
          fontWeight: 700,
          color: feature.color,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {feature.tag}
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      style={{
        background: "#000000",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top-right glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Two-column header: left = big headline, right = sub + stat */}
        <div className="features-header-grid">
          {/* Left: Editorial headline */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 32 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div
              className="features-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(255,140,0,0.08)",
                border: "1px solid rgba(255,140,0,0.2)",
                borderRadius: "100px",
                marginBottom: "28px",
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
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FF8C00",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Why Us
              </span>
            </div>

            <h2
              className="features-title"
              style={{
                fontWeight: 800,
                fontFamily: "'Inter', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
              }}
            >
              Built for the
              <br />
              AI Era.
              <br />
              <span
                style={{
                  color: "#ffffff",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Not the Past.
              </span>
            </h2>
          </motion.div>

          {/* Right: description + stat block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingBottom: "8px",
            }}
          >
            <p
              className="features-subtitle"
              style={{
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                fontFamily: "'Inter', sans-serif",
                marginBottom: "40px",
              }}
            >
              We abandoned boring theory. Every session is focused purely on
              execution — building your intuition for the tools that matter right
              now.
            </p>

            {/* Mini stats row */}
            <div
              className="mini-stats-row"
              style={{
                display: "flex",
                gap: "40px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "32px",
              }}
            >
              {[
                { val: "20+", label: "Live Hours" },
                { val: "9", label: "Modules" },
                { val: "16+", label: "AI Tools" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      fontFamily: "'Inter', sans-serif",
                      color: "#ffffff",
                      letterSpacing: "-1px",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            margin: "72px 0 0",
          }}
        />

        {/* Feature rows */}
        <div>
          {features.map((feature, i) => (
            <FeatureRow key={feature.number} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .features-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }
        .features-title { font-size: clamp(44px, 6vw, 76px); }
        .features-subtitle { font-size: 17px; max-width: 420px; }
        .feature-title { font-size: 20px; }
        .feature-desc { font-size: 15px; }
        .feature-row { border-radius: 4px; margin: 0 -16px; padding-left: 16px; padding-right: 16px; transition: background 0.25s ease; }

        @media (max-width: 900px) {
          .features-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .features-subtitle { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .features-header-grid { text-align: center !important; }
          .features-header-grid > div { align-items: center !important; }
          .features-title { font-size: 36px !important; text-align: center !important; }
          .features-subtitle { font-size: 15px !important; text-align: center !important; margin: 0 auto 32px !important; }
          .mini-stats-row { justify-content: center !important; }
          .features-badge { margin: 0 auto 24px !important; display: flex !important; width: fit-content !important; }
          .feature-title { font-size: 17px; }
          .feature-desc { font-size: 14px; }
          .feature-row {
            grid-template-columns: 40px 1fr !important;
            gap: 20px !important;
          }
          .feature-tag { display: none; }
        }
      `}</style>
    </section>
  );
}
