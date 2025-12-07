import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('getIncomingFriends', async (source: string) => {
  const response = await getSingleRow('incomingInvitations', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.incomingInvitations) : []
})