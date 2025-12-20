import { triggerPromise } from '@trippler/tr_lib/client'
import {
  AcceptFriendship,
  CancelOutgoingFriendship,
  GetFriendablePlayers,
  GetIncomingFriends,
  GetOutgoingFriends,
  GetPlayerFriends,
  RemoveIncomingRequest,
  RemovePlayerFriendship,
  SendUserFriendInvitation
} from '../../shared/types/callback'

export const acceptFriendship = (name: string) => triggerPromise<AcceptFriendship>('acceptFriendship', name)
export const getPlayerFriends = () => triggerPromise<GetPlayerFriends>('getPlayerFriends')
export const getIncomingFriends = () => triggerPromise<GetIncomingFriends>('getIncomingFriends')
export const getOutgoingFriends = () => triggerPromise<GetOutgoingFriends>('getOutgoingFriends')
export const getFriendablePlayers = () => triggerPromise<GetFriendablePlayers>('getFriendablePlayers')
export const removeIncomingRequest = (name: string) => triggerPromise<RemoveIncomingRequest>('removeIncomingRequest', name)
export const removePlayerFriendship = (name: string) => triggerPromise<RemovePlayerFriendship>('removePlayerFriendship', name)
export const cancelOutgoingFriendship = (name: string) => triggerPromise<CancelOutgoingFriendship>('cancelOutgoingFriendship', name)
export const sendUserFriendInvitation = (name: string) => triggerPromise<SendUserFriendInvitation>('sendUserFriendInvitation', name)