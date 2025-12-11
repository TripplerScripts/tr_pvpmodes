import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('cancelOutgoingFriendship', async (source: string, identity: number) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('outgoingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('incomingInvitations', 'tr_competitive_users', 'identity = ?', identity)
  if (!receiverResponse) return

  const senderId = senderResponse.identity
  const senderRequests = JSON.parse(senderResponse.outgoingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.incomingInvitations)
  senderRequests.splice(senderRequests.indexOf(identity), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderId), 1)
  
  const senderAffectedColumn = await updateRow('tr_competitive_users', 'outgoingInvitations', 'license = ?', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = await updateRow('tr_competitive_users', 'incomingInvitations', 'identity = ?', JSON.stringify(receiverRequests), identity) 
  return senderAffectedColumn && receiverAffectedColumn
})