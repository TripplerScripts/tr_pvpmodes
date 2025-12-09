import acceptFriendship from './modules/acceptFriendship'
import cancelOutgoingFriendship from './modules/cancelOutgoingFriendship'
import createUser from './modules/createUser'
import doesUserAlreadyExist from './modules/doesUserAlreadyExist'
import getFriendablePlayers from './modules/getFriendablePlayers'
import getIncomingFriends from './modules/getIncomingFriends'
import getOutgoingFriends from './modules/getOutgoingFriends'
import getPlayerFriends from './modules/getPlayerFriends'
import removeIncomingRequest from './modules/removeIncomingRequest'
import removePlayerFriendship from './modules/removePlayerFriendship'
import sendUserFriendInvitation from './modules/sendUserFriendInvitation'
import getUserProfile from './modules/getUserProfile'

export default (): void => {
  acceptFriendship()
  cancelOutgoingFriendship()
  createUser()
  doesUserAlreadyExist()
  getFriendablePlayers()
  getIncomingFriends()
  getOutgoingFriends()
  getPlayerFriends()
  removeIncomingRequest()
  removePlayerFriendship()
  sendUserFriendInvitation()
  getUserProfile()
}