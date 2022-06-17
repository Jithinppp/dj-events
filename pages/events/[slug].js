import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventPage({ event }) {
  return (
    <Layout
      title={"Event"}
      metaDsc={"single Event"}
      keywords={"event,Dj,music Event"}
    >
      {event.name}
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
  console.log(API_URL);

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
