import lib from '../lib'
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

export const acceptFriendship = (timeout: number | undefined, name: string) => lib.callback.await<AcceptFriendship>('acceptFriendship', timeout, name)
export const getPlayerFriends = (timeout?: number) => lib.callback.await<GetPlayerFriends>('getPlayerFriends', timeout)
export const getIncomingFriends = (timeout?: number) => lib.callback.await<GetIncomingFriends>('getIncomingFriends', timeout)
export const getOutgoingFriends = (timeout?: number) => lib.callback.await<GetOutgoingFriends>('getOutgoingFriends', timeout)
export const getFriendablePlayers = (timeout?: number) => lib.callback.await<GetFriendablePlayers>('getFriendablePlayers', timeout)
export const removeIncomingRequest = (timeout: number | undefined, name: string) => lib.callback.await<RemoveIncomingRequest>('removeIncomingRequest', timeout, name)
export const removePlayerFriendship = (timeout: number | undefined, name: string) => lib.callback.await<RemovePlayerFriendship>('removePlayerFriendship', timeout, name)
export const cancelOutgoingFriendship = (timeout: number | undefined, name: string) => lib.callback.await<CancelOutgoingFriendship>('cancelOutgoingFriendship', timeout, name)
export const sendUserFriendInvitation = (timeout: number | undefined, name: string) => lib.callback.await<SendUserFriendInvitation>('sendUserFriendInvitation', timeout, name)