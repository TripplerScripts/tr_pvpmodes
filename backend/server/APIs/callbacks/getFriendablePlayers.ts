import lib from '../../lib'
import { getSingleRow, getSingleColumn } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

const callback = async (source: string) => {
  const license = getPlayerLicense(source)
  const senderRow = await getSingleRow<{ identity: number; friends: number[]; incomingInvitations: number[]; outgoingInvitations: number[] }>('identity, friends, outgoingInvitations, incomingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderRow) return
  const senderidentity = senderRow.identity
  const senderFriends = senderRow.friends
  const senderIncomingRequests = senderRow.incomingInvitations
  const senderOutgoingRequests = senderRow.outgoingInvitations

  const serverUsers = await getSingleColumn<{ identity: number }>('identity', 'tr_competitive_users')
  if (!serverUsers) return

  let filteredPlayers: number[] = []
  serverUsers.forEach(user => {
    const notSelf = user.identity !== senderidentity
    const notFriend = !senderFriends.includes(user.identity)
    const notInIncoming = !senderIncomingRequests.includes(user.identity)
    const notInOutgoing = !senderOutgoingRequests.includes(user.identity)
    if (notSelf && notFriend && notInIncoming && notInOutgoing) filteredPlayers.push(user.identity)
    })
  return filteredPlayers
}

export default () => lib.callback.register('getFriendablePlayers', async (source: string) => callback(source))
export type GetFriendablePlayers = ReturnType<typeof callback>