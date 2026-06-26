import styles from "./HomeSections.module.css";

export default function SocialBtn({ href, target = "_blank", children }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={styles.socialBtn}
    >
      {children}
    </a>
  );
}
