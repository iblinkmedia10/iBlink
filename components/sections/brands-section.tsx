"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { brandLogos } from "@/components/site-content";

export function BrandsSection() {
  const repeatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(32px, 6vw, 64px) 0",
        marginTop: 0,
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
            "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, transparent 88%)",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 32px)",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
              Trusted by
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#F7F5F0",
              margin: "0 0 clamp(28px, 5vw, 44px)",
            }}
          >
            Brands that trust us
          </h2>
        </motion.div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            padding: "16px 0",
            background: "#11141C",
            border: "1px solid rgba(247,245,240,0.06)",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: "24px",
              right: "24px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #FF8A3D, transparent)",
            }}
          />

          <div className="ibm-marquee-fade-left" />
          <div className="ibm-marquee-fade-right" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            style={{
              display: "flex",
              gap: "clamp(32px, 8vw, 64px)",
              width: "max-content",
              alignItems: "center",
            }}
          >
            {repeatedLogos.map((logo, index) =>
              logo.src ? (
                <img
                  key={`${logo.name}-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  className="ibm-brand-logo"
                  style={{
                    height: "clamp(28px, 4.5vw, 40px)",
                    width: "auto",
                    maxWidth: "clamp(80px, 18vw, 140px)",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <span key={`${logo.name}-${index}`} className="ibm-brand-logo ibm-brand-logo-fallback">
                  {logo.name}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ibm-marquee-fade-left,
        .ibm-marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(40px, 10vw, 96px);
          z-index: 3;
          pointer-events: none;
        }
        .ibm-marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, #0B0E14, transparent);
        }
        .ibm-marquee-fade-right {
          right: 0;
          background: linear-gradient(270deg, #0B0E14, transparent);
        }
        .ibm-brand-logo {
          box-sizing: content-box;
          padding: 10px 14px;
          border: 1px solid rgba(247,245,240,0.14);
          border-radius: 10px;
          background: rgba(247,245,240,0.92);
          filter: grayscale(100%) contrast(0.96);
          opacity: 0.88;
          transition: opacity 0.28s ease, filter 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
        }
        .ibm-brand-logo-fallback {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(80px, 18vw, 140px);
          height: clamp(28px, 4.5vw, 40px);
          padding: 0 14px;
          border: 1px solid rgba(247,245,240,0.12);
          border-radius: 8px;
          color: #0B0E14;
          font-size: 0.82rem;
          font-weight: 800;
          background: rgba(247,245,240,0.92);
          filter: none;
          opacity: 0.88;
          white-space: nowrap;
        }
        .ibm-brand-logo:hover {
          background: #FFFFFF;
          filter: grayscale(0%) brightness(1);
          opacity: 1;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 24px rgba(255,138,61,0.18);
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
