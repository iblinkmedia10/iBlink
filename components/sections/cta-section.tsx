"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(72px, 10vw, 120px) 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hairline grid texture — consistent with contact section & footer */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 85%)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 32px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            padding: "clamp(32px, 7vw, 56px) clamp(24px, 6vw, 48px)",
            background: "#11141C",
            border: "1px solid rgba(247,245,240,0.08)",
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(28px, 6vw, 40px)",
          }}
        >
          {/* Amber hairline accent — matches contact card's top accent */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: "32px",
              right: "32px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #FF8A3D, transparent)",
            }}
          />

          <motion.div
            className="cta-left-block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: "480px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FF8A3D",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#FF8A3D",
                }}
              >
                Next campaign
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.6vw, 2.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#F7F5F0",
                margin: 0,
              }}
            >
              Ready to scale your next campaign?
            </h2>

            <p
              style={{
                color: "#8B92A6",
                fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
                marginTop: "12px",
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Collaborate. Create. Influence. Repeat.
            </p>
          </motion.div>

          <motion.div
            className="cta-right-block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "20px",
              maxWidth: "360px",
            }}
          >
            <p
              style={{
                color: "#8B92A6",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Whether you&rsquo;re a brand looking to scale or a creator
              seeking meaningful opportunities, iBlink Media helps turn
              collaborations into measurable results.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 32px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#0B0E14",
                textDecoration: "none",
                background: "#FF8A3D",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="cta-work-with-us"
            >
              Work with us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .cta-work-with-us:hover {
          filter: brightness(1.08);
        }
        .cta-work-with-us:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: 3px;
        }
        @media (max-width: 640px) {
          .cta-left-block,
          .cta-right-block {
            max-width: 100% !important;
          }
          .cta-right-block {
            align-items: center !important;
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