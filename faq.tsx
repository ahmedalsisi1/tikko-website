
import Head from 'next/head'
import styles from '../styles/Faq.module.css'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | Tikko</title>
      </Head>
      <main className={styles.container}>
        <img src="/assets/tikko-logo.jpg" alt="Tikko Logo" className={styles.logo} />
        <h1>Frequently Asked Questions</h1>
        <p>Tikko is a visionary digital asset backed by community. A golden future awaits.</p>
      </main>
    </>
  )
}
