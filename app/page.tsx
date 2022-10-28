import styles from './page.module.css'

import Link from 'next/link';


export default async function Home() {


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/good-file" className={styles.card}>
            <h2>Good File Route &rarr;</h2>
          </Link>


          <Link href="/bad-file" className={styles.card}>
            <h2>Bad File Route &rarr;</h2>
          </Link>
        </div>
      </main>
    </div>
  )
}
