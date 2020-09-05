import React, { useState } from "react";
import Fade from "./Fade";
import Slide from "./Slide";
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
        <Fade isActive={isToggled}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Fade>
        {/* Basic Slide */}
        <Slide isActive={isToggled}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
        {/* Configured Slide */}
        <Slide isActive={isToggled} direction={-1} distance={50}>
          <div className="card">
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
      </main>
    </div>
  );
}
