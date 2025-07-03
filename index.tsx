
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tikko – The Golden Future</title>
        <meta name="description" content="Welcome to Tikko, the golden community-powered token." />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="Tikko Logo" width={160} height={160} />
        </div>
        <h1 className={styles.title}>Tikko</h1>
        <p className={styles.subtitle}>The Golden Future of Crypto</p>
      </main>

      <footer className={styles.footer}>
        <p>Live crypto prices and community features coming soon...</p>
      </footer>

      <Analytics />
    </div>
  );
}
