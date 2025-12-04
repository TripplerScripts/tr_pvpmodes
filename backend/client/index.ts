import openClosedWorldGame from './functions/openGame'
import closeDashboard from './functions/closeGame'
import unFocus from './functions/unfocus'
import { lib } from './wrappers/lib'

let lastCoords: number[]
let camHandle: number

onNet('tr_competitive:client:shutDownDashboard', () => {
  closeDashboard()
})

RegisterNuiCallback('getFriendablePlayers', async (data: null, callback: Function) => {
  const players = await lib.callback.await('getFriendablePlayers')
  callback(players)
})

RegisterNuiCallback('sendUserFriendInvitation', async (data: Array<string>, callback: Function): Promise<void> => {
  const response = await lib.callback.await('sendUserFriendInvitation', null, data[0])
  callback(response)
})

RegisterNuiCallback('getPlayerFriends', async (data: Array<string>, callback: Function): Promise<void> => {
  const response = await lib.callback.await('getPlayerFriends')
  callback(response)
})

RegisterNuiCallback('getIncomingFriends', async (data: Array<string>, callback: Function): Promise<void> => {
  const response = await lib.callback.await('getIncomingFriends')
  callback(response)
})

RegisterNuiCallback('getOutgoingFriends', async (data: Array<string>, callback: Function): Promise<void> => {
  const response = await lib.callback.await('getOutgoingFriends')
  callback(response)
})

RegisterNuiCallback('cancelOutgoingFriendship', async (data: Array<string>, callback: Function): Promise<void> => {
  lib.callback.await('cancelOutgoingFriendship', null, data[0])
})

RegisterNuiCallback('removeIncomingRequest', async (data: Array<string>, callback: Function): Promise<void> => {
  lib.callback.await('removeIncomingRequest', null, data[0])
})

RegisterNuiCallback('acceptFriendship', async (data: Array<string>, callback: Function): Promise<void> => {
  lib.callback.await('acceptFriendship', null, data[0])
})

RegisterNuiCallback('removeIncomingRequest', async (data: Array<string>, callback: Function): Promise<void> => {
  lib.callback.await('removeIncomingRequest', null, data[0])
})

RegisterNuiCallback('startMatchmaking', (data: null, callback: Function) => {
  exports.qbx_core.Notify('Started')
  emitNet('tr_competitive:server:startMatchmaking')
  callback(true)
})

RegisterNuiCallback('stopMatchmaking', (data: Object, callback: Function) => {
  exports.qbx_core.Notify('Stopped')
  emitNet('tr_competitive:server:stopMatchmaking')
  callback(true)
})

RegisterNuiCallback('unfocus', (data: Object, callback: Function) => {
  unFocus(lastCoords, camHandle)
  callback(true)
})

RegisterCommand('ww', () => {
  exports.qbx_core.Notify('Opened')
  // this one must be above
  lastCoords = GetEntityCoords(PlayerPedId(), true)
  // this one
  camHandle = openClosedWorldGame()
}, false)