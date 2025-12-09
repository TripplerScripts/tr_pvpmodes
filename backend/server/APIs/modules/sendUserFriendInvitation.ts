import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('sendUserFriendInvitation', async (source: string, identity: string) => {
  const senderLicense = getPlayerLicense(source)

  const senderRow = await getSingleRow('identity, outgoingInvitations', 'tr_competitive_users', 'license', senderLicense)
  if (!senderRow) return
  const receiverRow = await getSingleRow('incomingInvitations', 'tr_competitive_users', 'identity', identity)
  if (!receiverRow) return
  const senderidentity = senderRow.identity
  const senderOutgoingInvitations = JSON.parse(senderRow.outgoingInvitations)
  const receiverIncomingInvitations = JSON.parse(receiverRow.incomingInvitations)

  senderOutgoingInvitations.push(identity)
  receiverIncomingInvitations.push(senderidentity)

  const outgoingUpdated = await updateRow('tr_competitive_users', 'outgoingInvitations', 'license', senderLicense, senderOutgoingInvitations)
  const incomingUpdated = await updateRow('tr_competitive_users', 'incomingInvitations', 'identity', identity, receiverIncomingInvitations)

  return outgoingUpdated && incomingUpdated
})