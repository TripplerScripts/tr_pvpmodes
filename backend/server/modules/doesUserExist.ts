import { getSingleRow } from '../database'
import getPlayerLicense from '../utils/getPlayerLicense'

export default async (source: string) => {
  const response = await getSingleRow('identity', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? response.identity : false
}