import lib from '../../lib'
import { getSingleRow, updateSingleColumn } from '../../database'

export default (): void => {
  lib.callback.register('removePlayerFriendship', async (source: string, name: string) => {
    const license = GetPlayerIdentifierByType(source, 'license')
    const senderResponse = await getSingleRow(['name', 'friends'], 'tr_competitive_users', 'license', license)
    if (!senderResponse) return
    const receiverResponse = await getSingleRow(['friends'], 'tr_competitive_users', 'name', name)
    if (!receiverResponse) return

    const senderName = senderResponse.name
    const senderRequests = JSON.parse(senderResponse.friends)
    const receiverRequests = JSON.parse(receiverResponse.friends)
    senderRequests.splice(senderRequests.indexOf(name), 1)
    receiverRequests.splice(receiverRequests.indexOf(senderName), 1)

    const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'license', JSON.stringify(senderRequests), license)
    const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'friends', 'name', JSON.stringify(receiverRequests), name)
    return senderAffectedColumn && receiverAffectedColumn
  })
}