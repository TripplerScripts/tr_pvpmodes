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
import unFocus from './nui/closeGame'

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
  unFocus()
}