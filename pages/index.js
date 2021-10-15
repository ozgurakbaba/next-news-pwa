import Head from 'next/head'
import Image from 'next/image'
import CountryPicker from '../components/CountryPicker'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Next News PWA</title>
        <meta name="description" content="Next News PWA" />
      </Head>

      <main>
        <h1>
          Next News PWA
        </h1>

        <p>
          Recent news from all over the world!
        </p>

        <CountryPicker />
      </main>

      <footer>
        Copyright © 2021-2022
      </footer>
    </div>
  )
}
