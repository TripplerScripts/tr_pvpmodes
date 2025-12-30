import './api'
import './nui'
import openMainMenu from './nui/openMainMenu'
import openEscapeMenu from './nui/openEscapeMenu'
import { control } from '@trippler/tr_lib/client'
import playerHasCharacter from './game/playerHasCharacter'
import startCharacterProcess from './game/startCharacterProcess'

let DOMContentLoaded = false
export let modeSelected: string | undefined
export const setModeSelected = (mode: string) => modeSelected = mode

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
  console.log(true)
  openMainMenu()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

export default (state: boolean) => DOMContentLoaded = state

globalThis.exports('modeSelected', () => modeSelected)
globalThis.exports('playerHasCharacter', playerHasCharacter)
globalThis.exports('startCharacterProcess', startCharacterProcess)