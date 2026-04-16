"use client";

export default function KawaiiMascot({ size = 180, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={{ filter: "drop-shadow(0 4px 12px rgba(241,77,138,0.25))" }}
    >
      {/* Body - round puffball */}
      <ellipse cx="100" cy="115" rx="70" ry="65" fill="url(#body-grad)" />
      
      {/* Arms */}
      <ellipse cx="42" cy="130" rx="18" ry="14" fill="#FF8FAB" transform="rotate(-20 42 130)" />
      <ellipse cx="158" cy="125" rx="18" ry="14" fill="#FF8FAB" transform="rotate(15 158 125)" />
      
      {/* Feet */}
      <ellipse cx="72" cy="172" rx="20" ry="10" fill="#E84888" transform="rotate(-5 72 172)" />
      <ellipse cx="128" cy="172" rx="20" ry="10" fill="#E84888" transform="rotate(5 128 172)" />
      
      {/* Face area - lighter belly */}
      <ellipse cx="100" cy="120" rx="45" ry="40" fill="#FFD1E3" opacity="0.4" />
      
      {/* Eyes */}
      <ellipse cx="80" cy="108" rx="10" ry="12" fill="#2D1B18" />
      <ellipse cx="120" cy="108" rx="10" ry="12" fill="#2D1B18" />
      {/* Eye shine */}
      <ellipse cx="76" cy="104" rx="4" ry="3.5" fill="#fff" />
      <ellipse cx="116" cy="104" rx="4" ry="3.5" fill="#fff" />
      <ellipse cx="83" cy="111" rx="2" ry="1.5" fill="#fff" opacity="0.7" />
      <ellipse cx="123" cy="111" rx="2" ry="1.5" fill="#fff" opacity="0.7" />
      
      {/* Blush */}
      <ellipse cx="62" cy="122" rx="10" ry="6" fill="#FF6B8A" opacity="0.45" />
      <ellipse cx="138" cy="122" rx="10" ry="6" fill="#FF6B8A" opacity="0.45" />
      
      {/* Mouth - happy smile */}
      <path d="M90 125 Q100 135 110 125" stroke="#2D1B18" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Cute little tongue */}
      <ellipse cx="100" cy="128" rx="4" ry="3" fill="#FF6B8A" />
      
      {/* Strawberry hat on head */}
      <g transform="translate(80, 20) scale(0.9)">
        {/* Leaves */}
        <ellipse cx="20" cy="22" rx="12" ry="6" fill="#66BB6A" transform="rotate(-20 20 22)" />
        <ellipse cx="35" cy="22" rx="12" ry="6" fill="#4CAF50" transform="rotate(20 35 22)" />
        <ellipse cx="27" cy="18" rx="10" ry="6" fill="#81C784" />
        {/* Stem */}
        <rect x="25" y="5" width="5" height="15" rx="2.5" fill="#558B2F" />
        {/* Berry */}
        <path
          d="M27 24C12 24 4 38 7 54C10 68 18 76 27 76C36 76 44 68 47 54C50 38 42 24 27 24Z"
          fill="url(#hat-strawberry-grad)"
        />
        {/* Seeds on hat strawberry */}
        <ellipse cx="18" cy="45" rx="1.5" ry="2" fill="#FFE082" />
        <ellipse cx="27" cy="40" rx="1.5" ry="2" fill="#FFE082" />
        <ellipse cx="36" cy="45" rx="1.5" ry="2" fill="#FFE082" />
        <ellipse cx="22" cy="56" rx="1.5" ry="2" fill="#FFE082" />
        <ellipse cx="32" cy="56" rx="1.5" ry="2" fill="#FFE082" />
      </g>
      
      {/* Star sparkles around */}
      <g opacity="0.8">
        <text x="30" y="70" fontSize="14" fill="#FFD700">✧</text>
        <text x="165" y="85" fontSize="12" fill="#FFD700">✦</text>
        <text x="150" y="60" fontSize="10" fill="#FF69B4">♡</text>
        <text x="45" y="90" fontSize="10" fill="#FF69B4">✿</text>
      </g>
      
      <defs>
        <linearGradient id="body-grad" x1="30" y1="50" x2="170" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB6D5" />
          <stop offset="50%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#F06292" />
        </linearGradient>
        <linearGradient id="hat-strawberry-grad" x1="10" y1="24" x2="44" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8A9E" />
          <stop offset="50%" stopColor="#F06292" />
          <stop offset="100%" stopColor="#E91E63" />
        </linearGradient>
      </defs>
    </svg>
  );
}
