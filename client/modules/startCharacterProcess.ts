export default async (passedOnCreationFinishCoords: [number, number, number, number], passedSpawnCoords: [number, number, number, number], onClothingMenuOpen: Function, onSubmitOrCancel: Function) => {
  const citizenId = await exports.tr_onboarding.playerHasCharacter()
  if (citizenId) {
    const spawnCoords = passedSpawnCoords || [-2163.87, 1134.51, -24.37, 310.05]
    const [ clothes, model ] = await exports.tr_onboarding.getCharacterPreviewData(citizenId)
    RequestModel(model)
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (HasModelLoaded(model)) {
          clearInterval(interval)
          resolve()
        }
      }, 1000)
    })

    SetPlayerModel(PlayerId(), model)
    exports['illenium-appearance'].setPedAppearance(PlayerPedId(), JSON.parse(clothes))
    SetModelAsNoLongerNeeded(model)

    exports.tr_onboarding.loadCharacter(citizenId)

    exports.spawnmanager.spawnPlayer({
      x: spawnCoords[0],
      y: spawnCoords[1],
      z: spawnCoords[2],
      heading: spawnCoords[3]
    })

    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')
  } else {
    const onCreationFinishCoords = passedOnCreationFinishCoords || [-2163.87, 1134.51, -24.37, 310.05]
    const data = {
      firstname: 'not specified',
      lastname: 'not specified',
      nationality: 'not specified',
      gender: 'not specified',
      birthdate: 'not specified',
      cid: -1
    }
    exports.spawnmanager.spawnPlayer({
      x: onCreationFinishCoords[0],
      y: onCreationFinishCoords[1],
      z: onCreationFinishCoords[2],
      heading: onCreationFinishCoords[3]
    })
    const newCreatedCharacter = await exports.tr_onboarding.createNewCharacter(null, data)
    emitNet('QBCore:Server:OnPlayerLoaded')
    emit('QBCore:Client:OnPlayerLoaded')

    if (newCreatedCharacter) {
      onClothingMenuOpen && onClothingMenuOpen()
      emit('qb-clothes:client:CreateFirstCharacter', onSubmitOrCancel, onSubmitOrCancel)
    }
  }
  return true
}