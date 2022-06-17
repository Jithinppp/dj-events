import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";

export default function Layout({ title, children, keywords, metaDsc }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDsc} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Music Events | find the parties nearby",
  keywords: "music , DJ , Parties",
  metaDsc: "find music events",
};
