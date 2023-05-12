import { getActivity } from '@/utils'

export default async function handler(req, res) {
  res.status(200).json(await getActivity(req.query.id))
}
