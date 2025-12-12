import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('getOutgoingFriends', async (source: string) => {
  const response = await getSingleRow('outgoingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.outgoingInvitations) : []
})