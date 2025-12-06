import lib from '../../lib'
import { getSingleRow, getSingleColumn } from '../../database'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('getFriendablePlayers', async (source: string) => {
  const license = getPlayerLicense(source)
  const senderRow = await getSingleRow(['name', 'friends', 'outgoingInvitations', 'incomingInvitations'], 'tr_competitive_users', 'license', license)
  if (!senderRow) return
  const senderName = senderRow.name
  const senderFriends = JSON.parse(senderRow.friends)
  const senderIncomingRequests = JSON.parse(senderRow.incomingInvitations)
  const senderOutgoingRequests = JSON.parse(senderRow.outgoingInvitations)

  const serverUsers = await getSingleColumn('name', 'tr_competitive_users')
  if (!serverUsers) return

  let filteredPlayers: string[] = []
  serverUsers.forEach((user: { name: string }) => {
    const notSelf = user.name !== senderName
    const notFriend = !senderFriends.includes(user.name)
    const notInIncoming = !senderIncomingRequests.includes(user.name)
    const notInOutgoing = !senderOutgoingRequests.includes(user.name)
    if (notSelf && notFriend && notInIncoming && notInOutgoing) filteredPlayers.push(user.name)
    })
  return filteredPlayers
})