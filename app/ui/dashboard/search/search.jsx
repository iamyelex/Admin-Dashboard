"use client";

import { MdSearch } from "react-icons/md";

import styles from "./search.module.css";
// import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        // onChange={handleSearch}
      />
    </div>
  );
}
