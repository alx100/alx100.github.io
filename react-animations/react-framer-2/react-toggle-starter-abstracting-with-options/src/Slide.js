import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide({
  children,
  isActive,
  direction = 1,
  distance = 200
}) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0, x: direction * (distance * -1) }}
          initial={{ opacity: 0, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
