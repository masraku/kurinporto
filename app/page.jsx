"use client";

import React, { useState } from "react";
import { Hand, Sparkles, FlaskConical, Utensils, BarChart, Users, GraduationCap, BookOpen, GlassWater, Milk } from "lucide-react";

// Modern Elegant Soft Button
const SocialBtn = ({ href, children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 28px",
        height: "56px",
        fontFamily: "var(--font-heading)",
        fontWeight: "600",
        fontSize: "1.1rem",
        backgroundColor: isHover ? "var(--pink-500)" : "#ffffff",
        color: isHover ? "#ffffff" : "var(--pink-600)",
        borderRadius: "100px",
        boxShadow: isHover 
          ? "0 10px 25px rgba(241, 77, 138, 0.4)" 
          : "0 4px 15px rgba(241, 77, 138, 0.1)",
        transform: isHover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.5)",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px", // Breathing room between sections
        backgroundColor: "transparent", // Lets the globals.css gradient shine through
      }}
    >
      {/* 
        MAIN WRAPPER
        All content is constrained inside this elegant central column 
      */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px", /* No longer full width */
          display: "flex",
          flexDirection: "column",
          gap: "120px", /* Space between sections */
        }}
      >

        {/* HERO SECTION */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
            padding: "40px 0",
          }}
        >
          {/* Text Content */}
          <div style={{ animation: "slide-up 0.8s ease-out" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 24px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                color: "var(--pink-600)",
                borderRadius: "100px",
                fontFamily: "var(--font-heading)",
                fontWeight: "600",
                fontSize: "0.95rem",
                marginBottom: "32px",
                letterSpacing: "1px",
                boxShadow: "0 4px 15px rgba(241, 77, 138, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              FOOD TECHNOLOGY • i3L STUDENT
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                lineHeight: "1.1",
                color: "#1e293b",
                marginBottom: "24px",
                fontWeight: "800",
                letterSpacing: "-1px",
              }}
            >
              Halo,
              <br />
              <span style={{ 
                color: "transparent", 
                backgroundImage: "linear-gradient(135deg, var(--pink-600), var(--pink-400))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text"
              }}>
                aku Rini!
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "#475569",
                marginBottom: "48px",
                lineHeight: "1.8",
                maxWidth: "540px",
                fontWeight: "500",
              }}
            >
              Fourth-year undergraduate Food Technology student di Indonesia International Institute for Life-Sciences (i3L). Tertarik banget sama Research & Development, Sensory Evaluation, dan inovasi produk pangan!
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <SocialBtn href="https://whatsapp.com/channel/">WhatsApp</SocialBtn>
              <SocialBtn href="https://tiktok.com/@kururiiin">TikTok</SocialBtn>
              <SocialBtn href="https://instagram.com/kururiiin">Instagram</SocialBtn>
              <SocialBtn href="https://x.com/kururiiin">Twitter</SocialBtn>
            </div>
          </div>

          {/* Visual Profile Avatar Box */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              animation: "bounce-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "1/1",
                backgroundColor: "#ffffff",
                boxShadow: "0 30px 60px rgba(241, 77, 138, 0.15)",
                borderRadius: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "16px",
                transform: "rotate(2deg)",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(2deg) translateY(0)")}
            >
              <img
                src="/assets/foto/profile.JPG"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "28px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "var(--pink-500)",
                  boxShadow: "0 10px 25px rgba(241, 77, 138, 0.2)",
                  animation: "float-gentle 4s ease-in-out infinite",
                }}
              >
                <Hand size={40} color="var(--pink-500)" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </section>

        {/* TENTANG AKU SECTION */}
        <section
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "48px",
            padding: "80px 60px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: "800",
                color: "#1e293b",
              }}
            >
              Tentang Aku
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "var(--pink-400)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#475569",
              fontWeight: "500",
            }}
          >
            <div>
              Hai! Aku Rini Wiranti, mahasiswa tingkat akhir program studi Food Technology di Indonesia International Institute for Life-Sciences (i3L). Perjalananku di dunia pangan dipenuhi dengan eksplorasi, mulai dari formulasi produk hingga analisis sensorik dan data.
            </div>
            <div>
              Selain akademis, aku juga aktif di berbagai organisasi dan kepanitiaan, seperti K-Community Club dan Food Donation. Aku sangat menikmati bekerja dalam tim, memimpin proyek, serta berinovasi menciptakan produk pangan berkualitas yang bermanfaat! <Sparkles size={20} style={{ display: "inline-block", verticalAlign: "text-bottom", marginLeft: "4px", color: "var(--pink-500)" }} />
            </div>
          </div>
        </section>

        {/* YANG AKU SUKA SECTION (Bento Grid) */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "50px" }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: "800",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                Yang Aku Suka
              </h2>
              <div style={{ width: "60px", height: "4px", backgroundColor: "var(--pink-400)", marginTop: "20px", borderRadius: "2px" }}></div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: <FlaskConical size={48} color="var(--pink-500)" strokeWidth={1.5} />,
                title: "R&D",
                desc: "Memformulasikan produk pangan baru yang inovatif dan berkualitas.",
                bg: "rgba(255,255,255,0.9)",
              },
              {
                icon: <Utensils size={48} color="var(--pink-500)" strokeWidth={1.5} />,
                title: "Sensory",
                desc: "Evaluasi sensori pada inovasi produk dan minuman fungsional.",
                bg: "rgba(255,255,255,0.7)",
              },
              {
                icon: <BarChart size={48} color="var(--pink-500)" strokeWidth={1.5} />,
                title: "Analysis",
                desc: "Menerjemahkan data eksperimen menjadi insight berharga.",
                bg: "rgba(255,255,255,0.7)",
              },
              {
                icon: <Users size={48} color="var(--pink-500)" strokeWidth={1.5} />,
                title: "Leadership",
                desc: "Memimpin tim dalam proyek, kepanitiaan, dan volunteering.",
                bg: "rgba(255,255,255,0.9)",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: item.bg,
                  backdropFilter: "blur(10px)",
                  borderRadius: "32px",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(241, 77, 138, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.02)";
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                    color: "#1e293b",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.6",
                    color: "#64748b",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & PENDIDIKAN SECTION */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "50px",
          }}
        >
          {/* SKILLS CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#1e293b",
                  marginBottom: "30px",
                }}
              >
                Skills & Keahlian
              </h2>
              <div style={{ width: "60px", height: "4px", backgroundColor: "var(--pink-400)", marginBottom: "40px", borderRadius: "2px" }}></div>
            </div>

            {[
              {
                category: "Industry Knowledge",
                items: ["R&D", "Sensory Evaluation", "Data Analysis", "Marketing", "Business Dev"],
              },
              {
                category: "Interpersonal Skills",
                items: ["Team Leadership", "Teamwork", "Management", "Communication"],
              },
            ].map((group, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.8)", padding: "32px", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--pink-600)",
                    marginBottom: "20px",
                  }}
                >
                  {group.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#ffffff",
                        color: "#475569",
                        borderRadius: "100px",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                        border: "1px solid rgba(241, 77, 138, 0.1)",
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION & PROJECTS LIST */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "100px" }}>
             {[
              {
                icon: <GraduationCap size={40} color="var(--pink-600)" strokeWidth={1.5} />,
                title: "S1 Food Technology",
                org: "i3L (2021 - Saat ini)",
              },
              {
                icon: <BookOpen size={40} color="var(--pink-600)" strokeWidth={1.5} />,
                title: "SMA Santa Maria",
                org: "Jurusan Science",
              },
              {
                icon: <GlassWater size={40} color="var(--pink-600)" strokeWidth={1.5} />,
                title: "Herbal Drink: Kunchee",
                org: "Project Beverage Tech (2024)",
              },
              {
                icon: <Milk size={40} color="var(--pink-600)" strokeWidth={1.5} />,
                title: "Cayo: Cashew Yogurt",
                org: "Project Milk Tech (2023)",
              },
            ].map((award, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "24px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  transition: "transform 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    backgroundColor: "var(--pink-50)",
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  {award.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "6px",
                    }}
                  >
                    {award.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    {award.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PENGALAMAN SECTION */}
        <section
          style={{
            marginBottom: "60px"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: "800",
                color: "#1e293b",
              }}
            >
              Pengalaman
            </h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "var(--pink-400)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {[
              {
                title: "Head of Fundraising Division",
                date: "Apr 2024 - Jun 2024",
                role: "LEO Jakarta Monas ad Meliora • Food Donation 2024",
                desc: "Mengembangkan dan mengeksekusi strategi finansial untuk mencapai target profit, serta memimpin berjalannya kegiatan fundraising.",
              },
              {
                title: "Member of Food Technology Project",
                date: "Sep 2023 - Jun 2024",
                role: "Indonesia International Institute for Life-Sciences (i3L)",
                desc: "Mengembangkan dan memasarkan produk pangan, mengaplikasikan prinsip teknologi pangan untuk menciptakan produk berkualitas tinggi.",
              },
              {
                title: "Committee of K-Community Club",
                date: "Apr 2023 - Jul 2024",
                role: "Indonesia International Institute for Life-Sciences (i3L)",
                desc: "Mengorganisir sesi pertemuan yang menarik untuk memperkenalkan tradisi Korea dan membina ikatan yang kuat antar anggota.",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "32px",
                  padding: "40px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  border: "1px solid rgba(255,255,255,0.7)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.6rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      margin: 0,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <div
                    style={{
                      backgroundColor: "var(--pink-100)",
                      color: "var(--pink-600)",
                      padding: "8px 20px",
                      borderRadius: "100px",
                      fontWeight: "700",
                      fontSize: "0.95rem",
                    }}
                  >
                    {exp.date}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--pink-500)",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  {exp.role}
                </div>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "#475569",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

