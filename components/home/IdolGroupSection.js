import styles from "./HomeSections.module.css";

const members = [
  { name: "Rin", emoji: "🐧", role: "Member", isYou: true },
];

export default function IdolGroupSection() {
  return (
    <section className={styles.idolSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          My Idol Group
        </h2>
        <div className={styles.sectionDivider}></div>
      </div>

      <div className={styles.idolQuote}>
        <div className={styles.idolQuoteText}>
          &ldquo;𝐰𝐢𝐧𝐠𝐬 𝐨𝐟 𝐩𝐡𝐞𝐨𝐧𝐢𝐱 𝐬𝐡𝐚𝐥𝐥 𝐫𝐞𝐚𝐜𝐡 𝐡𝐢𝐠𝐡&rdquo;
          <span className={styles.idolQuoteEmoji}>🐦‍🔥🏮</span>
        </div>
      </div>

      <div className={styles.idolGroupCard}>
        <h3 className={styles.idolGroupName}>
          ✦ Tomoshibi Idol ✦
        </h3>
        <p className={styles.idolGroupDesc}>
          From the ashes, a fire shall be woken, a light from the shadows shall spring.
        </p>

        <div className={styles.memberGrid}>
          {members.map((member, i) => (
            <div
              key={i}
              className={member.isYou ? styles.memberCardHighlight : styles.memberCard}
            >
              <div className={styles.memberEmoji}>{member.emoji}</div>
              <div className={styles.memberName}>{member.name}</div>
              <div className={styles.memberRole}>{member.role}</div>
              {member.isYou && (
                <div className={styles.memberYou}>✦ That&apos;s me!</div>
              )}
            </div>
          ))}
        </div>

        <a
          href="https://tomoshibi-idol.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.idolLink}
        >
          🏮 Visit Tomoshibi Official
        </a>
      </div>
    </section>
  );
}
