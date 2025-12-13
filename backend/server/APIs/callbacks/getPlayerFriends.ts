import lib from '../../lib'
import { getSingleRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const response = await getSingleRow<{ friends: string }>('friends', 'tr_competitive_users', 'license = ?', getPlayerLicense(source))
  return response ? JSON.parse(response.friends) as number[] : []
}

export default () => lib.callback.register('getPlayerFriends', async (source: string) => callback(source))
export type GetPlayerFriends = ReturnType<typeof callback>