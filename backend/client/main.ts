import openClosedWorldGame from './functions/openGame'
import closeDashboard from './functions/closeGame'
import unFocus from './functions/unfocus'

const resourceName = GetCurrentResourceName()
let lastCoords: number[]

onNet('tr_competitive:client:shutDownDashboard', () => {
  closeDashboard()
})

RegisterNuiCallback('startMatchmaking', (data: Object, callback: Function) => {
  exports.qbx_core.Notify('Started')
  emitNet('tr_competitive:server:startMatchmaking')
  callback(true)
})

RegisterNuiCallback('unfocus', (data: Object, callback: Function) => {
  unFocus(lastCoords)
  callback(true)
})

RegisterCommand('ww', () => {
  exports.qbx_core.Notify('Opened')
  // this must be above
  lastCoords = GetEntityCoords(PlayerPedId(), true)
  // this one
  openClosedWorldGame(resourceName)
}, false)