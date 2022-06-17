import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}> Copyright @ 2022 all rights reserved</p>
      <Link href={"/about"}>
        <a className={styles.rights}> About this page</a>
      </Link>
    </footer>
  );
}
