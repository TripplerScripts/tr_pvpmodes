import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('cancelOutgoingFriendship', async (source: string, userId: number) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('userId, outgoingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('incomingInvitations', 'tr_competitive_users', 'userId = ?', userId)
  if (!receiverResponse) return

  const senderUserId = senderResponse.userId
  const senderRequests = JSON.parse(senderResponse.outgoingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.incomingInvitations)
  senderRequests.splice(senderRequests.indexOf(userId), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderUserId), 1)
  
  const senderAffectedColumn = updateRow('tr_competitive_users', 'outgoingInvitations', 'license = ?', senderRequests, license)
  const receiverAffectedColumn = updateRow('tr_competitive_users', 'incomingInvitations', 'userId = ?', receiverRequests, senderUserId)
  return senderAffectedColumn && receiverAffectedColumn
})