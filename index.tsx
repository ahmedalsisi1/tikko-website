
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tikko | Home</title>
      </Head>
      <main style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>Welcome to Tikko</h1>
        <p>The golden digital currency powered by the community.</p>
        <a href="/faq">Go to FAQ</a>
      </main>
    </>
  );
}
