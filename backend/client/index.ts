import openClosedWorldGame from './modules/openGame'

globalThis.lastCoords = [];
globalThis.camHandle = 0;

RegisterCommand('ww', () => {
  exports.qbx_core.Notify('Opened')
  // this one must be above
  lastCoords = GetEntityCoords(PlayerPedId(), true)
  // this one
  camHandle = openClosedWorldGame()
}, false)