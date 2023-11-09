import styles from "@/app/ui/footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>iamyelex</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
}
