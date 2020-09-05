import React, { useState } from "react";
import Drawer from "./Drawer";

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
        <Drawer isActive={isActive} setIsActive={setIsActive}>
          <h1>I'm in the drawer</h1>
          <p>Hello what's up</p>
        </Drawer>

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
