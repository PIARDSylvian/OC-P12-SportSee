import User from '@/entities/user'
import Activity from '@/entities/activity'

export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((data) => {
      if (data.sessions && data.sessions[0].sessionLength) {
        console.log('average-sessions')
        return data
      } else if (data.sessions && data.sessions[0].kilogram) {
        return new Activity(data).data()
      } else {
        console.log('performance')
        return data
      }
    })

export async function getUser(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new User(res).data())
}

export function getApiRoute(id, type) {
  switch (type) {
    case 'activity':
      return `api/activity/${id}`

    default:
      return null
  }
}

export async function getActivity(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/activity`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new Activity(res).data())
}
