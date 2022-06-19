import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import styles from "@/styles/home.module.css";

export default function Home({ events }) {
  return (
    <Layout
      title="DJ | musical Events"
      keywords="Dj,music,parties"
      metaDsc="find the musical parties and DJ nearby"
    >
      <div className={styles.container}>
        <p className={styles.popularEventsTitle}>Popular events</p>
        {events.length == 0 && (
          <p className={styles.noEvents}>Sorry no events to Show</p>
        )}
        {events.map((event) => {
          return <EventItem key={event.id} event={event.attributes} />;
        })}
        <Link href={"/events"}>
          <p className={styles.viewEvents}>View all events</p>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?populate=*&pagination[limit]=3&sort=date`
  );
  const events = await res.json();
  return {
    props: { events: events.data },

    revalidate: 1,
  };
}
