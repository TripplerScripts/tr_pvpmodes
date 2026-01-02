import { logoutPlayer, modeSelected } from '../modules'
import { startCharacterProcess } from '../game'
import { openMainMenu } from '../nui'

onNet('tr_onboarding/client/logout', () => {
  openMainMenu()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    logoutPlayer()
  }
})

globalThis.exports('modeSelected', () => modeSelected)
globalThis.exports('startCharacterProcess', startCharacterProcess)