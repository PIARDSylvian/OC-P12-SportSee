import styles from '@/styles/Dashboard.module.scss'
import Head from 'next/head'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '12' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.BACKEND}/user/${params.id}`)
  const user = (await res.json()).data

  // of no data redirect to 404 route
  if (res.status === 404) return { notFound: true }
  // Pass post data to the page via props
  return { props: { user }, revalidate: 10 }
}

export default function Dashboard({ user }) {
  console.log(user)
  return (
    <>
      <Head>
        <title>Dashboard - SportSee</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <section className={styles.section}>
        <p>Dashboard</p>
      </section>
    </>
  )
}
