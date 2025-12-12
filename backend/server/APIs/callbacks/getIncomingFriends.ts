import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const response = await getSingleRow<{ incomingInvitations: number[] }>('incomingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? response.incomingInvitations : []
}

export default () => lib.callback.register('getIncomingFriends', callback)
export type GetIncomingFriends = ReturnType<typeof callback>