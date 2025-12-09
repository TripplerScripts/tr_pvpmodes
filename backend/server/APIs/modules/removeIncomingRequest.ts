import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('removeIncomingRequest', async (source: string, identity: string) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('identity, incomingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('outgoingInvitations', 'tr_competitive_users', 'identity = ?', identity)
  if (!receiverResponse) return

  const senderidentity = senderResponse.identity
  const senderRequests = JSON.parse(senderResponse.incomingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.outgoingInvitations)
  senderRequests.splice(senderRequests.indexOf(identity), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderidentity), 1)

  const senderAffectedColumn = updateRow('tr_competitive_users', 'incomingInvitations', 'license = ?', license, senderRequests)
  const receiverAffectedColumn = updateRow('tr_competitive_users', 'outgoingInvitations', 'identity = ?', identity, receiverRequests)
  return senderAffectedColumn && receiverAffectedColumn
})