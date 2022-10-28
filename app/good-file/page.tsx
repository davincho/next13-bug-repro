import styles from './../page.module.css'
import { getBaseUrl }  from '../utils'


async function getData() {
  const dataBuffer = await fetch(
    `${getBaseUrl()}/vercel.svg`
  );

  const blobContent = await dataBuffer.text();

  return blobContent;
}

export default async function GoodFile() {
  const data = await getData()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Good File</h1>
        <div className={styles.grid}>
          {data}
        </div>
      </main>
    </div>
  )
}
