"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

// Header removed — use a local header height constant for layout
const HEADER_HEIGHT = 72;

export function HeroSection() {
  return (
    <section
      className="hero hero-gradient-bg"
      id="home"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: `calc(100svh - ${HEADER_HEIGHT}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0E14",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.35) grayscale(0.3)",
        }}
      >
        <source src="/lv_0_20250705155917.mp4" type="video/mp4" />
      </video>

      {/* Ink scrim over video — same tone as every other section's background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(11,14,20,0.75), rgba(11,14,20,0.96))",
          zIndex: 1,
        }}
      />

      {/* Hairline grid texture — consistent with the rest of the site */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 88%)",
          zIndex: 1,
        }}
      />

      <div
        className="section-shell position-relative d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          zIndex: 2,
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(20px, 4vh, 40px) clamp(16px, 4vw, 24px)",
          width: "100%",
        }}
      >
        <div className="row w-100 justify-content-center align-items-center">
          <div className="col-12 col-lg-8">
            {/* ON AIR style signal — same signature badge as the contact section */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
                <div
                style={{
                  width: "clamp(300px, 86vw, 820px)",
                  aspectRatio: "3 / 1.6",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.img
                  src="/logo.png"
                  alt="iBlink Media"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: "clamp(1.9rem, 5.5vw, 3.6rem)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#F7F5F0",
              }}
            >
              Influencer marketing,
              <br />
              made{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ position: "relative", zIndex: 1, color: "#0B0E14" }}>
                  smarter
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
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                color: "#8B92A6",
                fontSize: "clamp(0.95rem, 2.3vw, 1.15rem)",
                marginBottom: "28px",
                maxWidth: "640px",
                marginInline: "auto",
                lineHeight: 1.65,
              }}
            >
              iBlink helps brands scale through creators, content, and
              campaigns that drive real results.
            </motion.p>

            <motion.div
              className="d-flex justify-content-center gap-3 flex-wrap hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ gap: "12px" }}
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "clamp(13px, 3vw, 15px) clamp(24px, 5vw, 32px)",
                  fontSize: "clamp(0.9rem, 2.4vw, 1rem)",
                  minHeight: "44px",
                  borderRadius: "10px",
                  background: "#FF8A3D",
                  color: "#0B0E14",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="ibm-hero-primary-btn"
              >
                Start a campaign
              </motion.a>

              <motion.a
                href="#benefits"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "clamp(13px, 3vw, 15px) clamp(24px, 5vw, 32px)",
                  fontSize: "clamp(0.9rem, 2.4vw, 1rem)",
                  minHeight: "44px",
                  borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid rgba(247,245,240,0.18)",
                  color: "#F7F5F0",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="ibm-hero-secondary-btn"
              >
                Explore services
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                marginTop: "28px",
                fontSize: "clamp(0.82rem, 1.9vw, 0.9rem)",
                color: "#5C6378",
                lineHeight: 1.55,
                paddingInline: "8px",
              }}
            >
              Trusted by growing brands for creator discovery, campaign
              execution, and transparent reporting.
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .ibm-hero-primary-btn:hover {
          filter: brightness(1.08);
        }
        .ibm-hero-secondary-btn:hover {
          background: rgba(247,245,240,0.06) !important;
          border-color: rgba(247,245,240,0.32) !important;
        }
        .ibm-hero-primary-btn:focus-visible,
        .ibm-hero-secondary-btn:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: 2px;
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