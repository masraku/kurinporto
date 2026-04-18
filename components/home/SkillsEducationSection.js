import { GraduationCap, BookOpen, GlassWater, Milk } from "lucide-react";
import styles from "./HomeSections.module.css";

const skillGroups = [
  {
    category: "Industry Knowledge",
    items: ["R&D", "Sensory Evaluation", "Data Analysis", "Marketing", "Business Dev"],
  },
  {
    category: "Interpersonal Skills",
    items: ["Team Leadership", "Teamwork", "Management", "Communication"],
  },
];

const educationItems = [
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
];

export default function SkillsEducationSection() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsColumn}>
        <div>
          <h2 className={styles.skillsTitle}>
            Skills & Keahlian
          </h2>
          <div className={styles.leftDivider}></div>
        </div>

        {skillGroups.map((group, idx) => (
          <div key={idx} className={styles.skillGroup}>
            <h3 className={styles.skillGroupTitle}>
              {group.category}
            </h3>
            <div className={styles.skillChipWrap}>
              {group.items.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillChip}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.educationColumn}>
        {educationItems.map((award, idx) => (
          <div key={idx} className={styles.educationCard}>
            <div className={styles.educationIcon}>
              {award.icon}
            </div>
            <div>
              <h3 className={styles.educationTitle}>
                {award.title}
              </h3>
              <div className={styles.educationOrg}>
                {award.org}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
