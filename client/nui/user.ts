import { onNuiCallback } from '@trippler/tr_lib/client'
import { createUser, getUserProfile } from '../api/user'

onNuiCallback<{ name: string, avatar: string }>('createUser', async (data, callback) => callback(await createUser(data.name, data.avatar)))
onNuiCallback<{ identity: number }>('getUserProfile', async (data, callback) => callback(await getUserProfile(data.identity)))