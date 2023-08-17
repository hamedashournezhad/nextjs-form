import styles from "./assets/App.module.css";

export default function Home() {
  return (
    <main className={styles.app}>
      <div className={styles.app_animate}></div>
      <form className={styles.form}>
        <div className={styles.form_animate}></div>
        <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          placeholder="What's your first name?"
          autoComplete="off"
          id="firstname"
          pattern="[a-zA-Z]"
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          autoComplete="off"
          placeholder="What's your first name?"
          id="lastname"
          pattern="[a-zA-Z]"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          autoComplete="current-password"
          placeholder="choose a password.."
          id="password"
        />
        <button type="submit" id="FormSubmitHandler">
          Sign-up
        </button>
      </form>
    </main>
  );
}
