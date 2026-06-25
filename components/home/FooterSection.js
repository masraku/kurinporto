import styles from "./HomeSections.module.css";

function FooterWaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function FooterIgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FooterXIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768M20 4l-6.768 6.768" />
    </svg>
  );
}

function FooterTiktokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function FooterLanternIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3" />
      <rect x="7" y="5" width="10" height="12" rx="3" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="14" x2="17" y2="14" />
      <path d="M12 17v3M10 20h4" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerPenguin}>🐧</div>
      <div className={styles.footerText}>
        Rin&apos;s Little Corner
      </div>
      <div className={styles.footerQuote}>
        &ldquo;wherever you are, may your days be filled with joy, happiness, and love&rdquo; 🩵
      </div>

      <div className={styles.footerSocials}>
        <a
          href="https://www.whatsapp.com/channel/0029Vai5hSY3mFY8hdo2BZ1k"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerSocialLink}
          aria-label="WhatsApp"
        >
          <FooterWaIcon />
        </a>
        <a
          href="https://instagram.com/hey.riiin"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerSocialLink}
          aria-label="Instagram"
        >
          <FooterIgIcon />
        </a>
        <a
          href="https://x.com/kururiiin_"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerSocialLink}
          aria-label="Twitter"
        >
          <FooterXIcon />
        </a>
        <a
          href="https://www.tiktok.com/@kururiiin_"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerSocialLink}
          aria-label="TikTok"
        >
          <FooterTiktokIcon />
        </a>
        <a
          href="https://tomoshibi-idol.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerSocialLink}
          aria-label="Tomoshibi Idol"
        >
          <FooterLanternIcon />
        </a>
      </div>

      <div className={styles.footerCopy}>
        © 2026 Rin · Made with 🩵 and ❄️
      </div>
    </footer>
  );
}
