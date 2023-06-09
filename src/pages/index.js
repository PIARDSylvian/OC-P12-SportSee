import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SportSee</title>
        <meta name="description" content="coaching sportif" />
      </Head>
      <section className={styles.home}>
        <Link href="/12">Karl Dovineau</Link>
        <Link href="/18">Cecilia Ratorez</Link>
      </section>
    </>
  )
}
