import User from '@/entities/user'
import Activity from '@/entities/activity'
import AverageSessions from '@/entities/averageSessions'
import Performance from '@/entities/performance'

export const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * get User data by user Id
 *
 * @param {number} id
 * @returns {User.data}
 */
export async function getUser(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}`)
    .then(async (res) => {
      if (res.status > 200) throw new Error(await res.json())
      return res.json()
    })
    .then((res) => new User(res.data).data())
    .catch(function (error) {
      console.log(error.message)
    })
}

/**
 * get api route by type
 *
 * @param {number} id
 * @param {string} type
 * @returns {string}
 */
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

/**
 * get user activity by user
 *
 * @param {number} id
 * @returns {Activity.data}
 */
export async function getActivity(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/activity`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new Activity(res).data())
}

/**
 * get user average sessions by user
 *
 * @param {number} id
 * @returns {AverageSessions.data}
 */
export async function getAverageSessions(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/average-sessions`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new AverageSessions(res).data())
}

/**
 * get user performance by user
 *
 * @param {number} id
 * @returns {Performance.data}
 */
export async function getPerformance(id) {
  return await fetch(`${process.env.BACKEND}/user/${id}/performance`)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => new Performance(res).data())
}
