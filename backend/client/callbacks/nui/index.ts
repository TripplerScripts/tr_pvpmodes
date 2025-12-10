import acceptFriendship from './modules/acceptFriendship'
import cancelOutgoingFriendship from './modules/cancelOutgoingFriendship'
import createUser from './modules/createUser'
import getFriendablePlayers from './modules/getFriendablePlayers'
import getIncomingFriends from './modules/getIncomingFriends'
import getOutgoingFriends from './modules/getOutgoingFriends'
import getPlayerFriends from './modules/getPlayerFriends'
import getServerProfile from './modules/getServerProfile'
import getUserProfile from './modules/getUserProfile' 
import removeIncomingRequest from './modules/removeIncomingRequest'
import removePlayerFriendship from './modules/removePlayerFriendship'
import sendUserFriendInvitation from './modules/sendUserFriendInvitation'
import startMatchmaking from './modules/startMatchmaking'
import stopMatchmaking from './modules/stopMatchmaking'
import unFocus from './modules/unFocus'

export default (): void => {
  acceptFriendship()
  cancelOutgoingFriendship()
  createUser()
  getFriendablePlayers()
  getIncomingFriends()
  getOutgoingFriends()
  getPlayerFriends()
  getServerProfile()
  getUserProfile()
  removeIncomingRequest()
  removePlayerFriendship()
  sendUserFriendInvitation()
  startMatchmaking()
  stopMatchmaking()
  unFocus()
}