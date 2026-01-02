import { modeSelected } from '..'
import playerHasCharacter from '../game/playerHasCharacter'
import startCharacterProcess from '../game/startCharacterProcess'
import openMainMenu from '../nui/openMainMenu'

onNet('tr_onboarding/client/logout', () => {
  openMainMenu()
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

globalThis.exports('modeSelected', () => modeSelected)
globalThis.exports('playerHasCharacter', playerHasCharacter)
globalThis.exports('startCharacterProcess', startCharacterProcess)