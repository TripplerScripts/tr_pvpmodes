import lib from '../../lib'
import { getSingleRow, updateSingleColumn } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('sendUserFriendInvitation', async (source: string, name: string) => {
  const senderLicense = getPlayerLicense(source)

  const senderRow = await getSingleRow(['name', 'outgoingInvitations'], 'tr_competitive_users', 'license', [senderLicense])
  if (!senderRow) return
  const receiverRow = await getSingleRow(['incomingInvitations'], 'tr_competitive_users', 'name', name)
  if (!receiverRow) return
  const senderName = senderRow.name
  const senderOutgoingInvitations = JSON.parse(senderRow.outgoingInvitations)
  const receiverIncomingInvitations = JSON.parse(receiverRow.incomingInvitations)

  senderOutgoingInvitations.push(name)
  receiverIncomingInvitations.push(senderName)

  const outgoingUpdated = await updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'license', JSON.stringify(senderOutgoingInvitations), senderLicense)
  const incomingUpdated = await updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'name', JSON.stringify(receiverIncomingInvitations), name)

  return outgoingUpdated && incomingUpdated
})