import Image from "next/image";
import { Hand } from "lucide-react";
import SocialBtn from "./SocialBtn";
import styles from "./HomeSections.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCopy}>
        <div className={styles.heroBadge}>
          FOOD TECHNOLOGY • i3L STUDENT
        </div>

        <h1 className={styles.heroTitle}>
          Halo,
          <br />
          <span className={styles.heroTitleAccent}>
            aku Rini!
          </span>
        </h1>

        <p className={styles.heroLead}>
          Fourth-year undergraduate Food Technology student di Indonesia International Institute for Life-Sciences (i3L). Tertarik banget sama Research & Development, Sensory Evaluation, dan inovasi produk pangan!
        </p>

        <div className={styles.socialRow}>
          <SocialBtn href="https://whatsapp.com/channel/">WhatsApp</SocialBtn>
          <SocialBtn href="https://tiktok.com/@kururiiin">TikTok</SocialBtn>
          <SocialBtn href="https://instagram.com/kururiiin">Instagram</SocialBtn>
          <SocialBtn href="https://x.com/kururiiin">Twitter</SocialBtn>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.profileFrame}>
          <Image
            src="/assets/foto/profile.JPG"
            alt="Profile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className={styles.profileImage}
          />
          <div className={styles.profileSticker}>
            <Hand size={40} color="var(--pink-500)" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
