import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('sendUserFriendInvitation', async (source: string, userId: string) => {
  const senderLicense = getPlayerLicense(source)

  const senderRow = await getSingleRow('userId, outgoingInvitations', 'tr_competitive_users', 'license', senderLicense)
  if (!senderRow) return
  const receiverRow = await getSingleRow('incomingInvitations', 'tr_competitive_users', 'userId', userId)
  if (!receiverRow) return
  const senderUserId = senderRow.userId
  const senderOutgoingInvitations = JSON.parse(senderRow.outgoingInvitations)
  const receiverIncomingInvitations = JSON.parse(receiverRow.incomingInvitations)

  senderOutgoingInvitations.push(userId)
  receiverIncomingInvitations.push(senderUserId)

  const outgoingUpdated = await updateRow('tr_competitive_users', 'outgoingInvitations', 'license', senderLicense, senderOutgoingInvitations)
  const incomingUpdated = await updateRow('tr_competitive_users', 'incomingInvitations', 'userId', userId, receiverIncomingInvitations)

  return outgoingUpdated && incomingUpdated
})