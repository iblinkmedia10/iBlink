"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trophies } from "@/components/site-content";

/* Counter hook */
function useCountUp(target: number, isActive: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration, isActive]);

  return count;
}

/* Floating platform icons — ambient signature, amber-toned */
function FloatingSocials() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const platforms = ["instagram", "youtube"];

    const generated = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: 4 + Math.random() * 92,
      delay: Math.random() * 4,
      duration: 7 + Math.random() * 4,
      size: 16 + Math.random() * 14,
      drift: Math.random() * 60 - 30,
      type: platforms[i % 2],
    }));

    setItems(generated);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: [40, -420],
            opacity: [0, 0.5, 0.5, 0],
            x: [0, item.drift],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 1,
          }}
          style={{
            position: "absolute",
            bottom: 0,
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        >
          {item.type === "instagram" ? <InstagramIcon /> : <YouTubeIcon />}
        </motion.div>
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="6"
        stroke="#FF8A3D"
        strokeWidth="1.6"
        strokeOpacity="0.55"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="#FF8A3D"
        strokeWidth="1.6"
        strokeOpacity="0.55"
      />
      <circle cx="17" cy="7" r="1" fill="#FF8A3D" fillOpacity="0.55" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <rect
        x="2.5"
        y="6.5"
        width="19"
        height="11"
        rx="4"
        stroke="#FF8A3D"
        strokeWidth="1.6"
        strokeOpacity="0.55"
      />
      <polygon points="10,9.3 15.5,12 10,14.7" fill="#FF8A3D" fillOpacity="0.55" />
    </svg>
  );
}

export function TrophySection() {
  return (
    <section
      id="impact"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0B0E14",
        padding: "clamp(72px, 10vw, 120px) 0",
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

      {/* Floating platform icons — ambient signature */}
      <FloatingSocials />

      <div
        style={{
          maxWidth: "1100px",
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
              Our impact
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
            Numbers that back it up
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
            India&rsquo;s trusted influencer marketing and talent management
            agency. We don&rsquo;t just say it &mdash; we prove it with real
            numbers.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "clamp(1rem, 3vw, 1.5rem)",
          }}
        >
          {trophies.map((trophy) => (
            <TrophyCard key={trophy.label} trophy={trophy} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrophyCard({ trophy }: { trophy: (typeof trophies)[number] }) {
  const numericValue = parseInt(trophy.value.replace(/\D/g, ""), 10) || 0;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const count = useCountUp(numericValue, isInView);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      style={{
        borderRadius: "16px",
        padding: "clamp(24px, 5vw, 28px) clamp(18px, 4vw, 22px)",
        background: "#11141C",
        border: "1px solid rgba(247,245,240,0.08)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "22px",
          right: "22px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #FF8A3D, transparent)",
        }}
      />

      {/* NUMBER */}
      <div
        style={{
          fontSize: "clamp(2rem, 6.5vw, 2.6rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: "#F7F5F0",
          marginBottom: "10px",
        }}
      >
        {count}
        {trophy.value.replace(/[0-9]/g, "")}
      </div>

      {/* TREND LINE */}
      <svg
        width="110"
        height="28"
        viewBox="0 0 100 28"
        style={{ margin: "0 auto 14px auto", display: "block" }}
        role="presentation"
      >
        <motion.polyline
          points={trophy.points}
          fill="none"
          stroke="#FF8A3D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="120"
          animate={{ strokeDashoffset: isInView ? 0 : 120 }}
          initial={{ strokeDashoffset: 120 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>

      {/* LABEL */}
      <div
        style={{
          fontSize: "clamp(0.8rem, 2vw, 0.92rem)",
          color: "#8B92A6",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        {trophy.label}
      </div>
    </motion.div>
  );
}
