import {
  CreateUser,
  GetUserProfile,
  RemovePlayerFriendship
} from "../../../shared/types/callback"
import { triggerNuiCallback } from "@trippler/tr_lib/web"

export const createUser =  (name: string, avatar: string) => triggerNuiCallback<Awaited<CreateUser>>('createUser', { name, avatar })
export const getUserProfile = (identity: number) => triggerNuiCallback<GetUserProfile>('getUserProfile', { identity })
export const removePlayerFriendship = (identity: number) => triggerNuiCallback<RemovePlayerFriendship>('removePlayerFriendship', identity)
