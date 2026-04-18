import styles from "./HomeSections.module.css";

export default function SocialBtn({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialBtn}
    >
      {children}
    </a>
  );
}
