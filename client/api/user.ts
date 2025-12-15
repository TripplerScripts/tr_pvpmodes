import lib from '../lib'
import { CreateUser, DoesUserAlreadyExist, GetUserProfile } from '../../shared/types/user'

export const getUserProfile = (timeout: number | undefined, identity: number) => lib.callback.await<GetUserProfile>('getUserProfile', timeout, identity)
export const doesUserAlreadyExist = (timeout?: number) => lib.callback.await<DoesUserAlreadyExist>('doesUserAlreadyExist', timeout)
export const createUser = (timeout: number | undefined, name: string, avatar: string) => lib.callback.await<CreateUser>('createUser', timeout, name, avatar)