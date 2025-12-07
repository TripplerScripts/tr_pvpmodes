import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('removePlayerFriendship', async (source: string, userId: number) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow('userId, friends', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow('friends', 'tr_competitive_users', 'name = ?', userId)
  if (!receiverResponse) return

  const senderUserId = senderResponse.userId
  const senderRequests = JSON.parse(senderResponse.friends)
  const receiverRequests = JSON.parse(receiverResponse.friends)
  senderRequests.splice(senderRequests.indexOf(userId), 1)
  receiverRequests.splice(receiverRequests.indexOf(senderUserId), 1)

  const senderAffectedColumn = updateRow('tr_competitive_users', 'friends', 'license = ?', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = updateRow('tr_competitive_users', 'friends', 'userId = ?', JSON.stringify(receiverRequests), userId)
  return senderAffectedColumn && receiverAffectedColumn
})