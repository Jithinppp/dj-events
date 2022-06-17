import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo__container}>
        <p className={styles.logo}>
          <Link href={"/"}>Musics</Link>
        </p>
      </div>
      <ul className={styles.nav__items}>
        <li className={styles.nav__item}>
          <Link href={"/events"}>Events</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}
