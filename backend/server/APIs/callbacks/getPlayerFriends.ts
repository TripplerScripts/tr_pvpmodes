import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () =>  lib.callback.register('getPlayerFriends', async (source: string) => {
  const response = await getSingleRow('friends', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.friends) : []
})