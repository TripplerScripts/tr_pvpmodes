import lib from '../lib'
import { createUserIntoTheDatabase, doesUserAlreadyExist } from '../services/userService'
import { getSingleRow } from "../database";
import getPlayerLicense from '../utils/getPlayerLicense'

export const getUserProfileCB = async (identity: number) => {
  const response = await getSingleRow<{ name: string, avatar: string }>('name, avatar', 'tr_competitive_users', 'identity = ?', identity)
  return response && { ...response }
}

lib.callback.register('createUser', (source: string, name: string, avatar: string) => createUserIntoTheDatabase(getPlayerLicense(source), name, avatar))
lib.callback.register('doesUserAlreadyExist', (source: string) => doesUserAlreadyExist(source))
lib.callback.register('getUserProfile', async (_source: string, identity: number) => getUserProfileCB(identity))