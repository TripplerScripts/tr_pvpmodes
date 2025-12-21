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
import { triggerNuiCallback } from '@trippler/tr_lib/web'

export const acceptFriendship = async (identity: number) => {
  const response = await triggerNuiCallback<AcceptFriendship>('acceptFriendship', {identity})
  if (!response) return
  createFriendItem(identity)
  return true
}
export const getPlayerFriends = async () => {
  const friends = await triggerNuiCallback<GetPlayerFriends>('getPlayerFriends')
  refreshFriends((friends as number[])?.length)
  return friends
}
export const getOutgoingFriends = () => triggerNuiCallback<GetOutgoingFriends>('getOutgoingFriends')
export const getIncomingFriends = () => triggerNuiCallback<GetIncomingFriends>('getIncomingFriends')
export const getFriendablePlayers = () => triggerNuiCallback<GetFriendablePlayers>('getFriendablePlayers')
export const removeIncomingRequest = (identity: number) => triggerNuiCallback<RemoveIncomingRequest>('removeIncomingRequest', { identity })
export const removePlayerFriendship = (identity: number) => triggerNuiCallback<RemovePlayerFriendship>('removePlayerFriendship', { identity })
export const sendUserFriendInvitation = (identity: number) => triggerNuiCallback<SendUserFriendInvitation>('sendUserFriendInvitation', { identity })
export const cancelOutgoingFriendship = (identity: number) => triggerNuiCallback<CancelOutgoingFriendship>('cancelOutgoingFriendship', { identity })