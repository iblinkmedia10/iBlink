"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(64px, 9vw, 96px) 0 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hairline grid texture — consistent with contact section */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 15% 0%, black 30%, transparent 85%)",
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
        <div className="ibm-footer-grid">
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#FF8A3D",
                  flexShrink: 0,
                }}
              />
              <h3
                style={{
                  fontSize: "clamp(1.3rem, 3.6vw, 1.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#F7F5F0",
                  margin: 0,
                }}
              >
                iBlink Media
              </h3>
            </div>

            <p
              style={{
                color: "#8B92A6",
                marginTop: "16px",
                lineHeight: 1.7,
                fontSize: "0.95rem",
                maxWidth: "300px",
              }}
            >
              Helping brands grow through authentic creator collaborations
              across India.
            </p>
          </div>

          <div>
            <h4
              style={{
                color: "#8B92A6",
                marginBottom: "16px",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Navigation
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <FooterLink href="#home" label="Home" />
              <FooterLink href="#benefits" label="Services" />
              <FooterLink href="#contact" label="Contact" />
            </div>
          </div>

          <div>
            <h4
              style={{
                color: "#8B92A6",
                marginBottom: "16px",
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Social
            </h4>

            <div style={{ display: "flex", gap: "10px" }}>
              {/* <SocialIcon
                icon={<FaLinkedinIn />}
                link="https://www.linkedin.com/"
                label="LinkedIn"
              /> */}
              <SocialIcon
                icon={<FaInstagram />}
                link="https://www.instagram.com/iblink_media"
                label="Instagram"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(247,245,240,0.12), rgba(247,245,240,0.02) 60%)",
            marginTop: "clamp(40px, 6vw, 56px)",
            marginBottom: "0",
          }}
        />

        <div className="ibm-footer-bottom">
          <span>&copy; 2026 iBlink Media. All rights reserved.</span>
          <span style={{ color: "#8B92A6" }}>Built with care by Rupam</span>
        </div>
      </div>

      <style>{`
        .ibm-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: clamp(36px, 6vw, 48px);
        }
        .ibm-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 22px 0 26px;
          color: #8B92A6;
          font-size: 0.82rem;
        }
        .footer-link {
          display: inline-block;
          width: fit-content;
          color: #8B92A6;
          font-size: 0.92rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #FF8A3D;
        }
        .footer-link:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: 3px;
          border-radius: 2px;
        }
        .social-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(247,245,240,0.1);
          color: #8B92A6;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .social-icon-link:hover {
          color: #FF8A3D;
          border-color: rgba(255,138,61,0.4);
          background: rgba(255,138,61,0.06);
        }
        .social-icon-link:focus-visible {
          outline: 2px solid #FF8A3D;
          outline-offset: 2px;
        }
        @media (max-width: 760px) {
          .ibm-footer-grid {
            grid-template-columns: 1fr !important;
          }
          .ibm-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
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
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a href={href} className="footer-link" whileHover={{ x: 3 }}>
      {label}
    </motion.a>
  );
}

function SocialIcon({
  icon,
  link,
  label,
}: {
  icon: ReactNode;
  link: string;
  label: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon-link"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.92 }}
    >
      {icon}
    </motion.a>
  );
}