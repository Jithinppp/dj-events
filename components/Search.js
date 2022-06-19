import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    setTerm("");
    router.push(`/events/search?term=${term}`);
  };

  return (
    <form onSubmit={submitHandler} className={styles.mainForm}>
      <input
        value={term}
        type={"text"}
        placeholder="Search"
        className={styles.searchInput}
        onChange={(e) => setTerm(e.target.value)}
      />
      <i className={styles.icon}>
        <BiSearchAlt2 className={styles.svg} />
      </i>
    </form>
  );
}
