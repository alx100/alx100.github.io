import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>

      <div className="layout">
        <h3>Blog Posts</h3>
        <button onClick={() => setIsActive(true)}>Open drawer</button>
        <AnimatePresence>
          {isActive && (
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => {
                console.log(info);
                if (info.offset.y > 300) setIsActive(false);
              }}
              className="drawer-wrapper"
            >
              <motion.div
                exit={{ opacity: 0.5, y: "110%" }}
                initial={{ opacity: 0.5, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ damping: 25, type: "spring" }}
              >
                <div className="drawer">
                  <button onClick={() => setIsActive(false)}>
                    Close Drawer
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {posts.map((post) => (
          <div className="card" key={post}>
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
