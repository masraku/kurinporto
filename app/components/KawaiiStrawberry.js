"use client";

export default function KawaiiStrawberry({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 40 52"
      fill="none"
      className={className}
      style={{ filter: "drop-shadow(0 2px 4px rgba(241,77,138,0.2))" }}
    >
      {/* Leaves */}
      <ellipse cx="15" cy="10" rx="6" ry="4" fill="#8BC34A" transform="rotate(-30 15 10)" />
      <ellipse cx="25" cy="10" rx="6" ry="4" fill="#7CB342" transform="rotate(30 25 10)" />
      <ellipse cx="20" cy="8" rx="5" ry="4" fill="#9CCC65" />
      {/* Stem */}
      <rect x="18.5" y="2" width="3" height="8" rx="1.5" fill="#6D9B3A" />
      {/* Berry body */}
      <path
        d="M20 12C10 12 4 22 6 34C8 44 14 50 20 50C26 50 32 44 34 34C36 22 30 12 20 12Z"
        fill="url(#strawberry-grad)"
      />
      {/* Seeds */}
      <ellipse cx="14" cy="28" rx="1.2" ry="1.6" fill="#FFE082" transform="rotate(-15 14 28)" />
      <ellipse cx="20" cy="25" rx="1.2" ry="1.6" fill="#FFE082" />
      <ellipse cx="26" cy="28" rx="1.2" ry="1.6" fill="#FFE082" transform="rotate(15 26 28)" />
      <ellipse cx="16" cy="36" rx="1.2" ry="1.6" fill="#FFE082" transform="rotate(-10 16 36)" />
      <ellipse cx="24" cy="36" rx="1.2" ry="1.6" fill="#FFE082" transform="rotate(10 24 36)" />
      <ellipse cx="20" cy="42" rx="1.2" ry="1.6" fill="#FFE082" />
      {/* Kawaii face */}
      <ellipse cx="15" cy="32" rx="1.8" ry="2.2" fill="#333" />
      <ellipse cx="25" cy="32" rx="1.8" ry="2.2" fill="#333" />
      <ellipse cx="14.5" cy="31.2" rx="0.8" ry="0.6" fill="#fff" />
      <ellipse cx="24.5" cy="31.2" rx="0.8" ry="0.6" fill="#fff" />
      {/* Blush */}
      <ellipse cx="11" cy="35" rx="2.5" ry="1.5" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="29" cy="35" rx="2.5" ry="1.5" fill="#FFB6C1" opacity="0.6" />
      {/* Smile */}
      <path d="M17 37 Q20 40 23 37" stroke="#333" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <defs>
        <linearGradient id="strawberry-grad" x1="10" y1="12" x2="30" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8A9E" />
          <stop offset="50%" stopColor="#F06292" />
          <stop offset="100%" stopColor="#E91E63" />
        </linearGradient>
      </defs>
    </svg>
  );
}
