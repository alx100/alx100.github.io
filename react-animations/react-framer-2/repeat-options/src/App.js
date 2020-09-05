import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

// repeat - Infinity, number
// repeatType - loop, reverse, mirror

export default function App() {
  return (
    <div className="App">
      <main
        className="layout"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 200 }}
          className="box"
          transition={{
            repeat: 0,
            type: "spring",
            repeatDelay: 1,
            repeatType: "mirror"
          }}
        />
      </main>
    </div>
  );
}
