import Image from "next/image";
import { MdLogout } from "react-icons/md";

import { sidebarItems } from "@/app/data/Sidebar";
import MenuLink from "./menuLink/menuLink";

import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {sidebarItems.map((nav) => (
          <li key={nav.title}>
            <span className={styles.nav}>{nav.title}</span>
            {nav.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      {/* <form
        action={async () => {
          "use server";
          await signOut();
        }}
      > */}
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
      {/* </form> */}
    </div>
  );
}
