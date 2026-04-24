"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onEnrollClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
    backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
    borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
  };

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9" />
              <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "#0a0a0a",
              letterSpacing: "-0.3px",
            }}
          >
            Innoworq
            <span style={{ color: "#4F46E5" }}> Academy</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="nav-links-desktop"
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ 
                color: "#4F46E5",
                background: "#f0f0ff" 
              }}
              className="navbar-link"
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.2s",
              }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.button
            id="navbar-enroll-btn"
            onClick={onEnrollClick}
            whileHover={{ 
              y: -1,
              boxShadow: "0 6px 20px rgba(79,70,229,0.45)"
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginLeft: "8px",
              padding: "10px 22px",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
              transition: "all 0.3s",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Enroll Now
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <span
              style={{
                height: "2px",
                background: "#0a0a0a",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                display: "block",
              }}
            />
            <span
              style={{
                height: "2px",
                background: "#0a0a0a",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: mobileOpen ? 0 : 1,
                display: "block",
              }}
            />
            <span
              style={{
                height: "2px",
                background: "#0a0a0a",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                display: "block",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "white",
              borderTop: "1px solid #e2e8f0",
              padding: "16px 24px 24px",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#374151",
                  textDecoration: "none",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onEnrollClick(); }}
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "14px",
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
