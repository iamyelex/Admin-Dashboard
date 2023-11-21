import styles from "@/app/ui/dashboard/notFound/notFound.module.css";

export default function notFound() {
  return (
    <div className={styles.errorText}>
      <p>User not found</p>
    </div>
  );
}
