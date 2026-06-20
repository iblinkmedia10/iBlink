"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#020617",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {/* LOGO */}
      <motion.img
        src="/logo.png"
        alt="Loading"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "140px",
          marginBottom: "20px"
        }}
      />

      {/* SPINNER */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
        style={{
          width: "40px",
          height: "40px",
          border: "3px solid rgba(255,255,255,0.2)",
          borderTop: "3px solid #60a5fa",
          borderRadius: "50%"
        }}
      />

      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: "16px",
          color: "#94a3b8",
          fontSize: "14px"
        }}
      >
        Loading experience...
      </motion.p>
    </div>
  );
}