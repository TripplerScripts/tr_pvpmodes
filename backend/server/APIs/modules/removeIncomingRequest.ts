import lib from '../../lib'
import { getSingleRow, updateSingleColumn } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('removeIncomingRequest', async (source: string, name: string) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow(['name', 'incomingInvitations'], 'tr_competitive_users', 'license', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow(['outgoingInvitations'], 'tr_competitive_users', 'name', name)
  if (!receiverResponse) return

  const senderName = senderResponse.name
  const senderRequests = JSON.parse(senderResponse.incomingInvitations)
  const receiverRequests = JSON.parse(receiverResponse.outgoingInvitations)
  senderRequests.splice(senderRequests.indexOf(name), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderName), 1)

  const senderAffectedColumn = updateSingleColumn('tr_competitive_users', 'incomingInvitations', 'license', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateSingleColumn('tr_competitive_users', 'outgoingInvitations', 'name', JSON.stringify(receiverRequests), name)
  return senderAffectedColumn && receiverAffectedColumn
})