import { createUser, getUserProfile } from '../api/user'

RegisterNuiCallback('createUser', async (data, callback) => callback(await createUser(undefined, data[0], data[1])))

RegisterNuiCallback('getUserProfile', async (data, callback) => callback(await getUserProfile(undefined, data[0])))