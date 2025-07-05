
import Image from 'next/image'
import styles from '../styles/Faq.module.css'

export default function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image src="/logo.png" alt="Tikko Logo" width={100} height={100} className={styles.rotatingLogo} />
      </div>
      <h1 className={styles.title}>الأسئلة المتكررة</h1>
      <p className={styles.subtitle}>عملة Tikko تجمع بين المستقبل الذهبي والطموح المجتمعي اللامحدود.</p>
    </div>
  )
}
