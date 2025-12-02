import openClosedWorldGame from './functions/openGame'
import closeDashboard from './functions/closeGame'
import unFocus from './functions/unfocus'

let lastCoords: number[]
let camHandle: number

onNet('tr_competitive:client:shutDownDashboard', () => {
  closeDashboard()
})

RegisterNuiCallback('startMatchmaking', (data: Object, callback: Function) => {
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