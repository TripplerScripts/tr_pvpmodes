import prepareNuiCallbacks from './callbacks'
import openClosedWorldGame from './modules/openGame'
import prepareEvents from './events'

prepareEvents()
prepareNuiCallbacks()

globalThis.lastCoords = [];
globalThis.camHandle = 0;

RegisterCommand('ww', () => {
  lastCoords = GetEntityCoords(PlayerPedId(), true)
  camHandle = openClosedWorldGame()
}, false)