"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/components/site-content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(64px, 9vw, 96px) 0",
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
            "radial-gradient(ellipse 70% 55% at 50% 30%, black 30%, transparent 85%)",
        }}
      />

      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 32px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "clamp(36px, 6vw, 52px)" }}
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
              Good to know
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
            Frequently asked questions
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
            Still wondering how we work? We&rsquo;ve got you covered.
          </p>
        </motion.div>

        {/* FAQ List with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 140, damping: 20 }}
                style={{
                  background: "#11141C",
                  border: isOpen
                    ? "1px solid rgba(255,138,61,0.35)"
                    : "1px solid rgba(247,245,240,0.08)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease",
                }}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "clamp(1rem, 4vw, 1.25rem) clamp(1.1rem, 4vw, 1.5rem)",
                    background: "transparent",
                    border: "none",
                    color: "#F7F5F0",
                    fontSize: "clamp(0.92rem, 2.4vw, 1.02rem)",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "16px",
                    textAlign: "left",
                  }}
                  className="ibm-faq-trigger"
                >
                  {faq.question}

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    style={{
                      fontSize: "1.3rem",
                      lineHeight: 1,
                      color: "#FF8A3D",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35 },
                        opacity: { duration: 0.22 },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding:
                            "0 clamp(1.1rem, 4vw, 1.5rem) clamp(1rem, 4vw, 1.25rem)",
                          color: "#8B92A6",
                          fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                          lineHeight: 1.65,
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .ibm-faq-trigger:hover {
          background: rgba(247,245,240,0.02);
        }
        .ibm-faq-trigger:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: -2px;
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