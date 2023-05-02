import { getAverageSessions } from '@/utils'

export default async function handler(req, res) {
  res.status(200).json(await getAverageSessions(req.query.id))
}
