on('onResourceStop', (resourceName: string) => {
  if (resourceName === GetCurrentResourceName()) {
    emitNet('tr_onboarding/server/logout')
  }
})

globalThis.exports('start', async () => {
  globalThis.exports.tr_onboarding.startCharacterProcess(creationSpawnCoords, getSpawnCoords())
})