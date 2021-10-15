import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountryPicker from '../components/CountryPicker'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Next News PWA</title>
        <meta name="description" content="Next News PWA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next News PWA
        </h1>

        <p className={styles.description}>
          Recent news from all over the world!
        </p>

        <CountryPicker />
      </main>

      <footer className={styles.footer}>
        Copyright © 2021-2022
      </footer>
    </div>
  )
}
