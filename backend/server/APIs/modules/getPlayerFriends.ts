import lib from '../../lib'
import { getSingleRow } from '../../database'

export default (): void => {
  lib.callback.register('getPlayerFriends', async (source: string) => {
    const license = GetPlayerIdentifierByType(source, 'license')
    const response = await getSingleRow(['friends'], 'tr_competitive_users', 'license', license)
    return response ? JSON.parse(response.friends) : []
  })
}