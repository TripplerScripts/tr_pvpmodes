import acceptFriendship from './nui/acceptFriendship'
import cancelOutgoingFriendship from './nui/cancelOutgoingFriendship'
import createUser from './nui/createUser'
import closeGame from './nui/closeGame'
import getFriendablePlayers from './nui/getFriendablePlayers'
import getIncomingFriends from './nui/getIncomingFriends'
import getOutgoingFriends from './nui/getOutgoingFriends'
import getPlayerFriends from './nui/getPlayerFriends'
import getServerProfile from './nui/getServerProfile'
import getUserProfile from './nui/getUserProfile' 
import removeIncomingRequest from './nui/removeIncomingRequest'
import removePlayerFriendship from './nui/removePlayerFriendship'
import sendUserFriendInvitation from './nui/sendUserFriendInvitation'

export default (): void => {
  acceptFriendship()
  cancelOutgoingFriendship()
  closeGame()
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
}