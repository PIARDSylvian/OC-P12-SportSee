import User from '@/entities/user'
import Activity from '@/entities/activity'
import AverageSessions from '@/entities/averageSessions'
import Performance from '@/entities/performance'

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getUser(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}`)
    .then(async (res) => {
      if (res.status !== 200) throw new Error(await res.json())
      return res.json()
    })
    .then((res) => new User(res.data).data())
    .catch(function (error) {
      console.log(error.message)
    })
}

export function getApiRoute(id, type) {
  switch (type) {
    case 'activity':
      return `api/activity/${id}`
    case 'average-sessions':
      return `api/averageSessions/${id}`
    case 'performance':
      return `api/performance/${id}`
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

export async function getAverageSessions(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/average-sessions`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new AverageSessions(res).data())
}

export async function getPerformance(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/performance`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new Performance(res).data())
}
