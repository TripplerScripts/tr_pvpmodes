import { getSingleRow } from '../database'

export default async function doesUserAlreadyExist(source: string) {
  const license = GetPlayerIdentifierByType(source, 'license')
  const user = await getSingleRow(['userId'], 'tr_competitive_users', 'license', license)
  if (!user) return

  return true
}