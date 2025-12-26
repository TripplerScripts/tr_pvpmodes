import './api'
import './nui'
import './exports'
import openMainMenu from './nui/openMainMenu'
import openEscapeMenu from './nui/openEscapeMenu'

let DOMContentLoaded = false

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted() && DOMContentLoaded) {
      openMainMenu()
      clearInterval(interval)
    }
  }, 1000)
})

globalThis.exports.tr_lib.init().control.onDisabled('ESC', () => {
  openEscapeMenu()
})

onNet('tr_onboarding/client/logout', () => {
  openMainMenu()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

export default (state: boolean) => DOMContentLoaded = state