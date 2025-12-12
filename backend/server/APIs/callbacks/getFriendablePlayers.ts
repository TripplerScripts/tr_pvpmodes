import lib from '../../lib'
import { getSingleRow, getSingleColumn } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('getFriendablePlayers', async (source: string) => {
  const license = getPlayerLicense(source)
  const senderRow = await getSingleRow('identity, friends, outgoingInvitations, incomingInvitations', 'tr_competitive_users', 'license = ?', license)
  if (!senderRow) return
  const senderidentity = senderRow.identity
  const senderFriends = JSON.parse(senderRow.friends)
  const senderIncomingRequests = JSON.parse(senderRow.incomingInvitations)
  const senderOutgoingRequests = JSON.parse(senderRow.outgoingInvitations)

  const serverUsers = await getSingleColumn('identity', 'tr_competitive_users')
  if (!serverUsers) return

  let filteredPlayers: string[] = []
  serverUsers.forEach((user: { identity: string }) => {
    const notSelf = user.identity !== senderidentity
    const notFriend = !senderFriends.includes(user.identity)
    const notInIncoming = !senderIncomingRequests.includes(user.identity)
    const notInOutgoing = !senderOutgoingRequests.includes(user.identity)
    if (notSelf && notFriend && notInIncoming && notInOutgoing) filteredPlayers.push(user.identity)
    })
  return filteredPlayers
})