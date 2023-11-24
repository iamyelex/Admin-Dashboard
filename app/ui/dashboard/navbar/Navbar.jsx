"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
  // MdOutlineWbSunny,
} from "react-icons/md";

import styles from "@/app/ui/dashboard/navbar/navbar.module.css";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
          {/* <MdOutlineWbSunny size={20} onClick={() => console.log("clicked")} /> */}
        </div>
      </div>
    </div>
  );
}
