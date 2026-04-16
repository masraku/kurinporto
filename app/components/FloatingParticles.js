"use client";

import { useEffect, useState } from "react";

const PARTICLE_SHAPES = ["❀", "✿", "♡", "⋆", "🍓", "✧", "∗"];
const PARTICLE_COLORS = [
  "#f97bae", "#fbA3C7", "#fcc8df", "#d1b3ff",
  "#f14d8a", "#e12d6a", "#FFB6C1", "#FF69B4"
];

function Particle({ index }) {
  const shape = PARTICLE_SHAPES[index % PARTICLE_SHAPES.length];
  const color = PARTICLE_COLORS[index % PARTICLE_COLORS.length];
  const left = Math.random() * 100;
  const delay = Math.random() * 15;
  const duration = 12 + Math.random() * 18;
  const size = 10 + Math.random() * 16;

  return (
    <span
      style={{
        position: "fixed",
        left: `${left}%`,
        bottom: "-30px",
        fontSize: `${size}px`,
        color: color,
        animation: `float-up ${duration}s ${delay}s linear infinite`,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0,
      }}
    >
      {shape}
    </span>
  );
}

export default function FloatingParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: 20 }, (_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}
