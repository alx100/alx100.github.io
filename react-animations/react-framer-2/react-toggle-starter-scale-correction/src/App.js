import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <motion.div layout className="card">
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}
