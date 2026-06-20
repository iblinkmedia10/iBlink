"use client";

import { motion } from "framer-motion";
import { featureItems } from "@/components/site-content";

export function FeatureStrip() {
  const repeatedItems = [...featureItems, ...featureItems];

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "16px 0",
        background: "#11141C",
        borderTop: "1px solid rgba(247,245,240,0.08)",
        borderBottom: "1px solid rgba(247,245,240,0.08)",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="ibm-strip-fade-left" />
      <div className="ibm-strip-fade-right" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear",
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(16px, 4vw, 28px)",
          width: "max-content",
          whiteSpace: "nowrap",
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
              fontWeight: 600,
              color: "#8B92A6",
              letterSpacing: "0.01em",
            }}
          >
            {item}

            {index < repeatedItems.length - 1 && (
              <span
                aria-hidden
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#FF8A3D",
                  flexShrink: 0,
                }}
              />
            )}
          </span>
        ))}
      </motion.div>

      <style>{`
        .ibm-strip-fade-left,
        .ibm-strip-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(32px, 8vw, 80px);
          z-index: 2;
          pointer-events: none;
        }
        .ibm-strip-fade-left {
          left: 0;
          background: linear-gradient(90deg, #11141C, transparent);
        }
        .ibm-strip-fade-right {
          right: 0;
          background: linear-gradient(270deg, #11141C, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}