import { creationSpawnCoords, defaultSpawnCoords } from '../shared/constants'

globalThis.exports('start', async () => {
  globalThis.exports.tr_onboarding.startCharacterProcess(creationSpawnCoords, defaultSpawnCoords)
})