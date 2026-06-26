import { Sparkles } from "lucide-react";
import styles from "./HomeSections.module.css";

function BirthdayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#3b82f6" }}>
      <path d="M12 5V2" stroke="#fef08a" strokeWidth="2.5" />
      <path d="M12 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#fef08a" stroke="#fef08a" />
      <rect x="5" y="11" width="14" height="9" rx="2" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" />
      <path d="M5 14c1.5-1 3.5-1 5 0s3.5 1 5 0 2.5-1 4 0" stroke="#93c5fd" />
      <rect x="7" y="8" width="10" height="3" rx="1" fill="rgba(96, 165, 250, 0.15)" stroke="#60a5fa" />
      <line x1="9" y1="11" x2="9" y2="8" stroke="#60a5fa" />
      <line x1="15" y1="11" x2="15" y2="8" stroke="#60a5fa" />
    </svg>
  );
}

function ZodiacIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#3b82f6" }}>
      <path d="M5 20h14" stroke="#3b82f6" />
      <path d="M19 17H5" stroke="#3b82f6" />
      <path d="M12 5v12" stroke="#60a5fa" />
      <path d="M7 8h10" stroke="#3b82f6" />
      <circle cx="7" cy="8" r="1.5" fill="#fef08a" stroke="#fef08a" />
      <circle cx="17" cy="8" r="1.5" fill="#fef08a" stroke="#fef08a" />
      <path d="M12 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" stroke="#60a5fa" fill="rgba(147, 197, 253, 0.15)" />
    </svg>
  );
}

function BloodTypeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#3b82f6" }}>
      <path d="M12 2C12 2 4 9 4 14a8 8 0 0 0 16 0c0-5-8-12-8-12z" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" />
      <text x="12" y="16.5" fontSize="9" fontWeight="bold" fontFamily="var(--font-heading)" fill="#2563eb" textAnchor="middle">A</text>
    </svg>
  );
}


function WibuIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#3b82f6" }}>
      <path d="M12 2C6.5 2 4 6 4 12c0 4 2 8 8 10 6-2 8-6 8-10 0-6-2.5-10-8-10z" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" />
      <path d="M6 6s2 2 3 4M18 6s-2 2-3 4" stroke="#60a5fa" />
      <path d="M8 12c.5-1.5 2-1.5 2.5 0M16 12c-.5-1.5-2-1.5-2.5 0" stroke="#2563eb" strokeWidth="2.5" />
      <path d="M5 14h2M19 14h-2" stroke="#fef08a" strokeWidth="2" />
      <path d="M12 16v2" stroke="#60a5fa" />
    </svg>
  );
}

const aboutCards = [
  { icon: <BirthdayIcon />, label: "Birthday", value: "9 October" },
  { icon: <ZodiacIcon />, label: "Zodiac", value: "Libra" },
  { icon: <BloodTypeIcon />, label: "Blood Type", value: "A" },
  { icon: <WibuIcon />, label: "Hobi", value: "Japanese-Culture Enthusiast & Craft" },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Tentang Aku
        </h2>
        <div className={styles.sectionDivider}></div>
      </div>

      <p className={styles.aboutBio}>
        Hai! Aku Rin, member dari Tomoshibi Idol! ✨ Lahir pada tanggal 9 Oktober,
        aku berzodiak Libra. Aku suka banget ngewibu (mulai dari nonton anime, dengerin
        musik Jepang, cosplay, sampai dateng ke berbagai event Jepang!) serta berkreasi
        dengan art & craft. Di panggung, aku memberikan yang terbaik untuk semua fans,
        dan di luar panggung, kamu bisa nemuin aku lagi nyari inspirasi baru atau dengerin
        lagu favoritku!{" "}
        <Sparkles size={20} className={styles.aboutSparkle} />
      </p>

      <div className={styles.aboutGrid}>
        {aboutCards.map((card, i) => (
          <div key={i} className={styles.aboutCard}>
            <div className={styles.aboutCardIcon}>{card.icon}</div>
            <div className={styles.aboutCardLabel}>{card.label}</div>
            <div className={styles.aboutCardValue}>{card.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
