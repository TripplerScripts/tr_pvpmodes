import { onPromise } from '@trippler/tr_lib/server'
import { createUserIntoTheDatabase, doesUserAlreadyExist } from '../services/userService'
import { getSingleRow } from "../database/queries";
import getPlayerLicense from '../utils/getPlayerLicense'

export const getUserProfileCB = async (identity: number) => {
  const response = await getSingleRow<{ name: string, avatar: string }>('name, avatar', 'tr_competitive_users', 'identity = ?', identity)
  return response && { ...response }
}

onPromise('createUser', (source, name: string, avatar: string) => createUserIntoTheDatabase(getPlayerLicense(source), name, avatar))
onPromise('doesUserAlreadyExist', (source) => doesUserAlreadyExist(source))
onPromise('getUserProfile', async (_source, identity: number) => getUserProfileCB(identity))