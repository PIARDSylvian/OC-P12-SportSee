import styles from '@/styles/Dashboard.module.scss'
import Head from 'next/head'
import Card from '@/components/card'
import BarChartComponent from '@/components/barChart'
import LineChartComponent from '@/components/lineChart'
import RadarChartComponent from '@/components/radarChart'
import RadialBarChartComponent from '@/components/RadialBarChart'
import { getUser } from '@/utils'
import PropTypes from 'prop-types'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '12' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const user = await getUser(params.id)

  // of no data redirect to 404 route
  if (!user) return { notFound: true }
  // Pass post data to the page via props
  return { props: { user }, revalidate: 10 }
}

export default function Dashboard({ user }) {
  if (user) {
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
                <BarChartComponent id={user.id} />
              </article>
              <div>
                <article className={styles.graph}>
                  <LineChartComponent id={user.id} />
                </article>
                <article className={styles.graph}>
                  <RadarChartComponent id={user.id} />
                </article>
                <article className={styles.graph}>
                  <RadialBarChartComponent
                    score={user.score}
                    todayScore={user.todayScore}
                  />
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
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }),
    todayScore: PropTypes.number,
    score: PropTypes.number,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }),
  }),
}
