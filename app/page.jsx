import FloatingParticles from "../components/FloatingParticles";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FavoritesSection from "../components/home/FavoritesSection";
import SkillsEducationSection from "../components/home/SkillsEducationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import styles from "../components/home/HomeSections.module.css";

export default function Home() {
  return (
    <div className={styles.pageRoot}>
      <FloatingParticles />
      {/* 
        MAIN WRAPPER
        All content is constrained inside this elegant central column 
      */}
      <div className={styles.pageInner}>

        <HeroSection />
        <AboutSection />
        <FavoritesSection />
        <SkillsEducationSection />
        <ExperienceSection />

      </div>
    </div>
  );
}

