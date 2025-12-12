import lib from '../../lib'
import { getSingleRow, updateRow } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string, identity: number) => {
  const license = getPlayerLicense(source)
  const senderResponse = await getSingleRow<{ identity: number; friends: number[] }>('identity, friends', 'tr_competitive_users', 'license = ?', license)
  if (!senderResponse) return
  const receiverResponse = await getSingleRow<{ friends: number[] }>('friends', 'tr_competitive_users', 'identity = ?', identity)
  if (!receiverResponse) return

  const senderId = senderResponse.identity
  const senderRequests = senderResponse.friends
  const receiverRequests = receiverResponse.friends
  senderRequests.push(identity)
  receiverRequests.push(senderId)

  const senderAffectedColumn = await updateRow('tr_competitive_users', 'friends', 'license = ?', JSON.stringify(senderRequests), license)
  const receiverAffectedColumn = await updateRow('tr_competitive_users', 'friends', 'identity = ?', JSON.stringify(receiverRequests), identity)
  return senderAffectedColumn && receiverAffectedColumn
}

export default () => lib.callback.register('acceptFriendship', async (source, identity: number) => callback(source, identity))
export type AcceptFriendship = ReturnType<typeof callback>