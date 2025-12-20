import { createUser, getUserProfile } from '../api/user'

RegisterNuiCallback('createUser', async (data, callback) => callback(await createUser(data[0], data[1])))

RegisterNuiCallback('getUserProfile', async (data, callback) => callback(await getUserProfile(data[0])))