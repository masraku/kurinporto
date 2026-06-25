import Image from "next/image";
import { Star, Sparkles } from "lucide-react";
import SocialBtn from "./SocialBtn";
import styles from "./HomeSections.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCopy}>
        <div className={styles.heroBadge}>
          TOMOSHIBI IDOL • MEMBER
        </div>

        <h1 className={styles.heroTitle}>
          Halo,
          <br />
          <span className={styles.heroTitleAccent}>
            aku Rin! 🐧
          </span>
        </h1>

        <p className={styles.heroLead}>
          wherever you are, may your days be filled with joy, happiness, and love ! 🩵✨
        </p>

        <div className={styles.heroQuote}>
          𝐰𝐢𝐧𝐠𝐬 𝐨𝐟 𝐩𝐡𝐞𝐨𝐧𝐢𝐱 𝐬𝐡𝐚𝐥𝐥 𝐫𝐞𝐚𝐜𝐡 𝐡𝐢𝐠𝐡 🐦‍🔥🏮
        </div>

        <div className={styles.socialRow}>
          <SocialBtn href="https://www.whatsapp.com/channel/0029Vai5hSY3mFY8hdo2BZ1k">WhatsApp</SocialBtn>
          <SocialBtn href="https://instagram.com/hey.riiin">Instagram</SocialBtn>
          <SocialBtn href="https://x.com/kururiiin_">Twitter</SocialBtn>
          <SocialBtn href="https://www.tiktok.com/@kururiiin_">TikTok</SocialBtn>
          <SocialBtn href="https://tomoshibi-idol.com/">Tomoshibi</SocialBtn>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.profileFrame}>
          <Image
            src="/assets/foto/kururin.webp"
            alt="Rin Profile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.profileImage}
          />
          
          {/* Main Penguin Sticker (Bottom Right) */}
          <div className={styles.profileSticker}>
            <Image
              src="/assets/foto/penguin-profile.png"
              alt="Penguin Ornament 1"
              width={90}
              height={90}
              className={styles.stickerImage}
            />
          </div>

          {/* Secondary Penguin Sticker (Top Left) */}
          <div className={styles.profileStickerSecondary}>
            <Image
              src="/assets/foto/penguin-sticker2.png"
              alt="Penguin Ornament 2"
              width={75}
              height={75}
              className={styles.stickerImage}
            />
          </div>

          {/* Pastel Yellow Star Ornaments */}
          <div className={styles.starOrnament1}>
            <Star size={24} fill="#fef08a" stroke="#fef08a" />
          </div>
          <div className={styles.starOrnament2}>
            <Star size={18} fill="#fef08a" stroke="#fef08a" />
          </div>
          <div className={styles.sparklesOrnament}>
            <Sparkles size={28} fill="#fef08a" stroke="#fef08a" />
          </div>
        </div>
      </div>
    </section>
  );
}
