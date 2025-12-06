import acceptFriendship from './acceptFriendship'
import cancelOutgoingFriendship from './cancelOutgoingFriendship'
import createUser from './createUser'
import getFriendablePlayers from './getFriendablePlayers'
import getIncomingFriends from './getIncomingFriends'
import getOutgoingFriends from './getOutgoingFriends'
import getPlayerFriends from './getPlayerFriends'
import removeIncomingRequest from './removeIncomingRequest'
import removePlayerFriendship from './removePlayerFriendship'
import sendUserFriendInvitation from './sendUserFriendInvitation'
import startMatchmaking from './startMatchmaking'
import stopMatchmaking from './stopMatchmaking'
import unFocus from './unFocus'

export default (): void => {
  acceptFriendship()
  cancelOutgoingFriendship()
  createUser()
  getFriendablePlayers()
  getIncomingFriends()
  getOutgoingFriends()
  getPlayerFriends()
  removeIncomingRequest()
  removePlayerFriendship()
  sendUserFriendInvitation()
  startMatchmaking()
  stopMatchmaking()
  unFocus()
}