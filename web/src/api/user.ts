import { sendCallback } from "@lenixdev/ui_components"
import {
  CreateUser,
  GetUserProfile,
  RemovePlayerFriendship
} from "../../../shared/types/callback"

export const createUser =  (name: string, avatar: string) => sendCallback<Awaited<CreateUser>>('createUser', name, avatar)
export const getUserProfile = (identity: number) => sendCallback<GetUserProfile>('getUserProfile', identity)
export const removePlayerFriendship = (identity: number) => sendCallback<RemovePlayerFriendship>('removePlayerFriendship', identity)
