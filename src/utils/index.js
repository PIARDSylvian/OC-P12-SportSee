import User from '@/entities/user'
import Activity from '@/entities/activity'

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

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
