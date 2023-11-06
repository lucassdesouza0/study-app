import AboutComponent from "../components/about-component";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Topic() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Topic Page!</h1>

        <div className={styles.grid}>
          <Link href={"/"} className={styles.description}>
            &larr; Go back to main page
          </Link>
          {/* <Link href="/about" className={styles.card}>
            <h2>About Page &rarr;</h2>
            <p>Cypress will test if this link is working.</p>
          </Link> */}

          <a href="/todo-list" className={styles.card}>
            <h2>Todo List &rarr;</h2>
          </a>

          <a href="/todo-list-fast" className={styles.card}>
            <h2>Todo List With Performance Enhancements &rarr;</h2>
          </a>

          {/* <a href="/topic" className={styles.card}>
            <h2>React &rarr;</h2>
            <p>Performance, best practices and new features.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Testing &rarr;</h2>
            <p>Learn about tests (E2E, unit, Component)!</p>
          </a> */}

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
