import {
  getUserProfileCB
} from '../../server/api/user'
import { doesUserAlreadyExist, createUserIntoTheDatabase } from '../../server/services/userService'

export type DoesUserAlreadyExist = ReturnType<typeof doesUserAlreadyExist>
export type CreateUserIntoTheDatabase = ReturnType<typeof createUserIntoTheDatabase>
export type GetUserProfile = ReturnType<typeof getUserProfileCB>