"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function InputField({ label, id, type = "text", placeholder, value, onChange, required, textarea }) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "15px",
    border: `1.5px solid ${focused ? "#4F46E5" : "#e2e8f0"}`,
    borderRadius: "12px",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    color: "#0a0a0a",
    background: "white",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxShadow: focused ? "0 0 0 3px rgba(79,70,229,0.1)" : "none",
    resize: textarea ? "vertical" : "none",
    minHeight: textarea ? "100px" : "auto",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "13px",
          fontWeight: 600,
          color: "#374151",
          marginBottom: "8px",
          letterSpacing: "0.1px",
        }}
      >
        {label}
        {required && <span style={{ color: "#ef4444", marginLeft: "3px" }}>*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={baseStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={baseStyle}
        />
      )}
    </div>
  );
}

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation out
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(6px)",
              zIndex: 9998,
            }}
          />

          {/* Modal Centering Wrapper */}
          <div 
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              pointerEvents: "none",
              padding: "20px"
            }}
          >
            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: "100%",
                maxWidth: "520px",
                pointerEvents: "auto",
              }}
            >
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                boxShadow: "0 40px 100px rgba(0,0,0,0.2), 0 10px 30px rgba(79,70,229,0.1)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                  padding: "32px 36px",
                  position: "relative",
                }}
              >
                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div style={{ fontSize: "28px", marginBottom: "10px" }}>🎓</div>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    color: "white",
                    letterSpacing: "-0.3px",
                    marginBottom: "6px",
                  }}
                >
                  {submitted ? "You're All Set! 🎉" : "Enroll in Innoworq Academy"}
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {submitted
                    ? "Our team will contact you shortly."
                    : "Fill in your details and our team will reach out to you promptly."}
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: "36px" }}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ textAlign: "center", padding: "24px 0" }}
                    >
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.1))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 20px",
                          fontSize: "36px",
                        }}
                      >
                        ✅
                      </div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          color: "#0a0a0a",
                          marginBottom: "12px",
                        }}
                      >
                        Thank You, {form.name || "there"}!
                      </h3>
                      <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, marginBottom: "28px" }}>
                        Your enquiry has been submitted. Our team will contact you shortly at{" "}
                        <strong style={{ color: "#4F46E5" }}>{form.email}</strong>.
                      </p>
                      <motion.button
                        onClick={handleClose}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          padding: "14px 36px",
                          background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          fontSize: "15px",
                          fontWeight: 600,
                          cursor: "pointer",
                          fontFamily: "'Poppins', sans-serif",
                          boxShadow: "0 6px 20px rgba(79,70,229,0.3)",
                        }}
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                    >
                      <InputField
                        label="Full Name"
                        id="contact-name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                      />
                      <InputField
                        label="Email Address"
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                      />
                      <InputField
                        label="Phone Number"
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        required
                      />
                      <InputField
                        label="Message"
                        id="contact-message"
                        placeholder="Any questions or special requirements? (Optional)"
                        value={form.message}
                        onChange={handleChange("message")}
                        textarea
                      />

                      <motion.button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={submitting}
                        whileHover={!submitting ? { scale: 1.02, boxShadow: "0 12px 30px rgba(79,70,229,0.4)" } : {}}
                        whileTap={!submitting ? { scale: 0.98 } : {}}
                        style={{
                          width: "100%",
                          padding: "16px",
                          background: submitting
                            ? "#e2e8f0"
                            : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                          color: submitting ? "#94a3b8" : "white",
                          border: "none",
                          borderRadius: "12px",
                          fontSize: "16px",
                          fontWeight: 700,
                          cursor: submitting ? "not-allowed" : "pointer",
                          fontFamily: "'Poppins', sans-serif",
                          boxShadow: submitting ? "none" : "0 6px 20px rgba(79,70,229,0.3)",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        {submitting ? (
                          <>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              style={{ animation: "spin 1s linear infinite" }}
                            >
                              <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          "Submit Enquiry →"
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
