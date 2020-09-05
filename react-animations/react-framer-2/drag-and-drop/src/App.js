import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePositionReorder } from "./usePositionReorder";
import { useMeasurePosition } from "./useMeasurePosition";

import "./styles.css";

export default function App() {
  const [order, updatePosition, updateOrder] = usePositionReorder(posts);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <div className="layout">
        <h3>List of stuff</h3>
        {order.map((post, i) => (
          <DragItem
            i={i}
            updateOrder={updateOrder}
            updatePosition={updatePosition}
            post={post}
            key={post}
          />
        ))}
      </div>
    </div>
  );
}

function DragItem({ post, updatePosition, i, updateOrder }) {
  const [isDragging, setIsDragging] = useState(false);

  const ref = useMeasurePosition((pos) => {
    updatePosition(i, pos);
  });

  return (
    <motion.div
      drag="y"
      layout
      ref={ref}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      className="card"
      key={post}
      animate={{
        scale: isDragging ? 1.05 : 1
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onViewportBoxUpdate={(_, delta) => {
        if (isDragging) {
          updateOrder(i, delta.y.translate);
        }
      }}
    >
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </motion.div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
