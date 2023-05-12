import { getPerformance } from '@/utils'

export default async function handler(req, res) {
  res.status(200).json(await getPerformance(req.query.id))
}
