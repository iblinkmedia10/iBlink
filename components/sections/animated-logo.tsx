import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ display: "inline-block" }}
    >
      <motion.img
        src="/IMG_2691.png"
        alt="iBlink Media"
        style={{ width: "260px", height: "auto" }}
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}