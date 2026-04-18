"use client";

import Twemoji from "react-twemoji";

const PARTICLE_EMOJIS = ["🍓", "🌸", "✨", "🫧", "💗", "🧁", "🥛"];

function getParticleStyle(index) {
  // Deterministic values keep rendering stable across rerenders.
  const left = (index * 17.37) % 100;
  const delay = (index * 1.9) % 15;
  const duration = 12 + ((index * 2.3) % 18);
  const size = 18 + ((index * 3.1) % 16);

  return {
    left,
    delay,
    duration,
    size,
  };
}

function Particle({ index }) {
  const emoji = PARTICLE_EMOJIS[index % PARTICLE_EMOJIS.length];
  const { left, delay, duration, size } = getParticleStyle(index);

  return (
    <span
      style={{
        position: "fixed",
        left: `${left}%`,
        bottom: "-30px",
        width: `${size}px`,
        height: `${size}px`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        animation: `float-up ${duration}s ${delay}s linear infinite`,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0,
      }}
    >
      <Twemoji options={{ folder: "svg", ext: ".svg", className: "floating-emoji" }}>
        <span aria-hidden="true">{emoji}</span>
      </Twemoji>
    </span>
  );
}

export default function FloatingParticles() {
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
