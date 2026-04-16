"use client";

import { useState } from "react";

export default function ProfileCard({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,200,223,0.4)",
        backdropFilter: "blur(8px)",
        animation: "fade-in-scale 0.3s ease-out",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(145deg, #fffbfc, #fff1f7)",
          borderRadius: "28px",
          padding: "36px 32px",
          maxWidth: "420px",
          width: "90%",
          boxShadow:
            "0 20px 60px rgba(241,77,138,0.2), 0 0 0 1px rgba(252,200,223,0.5), inset 0 1px 0 rgba(255,255,255,0.8)",
          animation: "bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "2px solid #fcc8df",
            background: "rgba(255,246,250,0.9)",
            color: "#f97bae",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            fontFamily: "var(--font-heading)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#f97bae";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,246,250,0.9)";
            e.target.style.color = "#f97bae";
          }}
        >
          ✕
        </button>

        {/* Profile avatar */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            margin: "0 auto 16px",
            background: "linear-gradient(135deg, #FFB6D5, #F06292)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 4px 20px rgba(240,98,146,0.3), 0 0 0 4px rgba(255,182,213,0.4)",
            animation: "heart-beat 2s ease-in-out infinite",
          }}
        >
          🍓
        </div>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "24px",
            fontWeight: 700,
            color: "#c4897a",
            textAlign: "center",
            marginBottom: "6px",
          }}
        >
          Kururiiin ♡
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#d4a09a",
            fontSize: "13px",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            marginBottom: "20px",
            letterSpacing: "0.5px",
          }}
        >
          ✧ she/her ✧
        </p>

        {/* Bio */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(252,200,223,0.2), rgba(209,179,255,0.15))",
            borderRadius: "16px",
            padding: "20px",
            border: "1px dashed #fcc8df",
            marginBottom: "18px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "#a06858",
              textAlign: "center",
            }}
          >
            ♡ Just a girl who loves strawberries & cute things ♡
            <br />
            <span style={{ fontSize: "13px", opacity: 0.8 }}>
              ꒰ anime • aesthetic • cozy vibes ꒱
            </span>
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "18px",
          }}
        >
          {[
            { label: "Posts", value: "142" },
            { label: "Friends", value: "1.2K" },
            { label: "Likes", value: "8.5K" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                animation: `slide-up 0.4s ${200 + i * 100}ms cubic-bezier(0.34, 1.56, 0.64, 1) both`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f14d8a",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "#c4897a",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interests tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {["🍓 Strawberry", "🎀 Kawaii", "🌸 Anime", "🎮 Gaming", "📸 Photos", "☁️ Dreamy"].map(
            (tag, i) => (
              <span
                key={i}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #fff1f7, #fde4ef)",
                  border: "1px solid #fcc8df",
                  fontSize: "12px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "#c4897a",
                  animation: `slide-up 0.3s ${300 + i * 60}ms ease-out both`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.08)";
                  e.target.style.boxShadow = "0 2px 10px rgba(241,77,138,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
