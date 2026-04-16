"use client";

import { useEffect, useState, useRef } from "react";

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: ["✧", "♡", "⋆", "✿"][Math.floor(Math.random() * 4)],
        color: ["#f97bae", "#fcc8df", "#d1b3ff", "#FF69B4"][Math.floor(Math.random() * 4)],
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    };

    const throttledHandler = (e) => {
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          handleMouseMove(e);
          timeoutRef.current = null;
        }, 80);
      }
    };

    window.addEventListener("mousemove", throttledHandler);
    return () => {
      window.removeEventListener("mousemove", throttledHandler);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 800));
    }, 200);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden="true"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          style={{
            position: "fixed",
            left: s.x,
            top: s.y,
            color: s.color,
            fontSize: "16px",
            pointerEvents: "none",
            animation: "sparkle-pop 0.8s ease-out forwards",
            transform: "translate(-50%, -50%)",
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  );
}
