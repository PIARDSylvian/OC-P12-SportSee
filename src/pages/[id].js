import styles from '@/styles/Dashboard.module.scss'
import Head from 'next/head'
import Card from '@/components/card'
import BarChart from '@/components/barChart'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '12' } }, { params: { id: '18' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND}/user/${params.id}`
  )
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
      <section className={styles.dashboard}>
        <h1>
          Bonjour, <span>{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className={styles.wrapper}>
          <div className={styles['graph-wrapper']}>
            <article className={styles.graph}>
              <BarChart id={user.id} />
            </article>
            <div>
              <article className={styles.graph}>
                <BarChart id={user.id} />
              </article>
              <article className={styles.graph}>
                <BarChart id={user.id} />
              </article>
              <article className={styles.graph}>
                <BarChart id={user.id} />
              </article>
            </div>
          </div>
          <aside className={styles.informations}>
            <Card type="calories" value={user.keyData.calorieCount} />
            <Card type="proteins" value={user.keyData.proteinCount} />
            <Card type="glucides" value={user.keyData.carbohydrateCount} />
            <Card type="lipides" value={user.keyData.lipidCount} />
          </aside>
        </div>
      </section>
    </>
  )
}
