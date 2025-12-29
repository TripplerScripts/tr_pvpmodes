import { control, triggerNuiCallback } from '@trippler/tr_lib/client'
import { enableCharacterAndSpawnProcessor } from '../shared/constants'
import { creationSpawnCoords, spawnLastLocation } from '../shared/constants'
import './nui'

const getSpawnCoords = () => {
  if (spawnLastLocation !== true) {
    return spawnLastLocation
  }
  const playerData = exports.qbx_core.GetPlayerData()
  if (!playerData?.position) return

  return [ playerData.position.x, playerData.position.y, playerData.position.z, playerData.position.w ]
}

globalThis.exports('start', async () => {
  globalThis.exports.tr_onboarding.startCharacterProcess(creationSpawnCoords, getSpawnCoords())
})

control.onDisabled('T', () => {
  triggerNuiCallback({ action: 'open' })
  SetNuiFocus(true, false)
})

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    if (enableCharacterAndSpawnProcessor) {
      emitNet('tr_onboarding/server/logout')
    }
  }
})