import lib from '../../lib'
import { getSingleRow } from '../../database'

export default (): void => {
  lib.callback.register('getIncomingFriends', async (source: string) => {
    const license = GetPlayerIdentifierByType(source, 'license')
    const response = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'license', license)
    return response ? JSON.parse(response.incomingInvitations) : []
  })
}