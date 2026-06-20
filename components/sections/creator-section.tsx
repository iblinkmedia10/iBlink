"use client";

import { motion } from "framer-motion";
import { creatorSteps } from "@/components/site-content";

export function CreatorSection() {
  return (
    <section
      id="empowering-creators"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(72px, 10vw, 100px) 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hairline grid texture — consistent with the rest of the site */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 30%, black 30%, transparent 85%)",
        }}
      />

      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 32px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "clamp(40px, 7vw, 60px)" }}
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
              How it works
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#F7F5F0",
              margin: 0,
            }}
          >
            Grow with iBlink Media
          </h2>

          <p
            style={{
              color: "#8B92A6",
              fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
              marginTop: "12px",
              marginBottom: 0,
              maxWidth: "520px",
              lineHeight: 1.6,
            }}
          >
            We&rsquo;re not just an agency &mdash; we&rsquo;re your growth
            partner.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.4rem, 5vw, 2rem)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "19px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background:
                "linear-gradient(to bottom, rgba(255,138,61,0.4), rgba(247,245,240,0.06))",
            }}
            className="ibm-timeline-line"
          />

          {creatorSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(1rem, 4vw, 1.5rem)",
                position: "relative",
              }}
            >
              {/* NUMBER MARKER */}
              <div
                style={{
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#0B0E14",
                  border: "1px solid rgba(255,138,61,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FF8A3D",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  zIndex: 2,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </div>

              {/* CARD */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "16px",
                  padding: "clamp(18px, 4vw, 24px)",
                  background: "#11141C",
                  border: "1px solid rgba(247,245,240,0.08)",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5C6378",
                    marginBottom: "8px",
                    fontWeight: 700,
                  }}
                >
                  Step {index + 1}
                </div>

                <h3
                  style={{
                    color: "#F7F5F0",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#8B92A6",
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    marginTop: "8px",
                    marginBottom: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>

                <div
                  style={{
                    marginTop: "14px",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "rgba(255,138,61,0.08)",
                    border: "1px solid rgba(255,138,61,0.2)",
                    color: "#FFB37A",
                    fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  {step.tip}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .ibm-timeline-line {
            left: 15px;
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