import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const response = await getSingleRow<{ outgoingInvitations: string }>('outgoingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.outgoingInvitations) as number[] : []
}

export default () => lib.callback.register('getOutgoingFriends', async (source: string) => callback(source))
export type GetOutgoingFriends = ReturnType<typeof callback>