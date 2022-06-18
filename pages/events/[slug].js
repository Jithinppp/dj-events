import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/event.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function EventPage({ event }) {
  return (
    <Layout
      title={"Event"}
      metaDsc={"single Event"}
      keywords={"event,Dj,music Event"}
    >
      <div className={styles.eventContainer}>
        <div className={styles.controlsContainer}>
          <Link href={`/events/edit/${event.id}`}>
            <span className={styles.edit}>
              <FaPencilAlt />
              Edit
            </span>
          </Link>
          <Link href={`/events/edit/${event.id}`}>
            <span className={styles.delete}>
              <FaTrash />
              Delete
            </span>
          </Link>
        </div>
        <h2 className={styles.title}>{event.name}</h2>
        <div className={styles.date}>{event.date}</div>
        <div className={styles.imageContainer}>
          <Image
            width={960}
            height={600}
            alt="event-image"
            src={event.image}
            className={styles.image}
          />
        </div>
        <p className={styles.performers}>{event.performers}</p>
        <p className={styles.description}>{event.description}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const data = await res.json();
  const paths = data.map((e) => ({ params: { slug: e.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      event: data[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const data = await res.json();
//   console.log(API_URL);

//   return {
//     props: {
//       event: data[0],
//     },
//   };
// }
