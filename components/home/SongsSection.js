import { Play, Calendar, Clock } from "lucide-react";
import styles from "./HomeSections.module.css";

const songs = [
  {
    title: "Pernah",
    release: "30 Jan 2026",
    desc: "Single terbaru Tomoshibi dengan alunan melodi manis dan lirik yang emosional.",
    badge: "Latest Single",
    duration: "4:12",
    link: "https://youtu.be/0wsd1uB6VG8?si=v_gpB_8rFHdagzcg"
  },
  {
    title: "Chase Your Dream",
    release: "28 Mar 2025",
    desc: "Lagu penyemangat yang ceria, menginspirasi semua orang untuk meraih cita-cita.",
    badge: "Pop Single",
    duration: "3:45",
    link: "https://youtu.be/WcI1V2r-XMg?si=KZXbFDsYQGxwA2hz"
  },
  {
    title: "Phoenix",
    release: "13 Dec 2024",
    desc: "Lagu tema ikonik yang melambangkan kebangkitan kembali kekuatan dari abu hangat.",
    badge: "Group Anthem",
    duration: "4:05",
    link: "https://youtu.be/KBccir-V1TA?si=ZQ9gV2tUMhBkmwUQ"
  },
  {
    title: "Impasse",
    release: "16 Apr 2024",
    desc: "Single debut yang enerjik dan dinamis, menandai awal mula perjalanan idol grup.",
    badge: "Debut Single",
    duration: "3:58",
    link: "https://youtu.be/nvEZflTSgZ8?si=iPrHzxrhIytDCaqj"
  }
];

export default function SongsSection() {
  return (
    <section className={styles.songsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Tomoshibi Discography
        </h2>
        <p className={styles.sectionSubtitle}>
          Dengarkan lagu-lagu resmi dari Tomoshibi Idol ✦
        </p>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.songsGrid}>
        {songs.map((song, i) => (
          <div key={i} className={styles.songCard}>
            <div className={styles.songCardHeader}>
              <span className={styles.songBadge}>{song.badge}</span>
              <div className={styles.visualizer}>
                <div className={styles.visBar}></div>
                <div className={styles.visBar}></div>
                <div className={styles.visBar}></div>
                <div className={styles.visBar}></div>
              </div>
            </div>

            <h3 className={styles.songTitle}>{song.title}</h3>
            <p className={styles.songDesc}>{song.desc}</p>

            <div className={styles.songMeta}>
              <span className={styles.songMetaItem}>
                <Calendar size={14} className={styles.metaIcon} />
                {song.release}
              </span>
              <span className={styles.songMetaItem}>
                <Clock size={14} className={styles.metaIcon} />
                {song.duration}
              </span>
            </div>

            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.songPlayBtn}
            >
              <Play size={16} fill="currentColor" /> Play on YouTube
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
