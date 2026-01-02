import { spawn } from "../../shared/constants"
import { getSpawnCoords } from "../modules/spawn"

on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

globalThis.exports('start', async () => {
  globalThis.exports.tr_onboarding.startCharacterProcess(spawn.creationSpawnCoords, getSpawnCoords())
})