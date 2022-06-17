import Link from "next/link";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout
      title={"about"}
      metaDsc="about"
      keywords={"DJ events Musical Events"}
    >
      <h1>About</h1>
      <p>
        This is an app you can see latest musical events and events DJ parties
      </p>
      <Link href="/">Home</Link>
      <p>Version 1.0.0.0</p>
    </Layout>
  );
}
