import './friendship'
import './user'
import { closeGame } from '../game'
import { profile } from '../../shared/constants/config'
import startCharacterProcess from '../game/spawn'

RegisterNuiCallback('closeGame', (_data, callback) => callback(closeGame()))
RegisterNuiCallback('startCharacterProcess', async (_data, callback: Function) => callback(await startCharacterProcess()))
RegisterNuiCallback('getServerProfile', async (_data, callback) => {
  callback(profile)
})