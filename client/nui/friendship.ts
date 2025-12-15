import {
  acceptFriendship,
  cancelOutgoingFriendship,
  getFriendablePlayers,
  getIncomingFriends,
  getOutgoingFriends,
  getPlayerFriends,
  removeIncomingRequest,
  removePlayerFriendship,
  sendUserFriendInvitation
 } from '../api/friendship'

RegisterNuiCallback('acceptFriendship', async (data, callback) => callback(await acceptFriendship(undefined, data[0])))
RegisterNuiCallback('cancelOutgoingFriendship', async (data, callback) => callback(await cancelOutgoingFriendship(undefined, data[0])))
RegisterNuiCallback('getFriendablePlayers', async (_data, callback) => callback(await getFriendablePlayers()))
RegisterNuiCallback('getIncomingFriends', async (_data, callback) => callback(await getIncomingFriends()))
RegisterNuiCallback('getOutgoingFriends', async (_data, callback) => callback(await getOutgoingFriends()))
RegisterNuiCallback('getPlayerFriends', async (_data, callback) => callback(await getPlayerFriends()))
RegisterNuiCallback('removeIncomingRequest', async (data, callback) => callback(await removeIncomingRequest(undefined, data[0])))
RegisterNuiCallback('removePlayerFriendship', async (data, callback) => callback(await removePlayerFriendship(undefined, data[0])))
RegisterNuiCallback('sendUserFriendInvitation', async (data, callback) => callback(await sendUserFriendInvitation(undefined, data[0])))