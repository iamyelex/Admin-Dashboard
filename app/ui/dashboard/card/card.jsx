import styles from "@/app/ui/dashboard/card/card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>22.72</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12% </span>more than previous week
        </span>
      </div>
    </div>
  );
}
