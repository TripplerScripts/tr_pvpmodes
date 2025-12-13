import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const response = await getSingleRow<{ incomingInvitations: string }>('incomingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.incomingInvitations) as number[] : []
}

export default () => lib.callback.register('getIncomingFriends', callback)
export type GetIncomingFriends = ReturnType<typeof callback>