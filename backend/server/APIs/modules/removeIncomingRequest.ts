import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('removeIncomingRequest', async (source: string, userId: string) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('userId, incomingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('outgoingInvitations', 'tr_competitive_users', 'userId = ?', userId)
  if (!receiverResponse) return

  const senderUserId = senderResponse.userId
  const senderRequests = JSON.parse(senderResponse.incomingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.outgoingInvitations)
  senderRequests.splice(senderRequests.indexOf(userId), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderUserId), 1)

  const senderAffectedColumn = updateRow('tr_competitive_users', 'incomingInvitations', 'license = ?', license, senderRequests)
  const receiverAffectedColumn = updateRow('tr_competitive_users', 'outgoingInvitations', 'userId = ?', userId, receiverRequests)
  return senderAffectedColumn && receiverAffectedColumn
})