import styles from './../page.module.css'
import { getBaseUrl }  from '../utils'


async function getData() {
  const dataBuffer = await fetch(
    `${getBaseUrl()}/lock.yaml`
  );

  const blobContent = await dataBuffer.text();

  return blobContent;
}

export default async function Home() {
  const data = await getData()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bad File</h1>
        <div className={styles.grid}>
          {data}
        </div>
      </main>
    </div>
  )
}
