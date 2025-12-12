import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const response = await getSingleRow<{ outgoingInvitations: number[] }>('outgoingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? response.outgoingInvitations : []
}

export default () => lib.callback.register('getOutgoingFriends', async (source: string) => callback(source))
export type GetOutgoingFriends = ReturnType<typeof callback>