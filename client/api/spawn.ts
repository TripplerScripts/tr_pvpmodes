import { spawn } from "../../shared/constants"

const getSpawnCoords = () => {
  if (spawn.spawnLastLocation !== true) {
    return spawn.spawnLastLocation
  }
  const playerData = globalThis.exports.qbx_core.GetPlayerData()
  if (!playerData?.position) return

  return [ playerData.position.x, playerData.position.y, playerData.position.z, playerData.position.w ]
}

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

globalThis.exports('start', async () => {
  globalThis.exports.tr_onboarding.startCharacterProcess(spawn.creationSpawnCoords, getSpawnCoords())
})