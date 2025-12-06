import { getSingleRow, insertNewRow } from '../database'

export default async (license: string, name: string): Promise<boolean> => {
  const user = await getSingleRow(['userId'], 'users', 'license', license)
  if (!user || !user.userId) return

  const id = await insertNewRow(
    'tr_competitive_users',
    ['userId', 'name', 'license', 'friends', 'incomingInvitations', 'outgoingInvitations'],
    user.userId,
    name,
    license,
    JSON.stringify([]),
    JSON.stringify([]),
    JSON.stringify([])
  )
  if (!id) return

  return true
}