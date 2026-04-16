"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const bars = [1, 2, 3, 4, 5];

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "2px solid #fcc8df",
        background: hovered
          ? "linear-gradient(135deg, #f97bae, #f14d8a)"
          : "linear-gradient(135deg, #fff1f7, #fde4ef)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        boxShadow: hovered
          ? "0 4px 20px rgba(241,77,138,0.35)"
          : "0 2px 10px rgba(241,77,138,0.15)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        zIndex: 50,
        animation: "slide-up 0.6s 1200ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
      }}
      title={isPlaying ? "Pause vibes" : "Play vibes"}
    >
      {isPlaying ? (
        bars.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: "3px",
              height: `${8 + Math.random() * 12}px`,
              background: hovered ? "#fff" : "#f14d8a",
              borderRadius: "2px",
              animation: `float-gentle ${0.4 + i * 0.15}s ease-in-out infinite alternate`,
              transition: "background 0.3s",
            }}
          />
        ))
      ) : (
        <span
          style={{
            fontSize: "18px",
            color: hovered ? "#fff" : "#f14d8a",
            transition: "color 0.3s",
          }}
        >
          ♪
        </span>
      )}
    </button>
  );
}
