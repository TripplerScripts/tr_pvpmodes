import lib from '../../lib'
import { getSingleRow, updateSingleColumn } from '../../database'

export default (): void => {
  lib.callback.register('cancelOutgoingFriendship', async (source: string, name: string) => {
    const license = GetPlayerIdentifierByType(source, 'license')
    const senderResponse = await getSingleRow(['name', 'outgoingInvitations'], 'tr_competitive_users', 'license', license)
    if (!senderResponse) return
    const receiverResponse = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'name', name)
    if (!receiverResponse) return

    const senderName = senderResponse.name
    const senderRequests = JSON.parse(senderResponse.outgoingInvitations)
    const receiverRequests = JSON.parse(receiverResponse.incomingInvitations)
    senderRequests.splice(senderRequests.indexOf(name), 1)
    receiverRequests.splice(receiverRequests.indexOf(senderName), 1)
    
    const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'license', JSON.stringify(senderRequests), license)
    const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'name', JSON.stringify(receiverRequests), name)
    return senderAffectedColumn && receiverAffectedColumn
  })
}