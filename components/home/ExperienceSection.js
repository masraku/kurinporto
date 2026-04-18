import styles from "./HomeSections.module.css";

const experiences = [
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
];

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Pengalaman
        </h2>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.experienceList}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <h3 className={styles.experienceTitle}>
                {exp.title}
              </h3>
              <div className={styles.experienceDate}>
                {exp.date}
              </div>
            </div>
            <div className={styles.experienceRole}>
              {exp.role}
            </div>
            <p className={styles.experienceDesc}>
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
