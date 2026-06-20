"use client";

import { motion } from "framer-motion";
import { highlightCards } from "@/components/site-content";

export function HighlightSection() {
  return (
    <section
      id="why-iblink"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(64px, 9vw, 110px) 0",
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
            "radial-gradient(ellipse 80% 60% at 50% 25%, black 30%, transparent 88%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
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
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 7vw, 60px)",
          }}
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
              The difference
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 4.2vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#F7F5F0",
              margin: 0,
            }}
          >
            Why brands choose iBlink Media
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
              color: "#8B92A6",
              maxWidth: "600px",
              margin: "14px auto 0",
              lineHeight: 1.6,
            }}
          >
            We help brands reach the right audience through strategic
            creator partnerships, impactful content, and
            performance-driven campaigns.
          </p>
        </motion.div>

        {/* CARD HAND — fixed-width playing cards, centered, wraps evenly */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "clamp(1rem, 3vw, 1.75rem)",
          }}
        >
          {highlightCards.map((card) => (
            <PlayingCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>

      <style>{`
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

/* ================= PLAYING CARD ================= */

function PlayingCard({ card }: any) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        whileHover={{ y: -8, rotate: -1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        style={{
          /* Real playing-card aspect ratio: 2.5 x 3.5 */
          width: "clamp(168px, 22vw, 210px)",
          aspectRatio: "2.5 / 3.5",
          borderRadius: "14px",
          background: "#11141C",
          border: "1px solid rgba(247,245,240,0.12)",
          boxShadow:
            "0 1px 0 rgba(247,245,240,0.06) inset, 0 18px 30px rgba(0,0,0,0.45)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(12px, 2.4vw, 16px)",
          boxSizing: "border-box",
        }}
        className="ibm-playing-card"
      >
        {/* Inner border — the printed "card stock" frame */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: "8px",
            borderRadius: "9px",
            border: "1px solid rgba(255,138,61,0.22)",
            pointerEvents: "none",
          }}
        />

        {/* TOP-LEFT INDEX */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
            color: "#FF8A3D",
            position: "relative",
            zIndex: 1,
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: "0.95rem" }}>{card.icon}</span>
        </div>

        {/* CENTER PIP */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(2.1rem, 6vw, 2.6rem)",
              color: "#FF8A3D",
              lineHeight: 1,
            }}
          >
            {card.icon}
          </div>
          <h3
            style={{
              fontSize: "clamp(0.82rem, 1.9vw, 0.92rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "#F7F5F0",
              margin: 0,
              maxWidth: "90%",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontSize: "clamp(0.7rem, 1.6vw, 0.76rem)",
              color: "#8B92A6",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "92%",
            }}
          >
            {card.description}
          </p>
        </div>

        {/* BOTTOM-RIGHT INDEX — mirrored, like a real card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
            color: "#FF8A3D",
            position: "relative",
            zIndex: 1,
            width: "fit-content",
            alignSelf: "flex-end",
            transform: "rotate(180deg)",
          }}
        >
          <span style={{ fontSize: "0.95rem" }}>{card.icon}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}