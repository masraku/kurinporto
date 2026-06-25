"use client";

/**
 * Lightweight floating snowflake particles using pure CSS.
 * No external libraries – each particle is a tiny CSS snowflake
 * with a gentle float animation. Uses will-change for GPU compositing.
 */

const PARTICLE_COLORS = [
  "rgba(59, 130, 246, 0.2)",
  "rgba(147, 197, 253, 0.35)",
  "rgba(96, 165, 250, 0.18)",
  "rgba(191, 219, 254, 0.4)",
  "rgba(219, 234, 254, 0.5)",
  "rgba(37, 99, 235, 0.12)",
];

const SNOWFLAKE_CHARS = ["❄", "❅", "❆", "✦", "✧", "·"];

const PARTICLE_COUNT = 16;

function getParticleStyle(index) {
  const left = (index * 17.37) % 100;
  const delay = (index * 1.9) % 15;
  const duration = 16 + ((index * 2.3) % 20);
  const size = 8 + ((index * 3.1) % 14);

  return { left, delay, duration, size };
}

function Particle({ index }) {
  const color = PARTICLE_COLORS[index % PARTICLE_COLORS.length];
  const char = SNOWFLAKE_CHARS[index % SNOWFLAKE_CHARS.length];
  const { left, delay, duration, size } = getParticleStyle(index);

  const isSnowflake = index % 3 !== 0;

  if (isSnowflake) {
    return (
      <span
        style={{
          position: "fixed",
          left: `${left}%`,
          bottom: "-20px",
          fontSize: `${size}px`,
          color: color,
          animation: `float-up ${duration}s ${delay}s linear infinite`,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0,
          willChange: "transform, opacity",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        {char}
      </span>
    );
  }

  return (
    <span
      style={{
        position: "fixed",
        left: `${left}%`,
        bottom: "-20px",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        animation: `float-up ${duration}s ${delay}s linear infinite`,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0,
        willChange: "transform, opacity",
      }}
      aria-hidden="true"
    />
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
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}
