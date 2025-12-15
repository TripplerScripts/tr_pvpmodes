import { sendCallback } from "@lenixdev/ui_components"
import refreshFriends from "../utils/dom"
import createFriendItem from "../modules/createFriendItem"
import {
  CancelOutgoingFriendship,
  AcceptFriendship,
  GetFriendablePlayers,
  GetIncomingFriends,
  GetOutgoingFriends,
  GetPlayerFriends,
  RemoveIncomingRequest,
  RemovePlayerFriendship,
  SendUserFriendInvitation,
} from "../../../shared/types/callback"

export const acceptFriendship = async (identity: number) => {
  const response = await sendCallback<AcceptFriendship>('acceptFriendship', identity)
  if (!response) return
  createFriendItem(identity)
  return true
}
export const getPlayerFriends = async () => {
  const friends = await sendCallback<GetPlayerFriends>('getPlayerFriends')
  refreshFriends((friends as number[])?.length)
  return friends
}
export const getOutgoingFriends = () => sendCallback<GetOutgoingFriends>('getOutgoingFriends')
export const getIncomingFriends = () => sendCallback<GetIncomingFriends>('getIncomingFriends')
export const getFriendablePlayers = () => sendCallback<GetFriendablePlayers>('getFriendablePlayers')
export const removeIncomingRequest = (identity: number) => sendCallback<RemoveIncomingRequest>('removeIncomingRequest', identity)
export const removePlayerFriendship = (identity: number) => sendCallback<RemovePlayerFriendship>('removePlayerFriendship', identity)
export const sendUserFriendInvitation = (identity: number) => sendCallback<SendUserFriendInvitation>('sendUserFriendInvitation', identity)
export const cancelOutgoingFriendship = (identity: number) => sendCallback<CancelOutgoingFriendship>('cancelOutgoingFriendship', identity)