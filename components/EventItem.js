import Link from "next/link";
import styles from "@/styles/EventItem.module.css";
import Image from "next/image";

export default function EventItem({ event }) {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={
            event.image ? event.image : "/../public/images/event-default.png"
          }
          height={100}
          width={140}
          alt="event image"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h3>{event.name}</h3>
        <p>
          {event.date} at {event.time}{" "}
        </p>
        <Link href={`/events/${event.slug}`}>
          <p className={styles.readMore}>Read more</p>
        </Link>
      </div>
    </div>
  );
}
