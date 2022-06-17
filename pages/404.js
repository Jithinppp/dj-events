import Link from "next/link";
import styles from "@/styles/notFound.module.css";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title={"Page not found"}>
      <div className={styles.container}>
        <p className={styles.errorMessage}>Opps..! page not found</p>
        <Link href="/">
          <a className={styles.homeLink}>Go to home</a>
        </Link>
      </div>
    </Layout>
  );
}
