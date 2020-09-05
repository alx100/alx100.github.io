import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main className="layout">
        <h3>Grid Gallery</h3>
        <div className="loading">
          <h3>Level Up Tutorials</h3>
          <p>Is Loading...</p>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{
              flip: Infinity,
              duration: 1
            }}
            style={{
              background: "var(--primary)",
              height: 6,
              width: 100
            }}
          />
          <motion.div
            initial={{ x: -100, y: -5 }}
            animate={{ x: 100, y: -5 }}
            transition={{
              flip: Infinity,
              duration: 1.2
            }}
            style={{
              background: "var(--danger)",
              height: 8,
              width: 20
            }}
          />
          <motion.div
            initial={{ x: -100, y: -5 }}
            animate={{ x: 100, y: -5 }}
            transition={{
              flip: Infinity,
              duration: 1.5
            }}
            style={{
              background: "var(--yellow)",
              height: 5,
              width: 200
            }}
          />
        </div>
        <div className="grid gallery">
          {images.map((image, index) => (
            <img
              style={{
                cursor: "pointer"
              }}
              src={`https://picsum.photos/seed/${image}/500/300`}
              alt="placeholder"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
