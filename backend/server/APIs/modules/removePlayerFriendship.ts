import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('removePlayerFriendship', async (source: string, identity: number) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('identity, friends', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('friends', 'tr_competitive_users', 'name = ?', identity)
  if (!receiverResponse) return

  const senderidentity = senderResponse.identity
  const senderRequests = JSON.parse(senderResponse.friends)
  const receiverRequests = JSON.parse(receiverResponse.friends)
  senderRequests.splice(senderRequests.indexOf(identity), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderidentity), 1)

  const senderAffectedColumn = updateRow('tr_competitive_users', 'friends', 'license = ?', license, senderRequests)
  const receiverAffectedColumn = updateRow('tr_competitive_users', 'friends', 'identity = ?', identity, receiverRequests)
  return senderAffectedColumn && receiverAffectedColumn
})