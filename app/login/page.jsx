// "use client";

import { authenticate } from "@/app/lib/actions";

import styles from "@/app/ui/login/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value="testUser"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value="123456"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
