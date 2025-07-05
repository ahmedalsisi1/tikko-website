
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Faq.module.css';

export default function FAQ() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ | Tikko</title>
      </Head>

      <div className={styles.logoContainer}>
        <Image
          src="/assets/tikko-logo.jpg"
          alt="Tikko Logo"
          width={120}
          height={120}
          className={styles.logo}
        />
      </div>

      <div className={styles.introText}>
        Tikko – عملة رقمية مدعومة من المجتمع، رمز للثقة، والقيمة، والطموح اللا محدود.
      </div>

      <h1 className={styles.title}>الأسئلة الشائعة</h1>

      <div className={styles.faqSection}>
        <div className={styles.faqItem}>
          <h3>ما هي Tikko؟</h3>
          <p>Tikko هي عملة رقمية فاخرة تمثل الطموح اللامحدود، مدعومة من مجتمعها ومبنية على الثقة.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>هل يمكنني شراء Tikko الآن؟</h3>
          <p>حاليًا لا، لكن يتم بناء الأسس الرسمية للعملة وسيتم الإعلان عن طرق الشراء لاحقًا.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>هل Tikko قانونية؟</h3>
          <p>نعم، لا تحتوي على وعود استثمارية أو مخالفات قانونية، وتم إعداد موقعها لتكون متوافقة مع القوانين.</p>
        </div>
      </div>
    </div>
  );
}
