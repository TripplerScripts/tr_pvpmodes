import './api'
import './nui'
import './exports'
import openMainMenu from './nui/openMainMenu'
import openEscapeMenu from './nui/openEscapeMenu'
import { control } from '@trippler/tr_lib/client'

let DOMContentLoaded = false

setImmediate(() => {
  const interval = setInterval(() => {
    if (NetworkIsSessionStarted() && DOMContentLoaded) {
      openMainMenu()
      clearInterval(interval)
    }
  }, 1000)
})

control.onDisabled('ESC', () => {
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