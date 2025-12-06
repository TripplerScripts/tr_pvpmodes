import { getSingleRow } from '../database'

export default async (source: string): Promise<boolean> => {
  const license = GetPlayerIdentifierByType(source, 'license')
  const user = await getSingleRow(['userId'], 'tr_competitive_users', 'license', license)
  if (!user) return

  return true
}