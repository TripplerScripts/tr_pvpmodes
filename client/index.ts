import './api'
import './nui'
import './exports'
import openMainMenu from './modules/openMainMenu'

let DOMContentLoaded = false

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted() && DOMContentLoaded) {
      openMainMenu()
      clearInterval(interval)
    }
  }, 1000)
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