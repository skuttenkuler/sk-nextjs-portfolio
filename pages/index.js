import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Kuttenkuler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Greeting,</h1>
        <h1>My</h1>
        <h1>Name</h1>
        <h1>Is</h1>
        <h1>Sam</h1>
      </main>


    </div>
  )
}
