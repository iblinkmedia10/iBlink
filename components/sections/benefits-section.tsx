"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { flipCards } from "@/components/site-content";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(64px, 9vw, 100px) 0",
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
          zIndex: 1,
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
              Why iBlink
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 4.2vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#F7F5F0",
              margin: 0,
            }}
          >
            Influencer marketing that actually works
          </h2>

          <p
            style={{
              color: "#8B92A6",
              maxWidth: "560px",
              margin: "14px auto 0",
              fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
              lineHeight: 1.6,
            }}
          >
            We don&rsquo;t just run campaigns &mdash; we create measurable
            impact with creators your audience truly trusts.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%, 240px),1fr))",
            gap: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          {flipCards.map((card, index) => (
            <TiltCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FLIP CARD ================= */

function TiltCard({ card, index }: any) {
  const [flip, setFlip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flip}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setFlip((prev: boolean) => !prev);
          }
        }}
        onClick={() => setFlip((prev: boolean) => !prev)}
        animate={flip ? "flipped" : "rest"}
        whileHover="hover"
        variants={{
          rest: { rotateY: 0 },
          flipped: { rotateY: 180 },
          hover: { y: -3 },
        }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(250px, 42vw, 320px)",
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
        className="ibm-flip-card"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* FRONT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "16px",
              backfaceVisibility: "hidden",
              background: "#11141C",
              border: "1px solid rgba(247,245,240,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "clamp(18px, 3.5vw, 22px)",
              overflow: "hidden",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: "20px",
                right: "20px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, #FF8A3D, transparent)",
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "fit-content",
                padding: "5px 11px",
                borderRadius: "999px",
                fontSize: "0.65rem",
                color: "#FFB37A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                background: "rgba(255,138,61,0.08)",
                border: "1px solid rgba(255,138,61,0.2)",
              }}
            >
              {card.accent}
            </div>

            <div
              style={{
                fontSize: "clamp(1.9rem, 5vw, 2.4rem)",
                textAlign: "center",
                margin: "8px 0",
              }}
            >
              {card.emoji}
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                fontWeight: 700,
                color: "#F7F5F0",
                lineHeight: 1.28,
                wordBreak: "break-word",
                padding: "0 4px",
                letterSpacing: "-0.01em",
              }}
            >
              {card.title}
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.72rem",
                color: "#5C6378",
                marginTop: "10px",
                letterSpacing: "0.02em",
              }}
            >
              Tap to explore
            </div>
          </div>

          {/* BACK */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              borderRadius: "16px",
              background: "#11141C",
              border: "1px solid rgba(255,138,61,0.3)",
              padding: "clamp(1.1rem, 3vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 2.1rem)",
                marginBottom: "10px",
              }}
            >
              {card.emoji}
            </div>

            <h3
              style={{
                color: "#F7F5F0",
                fontWeight: 700,
                fontSize: "clamp(0.92rem, 2vw, 1.02rem)",
                lineHeight: 1.28,
                letterSpacing: "-0.01em",
                maxWidth: "92%",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                color: "#FF8A3D",
                fontWeight: 700,
                marginTop: "8px",
                marginBottom: 0,
                fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
              }}
            >
              {card.accent}
            </p>

            <p
              style={{
                color: "#8B92A6",
                fontSize: "clamp(0.82rem, 2vw, 0.88rem)",
                marginTop: "10px",
                marginBottom: 0,
                lineHeight: 1.55,
              }}
            >
              {card.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}