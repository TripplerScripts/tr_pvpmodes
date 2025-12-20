import { triggerPromise } from '@trippler/tr_lib/client'
import { CreateUserIntoTheDatabase, DoesUserAlreadyExist, GetUserProfile } from '../../shared/types/user'

export const getUserProfile = (identity: number) => triggerPromise<GetUserProfile>('getUserProfile', identity)
export const doesUserAlreadyExist = () => triggerPromise<DoesUserAlreadyExist>('doesUserAlreadyExist')
export const createUser = (name: string, avatar: string) => triggerPromise<CreateUserIntoTheDatabase>('createUser', name, avatar)