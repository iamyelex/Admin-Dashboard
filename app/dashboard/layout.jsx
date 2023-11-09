import Sidebar from "@/app/ui/dashboard/sidebar/Sidebar";
import Navbar from "@/app/ui/dashboard/navbar/Navbar";

import styles from "@/app/ui/dashboard/dashboard.module.css";
import Footer from "../ui/footer/footer";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
