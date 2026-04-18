import { Sparkles } from "lucide-react";
import styles from "./HomeSections.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Tentang Aku
        </h2>
        <div className={styles.sectionDivider}></div>
      </div>
      <div className={styles.aboutGrid}>
        <div>
          Hai! Aku Rini Wiranti, mahasiswa tingkat akhir program studi Food Technology di Indonesia International Institute for Life-Sciences (i3L). Perjalananku di dunia pangan dipenuhi dengan eksplorasi, mulai dari formulasi produk hingga analisis sensorik dan data.
        </div>
        <div>
          Selain akademis, aku juga aktif di berbagai organisasi dan kepanitiaan, seperti K-Community Club dan Food Donation. Aku sangat menikmati bekerja dalam tim, memimpin proyek, serta berinovasi menciptakan produk pangan berkualitas yang bermanfaat!{" "}
          <Sparkles size={20} className={styles.aboutSparkle} />
        </div>
      </div>
    </section>
  );
}
