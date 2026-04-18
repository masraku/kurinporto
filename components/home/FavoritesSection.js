import { FlaskConical, Utensils, BarChart, Users } from "lucide-react";
import styles from "./HomeSections.module.css";

const favoriteItems = [
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
];

export default function FavoritesSection() {
  return (
    <section>
      <div className={styles.favoritesHeader}>
        <div>
          <h2 className={styles.sectionTitle}>
            Yang Aku Suka
          </h2>
          <div className={styles.leftDivider}></div>
        </div>
      </div>

      <div className={styles.favoritesGrid}>
        {favoriteItems.map((item, i) => (
          <div
            key={i}
            className={styles.favoriteCard}
            style={{ backgroundColor: item.bg }}
          >
            <div className={styles.favoriteIconWrap}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>
              {item.title}
            </h3>
            <p className={styles.cardText}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
