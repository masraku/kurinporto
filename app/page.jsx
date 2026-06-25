import FloatingParticles from "../components/FloatingParticles";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import IdolGroupSection from "../components/home/IdolGroupSection";
import SongsSection from "../components/home/SongsSection";
import FooterSection from "../components/home/FooterSection";
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
        <IdolGroupSection />
        <SongsSection />

      </div>
      <FooterSection />
    </div>
  );
}
