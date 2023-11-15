import { logIn } from "@/app/lib/actions";

import styles from "@/app/ui/login/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action={logIn} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          // value={(e) => e.target.value}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          // value={(e) => e.target.value}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
