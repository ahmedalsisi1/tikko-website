
import Head from 'next/head';
import styles from '../styles/About.module.css';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Tikko</title>
        <meta name="description" content="Learn more about the Tikko token and its golden vision." />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>About Tikko</h1>
        <p className={styles.text}>
          Tikko is a visionary digital currency born from the desire to build a golden, community-powered future.
          With no centralized ownership and no initial promises, Tikko relies on the strength of its community,
          its symbolism, and its commitment to transparent innovation.
        </p>
        <p className={styles.text}>
          The golden “T” represents ambition, resilience, and unity. Tikko is not just a coin — it is a movement,
          shaped by those who believe in decentralized growth, shared value, and limitless potential.
        </p>
        <p className={styles.text}>
          Our path forward is guided by creativity, technology, and the belief that even in a saturated world
          of tokens, a well-crafted identity with a strong community can shine the brightest. Tikko is yours to build.
        </p>
      </main>
    </div>
  );
}
