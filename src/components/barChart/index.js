import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function BarChart({ id }) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND}/user/${id}/activity`,
    fetcher
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {console.log(data.data)}
      {/* <h1>{data.data.userInfos.firstName}</h1> */}
    </div>
  )
}
