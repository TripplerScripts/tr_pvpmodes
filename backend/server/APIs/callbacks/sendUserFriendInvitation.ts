import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string, identity: number) => {
  const senderLicense = getPlayerLicense(source)

  const senderRow = await getSingleRow<{ identity: number; outgoingInvitations: number[] }>('identity, outgoingInvitations', 'tr_competitive_users', 'license = ?', senderLicense)
  if (!senderRow) return
  const receiverRow = await getSingleRow<{ incomingInvitations: number[] }>('incomingInvitations', 'tr_competitive_users', 'identity = ?', identity)
  if (!receiverRow) return
  const senderidentity = senderRow.identity
  const senderOutgoingInvitations = senderRow.outgoingInvitations
  const receiverIncomingInvitations = receiverRow.incomingInvitations

  senderOutgoingInvitations.push(identity)
  receiverIncomingInvitations.push(senderidentity)

  const outgoingUpdated = await updateRow('tr_competitive_users', 'outgoingInvitations', 'license = ?', JSON.stringify(senderOutgoingInvitations), senderLicense)
  const incomingUpdated = await updateRow('tr_competitive_users', 'incomingInvitations', 'identity = ?', JSON.stringify(receiverIncomingInvitations), identity)

  return outgoingUpdated && incomingUpdated
}

export default () => lib.callback.register('sendUserFriendInvitation', async (source, identity: number) => callback(source, identity))
export type SendUserFriendInvitation = ReturnType<typeof callback>