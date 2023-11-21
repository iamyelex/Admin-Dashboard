import Image from "next/image";
import Link from "next/link";

import styles from "@/app/ui/dashboard/notFound/notFound.module.css";

export default function notFound() {
  return (
    <div className={styles.oopss}>
      <div className={styles.errorText}>
        <Image
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          width={400}
          height={400}
        />
        <span>404 PAGE</span>
        <p className={styles.pA}>
          . The page you were looking for could not be found
        </p>
        <Link href="/dashboard" className={styles.back}>
          Go back home
        </Link>
      </div>
    </div>
  );
}
