// "use client";

import { authenticate } from "@/app/lib/actions";

import SubmitButton from "./submitButton";

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
          defaultValue="testUser"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue="123456"
        />
        <SubmitButton />
      </form>
    </div>
  );
}
