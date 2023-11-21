import styles from "@/app/ui/loading/loading.module.css";

export default function Loading() {
  return (
    <section className={styles.parent}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
