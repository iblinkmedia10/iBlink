"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText("info@iblinkmedia.com");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(80px, 11vw, 140px) 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hairline grid texture — broadcast studio reference, very quiet */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 32px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ON AIR style signal indicator — signature element */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px 6px 10px",
            borderRadius: "999px",
            border: "1px solid rgba(255,138,61,0.35)",
            background: "rgba(255,138,61,0.06)",
            marginBottom: "clamp(28px, 5vw, 40px)",
          }}
        >
          <span style={{ position: "relative", width: "8px", height: "8px" }}>
            <motion.span
              animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#FF8A3D",
              }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#FF8A3D",
              }}
            />
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#FF8A3D",
            }}
          >
            Currently booking Q3 campaigns
          </span>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
            gap: "clamp(40px, 6vw, 64px)",
            alignItems: "start",
          }}
          className="ibm-contact-grid"
        >
          {/* Left: editorial masthead-style heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#F7F5F0",
                margin: 0,
              }}
            >
              Let&rsquo;s put your
              <br />
              brand{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ position: "relative", zIndex: 1, color: "#0B0E14" }}>
                  on&nbsp;air
                </span>
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: "-6px",
                    right: "-6px",
                    bottom: "6%",
                    top: "8%",
                    background: "#FF8A3D",
                    zIndex: 0,
                    transform: "skewX(-6deg)",
                    borderRadius: "4px",
                  }}
                />
              </span>
              .
            </h2>

            <p
              style={{
                color: "#8B92A6",
                maxWidth: "440px",
                margin: "clamp(20px, 4vw, 28px) 0 0",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                lineHeight: 1.65,
              }}
            >
              Tell us about your goals, audience, and vision. We&rsquo;ll
              connect you with the right creators and run campaigns built to
              deliver measurable results.
            </p>

            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, auto)",
                gap: "clamp(20px, 4vw, 36px)",
                marginTop: "clamp(36px, 6vw, 52px)",
                paddingTop: "clamp(24px, 4vw, 32px)",
                borderTop: "1px solid rgba(247,245,240,0.1)",
              }}
            >
              {[
                { value: "24h", label: "Response time" },
                { value: "500+", label: "Creators in network" },
                { value: "98%", label: "Client retention" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt
                    style={{
                      fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
                      fontWeight: 800,
                      color: "#F7F5F0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </dt>
                  <dd
                    style={{
                      margin: "4px 0 0",
                      fontSize: "0.8rem",
                      color: "#5C6378",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "#11141C",
              border: "1px solid rgba(247,245,240,0.08)",
              borderRadius: "20px",
              padding: "clamp(28px, 4vw, 36px)",
              position: "relative",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: "28px",
                right: "28px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, #FF8A3D, transparent)",
              }}
            />

            <h3
              style={{
                color: "#F7F5F0",
                fontSize: "1rem",
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Direct line
            </h3>
            <p
              style={{
                color: "#5C6378",
                margin: "6px 0 0",
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              No forms, no gatekeeping &mdash; reach the team directly.
            </p>

            <a
              href="mailto:info@iblinkmedia.com"
              style={{
                display: "block",
                marginTop: "22px",
                padding: "16px 18px",
                borderRadius: "12px",
                background: "#0B0E14",
                border: "1px solid rgba(247,245,240,0.08)",
                color: "#F7F5F0",
                textDecoration: "none",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                fontWeight: 600,
                wordBreak: "break-word",
                transition: "border-color 0.2s ease",
              }}
              className="ibm-email-link"
            >
              info@iblinkmedia.com
            </a>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "14px",
              }}
            >
              <a
                href="mailto:info@iblinkmedia.com?subject=Brand%20Enquiry"
                style={{
                  textAlign: "center",
                  padding: "13px 16px",
                  borderRadius: "10px",
                  background: "#FF8A3D",
                  color: "#0B0E14",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "filter 0.2s ease, transform 0.2s ease",
                }}
                className="ibm-btn-primary"
              >
                Email us
              </a>

              <button
                type="button"
                onClick={handleCopy}
                style={{
                  textAlign: "center",
                  padding: "13px 16px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid rgba(247,245,240,0.16)",
                  color: "#F7F5F0",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                className="ibm-btn-secondary"
              >
                {showCopied ? "Copied ✓" : "Copy email"}
              </button>
            </div>

            <p
              style={{
                marginTop: "20px",
                marginBottom: 0,
                color: "#5C6378",
                fontSize: "0.78rem",
                letterSpacing: "0.02em",
              }}
            >
              Typically replies within one business day.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .ibm-email-link:hover {
          border-color: rgba(255,138,61,0.5) !important;
        }
        .ibm-btn-primary:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }
        .ibm-btn-secondary:hover {
          border-color: rgba(247,245,240,0.32) !important;
          background: rgba(247,245,240,0.04) !important;
        }
        .ibm-btn-primary:focus-visible,
        .ibm-btn-secondary:focus-visible,
        .ibm-email-link:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: 2px;
        }
        @media (max-width: 760px) {
          .ibm-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}