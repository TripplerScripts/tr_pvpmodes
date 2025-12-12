import acceptFriendship from './callbacks/acceptFriendship'
import cancelOutgoingFriendship from './callbacks/cancelOutgoingFriendship'
import createUser from './callbacks/createUser'
import doesUserAlreadyExist from './callbacks/doesUserAlreadyExist'
import getFriendablePlayers from './callbacks/getFriendablePlayers'
import getIncomingFriends from './callbacks/getIncomingFriends'
import getOutgoingFriends from './callbacks/getOutgoingFriends'
import getPlayerFriends from './callbacks/getPlayerFriends'
import removeIncomingRequest from './callbacks/removeIncomingRequest'
import removePlayerFriendship from './callbacks/removePlayerFriendship'
import sendUserFriendInvitation from './callbacks/sendUserFriendInvitation'
import getUserProfile from './callbacks/getUserProfile'

export default () => {
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