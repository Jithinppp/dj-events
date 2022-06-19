import qs from "qs";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import styles from "@/styles/home.module.css";
import { useRouter } from "next/router";

export default function Search({ events }) {
  console.log(events);
  const router = useRouter();

  return (
    <Layout
      title="Search result"
      keywords="Dj,music,parties"
      metaDsc="find the musical parties and DJ nearby"
    >
      <p className={styles.popularEventsTitle}>
        Search Results for {router.query.term}
      </p>
      {events.length == 0 && (
        <p className={styles.noEvents}>Sorry no events to Show</p>
      )}
      {events.map((event) => {
        return <EventItem key={event.id} event={event.attributes} />;
      })}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $containsi: term } },
        { description: { $containsi: term } },
        { venue: { $containsi: term } },
        { address: { $containsi: term } },
        { performers: { $containsi: term } },
      ],
    },
  });

  const res = await fetch(`${API_URL}/api/events?${query}&populate=*`);
  const events = await res.json();

  return {
    props: { events: events.data },
  };
}
