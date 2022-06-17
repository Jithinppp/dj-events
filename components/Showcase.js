import styles from "@/styles/Showcase.module.css";

export default function Showcase() {
  return (
    <div className={styles.container}>
      <p className={styles.mainTitle}>Welcome to the party</p>
      <p className={styles.subTitle}>Find the hottest DJ events</p>
    </div>
  );
}
