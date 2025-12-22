import './friendship'
import './user'
import { closeGame } from '../game'
import { profile } from '../../shared/constants/config'
import startCharacterProcess from '../game/index'
import { onNuiCallback } from '@trippler/tr_lib/client'

onNuiCallback<undefined>('closeGame', (_data, callback) => callback(closeGame()))
onNuiCallback<undefined>('startCharacterProcess', async (_data, callback) => callback(await startCharacterProcess()))
onNuiCallback<undefined>('getServerProfile', async (_data, callback) => callback(profile))