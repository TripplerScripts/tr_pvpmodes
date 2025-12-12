import acceptFriendship from './nui/acceptFriendship'
import cancelOutgoingFriendship from './nui/cancelOutgoingFriendship'
import createUser from './nui/createUser'
import getFriendablePlayers from './nui/getFriendablePlayers'
import getIncomingFriends from './nui/getIncomingFriends'
import getOutgoingFriends from './nui/getOutgoingFriends'
import getPlayerFriends from './nui/getPlayerFriends'
import getServerProfile from './nui/getServerProfile'
import getUserProfile from './nui/getUserProfile' 
import removeIncomingRequest from './nui/removeIncomingRequest'
import removePlayerFriendship from './nui/removePlayerFriendship'
import sendUserFriendInvitation from './nui/sendUserFriendInvitation'
import startMatchmaking from './nui/startMatchmaking'
import stopMatchmaking from './nui/stopMatchmaking'
import unFocus from './nui/unFocus'

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